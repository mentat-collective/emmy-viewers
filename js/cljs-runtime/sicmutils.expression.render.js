goog.provide('sicmutils.expression.render');
sicmutils.expression.render.make_symbol_generator = (function sicmutils$expression$render$make_symbol_generator(p){
var i = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var suffix = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.inc).toString((16)).padStart((4),"0");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
})());
});
});
/**
 * Historical preference is to write `sin^2(x)` rather
 *     than `(sin(x))^2`.
 */
sicmutils.expression.render.rewrite_trig_powers = pattern.rule.choice.cljs$core$IFn$_invoke$arity$variadic(pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__102434){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__102435 = new cljs.core.Symbol(null,"f","f",43394975,null);
return (fexpr__102435.cljs$core$IFn$_invoke$arity$1 ? fexpr__102435.cljs$core$IFn$_invoke$arity$1(G__102434) : fexpr__102435.call(null,G__102434));
})(),(2)], null)),(function (){var fexpr__102436 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__102436.cljs$core$IFn$_invoke$arity$1 ? fexpr__102436.cljs$core$IFn$_invoke$arity$1(G__102434) : fexpr__102436.call(null,G__102434));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.return$(null)], 0));
/**
 * The simplifier returns sums of products; for negative summands the
 *   simplifier negates by wrapping with `(* -1 ...)`. For rendering, we prefer to
 *   use a unary minus.
 */
sicmutils.expression.render.rewrite_negation = pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__102437){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),(function (){var fexpr__102438 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__102438.cljs$core$IFn$_invoke$arity$1 ? fexpr__102438.cljs$core$IFn$_invoke$arity$1(G__102437) : fexpr__102438.call(null,G__102437));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__102444){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__102446 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__102446.cljs$core$IFn$_invoke$arity$1 ? fexpr__102446.cljs$core$IFn$_invoke$arity$1(G__102444) : fexpr__102446.call(null,G__102444));
})()))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0));
/**
 * renders a pair of the form `[numerator denominator]` as a infix ratio of the
 *   form `num/denom`.
 * 
 *   If the pair contains only one entry `x`, it's coerced to `[1 x]` (and treated
 *   as a denominator).
 */
sicmutils.expression.render.render_infix_ratio = (function sicmutils$expression$render$render_infix_ratio(p__102447){
var vec__102448 = p__102447;
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102448,(0),null);
var denom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102448,(1),null);
var xs = vec__102448;
var n = cljs.core.count(xs);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))) && (sicmutils.value.integral_QMARK_(num)))){
return ["1/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join('');
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(2))) && (((sicmutils.value.integral_QMARK_(num)) && (sicmutils.value.integral_QMARK_(denom)))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(denom)].join('');
} else {
return null;
}
}
});
/**
 * Base function for infix renderers. This is meant to be specialized via
 *   options for the treatment desired. Returns a rendering function. The options are:
 * 
 *   - `precedence-map`: a map from (symbol or keyword) to numbers. Higher numbers
 *  mean higher precedence. This guides parenthesization.
 *   - `juxtapose-multiply`: a string that will be placed between factors in a
 *  product. Defaults to `*`.
 *   - `infix?` A function mapping symbols to boolean, used to decide if a function
 *  application should be written as `x f y` or `f(x, y)`.
 *   - `render-primitive` is a function used to render symbols, numeric constants
 *  etc. into string form.
 *   - `parenthesize` is a function used to wrap parens around objects when
 *  needed. It defaults to the obvious thing.
 *   - `special-handlers` is a map from symbol to a function of operator and
 *  arguments, used to provide custom rendering for things like exponentiation
 *  which might not be rendered either as infix or prefix.
 *   - `rename-functions` is a map supplying replacement function names to be used
 *  just before the expression is written.
 */
