goog.provide('sci.impl.records');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.records !== 'undefined') && (typeof sci.impl.records.to_string !== 'undefined')){
} else {
sci.impl.records.to_string = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__89991 = cljs.core.get_global_hierarchy;
return (fexpr__89991.cljs$core$IFn$_invoke$arity$0 ? fexpr__89991.cljs$core$IFn$_invoke$arity$0() : fexpr__89991.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.records","to-string"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
sci.impl.records.to_string.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$){
var t = sci.impl.types.type_impl(this$);
return [cljs.core.namespace(t),".",cljs.core.name(t),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(this$).toString((16)))].join('');
}));
sci.impl.records.clojure_str = (function sci$impl$records$clojure_str(v){
var t = sci.impl.types.type_impl(v);
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,v))].join('');
});

/**
 * @interface
 */
sci.impl.records.SciPrintMethod = function(){};

var sci$impl$records$SciPrintMethod$_sci_print_method$dyn_90157 = (function (x,w){
var x__4550__auto__ = (((x == null))?null:x);
var m__4551__auto__ = (sci.impl.records._sci_print_method[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(x,w) : m__4551__auto__.call(null,x,w));
} else {
var m__4549__auto__ = (sci.impl.records._sci_print_method["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(x,w) : m__4549__auto__.call(null,x,w));
} else {
throw cljs.core.missing_protocol("SciPrintMethod.-sci-print-method",x);
}
}
});
sci.impl.records._sci_print_method = (function sci$impl$records$_sci_print_method(x,w){
if((((!((x == null)))) && ((!((x.sci$impl$records$SciPrintMethod$_sci_print_method$arity$2 == null)))))){
return x.sci$impl$records$SciPrintMethod$_sci_print_method$arity$2(x,w);
} else {
return sci$impl$records$SciPrintMethod$_sci_print_method$dyn_90157(x,w);
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
 * @implements {sci.impl.types.SciTypeInstance}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.records.SciRecord = (function (rec_name,type,var$,ext_map,my_hash){
this.rec_name = rec_name;
this.type = type;
this.var$ = var$;
this.ext_map = ext_map;
this.my_hash = my_hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.records.SciRecord.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return sci.impl.records.to_string.cljs$core$IFn$_invoke$arity$1(this$);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.ext_map,k);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,else$){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.ext_map,k,else$);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,p__90109){
var vec__90111 = p__90109;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90111,(1),null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f.call(null,ret,k,v));
}),init,this$__$1);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,opts){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = self__.var$;
if(cljs.core.truth_(temp__5751__auto__)){
var rv = temp__5751__auto__;
var m = cljs.core.meta(rv);
var temp__5751__auto____$1 = new cljs.core.Keyword("sci.impl","print-method","sci.impl/print-method",281191566).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5751__auto____$1)){
var pm = temp__5751__auto____$1;
return (pm.cljs$core$IFn$_invoke$arity$3 ? pm.cljs$core$IFn$_invoke$arity$3(this$__$1,w,opts) : pm.call(null,this$__$1,w,opts));
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.records.clojure_str(this$__$1)], 0));
}
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.records.clojure_str(this$__$1)], 0));
}
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._iterator(self__.ext_map);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.ext_map);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sci.impl.records.SciRecord(self__.rec_name,self__.type,self__.var$,self__.ext_map,self__.my_hash));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count(self__.ext_map);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var hq = self__.my_hash;
if((!((hq == null)))){
var type_hash = cljs.core.hash(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(self__.rec_name)));
var h = (type_hash ^ cljs.core.hash_unordered_coll(self__.ext_map));
(self__.my_hash = h);

return h;
} else {
return hq;
}
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((!((other == null)))) && ((((this$__$1.constructor === other.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.rec_name,other.rec_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.ext_map,other.ext_map)))))));
}));

(sci.impl.records.SciRecord.prototype.sci$impl$types$SciTypeInstance$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.records.SciRecord.prototype.sci$impl$types$SciTypeInstance$_get_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new sci.impl.records.SciRecord(self__.rec_name,self__.type,self__.var$,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.ext_map,k),null));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.ext_map,k);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new sci.impl.records.SciRecord(self__.rec_name,self__.type,self__.var$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ext_map,k,v),null));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._seq(self__.ext_map);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new sci.impl.records.SciRecord(self__.rec_name,self__.type,self__.var$,cljs.core.with_meta(self__.ext_map,m),self__.my_hash));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
}));

