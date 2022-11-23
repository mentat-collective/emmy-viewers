goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__83170){
var map__83171 = p__83170;
var map__83171__$1 = cljs.core.__destructure_map(map__83171);
var m = map__83171__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83171__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83171__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__83176_83380 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__83177_83381 = null;
var count__83178_83382 = (0);
var i__83179_83383 = (0);
while(true){
if((i__83179_83383 < count__83178_83382)){
var f_83384 = chunk__83177_83381.cljs$core$IIndexed$_nth$arity$2(null,i__83179_83383);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_83384], 0));


var G__83385 = seq__83176_83380;
var G__83386 = chunk__83177_83381;
var G__83387 = count__83178_83382;
var G__83388 = (i__83179_83383 + (1));
seq__83176_83380 = G__83385;
chunk__83177_83381 = G__83386;
count__83178_83382 = G__83387;
i__83179_83383 = G__83388;
continue;
} else {
var temp__5753__auto___83389 = cljs.core.seq(seq__83176_83380);
if(temp__5753__auto___83389){
var seq__83176_83390__$1 = temp__5753__auto___83389;
if(cljs.core.chunked_seq_QMARK_(seq__83176_83390__$1)){
var c__4679__auto___83391 = cljs.core.chunk_first(seq__83176_83390__$1);
var G__83392 = cljs.core.chunk_rest(seq__83176_83390__$1);
var G__83393 = c__4679__auto___83391;
var G__83394 = cljs.core.count(c__4679__auto___83391);
var G__83395 = (0);
seq__83176_83380 = G__83392;
chunk__83177_83381 = G__83393;
count__83178_83382 = G__83394;
i__83179_83383 = G__83395;
continue;
} else {
var f_83396 = cljs.core.first(seq__83176_83390__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_83396], 0));


var G__83397 = cljs.core.next(seq__83176_83390__$1);
var G__83398 = null;
var G__83399 = (0);
var G__83400 = (0);
seq__83176_83380 = G__83397;
chunk__83177_83381 = G__83398;
count__83178_83382 = G__83399;
i__83179_83383 = G__83400;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_83401 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_83401], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_83401)))?cljs.core.second(arglists_83401):arglists_83401)], 0));
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
var seq__83204_83402 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__83205_83403 = null;
var count__83206_83404 = (0);
var i__83207_83405 = (0);
while(true){
if((i__83207_83405 < count__83206_83404)){
var vec__83257_83406 = chunk__83205_83403.cljs$core$IIndexed$_nth$arity$2(null,i__83207_83405);
var name_83407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83257_83406,(0),null);
var map__83260_83408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83257_83406,(1),null);
var map__83260_83409__$1 = cljs.core.__destructure_map(map__83260_83408);
var doc_83410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83260_83409__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_83411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83260_83409__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_83407], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_83411], 0));

if(cljs.core.truth_(doc_83410)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_83410], 0));
} else {
}


var G__83412 = seq__83204_83402;
var G__83413 = chunk__83205_83403;
var G__83414 = count__83206_83404;
var G__83415 = (i__83207_83405 + (1));
seq__83204_83402 = G__83412;
chunk__83205_83403 = G__83413;
count__83206_83404 = G__83414;
i__83207_83405 = G__83415;
continue;
} else {
var temp__5753__auto___83416 = cljs.core.seq(seq__83204_83402);
if(temp__5753__auto___83416){
var seq__83204_83417__$1 = temp__5753__auto___83416;
if(cljs.core.chunked_seq_QMARK_(seq__83204_83417__$1)){
var c__4679__auto___83418 = cljs.core.chunk_first(seq__83204_83417__$1);
var G__83419 = cljs.core.chunk_rest(seq__83204_83417__$1);
var G__83420 = c__4679__auto___83418;
var G__83421 = cljs.core.count(c__4679__auto___83418);
var G__83422 = (0);
seq__83204_83402 = G__83419;
chunk__83205_83403 = G__83420;
count__83206_83404 = G__83421;
i__83207_83405 = G__83422;
continue;
} else {
var vec__83268_83423 = cljs.core.first(seq__83204_83417__$1);
var name_83424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83268_83423,(0),null);
var map__83271_83425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83268_83423,(1),null);
var map__83271_83426__$1 = cljs.core.__destructure_map(map__83271_83425);
var doc_83427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83271_83426__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_83428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83271_83426__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_83424], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_83428], 0));

if(cljs.core.truth_(doc_83427)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_83427], 0));
} else {
}


var G__83429 = cljs.core.next(seq__83204_83417__$1);
var G__83430 = null;
var G__83431 = (0);
var G__83432 = (0);
seq__83204_83402 = G__83429;
chunk__83205_83403 = G__83430;
count__83206_83404 = G__83431;
i__83207_83405 = G__83432;
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

var seq__83294 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__83295 = null;
var count__83296 = (0);
var i__83297 = (0);
while(true){
if((i__83297 < count__83296)){
var role = chunk__83295.cljs$core$IIndexed$_nth$arity$2(null,i__83297);
var temp__5753__auto___83434__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___83434__$1)){
var spec_83435 = temp__5753__auto___83434__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_83435)], 0));
} else {
}


var G__83436 = seq__83294;
var G__83437 = chunk__83295;
var G__83438 = count__83296;
var G__83439 = (i__83297 + (1));
seq__83294 = G__83436;
chunk__83295 = G__83437;
count__83296 = G__83438;
i__83297 = G__83439;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__83294);
if(temp__5753__auto____$1){
var seq__83294__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__83294__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__83294__$1);
var G__83440 = cljs.core.chunk_rest(seq__83294__$1);
var G__83441 = c__4679__auto__;
var G__83442 = cljs.core.count(c__4679__auto__);
var G__83443 = (0);
seq__83294 = G__83440;
chunk__83295 = G__83441;
count__83296 = G__83442;
i__83297 = G__83443;
continue;
} else {
var role = cljs.core.first(seq__83294__$1);
var temp__5753__auto___83444__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___83444__$2)){
var spec_83445 = temp__5753__auto___83444__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_83445)], 0));
} else {
}