sicmutils.expression.render.make_infix_renderer = (function sicmutils$expression$render$make_infix_renderer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___102801 = arguments.length;
var i__4865__auto___102802 = (0);
while(true){
if((i__4865__auto___102802 < len__4864__auto___102801)){
args__4870__auto__.push((arguments[i__4865__auto___102802]));

var G__102803 = (i__4865__auto___102802 + (1));
i__4865__auto___102802 = G__102803;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic = (function (p__102458){
var map__102459 = p__102458;
var map__102459__$1 = cljs.core.__destructure_map(map__102459);
var juxtapose_multiply = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102459__$1,new cljs.core.Keyword(null,"juxtapose-multiply","juxtapose-multiply",-1262547042)," * ");
var special_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102459__$1,new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),cljs.core.PersistentArrayMap.EMPTY);
var infix_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102459__$1,new cljs.core.Keyword(null,"infix?","infix?",41062120),cljs.core.PersistentArrayMap.EMPTY);
var render_primitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102459__$1,new cljs.core.Keyword(null,"render-primitive","render-primitive",-529994613));
var rename_functions = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102459__$1,new cljs.core.Keyword(null,"rename-functions","rename-functions",-358633973),cljs.core.PersistentArrayMap.EMPTY);
var parenthesize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102459__$1,new cljs.core.Keyword(null,"parenthesize","parenthesize",-1945667578),(function (p1__102452_SHARP_){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102452_SHARP_),")"].join('');
}));
var precedence_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102459__$1,new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799));
var rewrite_trig_squares = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102459__$1,new cljs.core.Keyword(null,"rewrite-trig-squares","rewrite-trig-squares",747917607),false);
var maybe_rewrite_negation = (function sicmutils$expression$render$maybe_rewrite_negation(loc){
var result = (function (){var G__102546 = clojure.zip.node(loc);
return (sicmutils.expression.render.rewrite_negation.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.rewrite_negation.cljs$core$IFn$_invoke$arity$1(G__102546) : sicmutils.expression.render.rewrite_negation.call(null,G__102546));
})();
if((loc === result)){
return loc;
} else {
return clojure.zip.replace(loc,result);
}
});
var render_unary_node = (function sicmutils$expression$render$render_unary_node(op,args){
var a = cljs.core.first(args);
var G__102547 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"+","+",-740910886,null),G__102547)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*","*",345799209,null),G__102547)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"u-","u-",1997472866,null),G__102547)){
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"/","/",-1371932971,null),G__102547)){
if(sicmutils.value.integral_QMARK_(a)){
return ["1/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('');
} else {
return ["1 / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('');
}
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('');

}
}
}
}
});
var precedence = (function sicmutils$expression$render$precedence(op){
while(true){
var or__4253__auto__ = (precedence_map.cljs$core$IFn$_invoke$arity$1 ? precedence_map.cljs$core$IFn$_invoke$arity$1(op) : precedence_map.call(null,op));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.seq_QMARK_(op)){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(op))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.first(op))))){
var G__102806 = cljs.core.second(op);
op = G__102806;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"partial","partial",1881673272,null),cljs.core.first(op))){
var G__102549 = new cljs.core.Symbol(null,"D","D",1632515634,null);
return (precedence_map.cljs$core$IFn$_invoke$arity$1 ? precedence_map.cljs$core$IFn$_invoke$arity$1(G__102549) : precedence_map.call(null,G__102549));
} else {
return (precedence_map.cljs$core$IFn$_invoke$arity$1 ? precedence_map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"apply","apply",1320385493)) : precedence_map.call(null,new cljs.core.Keyword(null,"apply","apply",1320385493)));

}
}
} else {
if((op instanceof cljs.core.Symbol)){
return (precedence_map.cljs$core$IFn$_invoke$arity$1 ? precedence_map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"apply","apply",1320385493)) : precedence_map.call(null,new cljs.core.Keyword(null,"apply","apply",1320385493)));
} else {
return (0);

}
}
}
break;
}
});
var maybe_rename_function = (function sicmutils$expression$render$maybe_rename_function(f){
var or__4253__auto__ = (rename_functions.cljs$core$IFn$_invoke$arity$1 ? rename_functions.cljs$core$IFn$_invoke$arity$1(f) : rename_functions.call(null,f));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return f;
}
});
var render_loc = (function sicmutils$expression$render$render_loc(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
var fn_loc = clojure.zip.next(maybe_rewrite_trig_squares(maybe_rewrite_negation(loc)));
var arg_loc = (function (){var a = clojure.zip.right(fn_loc);
while(true){
var a_SINGLEQUOTE_ = clojure.zip.replace(a,sicmutils$expression$render$render_loc(a));
var temp__5751__auto__ = clojure.zip.right(a_SINGLEQUOTE_);
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
var G__102828 = r;
a = G__102828;
continue;
} else {
return clojure.zip.up(a_SINGLEQUOTE_);
}
break;
}
})();
var vec__102550 = clojure.zip.node(arg_loc);
var seq__102551 = cljs.core.seq(vec__102550);
var first__102552 = cljs.core.first(seq__102551);
var seq__102551__$1 = cljs.core.next(seq__102551);
var op = first__102552;
var args = seq__102551__$1;
var upper_op = (function (){var and__4251__auto__ = clojure.zip.up(arg_loc);
if(cljs.core.truth_(and__4251__auto__)){
return clojure.zip.node(clojure.zip.leftmost(arg_loc));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((infix_QMARK_.cljs$core$IFn$_invoke$arity$1 ? infix_QMARK_.cljs$core$IFn$_invoke$arity$1(op) : infix_QMARK_.call(null,op)))){
return parenthesize_if((function (){var and__4251__auto__ = (infix_QMARK_.cljs$core$IFn$_invoke$arity$1 ? infix_QMARK_.cljs$core$IFn$_invoke$arity$1(upper_op) : infix_QMARK_.call(null,upper_op));
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = precedence_LT__EQ_(op,upper_op);
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not((function (){var or__4253__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Symbol(null,"*","*",345799209,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(upper_op,new cljs.core.Symbol(null,"u-","u-",1997472866,null))));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return ratio_expr_QMARK_(op,args);
}
})());
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})(),(function (){var or__4253__auto__ = (function (){var and__4251__auto__ = (special_handlers.cljs$core$IFn$_invoke$arity$1 ? special_handlers.cljs$core$IFn$_invoke$arity$1(op) : special_handlers.call(null,op));
if(cljs.core.truth_(and__4251__auto__)){
var fexpr__102555 = (special_handlers.cljs$core$IFn$_invoke$arity$1 ? special_handlers.cljs$core$IFn$_invoke$arity$1(op) : special_handlers.call(null,op));
return (fexpr__102555.cljs$core$IFn$_invoke$arity$1 ? fexpr__102555.cljs$core$IFn$_invoke$arity$1(args) : fexpr__102555.call(null,args));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1));
if(and__4251__auto__){
return render_unary_node(op,args);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var sep = (function (){var G__102558 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*","*",345799209,null),G__102558)){
var or__4253__auto____$2 = juxtapose_multiply;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return " * ";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expt","expt",2123850345,null),G__102558)){
return "^";
} else {
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," "].join('');

}
}
})();
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__102560_102829 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__102561_102830 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__102562_102831 = true;
var _STAR_print_fn_STAR__temp_val__102563_102832 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__102562_102831);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__102563_102832);

try{var a_102833 = args;
while(true){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(a_102833))], 0));

var temp__5753__auto___102834 = cljs.core.next(a_102833);
if(temp__5753__auto___102834){
var a_SINGLEQUOTE__102835 = temp__5753__auto___102834;
if((!(((typeof cljs.core.first(a_SINGLEQUOTE__102835) === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.first(a_SINGLEQUOTE__102835)),"-")))))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sep], 0));
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" "], 0));
}

