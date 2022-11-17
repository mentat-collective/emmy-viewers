goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__82610){
var map__82611 = p__82610;
var map__82611__$1 = cljs.core.__destructure_map(map__82611);
var m = map__82611__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82611__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82611__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__82612_82760 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__82613_82761 = null;
var count__82614_82762 = (0);
var i__82615_82763 = (0);
while(true){
if((i__82615_82763 < count__82614_82762)){
var f_82764 = chunk__82613_82761.cljs$core$IIndexed$_nth$arity$2(null,i__82615_82763);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_82764], 0));


var G__82769 = seq__82612_82760;
var G__82770 = chunk__82613_82761;
var G__82771 = count__82614_82762;
var G__82772 = (i__82615_82763 + (1));
seq__82612_82760 = G__82769;
chunk__82613_82761 = G__82770;
count__82614_82762 = G__82771;
i__82615_82763 = G__82772;
continue;
} else {
var temp__5753__auto___82773 = cljs.core.seq(seq__82612_82760);
if(temp__5753__auto___82773){
var seq__82612_82774__$1 = temp__5753__auto___82773;
if(cljs.core.chunked_seq_QMARK_(seq__82612_82774__$1)){
var c__4679__auto___82775 = cljs.core.chunk_first(seq__82612_82774__$1);
var G__82776 = cljs.core.chunk_rest(seq__82612_82774__$1);
var G__82777 = c__4679__auto___82775;
var G__82778 = cljs.core.count(c__4679__auto___82775);
var G__82779 = (0);
seq__82612_82760 = G__82776;
chunk__82613_82761 = G__82777;
count__82614_82762 = G__82778;
i__82615_82763 = G__82779;
continue;
} else {
var f_82780 = cljs.core.first(seq__82612_82774__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_82780], 0));


var G__82781 = cljs.core.next(seq__82612_82774__$1);
var G__82782 = null;
var G__82783 = (0);
var G__82784 = (0);
seq__82612_82760 = G__82781;
chunk__82613_82761 = G__82782;
count__82614_82762 = G__82783;
i__82615_82763 = G__82784;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_82785 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_82785], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_82785)))?cljs.core.second(arglists_82785):arglists_82785)], 0));
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
var seq__82627_82786 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__82628_82787 = null;
var count__82629_82788 = (0);
var i__82630_82789 = (0);
while(true){
if((i__82630_82789 < count__82629_82788)){
var vec__82648_82790 = chunk__82628_82787.cljs$core$IIndexed$_nth$arity$2(null,i__82630_82789);
var name_82791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82648_82790,(0),null);
var map__82651_82792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82648_82790,(1),null);
var map__82651_82793__$1 = cljs.core.__destructure_map(map__82651_82792);
var doc_82794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82651_82793__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_82795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82651_82793__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_82791], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_82795], 0));

if(cljs.core.truth_(doc_82794)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_82794], 0));
} else {
}


var G__82797 = seq__82627_82786;
var G__82798 = chunk__82628_82787;
var G__82799 = count__82629_82788;
var G__82800 = (i__82630_82789 + (1));
seq__82627_82786 = G__82797;
chunk__82628_82787 = G__82798;
count__82629_82788 = G__82799;
i__82630_82789 = G__82800;
continue;
} else {
var temp__5753__auto___82801 = cljs.core.seq(seq__82627_82786);
if(temp__5753__auto___82801){
var seq__82627_82802__$1 = temp__5753__auto___82801;
if(cljs.core.chunked_seq_QMARK_(seq__82627_82802__$1)){
var c__4679__auto___82803 = cljs.core.chunk_first(seq__82627_82802__$1);
var G__82804 = cljs.core.chunk_rest(seq__82627_82802__$1);
var G__82805 = c__4679__auto___82803;
var G__82806 = cljs.core.count(c__4679__auto___82803);
var G__82807 = (0);
seq__82627_82786 = G__82804;
chunk__82628_82787 = G__82805;
count__82629_82788 = G__82806;
i__82630_82789 = G__82807;
continue;
} else {
var vec__82653_82808 = cljs.core.first(seq__82627_82802__$1);
var name_82809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82653_82808,(0),null);
var map__82656_82810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82653_82808,(1),null);
var map__82656_82811__$1 = cljs.core.__destructure_map(map__82656_82810);
var doc_82812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82656_82811__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_82813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82656_82811__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_82809], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_82813], 0));

if(cljs.core.truth_(doc_82812)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_82812], 0));
} else {
}


var G__82814 = cljs.core.next(seq__82627_82802__$1);
var G__82815 = null;
var G__82816 = (0);
var G__82817 = (0);
seq__82627_82786 = G__82814;
chunk__82628_82787 = G__82815;
count__82629_82788 = G__82816;
i__82630_82789 = G__82817;
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

var seq__82665 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__82666 = null;
var count__82667 = (0);
var i__82668 = (0);
while(true){
if((i__82668 < count__82667)){
var role = chunk__82666.cljs$core$IIndexed$_nth$arity$2(null,i__82668);
var temp__5753__auto___82818__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___82818__$1)){
var spec_82819 = temp__5753__auto___82818__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_82819)], 0));
} else {
}


var G__82820 = seq__82665;
var G__82821 = chunk__82666;
var G__82822 = count__82667;
var G__82823 = (i__82668 + (1));
seq__82665 = G__82820;
chunk__82666 = G__82821;
count__82667 = G__82822;
i__82668 = G__82823;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__82665);
if(temp__5753__auto____$1){
var seq__82665__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__82665__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__82665__$1);
var G__82827 = cljs.core.chunk_rest(seq__82665__$1);
var G__82828 = c__4679__auto__;
var G__82829 = cljs.core.count(c__4679__auto__);
var G__82830 = (0);
seq__82665 = G__82827;
chunk__82666 = G__82828;
count__82667 = G__82829;
i__82668 = G__82830;
continue;
} else {
var role = cljs.core.first(seq__82665__$1);
var temp__5753__auto___82831__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___82831__$2)){
var spec_82832 = temp__5753__auto___82831__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_82832)], 0));
} else {
}


