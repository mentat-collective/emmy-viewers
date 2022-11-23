goog.provide('sci.configs.applied_science.js_interop');
sci.configs.applied_science.js_interop.jns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),null);
/**
 * `let` with destructuring that supports js property and array access.
 * Use ^:js metadata on the binding form to invoke. Eg/
 * (let [^:js {:keys [a]} obj] …)
 */
sci.configs.applied_science.js_interop.let$ = (function sci$configs$applied_science$js_interop$let(var_args){
var args__4870__auto__ = [];
var len__4864__auto___93389 = arguments.length;
var i__4865__auto___93390 = (0);
while(true){
if((i__4865__auto___93390 < len__4864__auto___93389)){
args__4870__auto__.push((arguments[i__4865__auto___93390]));

var G__93391 = (i__4865__auto___93390 + (1));
i__4865__auto___93390 = G__93391;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return sci.configs.applied_science.js_interop.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(sci.configs.applied_science.js_interop.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,bindings,body){
if(cljs.core.empty_QMARK_(bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(applied_science.js_interop.destructure.destructure(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),bindings))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","let","applied-science.js-interop/let",-142128647,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),bindings)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}
}));

(sci.configs.applied_science.js_interop.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.applied_science.js_interop.let$.cljs$lang$applyTo = (function (seq93261){
var G__93262 = cljs.core.first(seq93261);
var seq93261__$1 = cljs.core.next(seq93261);
var G__93263 = cljs.core.first(seq93261__$1);
var seq93261__$2 = cljs.core.next(seq93261__$1);
var G__93264 = cljs.core.first(seq93261__$2);
var seq93261__$3 = cljs.core.next(seq93261__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__93262,G__93263,G__93264,seq93261__$3);
}));

/**
 * `fn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke. Eg/
 * (fn [^:js {:keys [a]}] …)
 */
sci.configs.applied_science.js_interop.fn = (function sci$configs$applied_science$js_interop$fn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___93393 = arguments.length;
var i__4865__auto___93394 = (0);
while(true){
if((i__4865__auto___93394 < len__4864__auto___93393)){
args__4870__auto__.push((arguments[i__4865__auto___93394]));

var G__93395 = (i__4865__auto___93394 + (1));
i__4865__auto___93394 = G__93395;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.configs.applied_science.js_interop.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.configs.applied_science.js_interop.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,args){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),applied_science.js_interop.destructure.destructure_fn_args(args));
}));

(sci.configs.applied_science.js_interop.fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.configs.applied_science.js_interop.fn.cljs$lang$applyTo = (function (seq93302){
var G__93303 = cljs.core.first(seq93302);
var seq93302__$1 = cljs.core.next(seq93302);
var G__93304 = cljs.core.first(seq93302__$1);
var seq93302__$2 = cljs.core.next(seq93302__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__93303,G__93304,seq93302__$2);
}));

/**
 * `defn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke.
 */
sci.configs.applied_science.js_interop.defn = (function sci$configs$applied_science$js_interop$defn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___93396 = arguments.length;
var i__4865__auto___93397 = (0);
while(true){
if((i__4865__auto___93397 < len__4864__auto___93396)){
args__4870__auto__.push((arguments[i__4865__auto___93397]));

var G__93398 = (i__4865__auto___93397 + (1));
i__4865__auto___93397 = G__93398;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.configs.applied_science.js_interop.defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.configs.applied_science.js_interop.defn.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,args){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","defn","clojure.core/defn",-1504648747,null),applied_science.js_interop.destructure.destructure_fn_args(args));
}));

(sci.configs.applied_science.js_interop.defn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.configs.applied_science.js_interop.defn.cljs$lang$applyTo = (function (seq93315){
var G__93316 = cljs.core.first(seq93315);
var seq93315__$1 = cljs.core.next(seq93315);
var G__93317 = cljs.core.first(seq93315__$1);
var seq93315__$2 = cljs.core.next(seq93315__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__93316,G__93317,seq93315__$2);
}));

sci.configs.applied_science.js_interop.litval_STAR_ = (function sci$configs$applied_science$js_interop$litval_STAR_(v){
if((v instanceof cljs.core.Keyword)){
var G__93320 = cljs.core.name(v);
if(cljs.core.truth_(cljs.core.namespace(v))){
return [cljs.core.namespace(v),"/",G__93320].join('');
} else {
return G__93320;
}
} else {
return v;
}
});
/**
 * For ~@spread values, returns the unwrapped value,
 * otherwise returns nil.
 */
sci.configs.applied_science.js_interop.spread = (function sci$configs$applied_science$js_interop$spread(x){
if(((cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null),cljs.core.first(x))))){
return cljs.core.second(x);
} else {
return null;
}
});
sci.configs.applied_science.js_interop.tagged_sym = (function sci$configs$applied_science$js_interop$tagged_sym(tag){
return cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.name(tag)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null));
});
/**
 * Recursively converts literal Clojure maps/vectors into JavaScript object/array expressions
 *   Options map accepts a :keyfn for custom key conversions.
 */