var G__102836 = a_SINGLEQUOTE__102835;
a_102833 = G__102836;
continue;
} else {
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__102561_102830);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__102560_102829);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
}
}
})());
} else {
return parenthesize_if((function (){var and__4251__auto__ = upper_op;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = (infix_QMARK_.cljs$core$IFn$_invoke$arity$1 ? infix_QMARK_.cljs$core$IFn$_invoke$arity$1(upper_op) : infix_QMARK_.call(null,upper_op));
if(cljs.core.truth_(and__4251__auto____$1)){
return precedence_LT__EQ_(op,upper_op);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})(),(function (){var or__4253__auto__ = (function (){var and__4251__auto__ = (special_handlers.cljs$core$IFn$_invoke$arity$1 ? special_handlers.cljs$core$IFn$_invoke$arity$1(op) : special_handlers.call(null,op));
if(cljs.core.truth_(and__4251__auto__)){
var fexpr__102567 = (special_handlers.cljs$core$IFn$_invoke$arity$1 ? special_handlers.cljs$core$IFn$_invoke$arity$1(op) : special_handlers.call(null,op));
return (fexpr__102567.cljs$core$IFn$_invoke$arity$1 ? fexpr__102567.cljs$core$IFn$_invoke$arity$1(args) : fexpr__102567.call(null,args));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parenthesize_if((function (){var and__4251__auto__ = clojure.zip.branch_QMARK_(fn_loc);
if(cljs.core.truth_(and__4251__auto__)){
return precedence_GT_(new cljs.core.Keyword(null,"apply","apply",1320385493),clojure.zip.node(clojure.zip.next(fn_loc)));
} else {
return and__4251__auto__;
}
})(),maybe_rename_function(sicmutils$expression$render$render_loc(clojure.zip.next(arg_loc))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(parenthesize_if((function (){var or__4253__auto____$1 = precedence_LT__EQ_(op,new cljs.core.Keyword(null,"apply","apply",1320385493));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (cljs.core.count(args) > (1));
if(or__4253__auto____$2){
return or__4253__auto____$2;
} else {
return clojure.zip.branch_QMARK_(clojure.zip.right(fn_loc));
}
}
})(),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",args)))].join('');
}
})());
}
} else {
var n = clojure.zip.node(loc);
var or__4253__auto__ = (function (){var and__4251__auto__ = render_primitive;
if(cljs.core.truth_(and__4251__auto__)){
return (render_primitive.cljs$core$IFn$_invoke$arity$1 ? render_primitive.cljs$core$IFn$_invoke$arity$1(n) : render_primitive.call(null,n));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return n;
}
}
});
var parenthesize_if = (function sicmutils$expression$render$parenthesize_if(b,x){
if(cljs.core.truth_(b)){
return (parenthesize.cljs$core$IFn$_invoke$arity$1 ? parenthesize.cljs$core$IFn$_invoke$arity$1(x) : parenthesize.call(null,x));
} else {
return x;
}
});
var precedence_LT__EQ_ = (function sicmutils$expression$render$precedence_LT__EQ_(a,b){
return cljs.core.not(precedence_GT_(a,b));
});
var maybe_rewrite_trig_squares = (function sicmutils$expression$render$maybe_rewrite_trig_squares(loc){
var temp__5751__auto__ = (function (){var and__4251__auto__ = rewrite_trig_squares;
if(cljs.core.truth_(and__4251__auto__)){
return sicmutils.expression.render.rewrite_trig_powers(clojure.zip.node(loc));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var result = temp__5751__auto__;
return clojure.zip.replace(loc,result);
} else {
return loc;
}
});
var ratio_expr_QMARK_ = (function sicmutils$expression$render$ratio_expr_QMARK_(op,p__102570){
var vec__102571 = p__102570;
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102571,(0),null);
var denom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102571,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"/","/",-1371932971,null),op)) && (((sicmutils.value.integral_QMARK_(num)) && ((((denom == null)) || (sicmutils.value.integral_QMARK_(denom)))))));
});
var precedence_GT_ = (function sicmutils$expression$render$precedence_GT_(a,b){
return (precedence(a) > precedence(b));
});
return (function (expr){
var result = render_loc(clojure.zip.seq_zip(sicmutils.value.freeze(expr)));
if(typeof result === 'string'){
return result;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(result);
}
});
}));

(sicmutils.expression.render.make_infix_renderer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.expression.render.make_infix_renderer.cljs$lang$applyTo = (function (seq102457){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq102457));
}));

sicmutils.expression.render.decimal_superscripts = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2070","\u00B9","\u00B2","\u00B3","\u2074","\u2075","\u2076","\u2077","\u2078","\u2079"], null);
sicmutils.expression.render.decimal_subscripts = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2080","\u2081","\u2082","\u2083","\u2084","\u2085","\u2086","\u2087","\u2088","\u2089"], null);
sicmutils.expression.render.subscript_pattern = /(.+)_([0-9a-zA-ZϖγηΦνΩδυσιΔρϵωϱςψΠπϑΞκφχζΨτΓΛΘΥμθαℓβΣξλφε]+)$/;
sicmutils.expression.render.superscript_pattern = /(.+)↑([0-9a-zA-ZϖγηΦνΩδυσιΔρϵωϱςψΠπϑΞκφχζΨτΓΛΘΥμθαℓβΣξλφε]+)$/;
/**
 * Greek letter names we want to recognize that aren't supported by
 *   TeX, mapped to their unicode characters.
 */
sicmutils.expression.render.non_TeX_greek = cljs.core.PersistentHashMap.fromArrays(["Epsilon","Mu","Iota","omicron","Omicron","Eta","Zeta","Alpha","Rho","Chi","Nu","Tau","Kappa","Beta"],["\u0395","\u039C","\u0399","\u03BF","O","\u0397","\u0396","\u0391","\u03A1","\u03A7","\u039D","\u03A4","\u039A","\u0392"]);
/**
 * Mapping of TeX-supported characters (Greek letter names and a few
 *   others) to their corresponding unicode characters.
 */
sicmutils.expression.render.sym__GT_unicode = cljs.core.PersistentHashMap.fromArrays(["ldots","varpi","gamma","eta","Phi","nu","Omega","delta","upsilon","sigma","iota","Delta","rho","varepsilon","omega","varrho","varsigma","psi","Pi","pi","vartheta","Xi","kappa","varphi","chi","zeta","Psi","tau","Gamma","Lambda","Theta","Upsilon","mu","theta","alpha","ell","beta","Sigma","xi","lambda","phi","epsilon"],["...","\u03D6","\u03B3","\u03B7","\u03A6","\u03BD","\u03A9","\u03B4","\u03C5","\u03C3","\u03B9","\u0394","\u03C1","\u03F5","\u03C9","\u03F1","\u03C2","\u03C8","\u03A0","\u03C0","\u03D1","\u039E","\u03BA","\u03C6","\u03C7","\u03B6","\u03A8","\u03C4","\u0393","\u039B","\u0398","\u03A5","\u03BC","\u03B8","\u03B1","\u2113","\u03B2","\u03A3","\u03BE","\u03BB","\u03C6","\u03B5"]);
/**
 * Map of of TeX-compatible greek letter names to their \-prefixed
 *   LaTeX code versions. alpha -> \alpha, for example.
 */
sicmutils.expression.render.TeX_letters = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__102581){
var vec__102582 = p__102581;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102582,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null);
})),sicmutils.expression.render.sym__GT_unicode);
/**
 * Full mapping of special-cased TeX symbols to their TeX codes. This
 *   includes all greek letters in both english ('alpha') and unicode ('α')
 *   versions, plus a few more special-cased symbols.
 */