(sci.impl.records.SciRecord.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rec-name","rec-name",407587896,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"ext-map","ext-map",-1560591553,null),cljs.core.with_meta(new cljs.core.Symbol(null,"my_hash","my_hash",-1166068909,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.records.SciRecord.cljs$lang$type = true);

(sci.impl.records.SciRecord.cljs$lang$ctorStr = "sci.impl.records/SciRecord");

(sci.impl.records.SciRecord.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sci.impl.records/SciRecord");
}));

/**
 * Positional factory function for sci.impl.records/SciRecord.
 */
sci.impl.records.__GT_SciRecord = (function sci$impl$records$__GT_SciRecord(rec_name,type,var$,ext_map,my_hash){
return (new sci.impl.records.SciRecord(rec_name,type,var$,ext_map,my_hash));
});

sci.impl.records.__GT_record_impl = (function sci$impl$records$__GT_record_impl(rec_name,type,var$,m){
return (new sci.impl.records.SciRecord(rec_name,type,var$,m,null));
});
sci.impl.records.defrecord = (function sci$impl$records$defrecord(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90181 = arguments.length;
var i__4865__auto___90182 = (0);
while(true){
if((i__4865__auto___90182 < len__4864__auto___90181)){
args__4870__auto__.push((arguments[i__4865__auto___90182]));

var G__90185 = (i__4865__auto___90182 + (1));
i__4865__auto___90182 = G__90185;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((5) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((5)),(0),null)):null);
return sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4871__auto__);
});

(sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (p__90133,_,ctx,record_name,fields,raw_protocol_impls){
var vec__90134 = p__90133;
var seq__90135 = cljs.core.seq(vec__90134);
var first__90136 = cljs.core.first(seq__90135);
var seq__90135__$1 = cljs.core.next(seq__90135);
var fname = first__90136;
var ___$1 = seq__90135__$1;
var form = vec__90134;
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","defrecord","clojure.core/defrecord",581689476,null),cljs.core.rest(form));
} else {
var factory_fn_str = ["->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name)].join('');
var factory_fn_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(factory_fn_str);
var map_factory_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["map",factory_fn_str].join(''));
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var rec_type = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(sci.impl.utils.current_ns_name())),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name)].join(''));
var protocol_impls = sci.impl.utils.split_when(cljs.core.symbol_QMARK_,raw_protocol_impls);
var field_set = cljs.core.set(fields);
var protocol_impls__$1 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__90137,expr){
var vec__90138 = p__90137;
var seq__90139 = cljs.core.seq(vec__90138);
var first__90140 = cljs.core.first(seq__90139);
var seq__90139__$1 = cljs.core.next(seq__90139);
var protocol_name = first__90140;
var impls = seq__90139__$1;
var impls__$1 = cljs.core.group_by(cljs.core.first,impls);
var protocol = (function (){var G__90142 = ctx;
var G__90143 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__90144 = protocol_name;
var fexpr__90141 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__90141.cljs$core$IFn$_invoke$arity$3 ? fexpr__90141.cljs$core$IFn$_invoke$arity$3(G__90142,G__90143,G__90144) : fexpr__90141.call(null,G__90142,G__90143,G__90144));
})();
var protocol__$1 = (function (){var or__4253__auto__ = protocol;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"Object","Object",61210754,null),protocol_name)){
return new cljs.core.Keyword("sci.impl.records","object","sci.impl.records/object",-590699738);
} else {
return null;
}
}
})();
var ___$2 = (cljs.core.truth_(protocol__$1)?null:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Protocol not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name)].join(''),expr));
var protocol__$2 = ((sci.impl.utils.var_QMARK_(protocol__$1))?cljs.core.deref(protocol__$1):protocol__$1);
var protocol_var = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(protocol__$2);
var ___$3 = (cljs.core.truth_(protocol_var)?sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic(protocol_var,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"satisfies","satisfies",-311664218),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),sci.impl.protocols.type__GT_str(rec_type)], 0)):null);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol__$2);
var pns = (cljs.core.truth_(protocol_ns)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.types.getName(protocol_ns)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.records","object","sci.impl.records/object",-590699738),protocol__$2))?"sci.impl.records":null));
var fq_meth_name = (function (p1__90123_SHARP_){
if(cljs.core.simple_symbol_QMARK_(p1__90123_SHARP_)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__90123_SHARP_));
} else {
return p1__90123_SHARP_;
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__90148){
var vec__90149 = p__90148;
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90149,(0),null);
var bodies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90149,(1),null);
var bodies__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (impl){
var args = cljs.core.first(impl);
var body = cljs.core.rest(impl);
var destr = sci.impl.utils.maybe_destructured(args,body);
var args__$1 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(destr);
var body__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(destr);
var orig_this_sym = cljs.core.first(args__$1);
var rest_args = cljs.core.rest(args__$1);
var shadows_this_QMARK_ = cljs.core.some((function (p1__90124_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_this_sym,p1__90124_SHARP_);
}),rest_args);
var this_sym = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("this_"):orig_this_sym);
var args__$2 = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.vec(cljs.core.cons(this_sym,rest_args)):args__$1);
var bindings = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (field){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field),(new cljs.core.List(null,this_sym,null,(1),null)),(2),null))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,field_set,args__$2)], 0));
var bindings__$1 = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_this_sym,this_sym], null)):bindings);
var bindings__$2 = cljs.core.vec(bindings__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,args__$2,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings__$2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body__$1], 0)))),null,(1),null)))));
}),bodies__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(method_name),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,rec_type,null,(1),null)),bodies__$2], 0))));
}),impls__$1);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([protocol_impls,raw_protocol_impls], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,factory_fn_sym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null),null,(1),null)),(new cljs.core.List(null,map_factory_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(record_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci","record","sci/record",-778731026),true], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.records","-create-record-type","sci.impl.records/-create-record-type",558578550,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("sci.impl","type-name","sci.impl/type-name",-1528979388),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,rec_type,null,(1),null)),(2),null)),new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950),true,new cljs.core.Keyword("sci.impl","constructor","sci.impl/constructor",1320345666),(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,factory_fn_sym,null,(1),null)),(2),null)),new cljs.core.Keyword("sci.impl","var","sci.impl/var",-2041185552),(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,record_name,null,(1),null)),(2),null)),new cljs.core.Keyword("sci.impl.record","map-constructor","sci.impl.record/map-constructor",1072184780),(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,map_factory_sym,null,(1),null)),(2),null))], null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__90125__auto__","args__90125__auto__",1434326162,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.records","->record-impl","sci.impl.records/->record-impl",-1005013370,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,rec_type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__90125__auto__","args__90125__auto__",1434326162,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,map_factory_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"m__90126__auto__","m__90126__auto__",324816251,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.records","->record-impl","sci.impl.records/->record-impl",-1005013370,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,rec_type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__90126__auto__","m__90126__auto__",324816251,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),protocol_impls__$1,(new cljs.core.List(null,record_name,null,(1),null))], 0))));
}
}));

