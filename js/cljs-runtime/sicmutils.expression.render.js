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
sicmutils.expression.render.rewrite_trig_powers = pattern.rule.choice.cljs$core$IFn$_invoke$arity$variadic(pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__82006){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__82007 = new cljs.core.Symbol(null,"f","f",43394975,null);
return (fexpr__82007.cljs$core$IFn$_invoke$arity$1 ? fexpr__82007.cljs$core$IFn$_invoke$arity$1(G__82006) : fexpr__82007.call(null,G__82006));
})(),(2)], null)),(function (){var fexpr__82008 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__82008.cljs$core$IFn$_invoke$arity$1 ? fexpr__82008.cljs$core$IFn$_invoke$arity$1(G__82006) : fexpr__82008.call(null,G__82006));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.return$(null)], 0));
/**
 * The simplifier returns sums of products; for negative summands the
 *   simplifier negates by wrapping with `(* -1 ...)`. For rendering, we prefer to
 *   use a unary minus.
 */
sicmutils.expression.render.rewrite_negation = pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__82009){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),(function (){var fexpr__82010 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__82010.cljs$core$IFn$_invoke$arity$1 ? fexpr__82010.cljs$core$IFn$_invoke$arity$1(G__82009) : fexpr__82010.call(null,G__82009));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__82011){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__82012 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__82012.cljs$core$IFn$_invoke$arity$1 ? fexpr__82012.cljs$core$IFn$_invoke$arity$1(G__82011) : fexpr__82012.call(null,G__82011));
})()))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0));
/**
 * renders a pair of the form `[numerator denominator]` as a infix ratio of the
 *   form `num/denom`.
 * 
 *   If the pair contains only one entry `x`, it's coerced to `[1 x]` (and treated
 *   as a denominator).
 */