sicmutils.expression.render.TeX_map = (function (){var sym__GT_tex = sicmutils.util.map_vals((function (p1__102585_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102585_SHARP_)].join('');
}),clojure.set.map_invert(sicmutils.expression.render.sym__GT_unicode));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.expression.render.TeX_letters,sym__GT_tex,cljs.core.PersistentHashMap.fromArrays(["cosh","csc","cot","atan","sin","_","tan","cos","sinh","sec","asin","tanh","acos"],["\\sinh","\\csc","\\cot","\\arctan","\\sin","\\_","\\tan","\\cos","\\sinh","\\sec","\\arcsin","\\sinh","\\arccos"])], 0));
})();
sicmutils.expression.render.digit__GT_int = (function sicmutils$expression$render$digit__GT_int(d){
return parseInt(d);
});
/**
 * Given an integer, returns a string where each digit of the
 *   integer is used as the index into the replacement map scripts,
 *   which is expected to be indexable by integers in the range [0..9].
 */
sicmutils.expression.render.n__GT_script = (function sicmutils$expression$render$n__GT_script(n,scripts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__102589_SHARP_){
var G__102590 = sicmutils.expression.render.digit__GT_int(p1__102589_SHARP_);
return (scripts.cljs$core$IFn$_invoke$arity$1 ? scripts.cljs$core$IFn$_invoke$arity$1(G__102590) : scripts.call(null,G__102590));
}),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
sicmutils.expression.render.n__GT_subscript = (function sicmutils$expression$render$n__GT_subscript(p1__102591_SHARP_){
return sicmutils.expression.render.n__GT_script(p1__102591_SHARP_,sicmutils.expression.render.decimal_subscripts);
});
sicmutils.expression.render.n__GT_superscript = (function sicmutils$expression$render$n__GT_superscript(p1__102592_SHARP_){
return sicmutils.expression.render.n__GT_script(p1__102592_SHARP_,sicmutils.expression.render.decimal_superscripts);
});
sicmutils.expression.render.infix_sym__GT_unicode = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.expression.render.non_TeX_greek,sicmutils.expression.render.sym__GT_unicode], 0));
/**
 * Given some infinite value, returns a string representation of ##Inf or ##-Inf
 *   appropriate for infix rendering, else returns `nil`.
 */
sicmutils.expression.render.infinity__GT_infix = (function sicmutils$expression$render$infinity__GT_infix(x){
var G__102594 = x;
switch (G__102594) {
case Infinity:
return "\u221E";

break;
case -Infinity:
return "-\u221E";

break;
default:
return null;

}
});
/**
 * Converts an S-expression to printable infix form. Numeric exponents
 *   are written as superscripts. Partial derivatives get subscripts.
 */
sicmutils.expression.render.__GT_infix = sicmutils.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"u-","u-",1997472866,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"D","D",1632515634,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null)],[(6),(3),(3),(3),(5),(8),(3),(4),(1),(9),(4),(5),(7),(3),(9),(4),(5),(2),(5)]),new cljs.core.Keyword(null,"infix?","infix?",41062120),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),"null",new cljs.core.Symbol(null,"=","=",-1501502141,null),"null",new cljs.core.Symbol(null,"<","<",993667236,null),"null",new cljs.core.Symbol(null,"<=","<=",1244895369,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,"expt","expt",2123850345,null),"null",new cljs.core.Symbol(null,">",">",1085014381,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,">=",">=",1016916022,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null",new cljs.core.Symbol(null,"modulo","modulo",725580254,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),"null"], null), null),new cljs.core.Keyword(null,"juxtapose-multiply","juxtapose-multiply",-1262547042)," ",new cljs.core.Keyword(null,"rewrite-trig-squares","rewrite-trig-squares",747917607),true,new cljs.core.Keyword(null,"rename-functions","rename-functions",-358633973),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),"frac",new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),"int",new cljs.core.Symbol(null,"not","not",1044554643,null),"\u00AC"], null),new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"or","or",1876275696,null)],[(function (p__102598){
var vec__102600 = p__102598;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102600,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102600,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," % ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
}),(function (p__102603){
var vec__102604 = p__102603;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102604,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102604,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," \u2227 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
}),(function (p__102609){
var vec__102610 = p__102609;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102610,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102610,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," mod ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
}),sicmutils.expression.render.render_infix_ratio,(function (p__102613){
var vec__102614 = p__102613;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102614,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102614,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.integer_QMARK_(e);
if(and__4251__auto__){
return cljs.core.complement(cljs.core.neg_QMARK_)(e);
} else {
return and__4251__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.n__GT_superscript(e))].join('');
} else {
return null;
}
}),(function (p__102617){
var vec__102618 = p__102617;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102618,(0),null);
return ["\u230A",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\u230B"].join('');
}),(function (ds){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ds),(1))) && (cljs.core.integer_QMARK_(cljs.core.first(ds))))){
return ["\u2202",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.n__GT_subscript(cljs.core.first(ds)))].join('');
} else {
return null;
}
}),(function (p__102621){
var vec__102622 = p__102621;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102622,(0),null);
return ["\u2308",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\u2309"].join('');
}),(function (p__102625){
var vec__102626 = p__102625;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102626,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102626,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," \u2228 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
})]),new cljs.core.Keyword(null,"render-primitive","render-primitive",-529994613),(function sicmutils$expression$render$r(v){
var or__4253__auto__ = sicmutils.expression.render.infinity__GT_infix(v);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
var or__4253__auto____$1 = (sicmutils.expression.render.infix_sym__GT_unicode.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.infix_sym__GT_unicode.cljs$core$IFn$_invoke$arity$1(s) : sicmutils.expression.render.infix_sym__GT_unicode.call(null,s));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var pred__102629 = cljs.core.re_find;
var expr__102630 = s;
var temp__5751__auto__ = (pred__102629.cljs$core$IFn$_invoke$arity$2 ? pred__102629.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.superscript_pattern,expr__102630) : pred__102629.call(null,sicmutils.expression.render.superscript_pattern,expr__102630));
if(cljs.core.truth_(temp__5751__auto__)){
var p__4614__auto__ = temp__5751__auto__;
return (function (p__102633){
var vec__102635 = p__102633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102635,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102635,(1),null);
var superscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102635,(2),null);
var temp__5751__auto____$1 = cljs.core.re_matches(/[0-9]+/,superscript);
if(cljs.core.truth_(temp__5751__auto____$1)){
var n = temp__5751__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils$expression$render$r(stem)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.n__GT_superscript(n))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils$expression$render$r(stem)),"\u2191",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils$expression$render$r(superscript))].join('');
}
})(p__4614__auto__);
} else {
var temp__5751__auto____$1 = (pred__102629.cljs$core$IFn$_invoke$arity$2 ? pred__102629.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.subscript_pattern,expr__102630) : pred__102629.call(null,sicmutils.expression.render.subscript_pattern,expr__102630));
if(cljs.core.truth_(temp__5751__auto____$1)){
var p__4614__auto__ = temp__5751__auto____$1;
return (function (p__102638){
var vec__102639 = p__102638;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102639,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102639,(1),null);
var subscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102639,(2),null);
var temp__5751__auto____$2 = cljs.core.re_matches(/[0-9]+/,subscript);
if(cljs.core.truth_(temp__5751__auto____$2)){
var n = temp__5751__auto____$2;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils$expression$render$r(stem)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.n__GT_subscript(n))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils$expression$render$r(stem)),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils$expression$render$r(subscript))].join('');
}
})(p__4614__auto__);
} else {
return v;
}
}
}
}
})], 0));
/**
 * Wrap the argument, as a string, in braces
 */
