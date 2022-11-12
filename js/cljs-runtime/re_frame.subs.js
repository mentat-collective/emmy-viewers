goog.provide('re_frame.subs');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_((re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind) : re_frame.registry.kinds.call(null,re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registry/kinds kind)"));
}

/**
 * @interface
 */
re_frame.subs.ICache = function(){};

var re_frame$subs$ICache$_clear$dyn_64736 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.subs._clear[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (re_frame.subs._clear["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICache.-clear",this$);
}
}
});
re_frame.subs._clear = (function re_frame$subs$_clear(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$subs$ICache$_clear$arity$1 == null)))))){
return this$.re_frame$subs$ICache$_clear$arity$1(this$);
} else {
return re_frame$subs$ICache$_clear$dyn_64736(this$);
}
});

var re_frame$subs$ICache$_cache_and_return$dyn_64737 = (function (this$,query_v,r){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.subs._cache_and_return[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,query_v,r) : m__4551__auto__.call(null,this$,query_v,r));
} else {
var m__4549__auto__ = (re_frame.subs._cache_and_return["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,query_v,r) : m__4549__auto__.call(null,this$,query_v,r));
} else {
throw cljs.core.missing_protocol("ICache.-cache-and-return",this$);
}
}
});
re_frame.subs._cache_and_return = (function re_frame$subs$_cache_and_return(this$,query_v,r){
if((((!((this$ == null)))) && ((!((this$.re_frame$subs$ICache$_cache_and_return$arity$3 == null)))))){
return this$.re_frame$subs$ICache$_cache_and_return$arity$3(this$,query_v,r);
} else {
return re_frame$subs$ICache$_cache_and_return$dyn_64737(this$,query_v,r);
}
});

var re_frame$subs$ICache$_cache_lookup$dyn_64738 = (function (this$,query_v){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.subs._cache_lookup[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,query_v) : m__4551__auto__.call(null,this$,query_v));
} else {
var m__4549__auto__ = (re_frame.subs._cache_lookup["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,query_v) : m__4549__auto__.call(null,this$,query_v));
} else {
throw cljs.core.missing_protocol("ICache.-cache-lookup",this$);
}
}
});
re_frame.subs._cache_lookup = (function re_frame$subs$_cache_lookup(this$,query_v){
if((((!((this$ == null)))) && ((!((this$.re_frame$subs$ICache$_cache_lookup$arity$2 == null)))))){
return this$.re_frame$subs$ICache$_cache_lookup$arity$2(this$,query_v);
} else {
return re_frame$subs$ICache$_cache_lookup$dyn_64738(this$,query_v);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {re_frame.subs.ICache}
*/
re_frame.subs.SubscriptionCache = (function (state,__meta,__extmap,__hash){
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(re_frame.subs.SubscriptionCache.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k64620,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__64624 = k64620;
var G__64624__$1 = (((G__64624 instanceof cljs.core.Keyword))?G__64624.fqn:null);
switch (G__64624__$1) {
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64620,else__4505__auto__);

}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__64625){
var vec__64626 = p__64625;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64626,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64626,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#re-frame.subs.SubscriptionCache{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64619){
var self__ = this;
var G__64619__$1 = this;
return (new cljs.core.RecordIter((0),G__64619__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new re_frame.subs.SubscriptionCache(self__.state,self__.__meta,self__.__extmap,self__.__hash));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1783599508 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64621,other64622){
var self__ = this;
var this64621__$1 = this;
return (((!((other64622 == null)))) && ((((this64621__$1.constructor === other64622.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64621__$1.state,other64622.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64621__$1.__extmap,other64622.__extmap)))))));
}));

(re_frame.subs.SubscriptionCache.prototype.re_frame$subs$ICache$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame.subs.SubscriptionCache.prototype.re_frame$subs$ICache$_clear$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__64630 = cljs.core.seq(cljs.core.deref(self__.state));
var chunk__64631 = null;
var count__64632 = (0);
var i__64633 = (0);
while(true){
if((i__64633 < count__64632)){
var vec__64642 = chunk__64631.cljs$core$IIndexed$_nth$arity$2(null,i__64633);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64642,(0),null);
var rxn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64642,(1),null);
re_frame.interop.dispose_BANG_(rxn);


var G__64747 = seq__64630;
var G__64748 = chunk__64631;
var G__64749 = count__64632;
var G__64750 = (i__64633 + (1));
seq__64630 = G__64747;
chunk__64631 = G__64748;
count__64632 = G__64749;
i__64633 = G__64750;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64630);
if(temp__5753__auto__){
var seq__64630__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64630__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64630__$1);
var G__64755 = cljs.core.chunk_rest(seq__64630__$1);
var G__64756 = c__4679__auto__;
var G__64757 = cljs.core.count(c__4679__auto__);
var G__64758 = (0);
seq__64630 = G__64755;
chunk__64631 = G__64756;
count__64632 = G__64757;
i__64633 = G__64758;
continue;
} else {
var vec__64646 = cljs.core.first(seq__64630__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64646,(0),null);
var rxn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64646,(1),null);
re_frame.interop.dispose_BANG_(rxn);


