goog.provide('pattern.match');
/**
 * Matcher which will fail for any input.
 */
pattern.match.fail = (function pattern$match$fail(_,___$1,___$2){
return null;
});
/**
 * Matcher that succeeds (with no new bindings) for any input, passing along its
 *   input frame.
 */
pattern.match.pass = (function pattern$match$pass(frame,_,succeed){
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame) : succeed.call(null,frame));
});
/**
 * Takes a `new-frame` of bindings and returns a matcher that will ignore its
 *   input and always succeed by replacing the current map of bindings with
 *   `new-frame`.
 */
pattern.match.with_frame = (function pattern$match$with_frame(new_frame){
return (function (_,___$1,succeed){
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(new_frame) : succeed.call(null,new_frame));
});
});
/**
 * Takes a function from `frame` to a new frame (or false) and any number of
 *   arguments `args`, and returns a matcher that will ignore its input and
 * 
 *   - succeed with `(apply f frame args)` if that value is truthy,
 *   - fail otherwise.
 */
pattern.match.update_frame = (function pattern$match$update_frame(var_args){
var args__4870__auto__ = [];
var len__4864__auto___98190 = arguments.length;
var i__4865__auto___98191 = (0);
while(true){
if((i__4865__auto___98191 < len__4864__auto___98190)){
args__4870__auto__.push((arguments[i__4865__auto___98191]));

var G__98192 = (i__4865__auto___98191 + (1));
i__4865__auto___98191 = G__98192;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return pattern.match.update_frame.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(pattern.match.update_frame.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function (frame,_,succeed){
var temp__5753__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,frame,args);
if(cljs.core.truth_(temp__5753__auto__)){
var new_frame = temp__5753__auto__;
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(new_frame) : succeed.call(null,new_frame));
} else {
return null;
}
});
}));

(pattern.match.update_frame.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pattern.match.update_frame.cljs$lang$applyTo = (function (seq97868){
var G__97869 = cljs.core.first(seq97868);
var seq97868__$1 = cljs.core.next(seq97868);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97869,seq97868__$1);
}));

/**
 * Takes a predicate function `pred` and returns a matcher that succeeds (with no
 *   new bindings) if its data input passes the predicate, fails otherwise.
 */
pattern.match.predicate = (function pattern$match$predicate(pred){
return (function pattern$match$predicate_$_predicate_match(frame,data,succeed){
var and__4251__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(data) : pred.call(null,data));
if(cljs.core.truth_(and__4251__auto__)){
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame) : succeed.call(null,frame));
} else {
return and__4251__auto__;
}
});
});
/**
 * Takes a predicate function `pred` and returns a matcher that succeeds (with no
 *   new bindings) if its data input passes the predicate, fails otherwise.
 */
pattern.match.frame_predicate = (function pattern$match$frame_predicate(pred){
return (function pattern$match$frame_predicate_$_frame_pred(frame,_,succeed){
var and__4251__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(frame) : pred.call(null,frame));
if(cljs.core.truth_(and__4251__auto__)){
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame) : succeed.call(null,frame));
} else {
return and__4251__auto__;
}
});
});
/**
 * Takes some input `x` and returns a matcher which succeeds if its data input is
 *   equal to `x` (via `=` or the optional `eq-fn` argument). Fails otherwise.
 * 
 *   The frame is not modified.
 */