sicmutils.expression.render.brace = (function sicmutils$expression$render$brace(s){
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"}"].join('');
});
/**
 * Wrap the argument in braces, as a string, unless it's just a single character
 */
sicmutils.expression.render.maybe_brace = (function sicmutils$expression$render$maybe_brace(s){
if(((typeof s === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),(1))))){
return s;
} else {
return sicmutils.expression.render.brace(s);
}
});
/**
 * Given some infinite value, returns a (string) representation of the LaTeX
 *   commands required to render ##Inf or ##-Inf.
 * 
 *   Returns `nil` for all other inputs.
 */
sicmutils.expression.render.infinity__GT_tex = (function sicmutils$expression$render$infinity__GT_tex(x){
var G__102643 = x;
switch (G__102643) {
case Infinity:
return "\\infty";

break;
case -Infinity:
return "-\\infty";

break;
default:
return null;

}
});
/**
 * If true, [[->TeX]] will render down tuples as vertical matrices
 *   with square braces. Defaults to false.
 */
sicmutils.expression.render._STAR_TeX_vertical_down_tuples_STAR_ = false;
/**
 * If true, [[->TeX]] will render symbols with more than 1 character
 *   using a sans-serif typestyle via `\mathsf`. Defaults to true.
 */
sicmutils.expression.render._STAR_TeX_sans_serif_symbols_STAR_ = true;
sicmutils.expression.render.displaystyle = (function sicmutils$expression$render$displaystyle(s){
return ["\\displaystyle{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"}"].join('');
});
sicmutils.expression.render.__GT_TeX_STAR_ = (function (){var TeX_accent = (function (accent){
return (function (p__102656){
var vec__102657 = p__102656;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102657,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102657,(1),null);
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(accent)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace((sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1(stem) : sicmutils.expression.render.__GT_TeX_STAR_.call(null,stem))))].join('');
});
});
var dot = TeX_accent("dot");
var ddot = TeX_accent("ddot");
var hat = TeX_accent("hat");
var bar = TeX_accent("bar");
var vec = TeX_accent("vec");
var tilde = TeX_accent("tilde");
var prime = (function (p__102662){
var vec__102663 = p__102662;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102663,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102663,(1),null);
var x = sicmutils.expression.render.maybe_brace((sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1(stem) : sicmutils.expression.render.__GT_TeX_STAR_.call(null,stem)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"^\\prime"].join('');
});
var primeprime = (function (p__102666){
var vec__102667 = p__102666;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102667,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102667,(1),null);
var x = sicmutils.expression.render.maybe_brace((sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1(stem) : sicmutils.expression.render.__GT_TeX_STAR_.call(null,stem)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"^{\\prime\\prime}"].join('');
});
var parenthesize = (function (p1__102648_SHARP_){
return ["\\left(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102648_SHARP_),"\\right)"].join('');
});
return sicmutils.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"u-","u-",1997472866,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"D","D",1632515634,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null)],[(6),(3),(3),(3),(5),(8),(3),(4),(1),(9),(1),(0),(7),(3),(9),(4),(5),(2),(5)]),new cljs.core.Keyword(null,"parenthesize","parenthesize",-1945667578),parenthesize,new cljs.core.Keyword(null,"infix?","infix?",41062120),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),"null",new cljs.core.Symbol(null,"=","=",-1501502141,null),"null",new cljs.core.Symbol(null,"<","<",993667236,null),"null",new cljs.core.Symbol(null,"<=","<=",1244895369,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,"expt","expt",2123850345,null),"null",new cljs.core.Symbol(null,">",">",1085014381,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,">=",">=",1016916022,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null",new cljs.core.Symbol(null,"modulo","modulo",725580254,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),"null"], null), null),new cljs.core.Keyword(null,"juxtapose-multiply","juxtapose-multiply",-1262547042),"\\,",new cljs.core.Keyword(null,"rewrite-trig-squares","rewrite-trig-squares",747917607),true,new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"down","down",-1089190199,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"or","or",1876275696,null)],[(function (p__102670){
var vec__102671 = p__102670;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102671,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102671,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(x))," \\mathbin{\\%} ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(y))].join('');
}),(function (p__102675){
var vec__102676 = p__102675;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102676,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102676,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," \\land ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
}),(function (x){
var body = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \\cr \\cr ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.displaystyle,x));
return ["\\begin{pmatrix}",body,"\\end{pmatrix}"].join('');
}),(function (p1__102653_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \\geq ",p1__102653_SHARP_);
}),(function (p__102679){
var vec__102680 = p__102679;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102680,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102680,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(x))," \\bmod ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(y))].join('');
}),(function (xs){
var n = cljs.core.count(xs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return ["\\frac",sicmutils.expression.render.brace((1)),sicmutils.expression.render.brace(cljs.core.first(xs))].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(2))){
return ["\\frac",sicmutils.expression.render.brace(cljs.core.first(xs)),sicmutils.expression.render.brace(cljs.core.second(xs))].join('');
} else {
return null;
}
}
}),(function (p__102683){
var vec__102684 = p__102683;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102684,(0),null);
return ["\\lnot",parenthesize(x)].join('');
}),(function (p1__102652_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \\leq ",p1__102652_SHARP_);
}),(function (p__102687){
var vec__102688 = p__102687;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102688,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102688,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(x)),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(e))].join('');
}),(function (p__102691){
var vec__102692 = p__102691;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102692,(0),null);
return ["\\mathsf{frac} ",parenthesize(x)].join('');
}),(function (p__102695){
var vec__102696 = p__102695;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102696,(0),null);
return ["\\left\\lfloor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," \\right\\rfloor"].join('');
}),(function (ds){
return ["\\partial_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",ds)))].join('');
}),(function (p__102699){
var vec__102700 = p__102699;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102700,(0),null);
return ["\\left\\lceil ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," \\right\\rceil"].join('');
}),(function (x){
var sep = (cljs.core.truth_(sicmutils.expression.render._STAR_TeX_vertical_down_tuples_STAR_)?" \\cr \\cr ":"&");
var body = clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.displaystyle,x));
return ["\\begin{bmatrix}",body,"\\end{bmatrix}"].join('');
}),(function (p1__102651_SHARP_){
return ["\\sqrt ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(cljs.core.first(p1__102651_SHARP_)))].join('');
}),(function (p__102703){
var vec__102704 = p__102703;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102704,(0),null);
return ["\\exp",parenthesize(e)].join('');
}),(function (p__102707){
var vec__102708 = p__102707;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102708,(0),null);
return ["\\mathsf{int} ",parenthesize(x)].join('');
}),(function (p__102711){
var vec__102712 = p__102711;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102712,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102712,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," \\lor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
})]),new cljs.core.Keyword(null,"render-primitive","render-primitive",-529994613),(function sicmutils$expression$render$r(v){
if(sicmutils.ratio.ratio_QMARK_(v)){
return ["\\frac",sicmutils.expression.render.brace(sicmutils.ratio.numerator(v)),sicmutils.expression.render.brace(sicmutils.ratio.denominator(v))].join('');
} else {
var or__4253__auto__ = sicmutils.expression.render.infinity__GT_tex(v);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
var or__4253__auto____$1 = (sicmutils.expression.render.TeX_map.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.TeX_map.cljs$core$IFn$_invoke$arity$1(s) : sicmutils.expression.render.TeX_map.call(null,s));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var pred__102715 = cljs.core.re_find;
var expr__102716 = s;
var temp__5751__auto__ = (pred__102715.cljs$core$IFn$_invoke$arity$2 ? pred__102715.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.superscript_pattern,expr__102716) : pred__102715.call(null,sicmutils.expression.render.superscript_pattern,expr__102716));
if(cljs.core.truth_(temp__5751__auto__)){
var p__4614__auto__ = temp__5751__auto__;
return (function (p__102718){
var vec__102719 = p__102718;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102719,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102719,(1),null);
var superscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102719,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(sicmutils$expression$render$r(stem))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(sicmutils$expression$render$r(superscript)))].join('');
})(p__4614__auto__);
} else {
var temp__5751__auto____$1 = (pred__102715.cljs$core$IFn$_invoke$arity$2 ? pred__102715.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.subscript_pattern,expr__102716) : pred__102715.call(null,sicmutils.expression.render.subscript_pattern,expr__102716));
if(cljs.core.truth_(temp__5751__auto____$1)){
var p__4614__auto__ = temp__5751__auto____$1;
return (function (p__102722){
var vec__102723 = p__102722;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102723,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102723,(1),null);
var subscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102723,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(sicmutils$expression$render$r(stem))),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(sicmutils$expression$render$r(subscript)))].join('');
})(p__4614__auto__);
} else {
var temp__5751__auto____$2 = (function (){var G__102726 = /(.+)dotdot$/;
var G__102727 = expr__102716;
return (pred__102715.cljs$core$IFn$_invoke$arity$2 ? pred__102715.cljs$core$IFn$_invoke$arity$2(G__102726,G__102727) : pred__102715.call(null,G__102726,G__102727));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var p__4614__auto__ = temp__5751__auto____$2;
return ddot(p__4614__auto__);
} else {
var temp__5751__auto____$3 = (function (){var G__102728 = /(.+)dot$/;
var G__102729 = expr__102716;
return (pred__102715.cljs$core$IFn$_invoke$arity$2 ? pred__102715.cljs$core$IFn$_invoke$arity$2(G__102728,G__102729) : pred__102715.call(null,G__102728,G__102729));
})();
if(cljs.core.truth_(temp__5751__auto____$3)){
var p__4614__auto__ = temp__5751__auto____$3;
return dot(p__4614__auto__);
} else {
var temp__5751__auto____$4 = (function (){var G__102730 = /(.+)hat$/;
var G__102731 = expr__102716;
return (pred__102715.cljs$core$IFn$_invoke$arity$2 ? pred__102715.cljs$core$IFn$_invoke$arity$2(G__102730,G__102731) : pred__102715.call(null,G__102730,G__102731));
})();
if(cljs.core.truth_(temp__5751__auto____$4)){
var p__4614__auto__ = temp__5751__auto____$4;
return hat(p__4614__auto__);
} else {
var temp__5751__auto____$5 = (function (){var G__102732 = /(.+)primeprime$/;
var G__102733 = expr__102716;
return (pred__102715.cljs$core$IFn$_invoke$arity$2 ? pred__102715.cljs$core$IFn$_invoke$arity$2(G__102732,G__102733) : pred__102715.call(null,G__102732,G__102733));
})();
if(cljs.core.truth_(temp__5751__auto____$5)){
var p__4614__auto__ = temp__5751__auto____$5;
return primeprime(p__4614__auto__);
} else {
var temp__5751__auto____$6 = (function (){var G__102734 = /(.+)prime$/;
var G__102735 = expr__102716;
return (pred__102715.cljs$core$IFn$_invoke$arity$2 ? pred__102715.cljs$core$IFn$_invoke$arity$2(G__102734,G__102735) : pred__102715.call(null,G__102734,G__102735));
})();
if(cljs.core.truth_(temp__5751__auto____$6)){
var p__4614__auto__ = temp__5751__auto____$6;
return prime(p__4614__auto__);
} else {
var temp__5751__auto____$7 = (function (){var G__102736 = /(.+)bar$/;
var G__102737 = expr__102716;
return (pred__102715.cljs$core$IFn$_invoke$arity$2 ? pred__102715.cljs$core$IFn$_invoke$arity$2(G__102736,G__102737) : pred__102715.call(null,G__102736,G__102737));
})();
if(cljs.core.truth_(temp__5751__auto____$7)){
var p__4614__auto__ = temp__5751__auto____$7;
return bar(p__4614__auto__);
} else {
var temp__5751__auto____$8 = (function (){var G__102738 = /(.+)vec$/;
var G__102739 = expr__102716;
return (pred__102715.cljs$core$IFn$_invoke$arity$2 ? pred__102715.cljs$core$IFn$_invoke$arity$2(G__102738,G__102739) : pred__102715.call(null,G__102738,G__102739));
})();
if(cljs.core.truth_(temp__5751__auto____$8)){
var p__4614__auto__ = temp__5751__auto____$8;
return vec(p__4614__auto__);
} else {
var temp__5751__auto____$9 = (function (){var G__102740 = /(.+)tilde$/;
var G__102741 = expr__102716;
return (pred__102715.cljs$core$IFn$_invoke$arity$2 ? pred__102715.cljs$core$IFn$_invoke$arity$2(G__102740,G__102741) : pred__102715.call(null,G__102740,G__102741));
})();
if(cljs.core.truth_(temp__5751__auto____$9)){
var p__4614__auto__ = temp__5751__auto____$9;
return tilde(p__4614__auto__);
} else {
if((((v instanceof cljs.core.Symbol)) && ((((((s).length) > (1))) && (cljs.core.not(cljs.core.re_matches(/^d[a-zαωθφ]/,s))))))){
if(cljs.core.truth_(sicmutils.expression.render._STAR_TeX_sans_serif_symbols_STAR_)){
return ["\\mathsf",sicmutils.expression.render.brace(s)].join('');
} else {
return sicmutils.expression.render.brace(s);
}
} else {
return v;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})], 0));
})();
/**
 * Convert the given expression to TeX format, as a string.
 * 
 *   If you set the `:equation` keyword argument to a truthy value, the result will
 *   be wrapped in an equation environment. `:equation <string>` will insert a
 *   `\label{<string>}` entry inside the equation environment.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [expr (+ 'x 'xy)]
 *  (println
 *    (->TeX expr :equation "label!")))
 * 
 *   \begin{equation}
 *   \label{label!}
 *   x + y
 *   \end{equation}
 *   ```
 *   
 */
sicmutils.expression.render.__GT_TeX = (function sicmutils$expression$render$__GT_TeX(var_args){
var args__4870__auto__ = [];
var len__4864__auto___102862 = arguments.length;
var i__4865__auto___102863 = (0);
while(true){
if((i__4865__auto___102863 < len__4864__auto___102862)){
args__4870__auto__.push((arguments[i__4865__auto___102863]));

var G__102864 = (i__4865__auto___102863 + (1));
i__4865__auto___102863 = G__102864;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.expression.render.__GT_TeX.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.expression.render.__GT_TeX.cljs$core$IFn$_invoke$arity$variadic = (function (expr,p__102744){
var map__102745 = p__102744;
var map__102745__$1 = cljs.core.__destructure_map(map__102745);
var equation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102745__$1,new cljs.core.Keyword(null,"equation","equation",-499527745));
var tex_string = (sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1(expr) : sicmutils.expression.render.__GT_TeX_STAR_.call(null,expr));
if(cljs.core.truth_(equation)){
var label = ((((typeof equation === 'string') && (cljs.core.seq(equation))))?["\\label{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(equation),"}\n"].join(''):"");
return ["\\begin{equation}\n",label,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tex_string),"\n\\end{equation}"].join('');
} else {
return tex_string;
}
}));

(sicmutils.expression.render.__GT_TeX.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.expression.render.__GT_TeX.cljs$lang$applyTo = (function (seq102742){
var G__102743 = cljs.core.first(seq102742);
var seq102742__$1 = cljs.core.next(seq102742);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__102743,seq102742__$1);
}));

/**
 * Convert the given expression to a string representation of a
 *   JavaScript function.
 * 
 *   Parameters to the function will be extracted from the symbols in the expression.
 *   Common subexpression elimination will be performed and auxiliary variables
 *   will be bound in the body of the function; the names of these symbols are
 *   obtained from the nullary function option :symbol-generator, which defaults to
 *   a function yielding `_1, ...`.
 * 
 *   If `:parameter-order` is specified, it is used to determine function parameter
 *   order in one of two ways:
 * 
 *   If it is set to a function, that function will be called on the sequence of
 *   parameters and is expected to return the parameters in the desired sequence.
 * 
 *   Otherwise, it is interpreted as the sequence of parameters itself. If not
 *   specified, the default behavior is `sort`.
 * 
 *   If `:deterministic? true` is supplied, the function will assign variables by
 *   sorting the string representations of each term before assignment. Otherwise,
 *   the nondeterministic order of hash maps inside this function won't guarantee a
 *   consistent variable naming convention in the returned function. For tests, set
 *   `:deterministic? true`.
 */
sicmutils.expression.render.__GT_JavaScript = (function (){var operators_known = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 23, [new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null),"null",new cljs.core.Symbol(null,"log","log",45015523,null),"null",new cljs.core.Symbol(null,"acos","acos",353741763,null),"null",new cljs.core.Symbol(null,"tanh","tanh",480481797,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,"expt","expt",2123850345,null),"null",new cljs.core.Symbol(null,"atan","atan",-1026550135,null),"null",new cljs.core.Symbol(null,"down","down",-1089190199,null),"null",new cljs.core.Symbol(null,"cos","cos",-1452677493,null),"null",new cljs.core.Symbol(null,"tan","tan",-1380825876,null),"null",new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"exp","exp",1378825265,null),"null",new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null),"null",new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,"up","up",1370819414,null),"null",new cljs.core.Symbol(null,"asin","asin",-904130570,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null",new cljs.core.Symbol(null,"abs","abs",1394505050,null),"null",new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),"null",new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null),"null",new cljs.core.Symbol(null,"sin","sin",1721439389,null),"null"], null), null);
var make_js_vector = (function (p1__102746_SHARP_){
return ["[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",p1__102746_SHARP_),"]"].join('');
});
var R = sicmutils.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"D","D",1632515634,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"and","and",668631710,null)],[(2),(2),(2),(5),(2),(3),(1),(8),(9),(5),(8),(2),(3),(1)]),new cljs.core.Keyword(null,"infix?","infix?",41062120),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),"null",new cljs.core.Symbol(null,"=","=",-1501502141,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null"], null), null),new cljs.core.Keyword(null,"rename-functions","rename-functions",-358633973),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null),new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)],["Math.sinh","Math.sin","Math.tan","Math.cos","Math.abs","!","Math.log","Math.cosh","Math.pow","Math.atan","Math.acos","Math.floor","Math.acosh","Math.ceil","Math.sqrt","Math.asin","Math.exp","Math.trunc","Math.asinh","Math.tanh","Math.atanh"]),new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),(function (){var parens = (function (x){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),")"].join('');
});
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"up","up",1370819414,null),make_js_vector,new cljs.core.Symbol(null,"down","down",-1089190199,null),make_js_vector,new cljs.core.Symbol(null,"modulo","modulo",725580254,null),(function (p__102747){
var vec__102748 = p__102747;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102748,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102748,(1),null);
return parens([parens([parens([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," % ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''))," + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''))," % ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''));
}),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),(function (p__102752){
var vec__102753 = p__102752;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102753,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102753,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," % ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}),new cljs.core.Symbol(null,"and","and",668631710,null),(function (p__102760){
var vec__102761 = p__102760;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102761,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102761,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," && ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}),new cljs.core.Symbol(null,"or","or",1876275696,null),(function (p__102764){
var vec__102765 = p__102764;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102765,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102765,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," || ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}),new cljs.core.Symbol(null,"/","/",-1371932971,null),sicmutils.expression.render.render_infix_ratio], null);
})()], 0));
return (function() { 
var G__102865__delegate = function (x,p__102768){
var map__102769 = p__102768;
var map__102769__$1 = cljs.core.__destructure_map(map__102769);
var symbol_generator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102769__$1,new cljs.core.Keyword(null,"symbol-generator","symbol-generator",574487160),sicmutils.expression.render.make_symbol_generator("_"));
var parameter_order = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102769__$1,new cljs.core.Keyword(null,"parameter-order","parameter-order",-1644250733),cljs.core.sort);
var deterministic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102769__$1,new cljs.core.Keyword(null,"deterministic?","deterministic?",-1057176664));
var x__$1 = sicmutils.value.freeze(x);
var params = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.variables_in(x__$1),operators_known);
var ordered_params = ((cljs.core.fn_QMARK_(parameter_order))?(parameter_order.cljs$core$IFn$_invoke$arity$1 ? parameter_order.cljs$core$IFn$_invoke$arity$1(params) : parameter_order.call(null,params)):parameter_order);
var callback = (function (new_expression,new_vars){
var seq__102770_102866 = cljs.core.seq(new_vars);
var chunk__102771_102867 = null;
var count__102772_102868 = (0);
var i__102773_102869 = (0);
while(true){
if((i__102773_102869 < count__102772_102868)){
var vec__102780_102870 = chunk__102771_102867.cljs$core$IIndexed$_nth$arity$2(null,i__102773_102869);
var var_102871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102780_102870,(0),null);
var val_102872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102780_102870,(1),null);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" let "], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_102871)," = "].join('')], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(R.cljs$core$IFn$_invoke$arity$1 ? R.cljs$core$IFn$_invoke$arity$1(val_102872) : R.call(null,val_102872))], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));