var G__82833 = cljs.core.next(seq__82665__$1);
var G__82834 = null;
var G__82835 = (0);
var G__82836 = (0);
seq__82665 = G__82833;
chunk__82666 = G__82834;
count__82667 = G__82835;
i__82668 = G__82836;
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
var G__82837 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__82838 = cljs.core.ex_cause(t);
via = G__82837;
t = G__82838;
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
var map__82685 = datafied_throwable;
var map__82685__$1 = cljs.core.__destructure_map(map__82685);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82685__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82685__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82685__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__82686 = cljs.core.last(via);
var map__82686__$1 = cljs.core.__destructure_map(map__82686);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82686__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82686__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82686__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__82687 = data;
var map__82687__$1 = cljs.core.__destructure_map(map__82687);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82687__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82687__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82687__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__82688 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__82688__$1 = cljs.core.__destructure_map(map__82688);
var top_data = map__82688__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82688__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__82689 = phase;
var G__82689__$1 = (((G__82689 instanceof cljs.core.Keyword))?G__82689.fqn:null);
switch (G__82689__$1) {
case "read-source":
var map__82690 = data;
var map__82690__$1 = cljs.core.__destructure_map(map__82690);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82690__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82690__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__82691 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__82691__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82691,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__82691);
var G__82691__$2 = (cljs.core.truth_((function (){var fexpr__82692 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__82692.cljs$core$IFn$_invoke$arity$1 ? fexpr__82692.cljs$core$IFn$_invoke$arity$1(source) : fexpr__82692.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__82691__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__82691__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82691__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__82691__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__82696 = top_data;
var G__82696__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82696,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__82696);
var G__82696__$2 = (cljs.core.truth_((function (){var fexpr__82697 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__82697.cljs$core$IFn$_invoke$arity$1 ? fexpr__82697.cljs$core$IFn$_invoke$arity$1(source) : fexpr__82697.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__82696__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__82696__$1);
var G__82696__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82696__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__82696__$2);
var G__82696__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82696__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__82696__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82696__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__82696__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__82698 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82698,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82698,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82698,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82698,(3),null);
var G__82701 = top_data;
var G__82701__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82701,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__82701);
var G__82701__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82701__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__82701__$1);
var G__82701__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82701__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__82701__$2);
var G__82701__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82701__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__82701__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82701__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__82701__$4;
}

break;
case "execution":
var vec__82702 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82702,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82702,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82702,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82702,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__82684_SHARP_){
var or__4253__auto__ = (p1__82684_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__82705 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__82705.cljs$core$IFn$_invoke$arity$1 ? fexpr__82705.cljs$core$IFn$_invoke$arity$1(p1__82684_SHARP_) : fexpr__82705.call(null,p1__82684_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__82706 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__82706__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82706,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__82706);
var G__82706__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82706__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__82706__$1);
var G__82706__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82706__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__82706__$2);
var G__82706__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82706__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__82706__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82706__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__82706__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82689__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__82716){
var map__82717 = p__82716;
var map__82717__$1 = cljs.core.__destructure_map(map__82717);
var triage_data = map__82717__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82717__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82717__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82717__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82717__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82717__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82717__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82717__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82717__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__82718 = phase;
var G__82718__$1 = (((G__82718 instanceof cljs.core.Keyword))?G__82718.fqn:null);
switch (G__82718__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__82719 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__82720 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__82721 = loc;
var G__82722 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__82723_82912 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__82724_82913 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__82725_82914 = true;
var _STAR_print_fn_STAR__temp_val__82726_82915 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__82725_82914);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__82726_82915);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82712_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__82712_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__82724_82913);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__82723_82912);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__82719,G__82720,G__82721,G__82722) : format.call(null,G__82719,G__82720,G__82721,G__82722));

break;
case "macroexpansion":
var G__82731 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__82732 = cause_type;
var G__82733 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__82734 = loc;
var G__82735 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__82731,G__82732,G__82733,G__82734,G__82735) : format.call(null,G__82731,G__82732,G__82733,G__82734,G__82735));

break;
case "compile-syntax-check":
var G__82736 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__82737 = cause_type;
var G__82738 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__82739 = loc;
var G__82740 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__82736,G__82737,G__82738,G__82739,G__82740) : format.call(null,G__82736,G__82737,G__82738,G__82739,G__82740));

break;
case "compilation":
var G__82741 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__82742 = cause_type;
var G__82743 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__82744 = loc;
var G__82745 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__82741,G__82742,G__82743,G__82744,G__82745) : format.call(null,G__82741,G__82742,G__82743,G__82744,G__82745));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__82746 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__82747 = symbol;
var G__82748 = loc;
var G__82749 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__82750_82941 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__82751_82942 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__82752_82943 = true;
var _STAR_print_fn_STAR__temp_val__82753_82944 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__82752_82943);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__82753_82944);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82713_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__82713_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__82751_82942);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__82750_82941);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__82746,G__82747,G__82748,G__82749) : format.call(null,G__82746,G__82747,G__82748,G__82749));
} else {
var G__82754 = "Execution error%s at %s(%s).\n%s\n";
var G__82755 = cause_type;
var G__82756 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__82757 = loc;
var G__82758 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__82754,G__82755,G__82756,G__82757,G__82758) : format.call(null,G__82754,G__82755,G__82756,G__82757,G__82758));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82718__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