sicmutils.expression.render.render_infix_ratio = (function sicmutils$expression$render$render_infix_ratio(p__82013){
var vec__82014 = p__82013;
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82014,(0),null);
var denom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82014,(1),null);
var xs = vec__82014;
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
var len__4864__auto___82273 = arguments.length;
var i__4865__auto___82274 = (0);
while(true){
if((i__4865__auto___82274 < len__4864__auto___82273)){
args__4870__auto__.push((arguments[i__4865__auto___82274]));

var G__82275 = (i__4865__auto___82274 + (1));
i__4865__auto___82274 = G__82275;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic = (function (p__82019){
var map__82020 = p__82019;
var map__82020__$1 = cljs.core.__destructure_map(map__82020);
var juxtapose_multiply = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82020__$1,new cljs.core.Keyword(null,"juxtapose-multiply","juxtapose-multiply",-1262547042)," * ");
var special_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82020__$1,new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),cljs.core.PersistentArrayMap.EMPTY);
var infix_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82020__$1,new cljs.core.Keyword(null,"infix?","infix?",41062120),cljs.core.PersistentArrayMap.EMPTY);
var render_primitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82020__$1,new cljs.core.Keyword(null,"render-primitive","render-primitive",-529994613));
var rename_functions = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82020__$1,new cljs.core.Keyword(null,"rename-functions","rename-functions",-358633973),cljs.core.PersistentArrayMap.EMPTY);
var parenthesize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82020__$1,new cljs.core.Keyword(null,"parenthesize","parenthesize",-1945667578),(function (p1__82017_SHARP_){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__82017_SHARP_),")"].join('');
}));
var precedence_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82020__$1,new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799));
var rewrite_trig_squares = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82020__$1,new cljs.core.Keyword(null,"rewrite-trig-squares","rewrite-trig-squares",747917607),false);
var maybe_rewrite_negation = (function sicmutils$expression$render$maybe_rewrite_negation(loc){
var result = (function (){var G__82055 = clojure.zip.node(loc);
return (sicmutils.expression.render.rewrite_negation.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.rewrite_negation.cljs$core$IFn$_invoke$arity$1(G__82055) : sicmutils.expression.render.rewrite_negation.call(null,G__82055));
})();
if((loc === result)){
return loc;
} else {
return clojure.zip.replace(loc,result);
}
});
var render_unary_node = (function sicmutils$expression$render$render_unary_node(op,args){
var a = cljs.core.first(args);
var G__82056 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"+","+",-740910886,null),G__82056)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*","*",345799209,null),G__82056)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"u-","u-",1997472866,null),G__82056)){
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"/","/",-1371932971,null),G__82056)){
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
var G__82276 = cljs.core.second(op);
op = G__82276;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"partial","partial",1881673272,null),cljs.core.first(op))){
var G__82057 = new cljs.core.Symbol(null,"D","D",1632515634,null);
return (precedence_map.cljs$core$IFn$_invoke$arity$1 ? precedence_map.cljs$core$IFn$_invoke$arity$1(G__82057) : precedence_map.call(null,G__82057));
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
var G__82277 = r;
a = G__82277;
continue;
} else {
return clojure.zip.up(a_SINGLEQUOTE_);
}
break;
}
})();
var vec__82058 = clojure.zip.node(arg_loc);
var seq__82059 = cljs.core.seq(vec__82058);
var first__82060 = cljs.core.first(seq__82059);
var seq__82059__$1 = cljs.core.next(seq__82059);
var op = first__82060;
var args = seq__82059__$1;
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
var fexpr__82061 = (special_handlers.cljs$core$IFn$_invoke$arity$1 ? special_handlers.cljs$core$IFn$_invoke$arity$1(op) : special_handlers.call(null,op));
return (fexpr__82061.cljs$core$IFn$_invoke$arity$1 ? fexpr__82061.cljs$core$IFn$_invoke$arity$1(args) : fexpr__82061.call(null,args));
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
var sep = (function (){var G__82062 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*","*",345799209,null),G__82062)){
var or__4253__auto____$2 = juxtapose_multiply;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return " * ";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expt","expt",2123850345,null),G__82062)){
return "^";
} else {
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," "].join('');

}
}
})();
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__82063_82278 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__82064_82279 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__82065_82280 = true;
var _STAR_print_fn_STAR__temp_val__82066_82281 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__82065_82280);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__82066_82281);

try{var a_82282 = args;
while(true){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(a_82282))], 0));

var temp__5753__auto___82283 = cljs.core.next(a_82282);
if(temp__5753__auto___82283){
var a_SINGLEQUOTE__82284 = temp__5753__auto___82283;
if((!(((typeof cljs.core.first(a_SINGLEQUOTE__82284) === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.first(a_SINGLEQUOTE__82284)),"-")))))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sep], 0));
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" "], 0));
}

var G__82285 = a_SINGLEQUOTE__82284;
a_82282 = G__82285;
continue;
} else {
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__82064_82279);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__82063_82278);
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
var fexpr__82067 = (special_handlers.cljs$core$IFn$_invoke$arity$1 ? special_handlers.cljs$core$IFn$_invoke$arity$1(op) : special_handlers.call(null,op));
return (fexpr__82067.cljs$core$IFn$_invoke$arity$1 ? fexpr__82067.cljs$core$IFn$_invoke$arity$1(args) : fexpr__82067.call(null,args));
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
var ratio_expr_QMARK_ = (function sicmutils$expression$render$ratio_expr_QMARK_(op,p__82068){
var vec__82069 = p__82068;
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82069,(0),null);
var denom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82069,(1),null);
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
(sicmutils.expression.render.make_infix_renderer.cljs$lang$applyTo = (function (seq82018){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82018));
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
sicmutils.expression.render.TeX_letters = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__82072){
var vec__82073 = p__82072;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82073,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null);
})),sicmutils.expression.render.sym__GT_unicode);
/**
 * Full mapping of special-cased TeX symbols to their TeX codes. This
 *   includes all greek letters in both english ('alpha') and unicode ('α')
 *   versions, plus a few more special-cased symbols.
 */