pattern.match.eq = (function pattern$match$eq(var_args){
var G__97896 = arguments.length;
switch (G__97896) {
case 1:
return pattern.match.eq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pattern.match.eq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pattern.match.eq.cljs$core$IFn$_invoke$arity$1 = (function (x){
return pattern.match.eq.cljs$core$IFn$_invoke$arity$2(x,cljs.core._EQ_);
}));

(pattern.match.eq.cljs$core$IFn$_invoke$arity$2 = (function (x,eq_fn){
return pattern.match.predicate((function (other){
return (eq_fn.cljs$core$IFn$_invoke$arity$2 ? eq_fn.cljs$core$IFn$_invoke$arity$2(x,other) : eq_fn.call(null,x,other));
}));
}));

(pattern.match.eq.cljs$lang$maxFixedArity = 2);

/**
 * Takes a binding variable `sym` and an optional predicate `pred`, and returns a
 *   matcher that binds its input to `sym` in the returned `frame`.
 * 
 *   The returned matcher only succeeds if `input` passes `pred`.
 * 
 *   If `sym` is already present in `frame`, the matcher only succeeds if the
 *   values are equal, fails otherwise.
 * 
 *   NOTE: If `sym` is the wildcard `_`, the returned matcher will not introduce a
 *   new binding, but _will_ still check the predicate.
 */
pattern.match.bind = (function pattern$match$bind(var_args){
var G__97909 = arguments.length;
switch (G__97909) {
case 1:
return pattern.match.bind.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pattern.match.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pattern.match.bind.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return pattern.match.bind.cljs$core$IFn$_invoke$arity$2(sym,(function (_){
return true;
}));
}));

(pattern.match.bind.cljs$core$IFn$_invoke$arity$2 = (function (sym,pred){
if(pattern.syntax.wildcard_QMARK_(sym)){
return pattern.match.predicate(pred);
} else {
return (function pattern$match$bind_match(frame,data,succeed){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(data) : pred.call(null,data)))){
var temp__5751__auto__ = cljs.core.find(frame,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__97920 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97920,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97920,(1),null);
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding,data);
if(and__4251__auto__){
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame) : succeed.call(null,frame));
} else {
return and__4251__auto__;
}
} else {
var G__97923 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,sym,data);
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(G__97923) : succeed.call(null,G__97923));
}
} else {
return null;
}
});
}
}));

(pattern.match.bind.cljs$lang$maxFixedArity = 2);

/**
 * Returns a matcher that passes its `frame` on to `success-pattern` if `pred`
 *   succeeds on its data input, fails otherwise.
 */
pattern.match.match_when = (function pattern$match$match_when(pred,success_pattern){
var match = (pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(success_pattern) : pattern.match.pattern__GT_combinators.call(null,success_pattern));
return (function (frame,xs,success){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(xs) : pred.call(null,xs)))){
return (match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(frame,xs,success) : match.call(null,frame,xs,success));
} else {
return null;
}
});
});
/**
 * Returns a matcher that passes its `frame` on to `success-pattern` if `pred`
 *   succeeds on its data input, `fail-pattern` otherwise.
 * 
 *   If no `fail-matcher` is supplied, the behavior is equivalent
 *   to [[match-when]].
 */
pattern.match.match_if = (function pattern$match$match_if(var_args){
var G__97925 = arguments.length;
switch (G__97925) {
case 2:
return pattern.match.match_if.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pattern.match.match_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pattern.match.match_if.cljs$core$IFn$_invoke$arity$2 = (function (pred,success_pattern){
return pattern.match.match_when(pred,success_pattern);
}));

(pattern.match.match_if.cljs$core$IFn$_invoke$arity$3 = (function (pred,success_pattern,fail_pattern){
var s_match = (pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(success_pattern) : pattern.match.pattern__GT_combinators.call(null,success_pattern));
var f_match = (pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(fail_pattern) : pattern.match.pattern__GT_combinators.call(null,fail_pattern));
return (function (frame,xs,success){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(xs) : pred.call(null,xs)))){
return (s_match.cljs$core$IFn$_invoke$arity$3 ? s_match.cljs$core$IFn$_invoke$arity$3(frame,xs,success) : s_match.call(null,frame,xs,success));
} else {
return (f_match.cljs$core$IFn$_invoke$arity$3 ? f_match.cljs$core$IFn$_invoke$arity$3(frame,xs,success) : f_match.call(null,frame,xs,success));
}
});
}));

(pattern.match.match_if.cljs$lang$maxFixedArity = 3);

/**
 * Takes a sequence of patterns, and returns a matcher that will apply its
 *   arguments to each matcher in turn. Returns the value of the first pattern that
 *   succeeds.
 */