(sci.impl.records.defrecord.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(sci.impl.records.defrecord.cljs$lang$applyTo = (function (seq90127){
var G__90128 = cljs.core.first(seq90127);
var seq90127__$1 = cljs.core.next(seq90127);
var G__90129 = cljs.core.first(seq90127__$1);
var seq90127__$2 = cljs.core.next(seq90127__$1);
var G__90130 = cljs.core.first(seq90127__$2);
var seq90127__$3 = cljs.core.next(seq90127__$2);
var G__90131 = cljs.core.first(seq90127__$3);
var seq90127__$4 = cljs.core.next(seq90127__$3);
var G__90132 = cljs.core.first(seq90127__$4);
var seq90127__$5 = cljs.core.next(seq90127__$4);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90128,G__90129,G__90130,G__90131,G__90132,seq90127__$5);
}));

/**
 * A record class is represented by a symbol with metadata (currently). This is only an implementation detail.
 * A protocol is represented by a map with :ns, :methods and optionally :class. This is also an implementation detail.
 */
sci.impl.records.resolve_record_or_protocol_class = (function sci$impl$records$resolve_record_or_protocol_class(var_args){
var G__90155 = arguments.length;
switch (G__90155) {
case 2:
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
var sym_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(sym_str,".");
var class_name = (cljs.core.truth_(last_dot)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_str,(last_dot + (1)),((sym_str).length)):sym_str);
var namespace = (cljs.core.truth_(last_dot)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_str,(0),last_dot)):sci.impl.utils.current_ns_name());
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,namespace,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name));
}));

(sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3 = (function (ctx,package$,class$){
var namespace = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),"_","-"));
var temp__5753__auto__ = (function (){var ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespace], null));
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,class$);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(ns),class$);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var sci_var = temp__5753__auto__;
if(sci.impl.utils.var_QMARK_(sci_var)){
return cljs.core.deref(sci_var);
} else {
return sci_var;
}
} else {
return null;
}
}));

(sci.impl.records.resolve_record_or_protocol_class.cljs$lang$maxFixedArity = 3);

sci.impl.records.resolve_record_class = (function sci$impl$records$resolve_record_class(ctx,class_sym){
var temp__5753__auto__ = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2(ctx,class_sym);
if(cljs.core.truth_(temp__5753__auto__)){
var x = temp__5753__auto__;
if((x instanceof sci.lang.Type)){
return x;
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=sci.impl.records.js.map
