goog.provide('sci.impl.deftype');
sci.impl.deftype.hex_hash = (function sci$impl$deftype$hex_hash(this$){
return cljs.core.hash(this$).toString((16));
});
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.deftype !== 'undefined') && (typeof sci.impl.deftype.to_string !== 'undefined')){
} else {
sci.impl.deftype.to_string = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76478 = cljs.core.get_global_hierarchy;
return (fexpr__76478.cljs$core$IFn$_invoke$arity$0 ? fexpr__76478.cljs$core$IFn$_invoke$arity$0() : fexpr__76478.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.deftype","to-string"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
sci.impl.deftype.to_string.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$){
var t = sci.impl.types.type_impl(this$);
return [cljs.core.namespace(t),".",cljs.core.name(t),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.deftype.hex_hash(this$))].join('');
}));
sci.impl.deftype.clojure_str = (function sci$impl$deftype$clojure_str(v){
var n = sci.impl.types.type_impl(v);
return ["#object[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," 0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.deftype.hex_hash(v))," \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.deftype.to_string.cljs$core$IFn$_invoke$arity$1(v)),"\"]"].join('');
});

/**
 * @interface
 */
sci.impl.deftype.SciPrintMethod = function(){};

var sci$impl$deftype$SciPrintMethod$_sci_print_method$dyn_76621 = (function (x,w){
var x__4550__auto__ = (((x == null))?null:x);
var m__4551__auto__ = (sci.impl.deftype._sci_print_method[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(x,w) : m__4551__auto__.call(null,x,w));
} else {
var m__4549__auto__ = (sci.impl.deftype._sci_print_method["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(x,w) : m__4549__auto__.call(null,x,w));
} else {
throw cljs.core.missing_protocol("SciPrintMethod.-sci-print-method",x);
}
}
});
sci.impl.deftype._sci_print_method = (function sci$impl$deftype$_sci_print_method(x,w){
if((((!((x == null)))) && ((!((x.sci$impl$deftype$SciPrintMethod$_sci_print_method$arity$2 == null)))))){
return x.sci$impl$deftype$SciPrintMethod$_sci_print_method$arity$2(x,w);
} else {
return sci$impl$deftype$SciPrintMethod$_sci_print_method$dyn_76621(x,w);
}
});


/**
* @constructor
 * @implements {sci.impl.types.SciTypeInstance}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {sci.impl.types.IBox}
*/
sci.impl.deftype.SciType = (function (rec_name,type,var$,ext_map){
this.rec_name = rec_name;
this.type = type;
this.var$ = var$;
this.ext_map = ext_map;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.deftype.SciType.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return sci.impl.deftype.to_string.cljs$core$IFn$_invoke$arity$1(this$);
}));

(sci.impl.deftype.SciType.prototype.sci$impl$types$SciTypeInstance$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.deftype.SciType.prototype.sci$impl$types$SciTypeInstance$_get_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(sci.impl.deftype.SciType.prototype.sci$impl$types$SciTypeInstance$_mutate$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
(self__.ext_map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ext_map,k,v));

return v;
}));

(sci.impl.deftype.SciType.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,opts){
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
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.deftype.clojure_str(this$__$1)], 0));
}
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.deftype.clojure_str(this$__$1)], 0));
}
}));

(sci.impl.deftype.SciType.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.deftype.SciType.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ext_map;
}));

(sci.impl.deftype.SciType.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rec-name","rec-name",407587896,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"var","var",870848730,null),cljs.core.with_meta(new cljs.core.Symbol(null,"ext-map","ext-map",-1560591553,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.deftype.SciType.cljs$lang$type = true);

(sci.impl.deftype.SciType.cljs$lang$ctorStr = "sci.impl.deftype/SciType");

(sci.impl.deftype.SciType.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sci.impl.deftype/SciType");
}));

/**
 * Positional factory function for sci.impl.deftype/SciType.
 */
sci.impl.deftype.__GT_SciType = (function sci$impl$deftype$__GT_SciType(rec_name,type,var$,ext_map){
return (new sci.impl.deftype.SciType(rec_name,type,var$,ext_map));
});

