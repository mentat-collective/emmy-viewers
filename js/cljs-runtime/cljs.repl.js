goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59679){
var map__59681 = p__59679;
var map__59681__$1 = cljs.core.__destructure_map(map__59681);
var m = map__59681__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59681__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59681__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59688_60068 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59689_60069 = null;
var count__59690_60070 = (0);
var i__59691_60071 = (0);
while(true){
if((i__59691_60071 < count__59690_60070)){
var f_60072 = chunk__59689_60069.cljs$core$IIndexed$_nth$arity$2(null,i__59691_60071);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60072], 0));


var G__60073 = seq__59688_60068;
var G__60074 = chunk__59689_60069;
var G__60075 = count__59690_60070;
var G__60076 = (i__59691_60071 + (1));
seq__59688_60068 = G__60073;
chunk__59689_60069 = G__60074;
count__59690_60070 = G__60075;
i__59691_60071 = G__60076;
continue;
} else {
var temp__5753__auto___60077 = cljs.core.seq(seq__59688_60068);
if(temp__5753__auto___60077){
var seq__59688_60078__$1 = temp__5753__auto___60077;
if(cljs.core.chunked_seq_QMARK_(seq__59688_60078__$1)){
var c__4679__auto___60079 = cljs.core.chunk_first(seq__59688_60078__$1);
var G__60080 = cljs.core.chunk_rest(seq__59688_60078__$1);
var G__60081 = c__4679__auto___60079;
var G__60082 = cljs.core.count(c__4679__auto___60079);
var G__60083 = (0);
seq__59688_60068 = G__60080;
chunk__59689_60069 = G__60081;
count__59690_60070 = G__60082;
i__59691_60071 = G__60083;
continue;
} else {
var f_60085 = cljs.core.first(seq__59688_60078__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60085], 0));


var G__60088 = cljs.core.next(seq__59688_60078__$1);
var G__60089 = null;
var G__60090 = (0);
var G__60091 = (0);
seq__59688_60068 = G__60088;
chunk__59689_60069 = G__60089;
count__59690_60070 = G__60090;
i__59691_60071 = G__60091;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60092 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_60092], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_60092)))?cljs.core.second(arglists_60092):arglists_60092)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59734_60096 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59736_60097 = null;
var count__59737_60098 = (0);
var i__59738_60099 = (0);
while(true){
if((i__59738_60099 < count__59737_60098)){
var vec__59793_60100 = chunk__59736_60097.cljs$core$IIndexed$_nth$arity$2(null,i__59738_60099);
var name_60101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59793_60100,(0),null);
var map__59796_60102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59793_60100,(1),null);
var map__59796_60103__$1 = cljs.core.__destructure_map(map__59796_60102);
var doc_60104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59796_60103__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59796_60103__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60101], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60105], 0));

if(cljs.core.truth_(doc_60104)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60104], 0));
} else {
}


var G__60106 = seq__59734_60096;
var G__60107 = chunk__59736_60097;
var G__60108 = count__59737_60098;
var G__60109 = (i__59738_60099 + (1));
seq__59734_60096 = G__60106;
chunk__59736_60097 = G__60107;
count__59737_60098 = G__60108;
i__59738_60099 = G__60109;
continue;
} else {
var temp__5753__auto___60110 = cljs.core.seq(seq__59734_60096);
if(temp__5753__auto___60110){
var seq__59734_60111__$1 = temp__5753__auto___60110;
if(cljs.core.chunked_seq_QMARK_(seq__59734_60111__$1)){
var c__4679__auto___60112 = cljs.core.chunk_first(seq__59734_60111__$1);
var G__60113 = cljs.core.chunk_rest(seq__59734_60111__$1);
var G__60114 = c__4679__auto___60112;
var G__60115 = cljs.core.count(c__4679__auto___60112);
var G__60116 = (0);
seq__59734_60096 = G__60113;
chunk__59736_60097 = G__60114;
count__59737_60098 = G__60115;
i__59738_60099 = G__60116;
continue;
} else {
var vec__59797_60117 = cljs.core.first(seq__59734_60111__$1);
var name_60118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59797_60117,(0),null);
var map__59800_60119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59797_60117,(1),null);
var map__59800_60120__$1 = cljs.core.__destructure_map(map__59800_60119);
var doc_60121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59800_60120__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59800_60120__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60118], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60122], 0));

if(cljs.core.truth_(doc_60121)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60121], 0));
} else {
}


var G__60123 = cljs.core.next(seq__59734_60111__$1);
var G__60124 = null;
var G__60125 = (0);
var G__60126 = (0);
seq__59734_60096 = G__60123;
chunk__59736_60097 = G__60124;
count__59737_60098 = G__60125;
i__59738_60099 = G__60126;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__59839 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59842 = null;
var count__59844 = (0);
var i__59846 = (0);
while(true){
if((i__59846 < count__59844)){
var role = chunk__59842.cljs$core$IIndexed$_nth$arity$2(null,i__59846);
var temp__5753__auto___60131__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___60131__$1)){
var spec_60133 = temp__5753__auto___60131__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60133)], 0));
} else {
}