sicmutils.expression.render.TeX_map = (function (){var sym__GT_tex = sicmutils.util.map_vals((function (p1__82076_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__82076_SHARP_)].join('');
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82077_SHARP_){
var G__82078 = sicmutils.expression.render.digit__GT_int(p1__82077_SHARP_);
return (scripts.cljs$core$IFn$_invoke$arity$1 ? scripts.cljs$core$IFn$_invoke$arity$1(G__82078) : scripts.call(null,G__82078));
}),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
sicmutils.expression.render.n__GT_subscript = (function sicmutils$expression$render$n__GT_subscript(p1__82079_SHARP_){
return sicmutils.expression.render.n__GT_script(p1__82079_SHARP_,sicmutils.expression.render.decimal_subscripts);
});
sicmutils.expression.render.n__GT_superscript = (function sicmutils$expression$render$n__GT_superscript(p1__82080_SHARP_){
return sicmutils.expression.render.n__GT_script(p1__82080_SHARP_,sicmutils.expression.render.decimal_superscripts);
});
sicmutils.expression.render.infix_sym__GT_unicode = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.expression.render.non_TeX_greek,sicmutils.expression.render.sym__GT_unicode], 0));
/**
 * Given some infinite value, returns a string representation of ##Inf or ##-Inf
 *   appropriate for infix rendering, else returns `nil`.
 */