sci.configs.applied_science.js_interop.lit_STAR_ = (function sci$configs$applied_science$js_interop$lit_STAR_(var_args){
var G__93331 = arguments.length;
switch (G__93331) {
case 1:
return sci.configs.applied_science.js_interop.lit_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.configs.applied_science.js_interop.lit_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.configs.applied_science.js_interop.lit_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return sci.configs.applied_science.js_interop.lit_STAR_.cljs$core$IFn$_invoke$arity$2(null,x);
}));

(sci.configs.applied_science.js_interop.lit_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p__93332,x){
var map__93333 = p__93332;
var map__93333__$1 = cljs.core.__destructure_map(map__93333);
var opts = map__93333__$1;
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93333__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.identity);
var valfn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93333__$1,new cljs.core.Keyword(null,"valfn","valfn",-1900691475),sci.configs.applied_science.js_interop.litval_STAR_);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93333__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.map_QMARK_(x)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("applied-science.js-interop","obj","applied-science.js-interop/obj",-1164656258,null),cljs.core.reduce_kv((function (p1__93325_SHARP_,p2__93326_SHARP_,p3__93327_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(p1__93325_SHARP_,(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(p2__93326_SHARP_) : keyfn.call(null,p2__93326_SHARP_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.configs.applied_science.js_interop.lit_STAR_.cljs$core$IFn$_invoke$arity$2(opts,p3__93327_SHARP_)], 0));
}),cljs.core.PersistentVector.EMPTY,x));
} else {
if(cljs.core.vector_QMARK_(x)){
if(cljs.core.truth_(cljs.core.some(sci.configs.applied_science.js_interop.spread,x))){
var sym = sci.configs.applied_science.js_interop.tagged_sym(new cljs.core.Symbol("js","Array","js/Array",-423508366,null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4652__auto__ = (function sci$configs$applied_science$js_interop$iter__93334(s__93335){
return (new cljs.core.LazySeq(null,(function (){
var s__93335__$1 = s__93335;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__93335__$1);
if(temp__5753__auto__){
var s__93335__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__93335__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__93335__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__93337 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__93336 = (0);
while(true){
if((i__93336 < size__4651__auto__)){
var x_SINGLEQUOTE_ = cljs.core._nth(c__4650__auto__,i__93336);
cljs.core.chunk_append(b__93337,(function (){var temp__5751__auto__ = sci.configs.applied_science.js_interop.spread(x_SINGLEQUOTE_);
if(cljs.core.truth_(temp__5751__auto__)){
var x_SINGLEQUOTE___$1 = temp__5751__auto__;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",-169320766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"x__93329__auto__","x__93329__auto__",1436751761,null),null,(1),null)),(new cljs.core.List(null,sci.configs.applied_science.js_interop.lit_STAR_.cljs$core$IFn$_invoke$arity$1(x_SINGLEQUOTE___$1),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__93329__auto__","x__93329__auto__",1436751761,null),null,(1),null))], 0)))),null,(1),null))], 0))));

} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(sci.configs.applied_science.js_interop.lit_STAR_,x_SINGLEQUOTE_)], 0))));
}
})());