var G__102873 = seq__102770_102866;
var G__102874 = chunk__102771_102867;
var G__102875 = count__102772_102868;
var G__102876 = (i__102773_102869 + (1));
seq__102770_102866 = G__102873;
chunk__102771_102867 = G__102874;
count__102772_102868 = G__102875;
i__102773_102869 = G__102876;
continue;
} else {
var temp__5753__auto___102877 = cljs.core.seq(seq__102770_102866);
if(temp__5753__auto___102877){
var seq__102770_102878__$1 = temp__5753__auto___102877;
if(cljs.core.chunked_seq_QMARK_(seq__102770_102878__$1)){
var c__4679__auto___102879 = cljs.core.chunk_first(seq__102770_102878__$1);
var G__102880 = cljs.core.chunk_rest(seq__102770_102878__$1);
var G__102881 = c__4679__auto___102879;
var G__102882 = cljs.core.count(c__4679__auto___102879);
var G__102883 = (0);
seq__102770_102866 = G__102880;
chunk__102771_102867 = G__102881;
count__102772_102868 = G__102882;
i__102773_102869 = G__102883;
continue;
} else {
var vec__102788_102884 = cljs.core.first(seq__102770_102878__$1);
var var_102885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102788_102884,(0),null);
var val_102886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102788_102884,(1),null);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" let "], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_102885)," = "].join('')], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(R.cljs$core$IFn$_invoke$arity$1 ? R.cljs$core$IFn$_invoke$arity$1(val_102886) : R.call(null,val_102886))], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));