var G__83446 = cljs.core.next(seq__83294__$1);
var G__83447 = null;
var G__83448 = (0);
var G__83449 = (0);
seq__83294 = G__83446;
chunk__83295 = G__83447;
count__83296 = G__83448;
i__83297 = G__83449;
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
var G__83452 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__83453 = cljs.core.ex_cause(t);
via = G__83452;
t = G__83453;
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
var map__83310 = datafied_throwable;
var map__83310__$1 = cljs.core.__destructure_map(map__83310);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83310__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83310__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83310__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__83311 = cljs.core.last(via);
var map__83311__$1 = cljs.core.__destructure_map(map__83311);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83311__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83311__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83311__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__83312 = data;
var map__83312__$1 = cljs.core.__destructure_map(map__83312);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83312__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83312__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83312__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__83313 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__83313__$1 = cljs.core.__destructure_map(map__83313);
var top_data = map__83313__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83313__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__83314 = phase;
var G__83314__$1 = (((G__83314 instanceof cljs.core.Keyword))?G__83314.fqn:null);
switch (G__83314__$1) {
case "read-source":
var map__83315 = data;
var map__83315__$1 = cljs.core.__destructure_map(map__83315);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83315__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83315__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__83316 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__83316__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83316,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__83316);
var G__83316__$2 = (cljs.core.truth_((function (){var fexpr__83317 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__83317.cljs$core$IFn$_invoke$arity$1 ? fexpr__83317.cljs$core$IFn$_invoke$arity$1(source) : fexpr__83317.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__83316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__83316__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83316__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__83316__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__83322 = top_data;
var G__83322__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83322,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__83322);
var G__83322__$2 = (cljs.core.truth_((function (){var fexpr__83323 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__83323.cljs$core$IFn$_invoke$arity$1 ? fexpr__83323.cljs$core$IFn$_invoke$arity$1(source) : fexpr__83323.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__83322__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__83322__$1);
var G__83322__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83322__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__83322__$2);
var G__83322__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83322__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__83322__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83322__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__83322__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__83326 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83326,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83326,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83326,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83326,(3),null);
var G__83331 = top_data;
var G__83331__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83331,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__83331);
var G__83331__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83331__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__83331__$1);
var G__83331__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83331__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__83331__$2);
var G__83331__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83331__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__83331__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83331__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__83331__$4;
}

break;
case "execution":
var vec__83332 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83332,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83332,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83332,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83332,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83309_SHARP_){
var or__4253__auto__ = (p1__83309_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__83335 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__83335.cljs$core$IFn$_invoke$arity$1 ? fexpr__83335.cljs$core$IFn$_invoke$arity$1(p1__83309_SHARP_) : fexpr__83335.call(null,p1__83309_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__83336 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__83336__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83336,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__83336);
var G__83336__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83336__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__83336__$1);
var G__83336__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83336__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__83336__$2);
var G__83336__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83336__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__83336__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83336__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__83336__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83314__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__83339){
var map__83340 = p__83339;
var map__83340__$1 = cljs.core.__destructure_map(map__83340);
var triage_data = map__83340__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83340__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83340__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83340__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83340__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83340__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83340__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83340__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__83342 = phase;
var G__83342__$1 = (((G__83342 instanceof cljs.core.Keyword))?G__83342.fqn:null);
switch (G__83342__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__83343 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__83344 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__83345 = loc;
var G__83346 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__83347_83460 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__83348_83461 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__83349_83462 = true;
var _STAR_print_fn_STAR__temp_val__83350_83463 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__83349_83462);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__83350_83463);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83337_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__83337_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__83348_83461);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__83347_83460);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__83343,G__83344,G__83345,G__83346) : format.call(null,G__83343,G__83344,G__83345,G__83346));

break;
case "macroexpansion":
var G__83351 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__83352 = cause_type;
var G__83353 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__83354 = loc;
var G__83355 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__83351,G__83352,G__83353,G__83354,G__83355) : format.call(null,G__83351,G__83352,G__83353,G__83354,G__83355));

break;
case "compile-syntax-check":
var G__83356 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__83357 = cause_type;
var G__83358 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__83359 = loc;
var G__83360 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__83356,G__83357,G__83358,G__83359,G__83360) : format.call(null,G__83356,G__83357,G__83358,G__83359,G__83360));

break;
case "compilation":
var G__83361 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__83362 = cause_type;
var G__83363 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__83364 = loc;
var G__83365 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__83361,G__83362,G__83363,G__83364,G__83365) : format.call(null,G__83361,G__83362,G__83363,G__83364,G__83365));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__83366 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__83367 = symbol;
var G__83368 = loc;
var G__83369 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__83370_83467 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__83371_83468 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__83372_83469 = true;
var _STAR_print_fn_STAR__temp_val__83373_83470 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__83372_83469);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__83373_83470);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83338_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__83338_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__83371_83468);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__83370_83467);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__83366,G__83367,G__83368,G__83369) : format.call(null,G__83366,G__83367,G__83368,G__83369));
} else {
var G__83374 = "Execution error%s at %s(%s).\n%s\n";
var G__83375 = cause_type;
var G__83376 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__83377 = loc;
var G__83378 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__83374,G__83375,G__83376,G__83377,G__83378) : format.call(null,G__83374,G__83375,G__83376,G__83377,G__83378));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83342__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