var G__64759 = cljs.core.next(seq__64630__$1);
var G__64760 = null;
var G__64761 = (0);
var G__64762 = (0);
seq__64630 = G__64759;
chunk__64631 = G__64760;
count__64632 = G__64761;
i__64633 = G__64762;
continue;
}
} else {
return null;
}
}
break;
}
}));

(re_frame.subs.SubscriptionCache.prototype.re_frame$subs$ICache$_cache_and_return$arity$3 = (function (this$,query_v,r){
var self__ = this;
var this$__$1 = this;
re_frame.interop.add_on_dispose_BANG_(r,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.dissoc,query_v);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,query_v,r);

return r;
}));

(re_frame.subs.SubscriptionCache.prototype.re_frame$subs$ICache$_cache_lookup$arity$2 = (function (this$,query_v){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),query_v);
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new re_frame.subs.SubscriptionCache(self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k64620){
var self__ = this;
var this__4509__auto____$1 = this;
var G__64653 = k64620;
var G__64653__$1 = (((G__64653 instanceof cljs.core.Keyword))?G__64653.fqn:null);
switch (G__64653__$1) {
case "state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k64620);

}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__64619){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__64655 = cljs.core.keyword_identical_QMARK_;
var expr__64656 = k__4511__auto__;
if(cljs.core.truth_((pred__64655.cljs$core$IFn$_invoke$arity$2 ? pred__64655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__64656) : pred__64655.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__64656)))){
return (new re_frame.subs.SubscriptionCache(G__64619,self__.__meta,self__.__extmap,null));
} else {
return (new re_frame.subs.SubscriptionCache(self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__64619),null));
}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null))], null),self__.__extmap));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__64619){
var self__ = this;
var this__4501__auto____$1 = this;
return (new re_frame.subs.SubscriptionCache(self__.state,G__64619,self__.__extmap,self__.__hash));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(this$__$1));
}));

(re_frame.subs.SubscriptionCache.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(re_frame.subs.SubscriptionCache.cljs$lang$type = true);

(re_frame.subs.SubscriptionCache.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"re-frame.subs/SubscriptionCache",null,(1),null));
}));

(re_frame.subs.SubscriptionCache.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"re-frame.subs/SubscriptionCache");
}));

/**
 * Positional factory function for re-frame.subs/SubscriptionCache.
 */
re_frame.subs.__GT_SubscriptionCache = (function re_frame$subs$__GT_SubscriptionCache(state){
return (new re_frame.subs.SubscriptionCache(state,null,null,null));
});

/**
 * Factory function for re-frame.subs/SubscriptionCache, taking a map of keywords to field values.
 */
re_frame.subs.map__GT_SubscriptionCache = (function re_frame$subs$map__GT_SubscriptionCache(G__64623){
var extmap__4542__auto__ = (function (){var G__64669 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__64623,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.record_QMARK_(G__64623)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64669);
} else {
return G__64669;
}
})();
return (new re_frame.subs.SubscriptionCache(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__64623),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * Unregisters all existing subscription handlers and clears the subscription cache
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(p__64671){
var map__64672 = p__64671;
var map__64672__$1 = cljs.core.__destructure_map(map__64672);
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64672__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var subs_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64672__$1,new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721));
re_frame.registry.clear_handlers(registry,re_frame.subs.kind);