sicmutils.expression.render.infinity__GT_infix = (function sicmutils$expression$render$infinity__GT_infix(x){
var G__82081 = x;
switch (G__82081) {
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
sicmutils.expression.render.__GT_infix = sicmutils.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"u-","u-",1997472866,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"D","D",1632515634,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null)],[(6),(3),(3),(3),(5),(8),(3),(4),(1),(9),(4),(5),(7),(3),(9),(4),(5),(2),(5)]),new cljs.core.Keyword(null,"infix?","infix?",41062120),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),"null",new cljs.core.Symbol(null,"=","=",-1501502141,null),"null",new cljs.core.Symbol(null,"<","<",993667236,null),"null",new cljs.core.Symbol(null,"<=","<=",1244895369,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,"expt","expt",2123850345,null),"null",new cljs.core.Symbol(null,">",">",1085014381,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,">=",">=",1016916022,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null",new cljs.core.Symbol(null,"modulo","modulo",725580254,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),"null"], null), null),new cljs.core.Keyword(null,"juxtapose-multiply","juxtapose-multiply",-1262547042)," ",new cljs.core.Keyword(null,"rewrite-trig-squares","rewrite-trig-squares",747917607),true,new cljs.core.Keyword(null,"rename-functions","rename-functions",-358633973),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),"frac",new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),"int",new cljs.core.Symbol(null,"not","not",1044554643,null),"\u00AC"], null),new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"or","or",1876275696,null)],[(function (p__82082){
var vec__82083 = p__82082;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82083,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82083,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," % ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
}),(function (p__82086){
var vec__82087 = p__82086;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82087,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82087,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," \u2227 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
}),(function (p__82090){
var vec__82091 = p__82090;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82091,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82091,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," mod ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
}),sicmutils.expression.render.render_infix_ratio,(function (p__82094){
var vec__82095 = p__82094;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82095,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82095,(1),null);
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
}),(function (p__82098){
var vec__82099 = p__82098;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82099,(0),null);
return ["\u230A",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\u230B"].join('');
}),(function (ds){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ds),(1))) && (cljs.core.integer_QMARK_(cljs.core.first(ds))))){
return ["\u2202",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.n__GT_subscript(cljs.core.first(ds)))].join('');
} else {
return null;
}
}),(function (p__82102){
var vec__82103 = p__82102;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82103,(0),null);
return ["\u2308",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\u2309"].join('');
}),(function (p__82106){
var vec__82107 = p__82106;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82107,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82107,(1),null);
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
var pred__82110 = cljs.core.re_find;
var expr__82111 = s;
var temp__5751__auto__ = (pred__82110.cljs$core$IFn$_invoke$arity$2 ? pred__82110.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.superscript_pattern,expr__82111) : pred__82110.call(null,sicmutils.expression.render.superscript_pattern,expr__82111));
if(cljs.core.truth_(temp__5751__auto__)){
var p__4614__auto__ = temp__5751__auto__;
return (function (p__82113){
var vec__82114 = p__82113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82114,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82114,(1),null);
var superscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82114,(2),null);
var temp__5751__auto____$1 = cljs.core.re_matches(/[0-9]+/,superscript);
if(cljs.core.truth_(temp__5751__auto____$1)){
var n = temp__5751__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils$expression$render$r(stem)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.n__GT_superscript(n))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils$expression$render$r(stem)),"\u2191",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils$expression$render$r(superscript))].join('');
}
})(p__4614__auto__);
} else {
var temp__5751__auto____$1 = (pred__82110.cljs$core$IFn$_invoke$arity$2 ? pred__82110.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.subscript_pattern,expr__82111) : pred__82110.call(null,sicmutils.expression.render.subscript_pattern,expr__82111));
if(cljs.core.truth_(temp__5751__auto____$1)){
var p__4614__auto__ = temp__5751__auto____$1;
return (function (p__82117){
var vec__82118 = p__82117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82118,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82118,(1),null);
var subscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82118,(2),null);
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
var G__82121 = x;
switch (G__82121) {
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
return (function (p__82126){
var vec__82127 = p__82126;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82127,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82127,(1),null);
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(accent)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace((sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1(stem) : sicmutils.expression.render.__GT_TeX_STAR_.call(null,stem))))].join('');
});
});
var dot = TeX_accent("dot");
var ddot = TeX_accent("ddot");
var hat = TeX_accent("hat");
var bar = TeX_accent("bar");
var vec = TeX_accent("vec");
var tilde = TeX_accent("tilde");
var prime = (function (p__82130){
var vec__82131 = p__82130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82131,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82131,(1),null);
var x = sicmutils.expression.render.maybe_brace((sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1(stem) : sicmutils.expression.render.__GT_TeX_STAR_.call(null,stem)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"^\\prime"].join('');
});
var primeprime = (function (p__82134){
var vec__82135 = p__82134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82135,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82135,(1),null);
var x = sicmutils.expression.render.maybe_brace((sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1(stem) : sicmutils.expression.render.__GT_TeX_STAR_.call(null,stem)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"^{\\prime\\prime}"].join('');
});
var parenthesize = (function (p1__82122_SHARP_){
return ["\\left(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__82122_SHARP_),"\\right)"].join('');
});
return sicmutils.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"u-","u-",1997472866,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"D","D",1632515634,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null)],[(6),(3),(3),(3),(5),(8),(3),(4),(1),(9),(1),(0),(7),(3),(9),(4),(5),(2),(5)]),new cljs.core.Keyword(null,"parenthesize","parenthesize",-1945667578),parenthesize,new cljs.core.Keyword(null,"infix?","infix?",41062120),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),"null",new cljs.core.Symbol(null,"=","=",-1501502141,null),"null",new cljs.core.Symbol(null,"<","<",993667236,null),"null",new cljs.core.Symbol(null,"<=","<=",1244895369,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,"expt","expt",2123850345,null),"null",new cljs.core.Symbol(null,">",">",1085014381,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,">=",">=",1016916022,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null",new cljs.core.Symbol(null,"modulo","modulo",725580254,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),"null"], null), null),new cljs.core.Keyword(null,"juxtapose-multiply","juxtapose-multiply",-1262547042),"\\,",new cljs.core.Keyword(null,"rewrite-trig-squares","rewrite-trig-squares",747917607),true,new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"down","down",-1089190199,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"or","or",1876275696,null)],[(function (p__82138){
var vec__82139 = p__82138;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82139,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82139,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(x))," \\mathbin{\\%} ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(y))].join('');
}),(function (p__82143){
var vec__82144 = p__82143;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82144,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82144,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," \\land ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
}),(function (x){
var body = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \\cr \\cr ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.displaystyle,x));
return ["\\begin{pmatrix}",body,"\\end{pmatrix}"].join('');
}),(function (p1__82125_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \\geq ",p1__82125_SHARP_);
}),(function (p__82151){
var vec__82152 = p__82151;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82152,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82152,(1),null);
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
}),(function (p__82157){
var vec__82158 = p__82157;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82158,(0),null);
return ["\\lnot",parenthesize(x)].join('');
}),(function (p1__82124_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \\leq ",p1__82124_SHARP_);
}),(function (p__82161){
var vec__82162 = p__82161;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82162,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82162,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(x)),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(e))].join('');
}),(function (p__82165){
var vec__82169 = p__82165;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82169,(0),null);
return ["\\mathsf{frac} ",parenthesize(x)].join('');
}),(function (p__82172){
var vec__82173 = p__82172;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82173,(0),null);
return ["\\left\\lfloor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," \\right\\rfloor"].join('');
}),(function (ds){
return ["\\partial_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",ds)))].join('');
}),(function (p__82176){
var vec__82177 = p__82176;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82177,(0),null);
return ["\\left\\lceil ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," \\right\\rceil"].join('');
}),(function (x){
var sep = (cljs.core.truth_(sicmutils.expression.render._STAR_TeX_vertical_down_tuples_STAR_)?" \\cr \\cr ":"&");
var body = clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.displaystyle,x));
return ["\\begin{bmatrix}",body,"\\end{bmatrix}"].join('');
}),(function (p1__82123_SHARP_){
return ["\\sqrt ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(cljs.core.first(p1__82123_SHARP_)))].join('');
}),(function (p__82181){
var vec__82182 = p__82181;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82182,(0),null);
return ["\\mathsf{int} ",parenthesize(x)].join('');
}),(function (p__82186){
var vec__82187 = p__82186;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82187,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82187,(1),null);
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
var pred__82192 = cljs.core.re_find;
var expr__82193 = s;
var temp__5751__auto__ = (pred__82192.cljs$core$IFn$_invoke$arity$2 ? pred__82192.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.superscript_pattern,expr__82193) : pred__82192.call(null,sicmutils.expression.render.superscript_pattern,expr__82193));
if(cljs.core.truth_(temp__5751__auto__)){
var p__4614__auto__ = temp__5751__auto__;
return (function (p__82198){
var vec__82199 = p__82198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82199,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82199,(1),null);
var superscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82199,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(sicmutils$expression$render$r(stem))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(sicmutils$expression$render$r(superscript)))].join('');
})(p__4614__auto__);
} else {
var temp__5751__auto____$1 = (pred__82192.cljs$core$IFn$_invoke$arity$2 ? pred__82192.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.render.subscript_pattern,expr__82193) : pred__82192.call(null,sicmutils.expression.render.subscript_pattern,expr__82193));
if(cljs.core.truth_(temp__5751__auto____$1)){
var p__4614__auto__ = temp__5751__auto____$1;
return (function (p__82202){
var vec__82203 = p__82202;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82203,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82203,(1),null);
var subscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82203,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(sicmutils$expression$render$r(stem))),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.maybe_brace(sicmutils$expression$render$r(subscript)))].join('');
})(p__4614__auto__);
} else {
var temp__5751__auto____$2 = (function (){var G__82206 = /(.+)dotdot$/;
var G__82207 = expr__82193;
return (pred__82192.cljs$core$IFn$_invoke$arity$2 ? pred__82192.cljs$core$IFn$_invoke$arity$2(G__82206,G__82207) : pred__82192.call(null,G__82206,G__82207));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var p__4614__auto__ = temp__5751__auto____$2;
return ddot(p__4614__auto__);
} else {
var temp__5751__auto____$3 = (function (){var G__82208 = /(.+)dot$/;
var G__82209 = expr__82193;
return (pred__82192.cljs$core$IFn$_invoke$arity$2 ? pred__82192.cljs$core$IFn$_invoke$arity$2(G__82208,G__82209) : pred__82192.call(null,G__82208,G__82209));
})();
if(cljs.core.truth_(temp__5751__auto____$3)){
var p__4614__auto__ = temp__5751__auto____$3;
return dot(p__4614__auto__);
} else {
var temp__5751__auto____$4 = (function (){var G__82210 = /(.+)hat$/;
var G__82211 = expr__82193;
return (pred__82192.cljs$core$IFn$_invoke$arity$2 ? pred__82192.cljs$core$IFn$_invoke$arity$2(G__82210,G__82211) : pred__82192.call(null,G__82210,G__82211));
})();
if(cljs.core.truth_(temp__5751__auto____$4)){
var p__4614__auto__ = temp__5751__auto____$4;
return hat(p__4614__auto__);
} else {
var temp__5751__auto____$5 = (function (){var G__82212 = /(.+)primeprime$/;
var G__82213 = expr__82193;
return (pred__82192.cljs$core$IFn$_invoke$arity$2 ? pred__82192.cljs$core$IFn$_invoke$arity$2(G__82212,G__82213) : pred__82192.call(null,G__82212,G__82213));
})();
if(cljs.core.truth_(temp__5751__auto____$5)){
var p__4614__auto__ = temp__5751__auto____$5;
return primeprime(p__4614__auto__);
} else {
var temp__5751__auto____$6 = (function (){var G__82214 = /(.+)prime$/;
var G__82215 = expr__82193;
return (pred__82192.cljs$core$IFn$_invoke$arity$2 ? pred__82192.cljs$core$IFn$_invoke$arity$2(G__82214,G__82215) : pred__82192.call(null,G__82214,G__82215));
})();
if(cljs.core.truth_(temp__5751__auto____$6)){
var p__4614__auto__ = temp__5751__auto____$6;
return prime(p__4614__auto__);
} else {
var temp__5751__auto____$7 = (function (){var G__82216 = /(.+)bar$/;
var G__82217 = expr__82193;
return (pred__82192.cljs$core$IFn$_invoke$arity$2 ? pred__82192.cljs$core$IFn$_invoke$arity$2(G__82216,G__82217) : pred__82192.call(null,G__82216,G__82217));
})();
if(cljs.core.truth_(temp__5751__auto____$7)){
var p__4614__auto__ = temp__5751__auto____$7;
return bar(p__4614__auto__);
} else {
var temp__5751__auto____$8 = (function (){var G__82218 = /(.+)vec$/;
var G__82219 = expr__82193;
return (pred__82192.cljs$core$IFn$_invoke$arity$2 ? pred__82192.cljs$core$IFn$_invoke$arity$2(G__82218,G__82219) : pred__82192.call(null,G__82218,G__82219));
})();
if(cljs.core.truth_(temp__5751__auto____$8)){
var p__4614__auto__ = temp__5751__auto____$8;
return vec(p__4614__auto__);
} else {
var temp__5751__auto____$9 = (function (){var G__82220 = /(.+)tilde$/;
var G__82221 = expr__82193;
return (pred__82192.cljs$core$IFn$_invoke$arity$2 ? pred__82192.cljs$core$IFn$_invoke$arity$2(G__82220,G__82221) : pred__82192.call(null,G__82220,G__82221));
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
var len__4864__auto___82331 = arguments.length;
var i__4865__auto___82332 = (0);
while(true){
if((i__4865__auto___82332 < len__4864__auto___82331)){
args__4870__auto__.push((arguments[i__4865__auto___82332]));

var G__82333 = (i__4865__auto___82332 + (1));
i__4865__auto___82332 = G__82333;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.expression.render.__GT_TeX.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.expression.render.__GT_TeX.cljs$core$IFn$_invoke$arity$variadic = (function (expr,p__82226){
var map__82227 = p__82226;
var map__82227__$1 = cljs.core.__destructure_map(map__82227);
var equation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82227__$1,new cljs.core.Keyword(null,"equation","equation",-499527745));
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
(sicmutils.expression.render.__GT_TeX.cljs$lang$applyTo = (function (seq82224){
var G__82225 = cljs.core.first(seq82224);
var seq82224__$1 = cljs.core.next(seq82224);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82225,seq82224__$1);
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
var make_js_vector = (function (p1__82228_SHARP_){
return ["[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",p1__82228_SHARP_),"]"].join('');
});
var R = sicmutils.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"D","D",1632515634,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"and","and",668631710,null)],[(2),(2),(2),(5),(2),(3),(1),(8),(9),(5),(8),(2),(3),(1)]),new cljs.core.Keyword(null,"infix?","infix?",41062120),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),"null",new cljs.core.Symbol(null,"=","=",-1501502141,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null"], null), null),new cljs.core.Keyword(null,"rename-functions","rename-functions",-358633973),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null),new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)],["Math.sinh","Math.sin","Math.tan","Math.cos","Math.abs","!","Math.log","Math.cosh","Math.pow","Math.atan","Math.acos","Math.floor","Math.acosh","Math.ceil","Math.sqrt","Math.asin","Math.exp","Math.trunc","Math.asinh","Math.tanh","Math.atanh"]),new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),(function (){var parens = (function (x){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),")"].join('');
});
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"up","up",1370819414,null),make_js_vector,new cljs.core.Symbol(null,"down","down",-1089190199,null),make_js_vector,new cljs.core.Symbol(null,"modulo","modulo",725580254,null),(function (p__82229){
var vec__82230 = p__82229;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82230,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82230,(1),null);
return parens([parens([parens([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," % ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''))," + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''))," % ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''));
}),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),(function (p__82233){
var vec__82234 = p__82233;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82234,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82234,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," % ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}),new cljs.core.Symbol(null,"and","and",668631710,null),(function (p__82237){
var vec__82238 = p__82237;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82238,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82238,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," && ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}),new cljs.core.Symbol(null,"or","or",1876275696,null),(function (p__82241){
var vec__82242 = p__82241;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82242,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82242,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," || ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}),new cljs.core.Symbol(null,"/","/",-1371932971,null),sicmutils.expression.render.render_infix_ratio], null);
})()], 0));
return (function() { 
var G__82357__delegate = function (x,p__82245){
var map__82246 = p__82245;
var map__82246__$1 = cljs.core.__destructure_map(map__82246);
var symbol_generator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82246__$1,new cljs.core.Keyword(null,"symbol-generator","symbol-generator",574487160),sicmutils.expression.render.make_symbol_generator("_"));
var parameter_order = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82246__$1,new cljs.core.Keyword(null,"parameter-order","parameter-order",-1644250733),cljs.core.sort);
var deterministic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82246__$1,new cljs.core.Keyword(null,"deterministic?","deterministic?",-1057176664));
var x__$1 = sicmutils.value.freeze(x);
var params = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.variables_in(x__$1),operators_known);
var ordered_params = ((cljs.core.fn_QMARK_(parameter_order))?(parameter_order.cljs$core$IFn$_invoke$arity$1 ? parameter_order.cljs$core$IFn$_invoke$arity$1(params) : parameter_order.call(null,params)):parameter_order);
var callback = (function (new_expression,new_vars){
var seq__82247_82358 = cljs.core.seq(new_vars);
var chunk__82248_82359 = null;
var count__82249_82360 = (0);
var i__82250_82361 = (0);
while(true){
if((i__82250_82361 < count__82249_82360)){
var vec__82257_82362 = chunk__82248_82359.cljs$core$IIndexed$_nth$arity$2(null,i__82250_82361);
var var_82363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82257_82362,(0),null);
var val_82364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82257_82362,(1),null);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  var "], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_82363)," = "].join('')], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(R.cljs$core$IFn$_invoke$arity$1 ? R.cljs$core$IFn$_invoke$arity$1(val_82364) : R.call(null,val_82364))], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));


var G__82375 = seq__82247_82358;
var G__82376 = chunk__82248_82359;
var G__82377 = count__82249_82360;
var G__82378 = (i__82250_82361 + (1));
seq__82247_82358 = G__82375;
chunk__82248_82359 = G__82376;
count__82249_82360 = G__82377;
i__82250_82361 = G__82378;
continue;
} else {
var temp__5753__auto___82379 = cljs.core.seq(seq__82247_82358);
if(temp__5753__auto___82379){
var seq__82247_82380__$1 = temp__5753__auto___82379;
if(cljs.core.chunked_seq_QMARK_(seq__82247_82380__$1)){
var c__4679__auto___82381 = cljs.core.chunk_first(seq__82247_82380__$1);
var G__82382 = cljs.core.chunk_rest(seq__82247_82380__$1);
var G__82383 = c__4679__auto___82381;
var G__82384 = cljs.core.count(c__4679__auto___82381);
var G__82385 = (0);
seq__82247_82358 = G__82382;
chunk__82248_82359 = G__82383;
count__82249_82360 = G__82384;
i__82250_82361 = G__82385;
continue;
} else {
var vec__82260_82386 = cljs.core.first(seq__82247_82380__$1);
var var_82387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82260_82386,(0),null);
var val_82388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82260_82386,(1),null);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  var "], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_82387)," = "].join('')], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(R.cljs$core$IFn$_invoke$arity$1 ? R.cljs$core$IFn$_invoke$arity$1(val_82388) : R.call(null,val_82388))], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));


var G__82389 = cljs.core.next(seq__82247_82380__$1);
var G__82390 = null;
var G__82391 = (0);
var G__82392 = (0);
seq__82247_82358 = G__82389;
chunk__82248_82359 = G__82390;
count__82249_82360 = G__82391;
i__82250_82361 = G__82392;
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
var _STAR_print_newline_STAR__orig_val__82263_82397 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__82264_82398 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__82265_82399 = true;
var _STAR_print_fn_STAR__temp_val__82266_82400 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__82265_82399);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__82266_82400);

try{cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["function("], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ordered_params)], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([") {\n"], 0));

sicmutils.expression.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3(x__$1,callback,opts);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__82264_82398);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__82263_82397);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
};
var G__82357 = function (x,var_args){
var p__82245 = null;
if (arguments.length > 1) {
var G__82402__i = 0, G__82402__a = new Array(arguments.length -  1);
while (G__82402__i < G__82402__a.length) {G__82402__a[G__82402__i] = arguments[G__82402__i + 1]; ++G__82402__i;}
  p__82245 = new cljs.core.IndexedSeq(G__82402__a,0,null);
} 
return G__82357__delegate.call(this,x,p__82245);};
G__82357.cljs$lang$maxFixedArity = 1;
G__82357.cljs$lang$applyTo = (function (arglist__82409){
var x = cljs.core.first(arglist__82409);
var p__82245 = cljs.core.rest(arglist__82409);
return G__82357__delegate(x,p__82245);
});
G__82357.cljs$core$IFn$_invoke$arity$variadic = G__82357__delegate;
return G__82357;
})()
;
})();

//# sourceMappingURL=sicmutils.expression.render.js.map