sci.impl.deftype.__GT_type_impl = (function sci$impl$deftype$__GT_type_impl(rec_name,type,var$,m){
return (new sci.impl.deftype.SciType(rec_name,type,var$,m));
});
sci.impl.deftype.deftype = (function sci$impl$deftype$deftype(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76623 = arguments.length;
var i__4865__auto___76624 = (0);
while(true){
if((i__4865__auto___76624 < len__4864__auto___76623)){
args__4870__auto__.push((arguments[i__4865__auto___76624]));

var G__76625 = (i__4865__auto___76624 + (1));
i__4865__auto___76624 = G__76625;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((5) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((5)),(0),null)):null);
return sci.impl.deftype.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4871__auto__);
});

(sci.impl.deftype.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (p__76513,_,ctx,record_name,fields,raw_protocol_impls){
var vec__76514 = p__76513;
var seq__76515 = cljs.core.seq(vec__76514);
var first__76516 = cljs.core.first(seq__76515);
var seq__76515__$1 = cljs.core.next(seq__76515);
var _fname = first__76516;
var ___$1 = seq__76515__$1;
var form = vec__76514;
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","deftype","clojure.core/deftype",-1728257017,null),cljs.core.rest(form));
} else {
var factory_fn_str = ["->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name)].join('');
var factory_fn_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(factory_fn_str);
var rec_type = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(sci.impl.utils.current_ns_name())),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name)].join(''));
var protocol_impls = sci.impl.utils.split_when(cljs.core.symbol_QMARK_,raw_protocol_impls);
var field_set = cljs.core.set(fields);
var protocol_impls__$1 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__76522,expr){
var vec__76523 = p__76522;
var seq__76524 = cljs.core.seq(vec__76523);
var first__76525 = cljs.core.first(seq__76524);
var seq__76524__$1 = cljs.core.next(seq__76524);
var protocol_name = first__76525;
var impls = seq__76524__$1;
var impls__$1 = cljs.core.group_by(cljs.core.first,impls);
var protocol = (function (){var G__76527 = ctx;
var G__76528 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__76529 = protocol_name;
var fexpr__76526 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__76526.cljs$core$IFn$_invoke$arity$3 ? fexpr__76526.cljs$core$IFn$_invoke$arity$3(G__76527,G__76528,G__76529) : fexpr__76526.call(null,G__76527,G__76528,G__76529));
})();
var protocol__$1 = (function (){var or__4253__auto__ = protocol;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"Object","Object",61210754,null),protocol_name))?new cljs.core.Keyword("sci.impl.deftype","object","sci.impl.deftype/object",-248099673):null);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),protocol_name)){
return new cljs.core.Keyword("sci.impl.deftype","IPrintWithWriter","sci.impl.deftype/IPrintWithWriter",-1280030107);
} else {
return null;
}
}
}
})();
var ___$2 = (cljs.core.truth_(protocol__$1)?null:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Protocol not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name)].join(''),expr));
var protocol__$2 = ((sci.impl.utils.var_QMARK_(protocol__$1))?cljs.core.deref(protocol__$1):protocol__$1);
var protocol_var = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(protocol__$2);
var ___$3 = (cljs.core.truth_(protocol_var)?sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic(protocol_var,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"satisfies","satisfies",-311664218),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(rec_type))], 0)):null);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol__$2);
var pns = (cljs.core.truth_(protocol_ns)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.types.getName(protocol_ns)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.deftype","object","sci.impl.deftype/object",-248099673),protocol__$2))?"sci.impl.records":null));
var fq_meth_name = (function (p1__76498_SHARP_){
if(cljs.core.simple_symbol_QMARK_(p1__76498_SHARP_)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__76498_SHARP_));
} else {
return p1__76498_SHARP_;
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__76548){
var vec__76552 = p__76548;
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76552,(0),null);
var bodies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76552,(1),null);
if(((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.deftype","IPrintWithWriter","sci.impl.deftype/IPrintWithWriter",-1280030107),protocol__$2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null),method_name)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alter-meta!","cljs.core/alter-meta!",574694262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl","print-method","sci.impl/print-method",281191566),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.rest(cljs.core.first(bodies)),null,(1),null))))),null,(1),null))], 0))));
} else {
var bodies__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (impl){
var args = cljs.core.first(impl);
var body = cljs.core.rest(impl);
var destr = sci.impl.utils.maybe_destructured(args,body);
var args__$1 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(destr);
var body__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(destr);
var orig_this_sym = cljs.core.first(args__$1);
var rest_args = cljs.core.rest(args__$1);
var this_sym = new cljs.core.Symbol(null,"__sci_this","__sci_this",-193704996,null)
;
var args__$2 = cljs.core.vec(cljs.core.cons(this_sym,rest_args));
var ext_map_binding = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var bindings = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ext_map_binding,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.deftype","-inner-impl","sci.impl.deftype/-inner-impl",528349233,null),(new cljs.core.List(null,this_sym,null,(1),null)),(2),null))], null);
var bindings__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bindings,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (field){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,(new cljs.core.List(null,new cljs.core.Symbol(null,"get","get",-971253014,null),(new cljs.core.List(null,ext_map_binding,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,field,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,field_set,args__$2)], 0)));
var bindings__$2 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_this_sym,this_sym], null));
var bindings__$3 = cljs.core.vec(bindings__$2);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,args__$2,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings__$3,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body__$1], 0)))),null,(1),null)))));
}),bodies__$1);
var G__76587 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"deftype-fields","deftype-fields",-222569172),field_set,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"local->mutator","local->mutator",1004070878),cljs.core.zipmap(field_set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (field){
return (function (this$,v){
return sci.impl.types._mutate(this$,field,v);
});
}),field_set))], 0));
var G__76588 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(method_name),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,rec_type,null,(1),null)),bodies__$2], 0))));
var fexpr__76586 = cljs.core.deref(sci.impl.utils.analyze);
return (fexpr__76586.cljs$core$IFn$_invoke$arity$2 ? fexpr__76586.cljs$core$IFn$_invoke$arity$2(G__76587,G__76588) : fexpr__76586.call(null,G__76587,G__76588));
}
}),impls__$1);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([protocol_impls,raw_protocol_impls], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,factory_fn_sym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(record_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci","type","sci/type",1175422389),true], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.deftype","-create-type","sci.impl.deftype/-create-type",-1020101113,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sci.impl","type-name","sci.impl/type-name",-1528979388),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,rec_type,null,(1),null)),(2),null)),new cljs.core.Keyword("sci.impl","type","sci.impl/type",1797552241),rec_type,new cljs.core.Keyword("sci.impl","constructor","sci.impl/constructor",1320345666),(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,factory_fn_sym,null,(1),null)),(2),null)),new cljs.core.Keyword("sci.impl","var","sci.impl/var",-2041185552),(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,record_name,null,(1),null)),(2),null))], null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__76502__auto__","args__76502__auto__",1674453602,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.deftype","->type-impl","sci.impl.deftype/->type-impl",-2121297742,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,rec_type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,fields,null,(1),null)),(2),null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__76502__auto__","args__76502__auto__",1674453602,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),protocol_impls__$1,(new cljs.core.List(null,record_name,null,(1),null))], 0))));
}
}));

(sci.impl.deftype.deftype.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(sci.impl.deftype.deftype.cljs$lang$applyTo = (function (seq76504){
var G__76505 = cljs.core.first(seq76504);
var seq76504__$1 = cljs.core.next(seq76504);
var G__76506 = cljs.core.first(seq76504__$1);
var seq76504__$2 = cljs.core.next(seq76504__$1);
var G__76507 = cljs.core.first(seq76504__$2);
var seq76504__$3 = cljs.core.next(seq76504__$2);
var G__76508 = cljs.core.first(seq76504__$3);
var seq76504__$4 = cljs.core.next(seq76504__$3);
var G__76509 = cljs.core.first(seq76504__$4);
var seq76504__$5 = cljs.core.next(seq76504__$4);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76505,G__76506,G__76507,G__76508,G__76509,seq76504__$5);
}));


//# sourceMappingURL=sci.impl.deftype.js.map