return re_frame.subs._clear(subs_cache);
});
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running `on-dispose` on all cached subscriptions
 *   2. Each `on-dispose` will perform the removal of themselves.
 * 
 *   This is for development time use. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(subs_cache){
var seq__64673 = cljs.core.seq(cljs.core.deref(subs_cache));
var chunk__64674 = null;
var count__64675 = (0);
var i__64676 = (0);
while(true){
if((i__64676 < count__64675)){
var vec__64691 = chunk__64674.cljs$core$IIndexed$_nth$arity$2(null,i__64676);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64691,(0),null);
var rxn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64691,(1),null);
re_frame.interop.dispose_BANG_(rxn);


var G__64770 = seq__64673;
var G__64771 = chunk__64674;
var G__64772 = count__64675;
var G__64773 = (i__64676 + (1));
seq__64673 = G__64770;
chunk__64674 = G__64771;
count__64675 = G__64772;
i__64676 = G__64773;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64673);
if(temp__5753__auto__){
var seq__64673__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64673__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64673__$1);
var G__64774 = cljs.core.chunk_rest(seq__64673__$1);
var G__64775 = c__4679__auto__;
var G__64776 = cljs.core.count(c__4679__auto__);
var G__64777 = (0);
seq__64673 = G__64774;
chunk__64674 = G__64775;
count__64675 = G__64776;
i__64676 = G__64777;
continue;
} else {
var vec__64698 = cljs.core.first(seq__64673__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64698,(0),null);
var rxn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64698,(1),null);
re_frame.interop.dispose_BANG_(rxn);


var G__64778 = cljs.core.next(seq__64673__$1);
var G__64779 = null;
var G__64780 = (0);
var G__64781 = (0);
seq__64673 = G__64778;
chunk__64674 = G__64779;
count__64675 = G__64780;
i__64676 = G__64781;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms
 *   it returns a `Signal`.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(p__64704,query){
var map__64705 = p__64704;
var map__64705__$1 = cljs.core.__destructure_map(map__64705);
var frame = map__64705__$1;
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64705__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64705__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
var subs_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64705__$1,new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64705__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
if(cljs.core.vector_QMARK_(query)){
} else {
throw (new Error("Assert failed: (vector? query)"));
}

var or__4253__auto__ = re_frame.subs._cache_lookup(subs_cache,query);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5755__auto__ = re_frame.registry.get_handler(registry,re_frame.subs.kind,cljs.core.first(query));
if((temp__5755__auto__ == null)){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-subscription","missing-subscription",2052152909),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),cljs.core.first(query),new cljs.core.Keyword(null,"msg","msg",-1386103444),"subscription not found in registry, returning a nil subscription."], null),new cljs.core.Keyword(null,"line","line",212345235),110], null)),null);
} else {
var handler_fn = temp__5755__auto__;
return re_frame.subs._cache_and_return(subs_cache,query,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(frame,query) : handler_fn.call(null,frame,query)));
}
}
});
/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__64707){
var vec__64708 = p__64707;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64708,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64708,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
if(cljs.core.sequential_QMARK_(signals)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_(signals)){
return re_frame.subs.map_vals(cljs.core.deref,signals);
} else {
if(re_frame.interop.deref_QMARK_(signals)){
return cljs.core.deref(signals);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invalid-signal","invalid-signal",-1421387540),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),query_id,new cljs.core.Keyword(null,"signals","signals",1732137021),signals,new cljs.core.Keyword(null,"msg","msg",-1386103444),"Signals should be derefable, or a map or sequence of derefables."], null),new cljs.core.Keyword(null,"line","line",212345235),128], null)),null);

return cljs.core.List.EMPTY;

}
}
}
});
re_frame.subs.inputs_fn = (function re_frame$subs$inputs_fn(p__64712,query_id,input_args){
var map__64713 = p__64712;
var map__64713__$1 = cljs.core.__destructure_map(map__64713);
var frame = map__64713__$1;
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64713__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
var G__64714 = cljs.core.count(input_args);
switch (G__64714) {
case (0):
return (function() {
var G__64790 = null;
var G__64790__1 = (function (_){
return app_db;
});
var G__64790__2 = (function (_,___$1){
return app_db;
});
G__64790 = function(_,___$1){
switch(arguments.length){
case 1:
return G__64790__1.call(this,_);
case 2:
return G__64790__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__64790.cljs$core$IFn$_invoke$arity$1 = G__64790__1;
G__64790.cljs$core$IFn$_invoke$arity$2 = G__64790__2;
return G__64790;
})()

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invalid-input","invalid-input",1803826007),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),query_id,new cljs.core.Keyword(null,"input-function","input-function",1652919009),f,new cljs.core.Keyword(null,"msg","msg",-1386103444),"Input function is expected to be a function"], null),new cljs.core.Keyword(null,"line","line",212345235),143], null)),null);
}

return (function (p1__64711_SHARP_){
var _STAR_current_frame_STAR__orig_val__64715 = re_frame.registry._STAR_current_frame_STAR_;
var _STAR_current_frame_STAR__temp_val__64716 = frame;
(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__temp_val__64716);

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__64711_SHARP_) : f.call(null,p1__64711_SHARP_));
}finally {(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__orig_val__64715);
}});

break;
case (2):
var vec__64717 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64717,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64717,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invalid-marker","invalid-marker",1124391287),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),query_id,new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.Keyword(null,"got","got",-1674745710),marker], null),new cljs.core.Keyword(null,"line","line",212345235),150], null)),null);
}

