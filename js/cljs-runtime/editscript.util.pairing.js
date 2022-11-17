import "./cljs_env.js";
goog.provide('editscript.util.pairing');

/**
 * @interface
 */
editscript.util.pairing.IHeapNode = function(){};

var editscript$util$pairing$IHeapNode$get_left$dyn_75226 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.util.pairing.get_left[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.util.pairing.get_left["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHeapNode.get-left",this$);
}
}
});
/**
 * Get the left child node
 */
editscript.util.pairing.get_left = (function editscript$util$pairing$get_left(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$util$pairing$IHeapNode$get_left$arity$1 == null)))))){
return this$.editscript$util$pairing$IHeapNode$get_left$arity$1(this$);
} else {
return editscript$util$pairing$IHeapNode$get_left$dyn_75226(this$);
}
});

var editscript$util$pairing$IHeapNode$get_right$dyn_75228 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.util.pairing.get_right[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.util.pairing.get_right["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHeapNode.get-right",this$);
}
}
});
/**
 * Get the right sibling node
 */
editscript.util.pairing.get_right = (function editscript$util$pairing$get_right(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$util$pairing$IHeapNode$get_right$arity$1 == null)))))){
return this$.editscript$util$pairing$IHeapNode$get_right$arity$1(this$);
} else {
return editscript$util$pairing$IHeapNode$get_right$dyn_75228(this$);
}
});

var editscript$util$pairing$IHeapNode$set_right$dyn_75230 = (function (this$,right){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.util.pairing.set_right[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,right) : m__5394__auto__.call(null,this$,right));
} else {
var m__5392__auto__ = (editscript.util.pairing.set_right["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,right) : m__5392__auto__.call(null,this$,right));
} else {
throw cljs.core.missing_protocol("IHeapNode.set-right",this$);
}
}
});
/**
 * Set the right sibling
 */
editscript.util.pairing.set_right = (function editscript$util$pairing$set_right(this$,right){
if((((!((this$ == null)))) && ((!((this$.editscript$util$pairing$IHeapNode$set_right$arity$2 == null)))))){
return this$.editscript$util$pairing$IHeapNode$set_right$arity$2(this$,right);
} else {
return editscript$util$pairing$IHeapNode$set_right$dyn_75230(this$,right);
}
});

var editscript$util$pairing$IHeapNode$add_child$dyn_75232 = (function (this$,node){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.util.pairing.add_child[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,node) : m__5394__auto__.call(null,this$,node));
} else {
var m__5392__auto__ = (editscript.util.pairing.add_child["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,node) : m__5392__auto__.call(null,this$,node));
} else {
throw cljs.core.missing_protocol("IHeapNode.add-child",this$);
}
}
});
/**
 * Add a child to a node
 */
editscript.util.pairing.add_child = (function editscript$util$pairing$add_child(this$,node){
if((((!((this$ == null)))) && ((!((this$.editscript$util$pairing$IHeapNode$add_child$arity$2 == null)))))){
return this$.editscript$util$pairing$IHeapNode$add_child$arity$2(this$,node);
} else {
return editscript$util$pairing$IHeapNode$add_child$dyn_75232(this$,node);
}
});


/**
* @constructor
 * @implements {editscript.util.pairing.IHeapNode}
*/
editscript.util.pairing.HeapNode = (function (item,priority,left,right){
this.item = item;
this.priority = priority;
this.left = left;
this.right = right;
});
(editscript.util.pairing.HeapNode.prototype.editscript$util$pairing$IHeapNode$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.util.pairing.HeapNode.prototype.editscript$util$pairing$IHeapNode$get_left$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.left;
}));

(editscript.util.pairing.HeapNode.prototype.editscript$util$pairing$IHeapNode$get_right$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.right;
}));

(editscript.util.pairing.HeapNode.prototype.editscript$util$pairing$IHeapNode$set_right$arity$2 = (function (_,r){
var self__ = this;
var ___$1 = this;
return (self__.right = r);
}));

(editscript.util.pairing.HeapNode.prototype.editscript$util$pairing$IHeapNode$add_child$arity$2 = (function (this$,node){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.left)){
editscript.util.pairing.set_right(node,self__.left);
} else {
}

(self__.left = node);

return this$__$1;
}));

(editscript.util.pairing.HeapNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"item","item",1889905329,null),new cljs.core.Symbol(null,"priority","priority",-1223342054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null))], null);
}));

(editscript.util.pairing.HeapNode.cljs$lang$type = true);

(editscript.util.pairing.HeapNode.cljs$lang$ctorStr = "editscript.util.pairing/HeapNode");

(editscript.util.pairing.HeapNode.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"editscript.util.pairing/HeapNode");
}));

/**
 * Positional factory function for editscript.util.pairing/HeapNode.
 */
editscript.util.pairing.__GT_HeapNode = (function editscript$util$pairing$__GT_HeapNode(item,priority,left,right){
return (new editscript.util.pairing.HeapNode(item,priority,left,right));
});