var G__102887 = cljs.core.next(seq__102770_102878__$1);
var G__102888 = null;
var G__102889 = (0);
var G__102890 = (0);
seq__102770_102866 = G__102887;
chunk__102771_102867 = G__102888;
count__102772_102868 = G__102889;
i__102773_102869 = G__102890;
continue;
}
} else {
}
}
break;
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  return "], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(R.cljs$core$IFn$_invoke$arity$1 ? R.cljs$core$IFn$_invoke$arity$1(new_expression) : R.call(null,new_expression))], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n}"], 0));
});
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deterministic?","deterministic?",-1057176664),deterministic_QMARK_,new cljs.core.Keyword(null,"symbol-generator","symbol-generator",574487160),symbol_generator], null);
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__102796_102891 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__102797_102892 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__102798_102893 = true;
var _STAR_print_fn_STAR__temp_val__102799_102894 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__102798_102893);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__102799_102894);

try{cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["function("], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ordered_params)], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([") {\n"], 0));

sicmutils.expression.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3(x__$1,callback,opts);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__102797_102892);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__102796_102891);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
};
var G__102865 = function (x,var_args){
var p__102768 = null;
if (arguments.length > 1) {
var G__102895__i = 0, G__102895__a = new Array(arguments.length -  1);
while (G__102895__i < G__102895__a.length) {G__102895__a[G__102895__i] = arguments[G__102895__i + 1]; ++G__102895__i;}
  p__102768 = new cljs.core.IndexedSeq(G__102895__a,0,null);
} 
return G__102865__delegate.call(this,x,p__102768);};
G__102865.cljs$lang$maxFixedArity = 1;
G__102865.cljs$lang$applyTo = (function (arglist__102896){
var x = cljs.core.first(arglist__102896);
var p__102768 = cljs.core.rest(arglist__102896);
return G__102865__delegate(x,p__102768);
});
G__102865.cljs$core$IFn$_invoke$arity$variadic = G__102865__delegate;
return G__102865;
})()
;
})();

//# sourceMappingURL=sicmutils.expression.render.js.map