pattern.match.or = (function pattern$match$or(var_args){
var G__97933 = arguments.length;
switch (G__97933) {
case 0:
return pattern.match.or.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pattern.match.or.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___98212 = arguments.length;
var i__4865__auto___98213 = (0);
while(true){
if((i__4865__auto___98213 < len__4864__auto___98212)){
args_arr__4885__auto__.push((arguments[i__4865__auto___98213]));

var G__98214 = (i__4865__auto___98213 + (1));
i__4865__auto___98213 = G__98214;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return pattern.match.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(pattern.match.or.cljs$core$IFn$_invoke$arity$0 = (function (){
return pattern.match.fail;
}));

(pattern.match.or.cljs$core$IFn$_invoke$arity$1 = (function (pattern__$1){
return (pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(pattern__$1) : pattern.match.pattern__GT_combinators.call(null,pattern__$1));
}));

(pattern.match.or.cljs$core$IFn$_invoke$arity$variadic = (function (pattern__$1,more){
var matchers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(pattern.match.pattern__GT_combinators,cljs.core.cons(pattern__$1,more));
return (function pattern$match$call(frame,xs,succeed){
return cljs.core.some((function (p1__97928_SHARP_){
return (p1__97928_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__97928_SHARP_.cljs$core$IFn$_invoke$arity$3(frame,xs,succeed) : p1__97928_SHARP_.call(null,frame,xs,succeed));
}),matchers);
});
}));

/** @this {Function} */
(pattern.match.or.cljs$lang$applyTo = (function (seq97930){
var G__97931 = cljs.core.first(seq97930);
var seq97930__$1 = cljs.core.next(seq97930);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97931,seq97930__$1);
}));

(pattern.match.or.cljs$lang$maxFixedArity = (1));

/**
 * Takes a sequence of patterns and returns a matcher that will apply its
 *   arguments to the first pattern;
 * 
 *   If that match succeeds, the next pattern will be called with the new, returned
 *   frame (and the original data and success continuation).
 * 
 *   The returned matcher succeeds only of all patterns succeed, and returns the
 *   value of the final pattern.
 */
pattern.match.and = (function pattern$match$and(var_args){
var G__97937 = arguments.length;
switch (G__97937) {
case 0:
return pattern.match.and.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pattern.match.and.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___98218 = arguments.length;
var i__4865__auto___98219 = (0);
while(true){
if((i__4865__auto___98219 < len__4864__auto___98218)){
args_arr__4885__auto__.push((arguments[i__4865__auto___98219]));

var G__98220 = (i__4865__auto___98219 + (1));
i__4865__auto___98219 = G__98220;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return pattern.match.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(pattern.match.and.cljs$core$IFn$_invoke$arity$0 = (function (){
return pattern.match.pass;
}));

(pattern.match.and.cljs$core$IFn$_invoke$arity$1 = (function (pattern__$1){
return (pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(pattern__$1) : pattern.match.pattern__GT_combinators.call(null,pattern__$1));
}));

(pattern.match.and.cljs$core$IFn$_invoke$arity$variadic = (function (pattern__$1,more){
var matchers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(pattern.match.pattern__GT_combinators,cljs.core.cons(pattern__$1,more));
return (function (frame,xs,succeed){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,matcher){
if(cljs.core.truth_(acc)){
return (matcher.cljs$core$IFn$_invoke$arity$3 ? matcher.cljs$core$IFn$_invoke$arity$3(acc,xs,succeed) : matcher.call(null,acc,xs,succeed));
} else {
return cljs.core.reduced(acc);
}
}),frame,matchers);
});
}));

/** @this {Function} */
(pattern.match.and.cljs$lang$applyTo = (function (seq97935){
var G__97936 = cljs.core.first(seq97935);
var seq97935__$1 = cljs.core.next(seq97935);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97936,seq97935__$1);
}));

(pattern.match.and.cljs$lang$maxFixedArity = (1));

/**
 * Takes a `pattern` and returns a matcher that will apply its arguments to the
 *   `pattern`. The returned pattern will succeed with the original frame if
 *   `pattern` fails, and fail if `pattern` succeeds.
 */
pattern.match.not = (function pattern$match$not(pattern__$1){
var match = (pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(pattern__$1) : pattern.match.pattern__GT_combinators.call(null,pattern__$1));
return (function (frame,xs,succeed){
if(cljs.core.truth_((match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(frame,xs,succeed) : match.call(null,frame,xs,succeed)))){
return null;
} else {
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame) : succeed.call(null,frame));
}
});
});
/**
 * Takes a matcher and returns `f` with its metadata modified such
 *   that [[segment-matcher?]] will return `true` when applied to `f`.
 */
pattern.match.as_segment_matcher = (function pattern$match$as_segment_matcher(f){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,new cljs.core.Keyword("pattern.match","segment?","pattern.match/segment?",-1573061424),true);
});
/**
 * Returns true if the supplied matcher `f` is a segment matcher, false
 *   otherwise.
 */
pattern.match.segment_matcher_QMARK_ = (function pattern$match$segment_matcher_QMARK_(f){
return new cljs.core.Keyword("pattern.match","segment?","pattern.match/segment?",-1573061424).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(f),false);
});
/**
 * Takes a binding variable `sym` and returns a matcher that calls its success
 *   continuation with successively longer prefixes of its (sequential) data input
 *   bound to `sym` inside the frame.
 * 
 *   If `sym` is already present in the frame, the returned matcher only succeeds
 *   if the bound value is a prefix of the data argument `xs`.
 * 
 *   If `sym` matches the wildcard symbol `_`, the behavior is the same, but no new
 *   binding is introduced.
 * 
 *   NOTE: the returned matcher will call its success continuation with TWO
 *   arguments; the new frame and the remaining elements in `xs`. This is a
 *   different contract than all other matchers, making `segment` appropriate for
 *   use inside `sequence`.
 */
pattern.match.segment = (function pattern$match$segment(sym){
return pattern.match.as_segment_matcher((function pattern$match$segment_$_segment_match(frame,xs,succeed){
var xs__$1 = (function (){var or__4253__auto__ = xs;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.sequential_QMARK_(xs__$1)){
var temp__5751__auto__ = (function (){var and__4251__auto__ = (!(pattern.syntax.wildcard_QMARK_(sym)));
if(and__4251__auto__){
return (frame.cljs$core$IFn$_invoke$arity$1 ? frame.cljs$core$IFn$_invoke$arity$1(sym) : frame.call(null,sym));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var binding = temp__5751__auto__;
var binding_count = cljs.core.count(binding);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(binding_count,xs__$1),binding)){
var G__97939 = frame;
var G__97940 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(binding_count,xs__$1);
return (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(G__97939,G__97940) : succeed.call(null,G__97939,G__97940));
} else {
return null;
}
} else {
var prefix = cljs.core.PersistentVector.EMPTY;
var suffix = xs__$1;
while(true){
var new_frame = ((pattern.syntax.wildcard_QMARK_(sym))?frame:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,sym,prefix));
var or__4253__auto__ = (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(new_frame,suffix) : succeed.call(null,new_frame,suffix));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = cljs.core.seq(suffix);
if(and__4251__auto__){
var G__98239 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,cljs.core.first(suffix));
var G__98240 = cljs.core.next(suffix);
prefix = G__98239;
suffix = G__98240;
continue;
} else {
return and__4251__auto__;
}
}
break;
}
}
} else {
return null;
}
}));
});
/**
 * Similar to [[segment]], but matches the entire remaining sequential argument
 *   `xs`. Fails if its input is not sequential, or `sym` is already bound to some
 *   other variable or non-equal sequence.
 * 
 *   If `sym` matches the wildcard symbol `_`, succeeds if `xs` is a sequence and
 *   introduces NO new bindings.
 * 
 *   Calls its continuation with the new frame and `nil`, always.
 */