var G__93401 = (i__93336 + (1));
i__93336 = G__93401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__93337),sci$configs$applied_science$js_interop$iter__93334(cljs.core.chunk_rest(s__93335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__93337),null);
}
} else {
var x_SINGLEQUOTE_ = cljs.core.first(s__93335__$2);
return cljs.core.cons((function (){var temp__5751__auto__ = sci.configs.applied_science.js_interop.spread(x_SINGLEQUOTE_);
if(cljs.core.truth_(temp__5751__auto__)){
var x_SINGLEQUOTE___$1 = temp__5751__auto__;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",-169320766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"x__93329__auto__","x__93329__auto__",1436751761,null),null,(1),null)),(new cljs.core.List(null,sci.configs.applied_science.js_interop.lit_STAR_.cljs$core$IFn$_invoke$arity$1(x_SINGLEQUOTE___$1),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__93329__auto__","x__93329__auto__",1436751761,null),null,(1),null))], 0)))),null,(1),null))], 0))));

} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(sci.configs.applied_science.js_interop.lit_STAR_,x_SINGLEQUOTE_)], 0))));
}
})(),sci$configs$applied_science$js_interop$iter__93334(cljs.core.rest(s__93335__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x__$1){
if(cljs.core.truth_(sci.configs.applied_science.js_interop.spread(cljs.core.first(x__$1)))){
return x__$1;
} else {
return (new cljs.core.List(null,x__$1,null,(1),null));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(sci.configs.applied_science.js_interop.spread,x)], 0)));
})(),(new cljs.core.List(null,sym,null,(1),null))], 0))));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sci.configs.applied_science.js_interop.lit_STAR_,x));
}
} else {
return (valfn.cljs$core$IFn$_invoke$arity$1 ? valfn.cljs$core$IFn$_invoke$arity$1(x) : valfn.call(null,x));

}
}
}));