return (function() {
var re_frame$subs$inputs_fn_$_inp_fn = null;
var re_frame$subs$inputs_fn_$_inp_fn__1 = (function (_){
return re_frame.subs.subscribe(frame,cljs.core.second(input_args));
});
var re_frame$subs$inputs_fn_$_inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe(frame,cljs.core.second(input_args));
});
re_frame$subs$inputs_fn_$_inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inputs_fn_$_inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inputs_fn_$_inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inputs_fn_$_inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inputs_fn_$_inp_fn__1;
re_frame$subs$inputs_fn_$_inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inputs_fn_$_inp_fn__2;
return re_frame$subs$inputs_fn_$_inp_fn;
})()

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)))){
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invalid-marker-pairs","invalid-marker-pairs",-1635022306),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),query_id,new cljs.core.Keyword(null,"msg","msg",-1386103444),"expected pairs of :<- and vectors",new cljs.core.Keyword(null,"got","got",-1674745710),pairs], null),new cljs.core.Keyword(null,"line","line",212345235),160], null)),null);
}

return (function() {
var re_frame$subs$inputs_fn_$_inp_fn = null;
var re_frame$subs$inputs_fn_$_inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,frame),vecs);
});
var re_frame$subs$inputs_fn_$_inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,frame),vecs);
});
re_frame$subs$inputs_fn_$_inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inputs_fn_$_inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inputs_fn_$_inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inputs_fn_$_inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inputs_fn_$_inp_fn__1;
re_frame$subs$inputs_fn_$_inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inputs_fn_$_inp_fn__2;
return re_frame$subs$inputs_fn_$_inp_fn;
})()

}
});
/**
 * For a given `query-id`, register two functions: a `computation` function and an `input signals` function.
 * 
 *   During program execution, a call to `subscribe`, such as `(subscribe [:sub-id 3 "blue"])`,
 *   will create a new `:sub-id` node in the Signal Graph. And, at that time, re-frame
 *   needs to know how to create the node.   By calling `reg-sub`, you are registering
 *   'the template' or 'the mechanism' by which nodes in the Signal Graph can be created.
 * 
 *   Repeating: calling `reg-sub` does not create a node. It only creates the template
 *   from which nodes can be created later.
 * 
 *   `reg-sub` arguments are:
 *  - a `query-id` (typically a namespaced keyword)
 *  - a function which returns the inputs required by this kind of node (can be supplied  in one of three ways)
 *  - a function which computes the value of this kind of node
 * 
 *   The `computation function` is always the last argument supplied and it is expected to have the signature:
 *  `(input-values, query-vector) -> a-value`
 * 
 *   When `computation function` is called, the `query-vector` argument will be the vector supplied to the
 *   the `subscribe` which caused the node to be created. So, if the call was `(subscribe [:sub-id 3 "blue"])`,
 *   then the `query-vector` supplied to the computaton function will be `[:sub-id 3 "blue"]`.
 * 
 *   The arguments supplied between the `query-id` and the `computation-function` can vary in 3 ways,
 *   but whatever is there defines the `input signals` part of the template, controlling what input
 *   values "flow into" the `computation function` gets when it is called.
 * 
 *   `reg-sub` can be called in one of three ways, because there are three ways to define the input signals part.
 *   But note, the 2nd method, in which a `signal-fn` is explicitly supplied, is the most canonical and instructive. The other
 *   two are really just sugary variations.
 * 
 *   1. No input signals given:
 *    ```clj
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 * 
 *   In the absence of an explicit `input-fn`, the node's input signal defaults to `app-db`
 *   and, as a result, the value within `app-db` (a map) is
 *   is given as the 1st argument when `a-computation-fn` is called.
 * 
 * 
 *   2. A signal function is explicitly supplied:
 *   ```clj
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 *   ```
 * 
 *   This is the most canonical and instructive of the three variations.
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from returned nominated signals will be supplied as the 1st argument to
 *   the `a-computation-fn` when it is called - and subject to what this `signal-fn` returns,
 *   this value will be either a singleton, sequence or map of them (paralleling
 *   the structure returned by the `signal-fn`).
 * 
 *   This example `signal-fn` returns a vector of input signals.
 *     ```clj
 *     (fn [query-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 *     ```
 *   The associated computation function must be written
 *   to expect a vector of values for its first argument:
 *     ```clj
 *     (fn [[a b] query-vec]     ;; 1st argument is a seq of two values
 *       ....)
 *      ```
 * 
 *   If, on the other hand, the signal function was simpler and returned a singleton, like this:
 *      ```clj
 *      (fn [query-vec]
 *        (subscribe [:a-sub]))
 *      ```
 *   then the associated computation function must be written to expect a single value
 *   as the 1st argument:
 *      ```clj
 *      (fn [a query-vec]       ;; 1st argument is a single value
 *        ...)
 *      ```
 * 
 *   Further Note: variation #1 above, in which an `input-fn` was not supplied, like this:
 *     ```clj
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 *   is the equivalent of using this
 *   2nd variation and explicitly suppling a `signal-fn` which returns `app-db`:
 *   ```clj
 *   (reg-sub
 *     :query-id
 *     (fn [_ _]  re-frame/app-db)   ;; <--- explicit input-fn
 *     a-computation-fn)             ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 * 
 *   3. Syntax Sugar
 * 
 *   ```clj
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] query-vec]    ;; 1st argument is a seq of two values
 *       {:a a :b b}))
 *   ```
 * 
 *   This 3rd variation is just syntactic sugar for the 2nd.  Instead of providing an
 *   `signals-fn` you provide one or more pairs of `:<-` and a subscription vector.
 * 
 *   If you supply only one pair a singleton will be supplied to the computation function,
 *   as if you had supplied a `signal-fn` returning only a single value:
 * 
 *   ```clj
 *   (reg-sub
 *     :a-sub
 *     :<- [:a-sub]
 *     (fn [a query-vec]      ;; only one pair, so 1st argument is a single value
 *       ...))
 *   ```
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64791 = arguments.length;
var i__4865__auto___64792 = (0);
while(true){
if((i__4865__auto___64792 < len__4864__auto___64791)){
args__4870__auto__.push((arguments[i__4865__auto___64792]));

var G__64793 = (i__4865__auto___64792 + (1));
i__4865__auto___64792 = G__64793;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (p__64726,query_id,args){
var map__64727 = p__64726;
var map__64727__$1 = cljs.core.__destructure_map(map__64727);
var frame = map__64727__$1;
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64727__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
return re_frame.registry.register_handler(registry,re_frame.subs.kind,query_id,(function re_frame$subs$subs_handler_fn(frame__$1,query_vec){
var inputs_fn = re_frame.subs.inputs_fn(frame__$1,query_id,input_args);
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
return re_frame.interop.make_reaction((function (){
var _STAR_current_frame_STAR__orig_val__64728 = re_frame.registry._STAR_current_frame_STAR_;
var _STAR_current_frame_STAR__temp_val__64729 = frame__$1;
(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__temp_val__64729);

try{var subscription = (function (){var G__64730 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__64731 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__64730,G__64731) : computation_fn.call(null,G__64730,G__64731));
})();
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"finest","finest",-1359568890),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"updated","updated",-1627192056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query_vec,new cljs.core.Keyword(null,"result","result",1415092211),subscription], null),new cljs.core.Keyword(null,"line","line",212345235),310], null)),null);

return subscription;
}finally {(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__orig_val__64728);
}}));
}));
}));

(re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq64723){
var G__64724 = cljs.core.first(seq64723);
var seq64723__$1 = cljs.core.next(seq64723);
var G__64725 = cljs.core.first(seq64723__$1);
var seq64723__$2 = cljs.core.next(seq64723__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64724,G__64725,seq64723__$2);
}));


//# sourceMappingURL=re_frame.subs.js.map
