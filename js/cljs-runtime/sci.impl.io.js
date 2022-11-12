goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__77865 = arguments.length;
switch (G__77865) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__77869 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__77870 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__77870);

try{var G__77871 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__77871);

return G__77871;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__77869);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__77872 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__77873 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__77873);

try{var G__77874 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__77874);

return G__77874;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__77872);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__77876 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__77877 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__77877);

try{var G__77878 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__77878);

return G__77878;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__77876);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__77879 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__77880 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__77880);

try{var G__77914 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__77914);

return G__77914;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__77879);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__77953 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__77954 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__77954);

try{var G__77955 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__77955);

return G__77955;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__77953);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));

sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));

sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));

sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));

sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));

sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));

sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));

sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__78192 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__78193 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__78193);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__78192);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78647 = arguments.length;
var i__4865__auto___78648 = (0);
while(true){
if((i__4865__auto___78648 < len__4864__auto___78647)){
args__4870__auto__.push((arguments[i__4865__auto___78648]));

var G__78649 = (i__4865__auto___78648 + (1));
i__4865__auto___78648 = G__78649;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__78242 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__78243 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__78244 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__78245 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__78246 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__78247 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__78248 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__78249 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__78250 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__78251 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__78252 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__78253 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__78254 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__78255 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__78256 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__78257 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__78250);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__78251);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__78252);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__78253);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__78254);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__78255);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__78256);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__78257);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__78249);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__78248);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__78247);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__78246);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__78245);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__78244);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__78243);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__78242);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq78216){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78216));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__78284 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__78285 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__78285);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__78284);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78660 = arguments.length;
var i__4865__auto___78661 = (0);
while(true){
if((i__4865__auto___78661 < len__4864__auto___78660)){
args__4870__auto__.push((arguments[i__4865__auto___78661]));

var G__78662 = (i__4865__auto___78661 + (1));
i__4865__auto___78661 = G__78662;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__78315 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__78316 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__78317 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__78318 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__78319 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__78320 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__78321 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__78322 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__78323 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__78324 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__78325 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__78326 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__78327 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__78328 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__78322);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__78323);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__78324);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__78325);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__78326);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__78327);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__78328);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__78321);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__78320);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__78319);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__78318);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__78317);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__78316);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__78315);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq78308){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78308));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78672 = arguments.length;
var i__4865__auto___78673 = (0);
while(true){
if((i__4865__auto___78673 < len__4864__auto___78672)){
args__4870__auto__.push((arguments[i__4865__auto___78673]));

var G__78674 = (i__4865__auto___78673 + (1));
i__4865__auto___78673 = G__78674;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__78392 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__78393 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__78394 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__78395 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__78396 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__78397 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__78398 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__78399 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__78400 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__78401 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__78402 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__78403 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__78404 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__78405 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__78406 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__78407 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__78400);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__78401);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__78402);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__78403);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__78404);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__78405);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__78406);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__78407);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__78399);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__78398);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__78397);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__78396);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__78395);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__78394);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__78393);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__78392);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq78359){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78359));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78678 = arguments.length;
var i__4865__auto___78679 = (0);
while(true){
if((i__4865__auto___78679 < len__4864__auto___78678)){
args__4870__auto__.push((arguments[i__4865__auto___78679]));

var G__78680 = (i__4865__auto___78679 + (1));
i__4865__auto___78679 = G__78680;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__78443 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__78444 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__78445 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__78446 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__78447 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__78448 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__78449 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__78450 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__78451 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__78452 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__78453 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__78454 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__78455 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__78456 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__78450);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__78451);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__78452);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__78453);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__78454);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__78455);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__78456);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__78449);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__78448);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__78447);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__78446);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__78445);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__78444);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__78443);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq78408){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78408));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78681 = arguments.length;
var i__4865__auto___78682 = (0);
while(true){
if((i__4865__auto___78682 < len__4864__auto___78681)){
args__4870__auto__.push((arguments[i__4865__auto___78682]));

var G__78683 = (i__4865__auto___78682 + (1));
i__4865__auto___78682 = G__78683;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__78458 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__78459 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__78460 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__78461 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__78462 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__78463 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__78464 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__78465 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__78466 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__78467 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__78468 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__78469 = null;
var _STAR_print_newline_STAR__temp_val__78470 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__78471 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__78465);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__78466);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__78467);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__78468);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__78469);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__78470);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__78471);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__78464);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__78463);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__78462);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__78461);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__78460);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__78459);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__78458);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq78457){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78457));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78684 = arguments.length;
var i__4865__auto___78685 = (0);
while(true){
if((i__4865__auto___78685 < len__4864__auto___78684)){
args__4870__auto__.push((arguments[i__4865__auto___78685]));

var G__78686 = (i__4865__auto___78685 + (1));
i__4865__auto___78685 = G__78686;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__78509 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__78510 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__78511 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__78512 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__78513 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__78514 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__78515 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__78516 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__78517 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__78518 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__78519 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__78520 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__78521 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__78522 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__78516);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__78517);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__78518);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__78519);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__78520);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__78521);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__78522);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__78515);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__78514);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__78513);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__78512);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__78511);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__78510);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__78509);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq78508){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78508));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78691 = arguments.length;
var i__4865__auto___78692 = (0);
while(true){
if((i__4865__auto___78692 < len__4864__auto___78691)){
args__4870__auto__.push((arguments[i__4865__auto___78692]));

var G__78693 = (i__4865__auto___78692 + (1));
i__4865__auto___78692 = G__78693;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__78602 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__78603 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__78604 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__78605 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__78606 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__78607 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__78608 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__78609 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__78610 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__78611 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__78612 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__78613 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__78614 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__78615 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__78616 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__78617 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__78610);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__78611);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__78612);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__78613);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__78614);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__78615);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__78616);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__78617);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__78609);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__78608);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__78607);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__78606);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__78605);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__78604);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__78603);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__78602);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq78561){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78561));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78696 = arguments.length;
var i__4865__auto___78697 = (0);
while(true){
if((i__4865__auto___78697 < len__4864__auto___78696)){
args__4870__auto__.push((arguments[i__4865__auto___78697]));

var G__78699 = (i__4865__auto___78697 + (1));
i__4865__auto___78697 = G__78699;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__78618__auto__","s__78618__auto__",501268132,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__78619__auto__","x__78619__auto__",-728890406,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__78618__auto__","s__78618__auto__",501268132,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__78619__auto__","x__78619__auto__",-728890406,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__78618__auto__","s__78618__auto__",501268132,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq78620){
var G__78621 = cljs.core.first(seq78620);
var seq78620__$1 = cljs.core.next(seq78620);
var G__78622 = cljs.core.first(seq78620__$1);
var seq78620__$2 = cljs.core.next(seq78620__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78621,G__78622,seq78620__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