(sci.configs.applied_science.js_interop.lit_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Recursively converts literal Clojure maps/vectors into JavaScript object/array expressions
 * (using j/obj and cljs.core/array)
 */
sci.configs.applied_science.js_interop.lit = (function sci$configs$applied_science$js_interop$lit(_,_AMPERSAND_env,form){
return sci.configs.applied_science.js_interop.lit_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",-1815813235),_AMPERSAND_env], null),form);
});
sci.configs.applied_science.js_interop.js_interop_namespace = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"extend!","extend!",-1046512179,null),new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"lit","lit",1079096147,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"assoc-in!","assoc-in!",-1087629150,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"call-in","call-in",1633574209,null),new cljs.core.Symbol(null,"unshift!","unshift!",504036638,null),new cljs.core.Symbol(null,"call","call",1120531661,null),new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"push!","push!",1851210396,null),new cljs.core.Symbol(null,"apply-in","apply-in",-684758891,null),new cljs.core.Symbol(null,"update-in!","update-in!",1343638468,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"assoc!","assoc!",-847603280,null),new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"update!","update!",187022941,null)],[(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.extend_BANG_;},new cljs.core.Symbol("applied-science.js-interop","extend!","applied-science.js-interop/extend!",-530038416,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"extend!","extend!",-1046512179,null),"applied_science/js_interop.cljs",14,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),1,162,162,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Extends `obj` with the properties of one or more objects, overwriting\n   existing properties, moving left to right. Returns `obj`.\n   An empty starting object is provided if `obj` is nil.\n  ```\n  (j/extend! o other)\n  (j/extend! o other #js{:x 1})\n  ```\n  Not IE6-friendly",(cljs.core.truth_(applied_science.js_interop.extend_BANG_)?applied_science.js_interop.extend_BANG_.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.select_keys;},new cljs.core.Symbol("applied-science.js-interop","select-keys","applied-science.js-interop/select-keys",-878863328,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),"applied_science/js_interop.cljs",18,1,70,70,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null)),"Returns an object containing only those entries in `o` whose key is in `ks`.\n\n  ```\n  (j/select-keys o [:a :b :c])\n  (j/select-keys o [.-a .-b .-c])\n  ```",(cljs.core.truth_(applied_science.js_interop.select_keys)?applied_science.js_interop.select_keys.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return sci.configs.applied_science.js_interop.lit;},new cljs.core.Symbol("sci.configs.applied-science.js-interop","lit","sci.configs.applied-science.js-interop/lit",1995177550,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.applied-science.js-interop","sci.configs.applied-science.js-interop",-1452768886,null),new cljs.core.Symbol(null,"lit","lit",1079096147,null),"sci/configs/applied_science/js_interop.cljs",20,1,92,true,92,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null),new cljs.core.Symbol(null,"form","form",16469056,null)], null)),"Recursively converts literal Clojure maps/vectors into JavaScript object/array expressions\n   (using j/obj and cljs.core/array)",(cljs.core.truth_(sci.configs.applied_science.js_interop.lit)?sci.configs.applied_science.js_interop.lit.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return sci.configs.applied_science.js_interop.defn;},new cljs.core.Symbol("sci.configs.applied-science.js-interop","defn","sci.configs.applied-science.js-interop/defn",-1379729071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.applied-science.js-interop","sci.configs.applied-science.js-interop",-1452768886,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),"sci/configs/applied_science/js_interop.cljs",21,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"args","args",-1338879193,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,30,true,30,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),"`defn` with argument destructuring that supports js property and array access.\n   Use ^:js metadata on binding forms to invoke.",(cljs.core.truth_(sci.configs.applied_science.js_interop.defn)?sci.configs.applied_science.js_interop.defn.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.assoc_in_BANG_;},new cljs.core.Symbol("applied-science.js-interop","assoc-in!","applied-science.js-interop/assoc-in!",-1651288739,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"assoc-in!","assoc-in!",-1087629150,null),"applied_science/js_interop.cljs",16,1,119,119,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Mutates the value in a nested object structure, where ks is a\n  sequence of keys and v is the new value. If any levels do not\n  exist, objects will be created.\n\n  ```\n  (j/assoc-in! o [:x :y] 10)\n  (j/assoc-in! o [.-x .-y] 10)\n  ```",(cljs.core.truth_(applied_science.js_interop.assoc_in_BANG_)?applied_science.js_interop.assoc_in_BANG_.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.lookup;},new cljs.core.Symbol("applied-science.js-interop","lookup","applied-science.js-interop/lookup",-931651526,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),"applied_science/js_interop.cljs",13,1,89,89,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null)),"Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.\n\n  ```\n  (let [{:keys [a b c]} (j/lookup o)]\n   ...)\n  ```",(cljs.core.truth_(applied_science.js_interop.lookup)?applied_science.js_interop.lookup.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.call_in;},new cljs.core.Symbol("applied-science.js-interop","call-in","applied-science.js-interop/call-in",1139215102,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"call-in","call-in",1633574209,null),"applied_science/js_interop.cljs",14,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,229,229,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),"Call function nested at `path` with `args`, binding `this` to its parent object.\n\n  ```\n  (j/call-in o [:x :someFunction] arg1 arg2)\n  ```",(cljs.core.truth_(applied_science.js_interop.call_in)?applied_science.js_interop.call_in.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.unshift_BANG_;},new cljs.core.Symbol("applied-science.js-interop","unshift!","applied-science.js-interop/unshift!",2085857613,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"unshift!","unshift!",504036638,null),"applied_science/js_interop.cljs",15,1,195,195,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Prepends `v` to `a` and returns the mutated array.\n\n  ```\n  (j/unshift! arr 10)\n  ```",(cljs.core.truth_(applied_science.js_interop.unshift_BANG_)?applied_science.js_interop.unshift_BANG_.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.call;},new cljs.core.Symbol("applied-science.js-interop","call","applied-science.js-interop/call",614512830,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"call","call",1120531661,null),"applied_science/js_interop.cljs",11,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,209,209,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),"Call function `k` of `obj`, binding `this` to `obj`.\n\n  ```\n  (j/call o :someFunction arg1 arg2)\n  (j/call o .-someFunction arg1 arg2)\n  ```",(cljs.core.truth_(applied_science.js_interop.call)?applied_science.js_interop.call.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.apply;},new cljs.core.Symbol("applied-science.js-interop","apply","applied-science.js-interop/apply",1386470991,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"apply","apply",-1334050276,null),"applied_science/js_interop.cljs",12,1,219,219,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"arg-array","arg-array",-277423102,null)], null)),"Apply function `k` of `obj`, binding `this` to `obj`.\n\n  ```\n  (j/apply o :someFunction #js [arg1 arg2])\n  (j/apply o .-someFunction #js [arg1 arg2])\n  ```",(cljs.core.truth_(applied_science.js_interop.apply)?applied_science.js_interop.apply.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return sci.configs.applied_science.js_interop.let$;},new cljs.core.Symbol("sci.configs.applied-science.js-interop","let","sci.configs.applied-science.js-interop/let",-551112633,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.applied-science.js-interop","sci.configs.applied-science.js-interop",-1452768886,null),new cljs.core.Symbol(null,"let","let",358118826,null),"sci/configs/applied_science/js_interop.cljs",20,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,11,true,11,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"`let` with destructuring that supports js property and array access.\n   Use ^:js metadata on the binding form to invoke. Eg/\n   (let [^:js {:keys [a]} obj] \u2026)",(cljs.core.truth_(sci.configs.applied_science.js_interop.let$)?sci.configs.applied_science.js_interop.let$.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.get_in;},new cljs.core.Symbol("applied-science.js-interop","get-in","applied-science.js-interop/get-in",-1469459928,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),"applied_science/js_interop.cljs",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"not-found","not-found",1011451547,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"not-found","not-found",1011451547,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),1,43,43,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"not-found","not-found",1011451547,null)], null)),"Returns the value in a nested object structure, where ks is\n   a sequence of keys. Returns nil if the key is not present,\n   or the not-found value if supplied.\n\n   ```\n   (j/get-in o [:x :y] :fallback-value)\n   (j/get-in o [.-x .-y] :fallback-value)\n   ```",(cljs.core.truth_(applied_science.js_interop.get_in)?applied_science.js_interop.get_in.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return sci.configs.applied_science.js_interop.fn;},new cljs.core.Symbol("sci.configs.applied-science.js-interop","fn","sci.configs.applied-science.js-interop/fn",-855560896,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.applied-science.js-interop","sci.configs.applied-science.js-interop",-1452768886,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),"sci/configs/applied_science/js_interop.cljs",19,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"args","args",-1338879193,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,23,true,23,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),"`fn` with argument destructuring that supports js property and array access.\n   Use ^:js metadata on binding forms to invoke. Eg/\n   (fn [^:js {:keys [a]}] \u2026)",(cljs.core.truth_(sci.configs.applied_science.js_interop.fn)?sci.configs.applied_science.js_interop.fn.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.push_BANG_;},new cljs.core.Symbol("applied-science.js-interop","push!","applied-science.js-interop/push!",201354609,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"push!","push!",1851210396,null),"applied_science/js_interop.cljs",12,1,185,185,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Appends `v` to `array` and returns the mutated array.\n\n  ```\n  (j/push! arr 10)\n  ```",(cljs.core.truth_(applied_science.js_interop.push_BANG_)?applied_science.js_interop.push_BANG_.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.apply_in;},new cljs.core.Symbol("applied-science.js-interop","apply-in","applied-science.js-interop/apply-in",-254403384,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"apply-in","apply-in",-684758891,null),"applied_science/js_interop.cljs",15,1,238,238,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"arg-array","arg-array",-277423102,null)], null)),"Apply function nested at `path` with `arg-array`, binding `this` to its parent object.\n\n  ```\n  (j/apply-in o [:x :someFunction] arg1 arg2)\n  ```",(cljs.core.truth_(applied_science.js_interop.apply_in)?applied_science.js_interop.apply_in.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.update_in_BANG_;},new cljs.core.Symbol("applied-science.js-interop","update-in!","applied-science.js-interop/update-in!",847069047,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"update-in!","update-in!",1343638468,null),"applied_science/js_interop.cljs",17,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,148,148,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),"'Updates' a value in a nested object structure, where ks is a\n  sequence of keys and f is a function that will take the old value\n  and any supplied args and return the new value, mutating the\n  nested structure.  If any levels do not exist, objects will be\n  created.\n\n  ```\n  (j/update-in! o [:x :y] + 10)\n  (j/update-in! o [.-x .-y] + 10)\n  ```",(cljs.core.truth_(applied_science.js_interop.update_in_BANG_)?applied_science.js_interop.update_in_BANG_.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.obj;},new cljs.core.Symbol("applied-science.js-interop","obj","applied-science.js-interop/obj",-1164656258,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null),"applied_science/js_interop.cljs",10,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,251,251,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),"Create JavaScript object from an even number arguments representing\n   interleaved keys and values.\n\n   ```\n   (obj :a 1 :b 2 .-c 3 .-d 4)\n   ```",(cljs.core.truth_(applied_science.js_interop.obj)?applied_science.js_interop.obj.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.assoc_BANG_;},new cljs.core.Symbol("applied-science.js-interop","assoc!","applied-science.js-interop/assoc!",-359513083,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"assoc!","assoc!",-847603280,null),"applied_science/js_interop.cljs",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,104,104,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),"Sets key-value pairs on `obj`, returns `obj`.\n\n  ```\n  (j/assoc! o :x 10)\n  (j/assoc! o .-x 10)\n  ```",(cljs.core.truth_(applied_science.js_interop.assoc_BANG_)?applied_science.js_interop.assoc_BANG_.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.get;},new cljs.core.Symbol("applied-science.js-interop","get","applied-science.js-interop/get",-462418119,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"get","get",-971253014,null),"applied_science/js_interop.cljs",10,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"not-found","not-found",1011451547,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"not-found","not-found",1011451547,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),1,30,30,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"not-found","not-found",1011451547,null)], null)),"Returns the value mapped to key, not-found or nil if key not present.\n\n  ```\n  (j/get o :k)\n  (j/get o .-k)\n  ```",(cljs.core.truth_(applied_science.js_interop.get)?applied_science.js_interop.get.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.contains_QMARK_;},new cljs.core.Symbol("applied-science.js-interop","contains?","applied-science.js-interop/contains?",-1276734795,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),"applied_science/js_interop.cljs",25,1,60,60,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null)], null)),"Returns true if `obj` contains `k`.\n\n  ```\n  (j/contains? o :k)\n  (j/contains? o .-k)\n  ```",((applied_science.js_interop.contains_QMARK_)?applied_science.js_interop.contains_QMARK_.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})(),(function (){var ns__31224__auto__ = sci.configs.applied_science.js_interop.jns;
var var__31225__auto__ = new cljs.core.Var(function(){return applied_science.js_interop.update_BANG_;},new cljs.core.Symbol("applied-science.js-interop","update!","applied-science.js-interop/update!",1834803760,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"update!","update!",187022941,null),"applied_science/js_interop.cljs",14,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,131,131,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),"'Updates' a value in a JavaScript object, where k is a key and\n  f is a function that will take the old value and any supplied\n  args and return the new value, which replaces the old value.\n  If the key does not exist, nil is passed as the old value.\n\n  ```\n  (j/update! o :a + 10)\n  (j/update! o .-a + 10)\n  ```",(cljs.core.truth_(applied_science.js_interop.update_BANG_)?applied_science.js_interop.update_BANG_.cljs$lang$test:null)]));
var val__31226__auto__ = cljs.core.deref(var__31225__auto__);
var m__31227__auto__ = cljs.core.meta(var__31225__auto__);
var name__31228__auto__ = (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__31227__auto__);
}
})();
var new_m__31229__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__31224__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__31228__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__31227__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__31227__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__31227__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__31228__auto__,val__31226__auto__,new_m__31229__auto__);

}
}
})()]);
sci.configs.applied_science.js_interop.namespaces = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),sci.configs.applied_science.js_interop.js_interop_namespace], null);
sci.configs.applied_science.js_interop.config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),sci.configs.applied_science.js_interop.namespaces], null);

//# sourceMappingURL=sci.configs.applied_science.js_interop.js.map