pattern.match.entire_segment = (function pattern$match$entire_segment(sym){
return pattern.match.as_segment_matcher((function pattern$match$entire_segment_$_entire_segment_match(frame,xs,succeed){
var xs__$1 = (function (){var or__4253__auto__ = xs;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.sequential_QMARK_(xs__$1)){
if(pattern.syntax.wildcard_QMARK_(sym)){
return (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(frame,null) : succeed.call(null,frame,null));
} else {
var temp__5751__auto__ = (frame.cljs$core$IFn$_invoke$arity$1 ? frame.cljs$core$IFn$_invoke$arity$1(sym) : frame.call(null,sym));
if(cljs.core.truth_(temp__5751__auto__)){
var binding = temp__5751__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xs__$1,binding)){
return (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(frame,null) : succeed.call(null,frame,null));
} else {
return null;
}
} else {
var G__97941 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,sym,xs__$1);
var G__97942 = null;
return (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(G__97941,G__97942) : succeed.call(null,G__97941,G__97942));
}
}
} else {
return null;
}
}));
});
/**
 * Returns a matcher that takes a binding variable `sym`, and succeeds if it's
 *   called with a sequential data argument with a prefix that is the REVERSE of
 *   the sequence bound to `sym` in `frame`.
 * 
 *   Fails if any of the following are true:
 * 
 *   - `sym` is not bound in the frame
 *   - `sym` is bound to something other than a vector prefix created by `segment`
 *   - the data argument does not have a prefix matching the reverse of vector
 *  bound to `sym`.
 */