var G__60134 = seq__59839;
var G__60135 = chunk__59842;
var G__60136 = count__59844;
var G__60137 = (i__59846 + (1));
seq__59839 = G__60134;
chunk__59842 = G__60135;
count__59844 = G__60136;
i__59846 = G__60137;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__59839);
if(temp__5753__auto____$1){
var seq__59839__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59839__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59839__$1);
var G__60138 = cljs.core.chunk_rest(seq__59839__$1);
var G__60139 = c__4679__auto__;
var G__60140 = cljs.core.count(c__4679__auto__);
var G__60141 = (0);
seq__59839 = G__60138;
chunk__59842 = G__60139;
count__59844 = G__60140;
i__59846 = G__60141;
continue;
} else {
var role = cljs.core.first(seq__59839__$1);
var temp__5753__auto___60142__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___60142__$2)){
var spec_60143 = temp__5753__auto___60142__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60143)], 0));
} else {
}


var G__60144 = cljs.core.next(seq__59839__$1);
var G__60145 = null;
var G__60146 = (0);
var G__60147 = (0);
seq__59839 = G__60144;
chunk__59842 = G__60145;
count__59844 = G__60146;
i__59846 = G__60147;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__60151 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__60152 = cljs.core.ex_cause(t);
via = G__60151;
t = G__60152;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__59987 = datafied_throwable;
var map__59987__$1 = cljs.core.__destructure_map(map__59987);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59987__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59987__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59987__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__59988 = cljs.core.last(via);
var map__59988__$1 = cljs.core.__destructure_map(map__59988);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59988__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59988__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59988__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59989 = data;
var map__59989__$1 = cljs.core.__destructure_map(map__59989);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__59990 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__59990__$1 = cljs.core.__destructure_map(map__59990);
var top_data = map__59990__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59990__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__59991 = phase;
var G__59991__$1 = (((G__59991 instanceof cljs.core.Keyword))?G__59991.fqn:null);
switch (G__59991__$1) {
case "read-source":
var map__59993 = data;
var map__59993__$1 = cljs.core.__destructure_map(map__59993);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59993__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59993__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__59995 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__59995__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59995,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59995);
var G__59995__$2 = (cljs.core.truth_((function (){var fexpr__59996 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59996.cljs$core$IFn$_invoke$arity$1 ? fexpr__59996.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59996.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59995__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59995__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59995__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59995__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__60001 = top_data;
var G__60001__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60001,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60001);
var G__60001__$2 = (cljs.core.truth_((function (){var fexpr__60002 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60002.cljs$core$IFn$_invoke$arity$1 ? fexpr__60002.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60002.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60001__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60001__$1);
var G__60001__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60001__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60001__$2);
var G__60001__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60001__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60001__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60001__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60001__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__60005 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60005,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60005,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60005,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60005,(3),null);
var G__60009 = top_data;
var G__60009__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60009,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__60009);
var G__60009__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60009__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__60009__$1);
var G__60009__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60009__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__60009__$2);
var G__60009__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60009__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60009__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60009__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60009__$4;
}

break;
case "execution":
var vec__60010 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60010,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60010,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60010,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60010,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59982_SHARP_){
var or__4253__auto__ = (p1__59982_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__60013 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60013.cljs$core$IFn$_invoke$arity$1 ? fexpr__60013.cljs$core$IFn$_invoke$arity$1(p1__59982_SHARP_) : fexpr__60013.call(null,p1__59982_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__60014 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__60014__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60014,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__60014);
var G__60014__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60014__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60014__$1);
var G__60014__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60014__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__60014__$2);
var G__60014__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60014__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__60014__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60014__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60014__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59991__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__60017){
var map__60018 = p__60017;
var map__60018__$1 = cljs.core.__destructure_map(map__60018);
var triage_data = map__60018__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__60021 = phase;
var G__60021__$1 = (((G__60021 instanceof cljs.core.Keyword))?G__60021.fqn:null);
switch (G__60021__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__60026 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__60027 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60028 = loc;
var G__60029 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60030_60181 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60031_60182 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60032_60183 = true;
var _STAR_print_fn_STAR__temp_val__60033_60184 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60032_60183);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60033_60184);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60015_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60015_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60031_60182);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60030_60181);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60026,G__60027,G__60028,G__60029) : format.call(null,G__60026,G__60027,G__60028,G__60029));

break;
case "macroexpansion":
var G__60038 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__60039 = cause_type;
var G__60040 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60041 = loc;
var G__60042 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60038,G__60039,G__60040,G__60041,G__60042) : format.call(null,G__60038,G__60039,G__60040,G__60041,G__60042));

break;
case "compile-syntax-check":
var G__60043 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__60044 = cause_type;
var G__60045 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60046 = loc;
var G__60047 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60043,G__60044,G__60045,G__60046,G__60047) : format.call(null,G__60043,G__60044,G__60045,G__60046,G__60047));

break;
case "compilation":
var G__60048 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__60049 = cause_type;
var G__60050 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60051 = loc;
var G__60052 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60048,G__60049,G__60050,G__60051,G__60052) : format.call(null,G__60048,G__60049,G__60050,G__60051,G__60052));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__60053 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__60054 = symbol;
var G__60055 = loc;
var G__60056 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60057_60206 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60058_60207 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60059_60208 = true;
var _STAR_print_fn_STAR__temp_val__60060_60209 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60059_60208);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60060_60209);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60016_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60016_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60058_60207);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60057_60206);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60053,G__60054,G__60055,G__60056) : format.call(null,G__60053,G__60054,G__60055,G__60056));
} else {
var G__60061 = "Execution error%s at %s(%s).\n%s\n";
var G__60062 = cause_type;
var G__60063 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60064 = loc;
var G__60065 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60061,G__60062,G__60063,G__60064,G__60065) : format.call(null,G__60061,G__60062,G__60063,G__60064,G__60065));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60021__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
