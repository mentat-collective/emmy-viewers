goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__90159 = arguments.length;
switch (G__90159) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__90160 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__90161 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__90161);

try{var G__90162 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__90162);

return G__90162;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__90160);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__90163 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__90164 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__90164);

try{var G__90165 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__90165);

return G__90165;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__90163);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__90166 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__90167 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__90167);

try{var G__90168 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__90168);

return G__90168;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__90166);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__90169 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__90170 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__90170);

try{var G__90171 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__90171);

return G__90171;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__90169);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__90172 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__90173 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__90173);

try{var G__90174 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__90174);

return G__90174;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__90172);
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
var _STAR_print_fn_STAR__orig_val__90230 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__90231 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__90231);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__90230);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90574 = arguments.length;
var i__4865__auto___90575 = (0);
while(true){
if((i__4865__auto___90575 < len__4864__auto___90574)){
args__4870__auto__.push((arguments[i__4865__auto___90575]));

var G__90576 = (i__4865__auto___90575 + (1));
i__4865__auto___90575 = G__90576;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__90235 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__90236 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__90237 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__90238 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__90239 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__90240 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__90241 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__90242 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__90243 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__90244 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__90245 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__90246 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__90247 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__90248 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__90249 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__90250 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__90243);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__90244);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__90245);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__90246);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__90247);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__90248);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__90249);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__90250);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__90242);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__90241);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__90240);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__90239);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__90238);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__90237);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__90236);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__90235);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq90232){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq90232));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__90251 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__90252 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__90252);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__90251);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90577 = arguments.length;
var i__4865__auto___90578 = (0);
while(true){
if((i__4865__auto___90578 < len__4864__auto___90577)){
args__4870__auto__.push((arguments[i__4865__auto___90578]));

var G__90579 = (i__4865__auto___90578 + (1));
i__4865__auto___90578 = G__90579;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__90257 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__90258 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__90259 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__90260 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__90261 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__90262 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__90263 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__90264 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__90265 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__90266 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__90267 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__90268 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__90269 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__90270 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__90264);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__90265);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__90266);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__90267);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__90268);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__90269);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__90270);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__90263);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__90262);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__90261);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__90260);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__90259);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__90258);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__90257);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq90253){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq90253));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90581 = arguments.length;
var i__4865__auto___90582 = (0);
while(true){
if((i__4865__auto___90582 < len__4864__auto___90581)){
args__4870__auto__.push((arguments[i__4865__auto___90582]));

var G__90585 = (i__4865__auto___90582 + (1));
i__4865__auto___90582 = G__90585;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__90276 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__90277 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__90278 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__90279 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__90280 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__90281 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__90282 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__90283 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__90284 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__90285 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__90286 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__90287 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__90288 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__90289 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__90290 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__90291 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__90284);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__90285);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__90286);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__90287);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__90288);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__90289);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__90290);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__90291);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__90283);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__90282);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__90281);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__90280);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__90279);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__90278);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__90277);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__90276);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq90273){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq90273));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90591 = arguments.length;
var i__4865__auto___90592 = (0);
while(true){
if((i__4865__auto___90592 < len__4864__auto___90591)){
args__4870__auto__.push((arguments[i__4865__auto___90592]));

var G__90595 = (i__4865__auto___90592 + (1));
i__4865__auto___90592 = G__90595;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__90298 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__90299 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__90300 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__90301 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__90302 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__90303 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__90304 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__90305 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__90306 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__90307 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__90308 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__90309 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__90310 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__90311 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__90305);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__90306);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__90307);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__90308);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__90309);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__90310);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__90311);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__90304);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__90303);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__90302);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__90301);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__90300);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__90299);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__90298);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq90297){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq90297));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90598 = arguments.length;
var i__4865__auto___90599 = (0);
while(true){
if((i__4865__auto___90599 < len__4864__auto___90598)){
args__4870__auto__.push((arguments[i__4865__auto___90599]));

var G__90603 = (i__4865__auto___90599 + (1));
i__4865__auto___90599 = G__90603;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__90507 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__90508 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__90509 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__90510 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__90511 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__90512 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__90513 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__90514 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__90515 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__90516 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__90517 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__90518 = null;
var _STAR_print_newline_STAR__temp_val__90519 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__90520 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__90514);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__90515);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__90516);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__90517);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__90518);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__90519);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__90520);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__90513);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__90512);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__90511);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__90510);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__90509);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__90508);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__90507);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq90313){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq90313));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90621 = arguments.length;
var i__4865__auto___90622 = (0);
while(true){
if((i__4865__auto___90622 < len__4864__auto___90621)){
args__4870__auto__.push((arguments[i__4865__auto___90622]));

var G__90623 = (i__4865__auto___90622 + (1));
i__4865__auto___90622 = G__90623;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__90523 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__90524 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__90525 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__90526 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__90527 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__90528 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__90529 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__90530 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__90531 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__90532 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__90533 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__90534 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__90535 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__90536 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__90530);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__90531);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__90532);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__90533);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__90534);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__90535);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__90536);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__90529);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__90528);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__90527);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__90526);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__90525);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__90524);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__90523);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq90522){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq90522));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90644 = arguments.length;
var i__4865__auto___90645 = (0);
while(true){
if((i__4865__auto___90645 < len__4864__auto___90644)){
args__4870__auto__.push((arguments[i__4865__auto___90645]));

var G__90659 = (i__4865__auto___90645 + (1));
i__4865__auto___90645 = G__90659;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__90538 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__90539 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__90540 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__90541 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__90542 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__90543 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__90544 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__90545 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__90546 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__90547 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__90548 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__90549 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__90550 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__90551 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__90552 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__90553 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__90546);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__90547);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__90548);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__90549);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__90550);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__90551);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__90552);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__90553);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__90545);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__90544);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__90543);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__90542);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__90541);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__90540);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__90539);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__90538);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq90537){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq90537));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90743 = arguments.length;
var i__4865__auto___90747 = (0);
while(true){
if((i__4865__auto___90747 < len__4864__auto___90743)){
args__4870__auto__.push((arguments[i__4865__auto___90747]));

var G__90748 = (i__4865__auto___90747 + (1));
i__4865__auto___90747 = G__90748;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__90555__auto__","s__90555__auto__",509851770,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__90556__auto__","x__90556__auto__",1986710602,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__90555__auto__","s__90555__auto__",509851770,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__90556__auto__","x__90556__auto__",1986710602,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__90555__auto__","s__90555__auto__",509851770,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq90557){
var G__90558 = cljs.core.first(seq90557);
var seq90557__$1 = cljs.core.next(seq90557);
var G__90559 = cljs.core.first(seq90557__$1);
var seq90557__$2 = cljs.core.next(seq90557__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90558,G__90559,seq90557__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