pattern.match.reverse_segment = (function pattern$match$reverse_segment(sym){
return pattern.match.as_segment_matcher((function pattern$match$reverse_segment_$_reverse_segment_match(frame,xs,succeed){
var xs__$1 = (function (){var or__4253__auto__ = xs;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.sequential_QMARK_(xs__$1)){
var temp__5753__auto__ = (frame.cljs$core$IFn$_invoke$arity$1 ? frame.cljs$core$IFn$_invoke$arity$1(sym) : frame.call(null,sym));
if(cljs.core.truth_(temp__5753__auto__)){
var binding = temp__5753__auto__;
if(cljs.core.vector_QMARK_(binding)){
var binding_count = cljs.core.count(binding);
var reversed = cljs.core.rseq(binding);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(binding_count,xs__$1),reversed)){
var G__97943 = frame;
var G__97945 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(binding_count,xs__$1);
return (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(G__97943,G__97945) : succeed.call(null,G__97943,G__97945));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
});
/**
 * Version of [[sequence]] that takes an explicit sequence of `patterns`, vs the
 *   multi-arity version. See [[sequence]] for documentation.
 */
pattern.match.sequence_STAR_ = (function pattern$match$sequence_STAR_(patterns){
return (function pattern$match$sequence_STAR__$_sequence_match(frame,xs,succeed){
if(cljs.core.sequential_QMARK_(xs)){
var step = (function pattern$match$sequence_STAR__$_sequence_match_$_step(frame__$1,items,matchers){
var try_elem = (function pattern$match$sequence_STAR__$_sequence_match_$_step_$_try_elem(matcher){
var G__97973 = frame__$1;
var G__97974 = cljs.core.first(items);
var G__97975 = (function (new_frame){
return pattern$match$sequence_STAR__$_sequence_match_$_step(new_frame,cljs.core.next(items),cljs.core.next(matchers));
});
return (matcher.cljs$core$IFn$_invoke$arity$3 ? matcher.cljs$core$IFn$_invoke$arity$3(G__97973,G__97974,G__97975) : matcher.call(null,G__97973,G__97974,G__97975));
});
var try_segment = (function pattern$match$sequence_STAR__$_sequence_match_$_step_$_try_segment(matcher){
var G__97980 = frame__$1;
var G__97981 = items;
var G__97982 = (function (new_frame,new_xs){
return pattern$match$sequence_STAR__$_sequence_match_$_step(new_frame,new_xs,cljs.core.next(matchers));
});
return (matcher.cljs$core$IFn$_invoke$arity$3 ? matcher.cljs$core$IFn$_invoke$arity$3(G__97980,G__97981,G__97982) : matcher.call(null,G__97980,G__97981,G__97982));
});
if(cljs.core.truth_(matchers)){
var m = cljs.core.first(matchers);
if(cljs.core.truth_(pattern.match.segment_matcher_QMARK_(m))){
return try_segment(m);
} else {
var and__4251__auto__ = cljs.core.seq(items);
if(and__4251__auto__){
return try_elem(m);
} else {
return and__4251__auto__;
}
}
} else {
if(cljs.core.seq(items)){
return false;
} else {
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame__$1) : succeed.call(null,frame__$1));

}
}
});
var matchers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(pattern.match.pattern__GT_combinators,patterns);
return step(frame,xs,matchers);
} else {
return null;
}
});
});
/**
 * Takes a sequence of patterns and returns a matcher that accepts a sequential
 *   data input, and attempts to match successive items (or segments) in the
 *   sequence with the supplied patterns.
 * 
 *   The returned matcher succeeds if `patterns` can consume all elements, fails
 *   otherwise (or of any of the supplied patterns fails on its argument).
 * 
 *   On success, the returned matcher calls its success continuation with a frame
 *   processed by each pattern in sequence.
 */
pattern.match.sequence = (function pattern$match$sequence(var_args){
var args__4870__auto__ = [];
var len__4864__auto___98259 = arguments.length;
var i__4865__auto___98261 = (0);
while(true){
if((i__4865__auto___98261 < len__4864__auto___98259)){
args__4870__auto__.push((arguments[i__4865__auto___98261]));

var G__98262 = (i__4865__auto___98261 + (1));
i__4865__auto___98261 = G__98262;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return pattern.match.sequence.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(pattern.match.sequence.cljs$core$IFn$_invoke$arity$variadic = (function (patterns){
return pattern.match.sequence_STAR_(patterns);
}));

(pattern.match.sequence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(pattern.match.sequence.cljs$lang$applyTo = (function (seq97985){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97985));
}));

/**
 * Given a pattern (built using the syntax elements described in
 *   `pattern.syntax`), returns a matcher combinator that will successfully match
 *   data structures described by the input pattern, and fail otherwise.
 */
pattern.match.pattern__GT_combinators = (function pattern$match$pattern__GT_combinators(pattern__$1){
if(cljs.core.fn_QMARK_(pattern__$1)){
return pattern__$1;
} else {
if(cljs.core.truth_(pattern.syntax.binding_QMARK_(pattern__$1))){
return pattern.match.bind.cljs$core$IFn$_invoke$arity$2(pattern.syntax.variable_name(pattern__$1),pattern.syntax.restriction(pattern__$1));
} else {
if(cljs.core.truth_(pattern.syntax.segment_QMARK_(pattern__$1))){
return pattern.match.segment(pattern.syntax.variable_name(pattern__$1));
} else {
if(cljs.core.truth_(pattern.syntax.reverse_segment_QMARK_(pattern__$1))){
return pattern.match.reverse_segment(pattern.syntax.reverse_segment_name(pattern__$1));
} else {
if(pattern.syntax.wildcard_QMARK_(pattern__$1)){
return pattern.match.pass;
} else {
if(((cljs.core.seq_QMARK_(pattern__$1)) || (cljs.core.vector_QMARK_(pattern__$1)))){
if(cljs.core.empty_QMARK_(pattern__$1)){
return pattern.match.eq.cljs$core$IFn$_invoke$arity$1(pattern__$1);
} else {
return pattern.match.sequence_STAR_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(pattern.match.pattern__GT_combinators,cljs.core.butlast(pattern__$1)),(function (){var p = cljs.core.last(pattern__$1);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(pattern.syntax.segment_QMARK_(p))?pattern.match.entire_segment(pattern.syntax.variable_name(p)):(pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(p) : pattern.match.pattern__GT_combinators.call(null,p)))], null);
})()));
}
} else {
return pattern.match.eq.cljs$core$IFn$_invoke$arity$1(pattern__$1);

}
}
}
}
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
pattern.match.Failure = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(pattern.match.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(pattern.match.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k98007,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__98026 = k98007;
switch (G__98026) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k98007,else__4505__auto__);

}
}));

(pattern.match.Failure.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__98040){
var vec__98042 = p__98040;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98042,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98042,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(pattern.match.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#pattern.match.Failure{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(pattern.match.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__98006){
var self__ = this;
var G__98006__$1 = this;
return (new cljs.core.RecordIter((0),G__98006__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(pattern.match.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(pattern.match.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new pattern.match.Failure(self__.__meta,self__.__extmap,self__.__hash));
}));

(pattern.match.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(pattern.match.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1240217339 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(pattern.match.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this98008,other98009){
var self__ = this;
var this98008__$1 = this;
return (((!((other98009 == null)))) && ((((this98008__$1.constructor === other98009.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98008__$1.__extmap,other98009.__extmap)))));
}));

(pattern.match.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new pattern.match.Failure(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(pattern.match.Failure.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k98007){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k98007);
}));

(pattern.match.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__98006){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__98108 = cljs.core.keyword_identical_QMARK_;
var expr__98109 = k__4511__auto__;
return (new pattern.match.Failure(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__98006),null));
}));

(pattern.match.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(pattern.match.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__98006){
var self__ = this;
var this__4501__auto____$1 = this;
return (new pattern.match.Failure(G__98006,self__.__extmap,self__.__hash));
}));