editscript.util.pairing.merge_nodes = (function editscript$util$pairing$merge_nodes(a,b){
if((a == null)){
return b;
} else {
if((b == null)){
return a;
} else {
if((a.priority < b.priority)){
return a.editscript$util$pairing$IHeapNode$add_child$arity$2(null,b);
} else {
return b.editscript$util$pairing$IHeapNode$add_child$arity$2(null,a);

}
}
}
});
editscript.util.pairing.insert = (function editscript$util$pairing$insert(node,item,priority){
return editscript.util.pairing.merge_nodes(node,editscript.util.pairing.__GT_HeapNode(item,priority,null,null));
});
editscript.util.pairing.two_pass = (function editscript$util$pairing$two_pass(node){
if((((node == null)) || ((node.editscript$util$pairing$IHeapNode$get_right$arity$1(null) == null)))){
return node;
} else {
var a = node;
var b = node.editscript$util$pairing$IHeapNode$get_right$arity$1(null);
var n = editscript.util.pairing.get_right(b);
a.editscript$util$pairing$IHeapNode$set_right$arity$2(null,null);

editscript.util.pairing.set_right(b,null);

return editscript.util.pairing.merge_nodes(editscript.util.pairing.merge_nodes(a,b),(editscript.util.pairing.two_pass.cljs$core$IFn$_invoke$arity$1 ? editscript.util.pairing.two_pass.cljs$core$IFn$_invoke$arity$1(n) : editscript.util.pairing.two_pass.call(null,n)));
}
});

/**
* @constructor
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
*/
editscript.util.pairing.PriorityMap = (function (heap,map){
this.heap = heap;
this.map = map;
this.cljs$lang$protocol_mask$partition0$ = 8398344;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(editscript.util.pairing.PriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(self__.map);
}));

(editscript.util.pairing.PriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,e){
var self__ = this;
var this$__$1 = this;
var vec__75202 = e;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75202,(0),null);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75202,(1),null);
(self__.map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.map,item,priority));

(self__.heap = editscript.util.pairing.insert(self__.heap,item,priority));

return this$__$1;
}));

(editscript.util.pairing.PriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
(self__.map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.map,item,priority));

(self__.heap = editscript.util.pairing.insert(self__.heap,item,priority));

return this$__$1;
}));

(editscript.util.pairing.PriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return cljs.core.contains_QMARK_(self__.map,item);
}));

(editscript.util.pairing.PriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.map,item);

return this$__$1;
}));

(editscript.util.pairing.PriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.heap.item,self__.heap.priority], null);
}));

(editscript.util.pairing.PriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = editscript.util.pairing.two_pass(self__.heap.editscript$util$pairing$IHeapNode$get_left$arity$1(null));
(self__.map = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.map,self__.heap.item));

(self__.heap = n);

return this$__$1;
}));

(editscript.util.pairing.PriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"heap","heap",-1614725577,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"HeapNode","HeapNode",1009834559,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(editscript.util.pairing.PriorityMap.cljs$lang$type = true);

(editscript.util.pairing.PriorityMap.cljs$lang$ctorStr = "editscript.util.pairing/PriorityMap");

(editscript.util.pairing.PriorityMap.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"editscript.util.pairing/PriorityMap");
}));

/**
 * Positional factory function for editscript.util.pairing/PriorityMap.
 */
editscript.util.pairing.__GT_PriorityMap = (function editscript$util$pairing$__GT_PriorityMap(heap,map){
return (new editscript.util.pairing.PriorityMap(heap,map));
});

/**
 * A priority queue that also functions as a map.
 *   Backed by a pairing heap implementation, and a regular map.
 *   NB. We do not implement `decrease-key` for the pairing heap,
 *   instead just insert the item again with a new priority.
 */
editscript.util.pairing.priority_map = (function editscript$util$pairing$priority_map(var_args){
var G__75212 = arguments.length;
switch (G__75212) {
case 0:
return editscript.util.pairing.priority_map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___75238 = arguments.length;
var i__5770__auto___75239 = (0);
while(true){
if((i__5770__auto___75239 < len__5769__auto___75238)){
args_arr__5794__auto__.push((arguments[i__5770__auto___75239]));

var G__75240 = (i__5770__auto___75239 + (1));
i__5770__auto___75239 = G__75240;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((0)),(0),null));
return editscript.util.pairing.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5795__auto__);

}
});

(editscript.util.pairing.priority_map.cljs$core$IFn$_invoke$arity$0 = (function (){
return editscript.util.pairing.__GT_PriorityMap(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(editscript.util.pairing.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
if(cljs.core.even_QMARK_(cljs.core.count(keyvals))){
} else {
throw (new Error("Assert failed: (even? (count keyvals))"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,editscript.util.pairing.priority_map.cljs$core$IFn$_invoke$arity$0(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
}));

/** @this {Function} */
(editscript.util.pairing.priority_map.cljs$lang$applyTo = (function (seq75210){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75210));
}));

(editscript.util.pairing.priority_map.cljs$lang$maxFixedArity = (0));


//# sourceMappingURL=editscript.util.pairing.js.map
