goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__91111 = arguments.length;
switch (G__91111) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__91116 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__91117 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__91117);

try{var G__91118 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__91118);

return G__91118;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__91116);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__91120 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__91121 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__91121);

try{var G__91122 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__91122);

return G__91122;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__91120);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__91123 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__91124 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__91124);

try{var G__91125 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__91125);

return G__91125;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__91123);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__91128 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__91129 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__91129);

try{var G__91131 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__91131);

return G__91131;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__91128);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__91132 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__91133 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__91133);

try{var G__91134 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__91134);

return G__91134;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__91132);
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
var _STAR_print_fn_STAR__orig_val__91138 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__91139 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__91139);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__91138);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___91482 = arguments.length;
var i__4865__auto___91483 = (0);
while(true){
if((i__4865__auto___91483 < len__4864__auto___91482)){
args__4870__auto__.push((arguments[i__4865__auto___91483]));

var G__91484 = (i__4865__auto___91483 + (1));
i__4865__auto___91483 = G__91484;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__91141 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__91142 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__91143 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__91144 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__91145 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__91146 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__91147 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__91148 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__91149 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__91150 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__91151 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__91152 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__91153 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__91154 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__91155 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__91156 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__91149);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__91150);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__91151);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__91152);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__91153);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__91154);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__91155);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__91156);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__91148);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__91147);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__91146);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__91145);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__91144);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__91143);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__91142);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__91141);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq91140){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq91140));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__91157 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__91158 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__91158);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__91157);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___91485 = arguments.length;
var i__4865__auto___91486 = (0);
while(true){
if((i__4865__auto___91486 < len__4864__auto___91485)){
args__4870__auto__.push((arguments[i__4865__auto___91486]));

var G__91487 = (i__4865__auto___91486 + (1));
i__4865__auto___91486 = G__91487;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__91160 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__91161 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__91162 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__91163 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__91164 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__91165 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__91166 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__91167 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__91168 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__91169 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__91170 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__91171 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__91172 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__91173 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__91167);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__91168);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__91169);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__91170);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__91171);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__91172);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__91173);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__91166);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__91165);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__91164);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__91163);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__91162);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__91161);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__91160);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq91159){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq91159));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___91489 = arguments.length;
var i__4865__auto___91490 = (0);
while(true){
if((i__4865__auto___91490 < len__4864__auto___91489)){
args__4870__auto__.push((arguments[i__4865__auto___91490]));

var G__91491 = (i__4865__auto___91490 + (1));
i__4865__auto___91490 = G__91491;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__91179 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__91180 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__91181 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__91182 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__91183 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__91184 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__91185 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__91186 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__91187 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__91188 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__91189 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__91190 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__91191 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__91192 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__91193 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__91194 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__91187);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__91188);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__91189);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__91190);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__91191);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__91192);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__91193);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__91194);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__91186);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__91185);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__91184);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__91183);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__91182);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__91181);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__91180);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__91179);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq91178){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq91178));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___91496 = arguments.length;
var i__4865__auto___91497 = (0);
while(true){
if((i__4865__auto___91497 < len__4864__auto___91496)){
args__4870__auto__.push((arguments[i__4865__auto___91497]));

var G__91498 = (i__4865__auto___91497 + (1));
i__4865__auto___91497 = G__91498;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__91196 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__91197 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__91198 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__91199 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__91200 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__91201 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__91202 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__91203 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__91204 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__91205 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__91206 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__91207 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__91208 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__91209 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__91203);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__91204);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__91205);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__91206);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__91207);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__91208);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__91209);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__91202);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__91201);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__91200);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__91199);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__91198);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__91197);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__91196);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq91195){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq91195));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4870__auto__ = [];
var len__4864__auto___91508 = arguments.length;
var i__4865__auto___91509 = (0);
while(true){
if((i__4865__auto___91509 < len__4864__auto___91508)){
args__4870__auto__.push((arguments[i__4865__auto___91509]));

var G__91510 = (i__4865__auto___91509 + (1));
i__4865__auto___91509 = G__91510;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__91211 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__91212 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__91213 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__91214 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__91215 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__91216 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__91217 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__91218 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__91219 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__91220 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__91221 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__91222 = null;
var _STAR_print_newline_STAR__temp_val__91223 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__91224 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__91218);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__91219);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__91220);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__91221);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__91222);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__91223);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__91224);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__91217);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__91216);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__91215);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__91214);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__91213);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__91212);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__91211);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq91210){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq91210));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___91511 = arguments.length;
var i__4865__auto___91513 = (0);
while(true){
if((i__4865__auto___91513 < len__4864__auto___91511)){
args__4870__auto__.push((arguments[i__4865__auto___91513]));

var G__91514 = (i__4865__auto___91513 + (1));
i__4865__auto___91513 = G__91514;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__91227 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__91228 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__91229 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__91230 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__91231 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__91232 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__91233 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__91234 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__91235 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__91236 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__91237 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__91238 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__91239 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__91240 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__91234);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__91235);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__91236);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__91237);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__91238);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__91239);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__91240);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__91233);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__91232);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__91231);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__91230);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__91229);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__91228);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__91227);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq91226){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq91226));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4870__auto__ = [];
var len__4864__auto___91524 = arguments.length;
var i__4865__auto___91525 = (0);
while(true){
if((i__4865__auto___91525 < len__4864__auto___91524)){
args__4870__auto__.push((arguments[i__4865__auto___91525]));

var G__91526 = (i__4865__auto___91525 + (1));
i__4865__auto___91525 = G__91526;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__91243 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__91244 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__91245 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__91246 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__91247 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__91248 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__91249 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__91250 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__91251 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__91252 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__91253 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__91254 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__91255 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__91256 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__91257 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__91258 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__91251);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__91252);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__91253);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__91254);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__91255);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__91256);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__91257);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__91258);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__91250);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__91249);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__91248);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__91247);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__91246);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__91245);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__91244);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__91243);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq91242){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq91242));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___91534 = arguments.length;
var i__4865__auto___91535 = (0);
while(true){
if((i__4865__auto___91535 < len__4864__auto___91534)){
args__4870__auto__.push((arguments[i__4865__auto___91535]));

var G__91536 = (i__4865__auto___91535 + (1));
i__4865__auto___91535 = G__91536;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__91259__auto__","s__91259__auto__",-269486681,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__91260__auto__","x__91260__auto__",2029724889,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__91259__auto__","s__91259__auto__",-269486681,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__91260__auto__","x__91260__auto__",2029724889,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__91259__auto__","s__91259__auto__",-269486681,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq91261){
var G__91262 = cljs.core.first(seq91261);
var seq91261__$1 = cljs.core.next(seq91261);
var G__91263 = cljs.core.first(seq91261__$1);
var seq91261__$2 = cljs.core.next(seq91261__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91262,G__91263,seq91261__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