(pattern.match.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(pattern.match.Failure.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(pattern.match.Failure.cljs$lang$type = true);

(pattern.match.Failure.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"pattern.match/Failure",null,(1),null));
}));

(pattern.match.Failure.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"pattern.match/Failure");
}));

/**
 * Positional factory function for pattern.match/Failure.
 */
pattern.match.__GT_Failure = (function pattern$match$__GT_Failure(){
return (new pattern.match.Failure(null,null,null));
});

/**
 * Factory function for pattern.match/Failure, taking a map of keywords to field values.
 */
pattern.match.map__GT_Failure = (function pattern$match$map__GT_Failure(G__98018){
var extmap__4542__auto__ = (function (){var G__98146 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__98018);
if(cljs.core.record_QMARK_(G__98018)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__98146);
} else {
return G__98146;
}
})();
return (new pattern.match.Failure(null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * Singleton object representing the failure of a matcher to match its
 *   input. Check for failure with [[failed?]]
 */
pattern.match.failure = (new pattern.match.Failure(null,null,null));
/**
 * Returns true if `x` is equivalent to the failure sentinel [[failure]], false
 *   otherwise.
 */
pattern.match.failed_QMARK_ = (function pattern$match$failed_QMARK_(x){
return (x instanceof pattern.match.Failure);
});
/**
 * Takes a `pattern` or matcher combinator, and returns a function from a data
 *   object to either:
 * 
 *   - A successful map of bindings extracted by matching the supplied `pattern` or
 *  combinator to the input data
 *   - An explicit `failure` object
 * 
 *   Check for failure with [[failed?]].
 * 
 *   Optionally, you can supply a predicate `pred`. `pred` takes the map of
 *   bindings from a successful match and returns either:
 * 
 *   - `nil`, `false` or the explicit `failure` object to force a match failure,
 *  potentially causing a backtrack back into the data
 *   - a map of NEW bindings to merge into the binding map (and signal success)
 * 
 *   Any other truthy value signals success with no new bindings.
 */
pattern.match.matcher = (function pattern$match$matcher(var_args){
var G__98156 = arguments.length;
switch (G__98156) {
case 1:
return pattern.match.matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pattern.match.matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pattern.match.matcher.cljs$core$IFn$_invoke$arity$1 = (function (pattern__$1){
var match = pattern.match.pattern__GT_combinators(pattern__$1);
return (function (data){
var or__4253__auto__ = (function (){var G__98160 = cljs.core.PersistentArrayMap.EMPTY;
var G__98161 = data;
var G__98162 = cljs.core.identity;
return (match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(G__98160,G__98161,G__98162) : match.call(null,G__98160,G__98161,G__98162));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.match.failure;
}
});
}));

(pattern.match.matcher.cljs$core$IFn$_invoke$arity$2 = (function (pattern__$1,pred){
var match = pattern.match.pattern__GT_combinators(pattern__$1);
var success = (function (frame){
var temp__5753__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(frame) : pred.call(null,frame));
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
if(cljs.core.truth_(pattern.match.and.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.match.not(pattern.match.failed_QMARK_(m))], 0)))){
if(cljs.core.map_QMARK_(m)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frame,m], 0));
} else {
return frame;
}
} else {
return null;
}
} else {
return null;
}
});
return (function (data){
var or__4253__auto__ = (function (){var G__98163 = cljs.core.PersistentArrayMap.EMPTY;
var G__98164 = data;
var G__98165 = success;
return (match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(G__98163,G__98164,G__98165) : match.call(null,G__98163,G__98164,G__98165));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.match.failure;
}
});
}));

(pattern.match.matcher.cljs$lang$maxFixedArity = 2);

/**
 * Convenience function that creates a matcher from the supplied `pattern` (and
 *   optional predicate `pred`) and immediately applies it to `data`.
 * 
 *   Equivalent to:
 * 
 *   ```clojure
 *   ((matcher pattern pred) data)
 *   ```
 */
pattern.match.match = (function pattern$match$match(var_args){
var G__98173 = arguments.length;
switch (G__98173) {
case 2:
return pattern.match.match.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pattern.match.match.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pattern.match.match.cljs$core$IFn$_invoke$arity$2 = (function (pattern__$1,data){
return pattern.match.matcher.cljs$core$IFn$_invoke$arity$1(pattern__$1)(data);
}));

(pattern.match.match.cljs$core$IFn$_invoke$arity$3 = (function (pattern__$1,pred,data){
return pattern.match.matcher.cljs$core$IFn$_invoke$arity$2(pattern__$1,pred)(data);
}));

(pattern.match.match.cljs$lang$maxFixedArity = 3);

/**
 * Takes a `pattern` and side-effecting callback function `f`, and returns a
 *   matcher that calls `f` with a map of bindings for every possible match of
 *   `pattern` to its input data.
 * 
 *   For a convenience function that applies the matcher to data immediately,
 *   see [[foreach]].
 * 
 *   NOTE: If you pass a segment matcher, `f` must accept two arguments - the
 *   binding map, and the sequence of all remaining items that the segment
 *   matcher rejected.
 */
pattern.match.foreach_matcher = (function pattern$match$foreach_matcher(pattern__$1,f){
var match = pattern.match.pattern__GT_combinators(pattern__$1);
var cont = (function() {
var G__98291 = null;
var G__98291__1 = (function (frame){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(frame) : f.call(null,frame));

return false;
});
var G__98291__2 = (function (frame,xs){
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(frame,xs) : f.call(null,frame,xs));

return false;
});
G__98291 = function(frame,xs){
switch(arguments.length){
case 1:
return G__98291__1.call(this,frame);
case 2:
return G__98291__2.call(this,frame,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__98291.cljs$core$IFn$_invoke$arity$1 = G__98291__1;
G__98291.cljs$core$IFn$_invoke$arity$2 = G__98291__2;
return G__98291;
})()
;
return (function (data){
var G__98177 = cljs.core.PersistentArrayMap.EMPTY;
var G__98178 = data;
var G__98179 = cont;
return (match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(G__98177,G__98178,G__98179) : match.call(null,G__98177,G__98178,G__98179));
});
});
/**
 * Convenience function that creates a [[foreach-matcher]] from the supplied
 *   `pattern` and callback `f` and immediately applies it to `data`.
 * 
 *   Equivalent to:
 * 
 *   ```clojure
 *   ((foreach-matcher pattern pred) data)
 *   ```
 */
pattern.match.foreach = (function pattern$match$foreach(pattern__$1,f,data){
return pattern.match.foreach_matcher(pattern__$1,f)(data);
});
/**
 * Takes a `pattern` and callback function `f`, and returns a matcher that takes a
 *   `data` argument and returns a sequence of every possible match of `pattern` to
 *   the data.
 * 
 *   For a convenience function that applies the matcher to data immediately,
 *   see [[all-results]].
 * 
 *   NOTE: If you pass a segment matcher, `f` must accept two arguments - the
 *   binding map, and the sequence of all remaining items that the segment
 *   matcher rejected.
 */
pattern.match.all_results_matcher = (function pattern$match$all_results_matcher(pattern__$1){
var match = pattern.match.pattern__GT_combinators(pattern__$1);
return (function (data){
var results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var cont = (function() {
var G__98295 = null;
var G__98295__1 = (function (frame){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,frame);

return false;
});
var G__98295__2 = (function (frame,xs){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame,xs], null));

return false;
});
G__98295 = function(frame,xs){
switch(arguments.length){
case 1:
return G__98295__1.call(this,frame);
case 2:
return G__98295__2.call(this,frame,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__98295.cljs$core$IFn$_invoke$arity$1 = G__98295__1;
G__98295.cljs$core$IFn$_invoke$arity$2 = G__98295__2;
return G__98295;
})()
;
var G__98182_98296 = cljs.core.PersistentArrayMap.EMPTY;
var G__98183_98297 = data;
var G__98184_98298 = cont;
(match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(G__98182_98296,G__98183_98297,G__98184_98298) : match.call(null,G__98182_98296,G__98183_98297,G__98184_98298));

return cljs.core.deref(results);
});
});
/**
 * Convenience function that creates an [[all-results-matcher]] from the supplied
 *   `pattern` and immediately applies it to `data`.
 * 
 *   Equivalent to:
 * 
 *   ```clojure
 *   ((all-results-matcher pattern pred) data)
 *   ```
 */
pattern.match.all_results = (function pattern$match$all_results(pattern__$1,data){
return pattern.match.all_results_matcher(pattern__$1)(data);
});

//# sourceMappingURL=pattern.match.js.map
