goog.provide('pattern.rule');
/**
 * Convenient predicate that always passes.
 */
pattern.rule._EQ__GT_ = cljs.core.constantly(true);
/**
 * Predicate that fails for all inputs.
 */
pattern.rule._BANG__EQ__GT_ = cljs.core.constantly(false);
pattern.rule.succeed = pattern.consequence.succeed;
pattern.rule.failure = pattern.match.failure;
pattern.rule.failed_QMARK_ = pattern.match.failed_QMARK_;
/**
 * Builds the pattern portion of a rule from the supplied pattern form or matcher
 *   combinator and optional predicate `pred`.
 * 
 *   See [[pattern.syntax]] for the allowed syntax pattern, or [[pattern.match]]
 *   for details on matcher combinators.
 * 
 *   See [[match/matcher]] for more detailed documentation.
 */
pattern.rule.pattern_STAR_ = (function pattern$rule$pattern_STAR_(var_args){
var G__97240 = arguments.length;
switch (G__97240) {
case 1:
return pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (form){
return pattern.match.matcher.cljs$core$IFn$_invoke$arity$1(form);
}));

(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (form,pred){
if(cljs.core.truth_((function (){var and__4251__auto__ = pred;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pred,pattern.rule._EQ__GT_);
} else {
return and__4251__auto__;
}
})())){
return pattern.match.matcher.cljs$core$IFn$_invoke$arity$2(form,pred);
} else {
return pattern.match.matcher.cljs$core$IFn$_invoke$arity$1(form);
}
}));

(pattern.rule.pattern_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Functional version of [[rule]]. See [[rule]] for documentation.
 */
pattern.rule.rule_STAR_ = (function pattern$rule$rule_STAR_(match,handler){
var match__$1 = ((cljs.core.fn_QMARK_(match))?match:pattern.match.matcher.cljs$core$IFn$_invoke$arity$1(match));
return (function (data){
var result = (match__$1.cljs$core$IFn$_invoke$arity$1 ? match__$1.cljs$core$IFn$_invoke$arity$1(data) : match__$1.call(null,data));
if(pattern.match.failed_QMARK_(result)){
return pattern.match.failure;
} else {
return pattern.consequence.unwrap((function (){var or__4253__auto__ = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(result) : handler.call(null,result));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.match.failure;
}
})());
}
});
});
/**
 * Returns compiled, macro-ready input for [[rule*]] based on the contract
 *   described by [[rule]].
 */
pattern.rule.compile_rule = (function pattern$rule$compile_rule(var_args){
var G__97251 = arguments.length;
switch (G__97251) {
case 2:
return pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$2 = (function (p,consequent_fn){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("pattern.rule","rule*","pattern.rule/rule*",-985638908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("pattern.rule","pattern","pattern.rule/pattern",1723683132,null),null,(1),null)),(new cljs.core.List(null,p,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,consequent_fn,null,(1),null))], 0))));
}));

(pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$3 = (function (p,pred,skeleton){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("pattern.rule","rule*","pattern.rule/rule*",-985638908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("pattern.rule","pattern","pattern.rule/pattern",1723683132,null),null,(1),null)),(new cljs.core.List(null,p,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("pattern.rule","consequence","pattern.rule/consequence",1915687283,null),null,(1),null)),(new cljs.core.List(null,skeleton,null,(1),null))))),null,(1),null))], 0))));
}));

(pattern.rule.compile_rule.cljs$lang$maxFixedArity = 3);

/**
 * Rule that always succeeds by returning its input data unchanged.
 */
pattern.rule.pass = (function pattern$rule$pass(data){
return data;
});
/**
 * Rule that always fails with an explicit `failure`, no matter the input.
 */
pattern.rule.fail = (function pattern$rule$fail(_){
return pattern.rule.failure;
});
/**
 * Returns a rule that will pass its input data on unchanged if `(f data)` returns
 *   true and fail otherwise.
 */
pattern.rule.predicate = (function pattern$rule$predicate(f){
return (function (data){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data)))){
return data;
} else {
return pattern.rule.failure;
}
});
});
/**
 * Returns a rule that matches any input and always returns `x`.
 */
pattern.rule.return$ = (function pattern$rule$return(x){
return (function (_){
return x;
});
});
/**
 * Takes a rule `r` and returns a new rule that calls `r` with its input.
 * 
 *   The returned rule returns:
 * 
 *   - `(succeed-r (r data)) if `(r data)` is successful,
 *   - `(fail-r data) otherwise.
 */
pattern.rule.branch = (function pattern$rule$branch(r,succeed_r,fail_r){
return (function (data){
var result = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(data) : r.call(null,data));
if(cljs.core.truth_((pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : pattern.rule.failed_QMARK_.call(null,result)))){
return (fail_r.cljs$core$IFn$_invoke$arity$1 ? fail_r.cljs$core$IFn$_invoke$arity$1(data) : fail_r.call(null,data));
} else {
return (succeed_r.cljs$core$IFn$_invoke$arity$1 ? succeed_r.cljs$core$IFn$_invoke$arity$1(result) : succeed_r.call(null,result));
}
});
});
/**
 * Identical to the multi-arity [[choice]], but accepts an explicit sequence.
 */
pattern.rule.choice_STAR_ = (function pattern$rule$choice_STAR_(rules){
return (function (data){
var rules__$1 = rules;
while(true){
if(cljs.core.empty_QMARK_(rules__$1)){
return pattern.rule.failure;
} else {
var answer = (function (){var fexpr__97261 = cljs.core.first(rules__$1);
return (fexpr__97261.cljs$core$IFn$_invoke$arity$1 ? fexpr__97261.cljs$core$IFn$_invoke$arity$1(data) : fexpr__97261.call(null,data));
})();
if(cljs.core.truth_((pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(answer) : pattern.rule.failed_QMARK_.call(null,answer)))){
var G__97333 = cljs.core.rest(rules__$1);
rules__$1 = G__97333;
continue;
} else {
return answer;
}
}
break;
}
});
});
/**
 * Accepts any number of `rules` and returns a new `rule` that attempts to apply
 *   each rule in `rules` to its input data. Returns the first non-failing rule's
 *   result, or `failure` if no rule succeeds.
 * 
 *   NOTE: The zero-arity `(choice)` returns [[fail]], a rule that fails for any
 *   input.
 * 
 *   See [[choice*]] for an identical function that accepts an explicit sequence.
 */
pattern.rule.choice = (function pattern$rule$choice(var_args){
var G__97265 = arguments.length;
switch (G__97265) {
case 0:
return pattern.rule.choice.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pattern.rule.choice.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___97335 = arguments.length;
var i__4865__auto___97336 = (0);
while(true){
if((i__4865__auto___97336 < len__4864__auto___97335)){
args_arr__4885__auto__.push((arguments[i__4865__auto___97336]));

var G__97337 = (i__4865__auto___97336 + (1));
i__4865__auto___97336 = G__97337;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return pattern.rule.choice.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(pattern.rule.choice.cljs$core$IFn$_invoke$arity$0 = (function (){
return pattern.rule.fail;
}));

(pattern.rule.choice.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(pattern.rule.choice.cljs$core$IFn$_invoke$arity$variadic = (function (r,rs){
return pattern.rule.choice_STAR_(cljs.core.cons(r,rs));
}));

/** @this {Function} */
(pattern.rule.choice.cljs$lang$applyTo = (function (seq97263){
var G__97264 = cljs.core.first(seq97263);
var seq97263__$1 = cljs.core.next(seq97263);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97264,seq97263__$1);
}));

(pattern.rule.choice.cljs$lang$maxFixedArity = (1));

/**
 * Identical to the multi-arity [[pipe]], but accepts an explicit sequence.
 */
pattern.rule.pipe_STAR_ = (function pattern$rule$pipe_STAR_(rules){
return (function (data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev,r){
var result = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(prev) : r.call(null,prev));
if(cljs.core.truth_((pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : pattern.rule.failed_QMARK_.call(null,result)))){
return cljs.core.reduced(pattern.rule.failure);
} else {
return result;
}
}),data,rules);
});
});
/**
 * Accepts any number of `rules` and returns a new `rule` that attempts to pipe
 *   its input `data` through each rule in `rules`. Only succeeds if every rule
 *   succeeds on the previous rule's successful output.
 * 
 *   NOTE: The zero-arity `(pipe)` returns [[pass]], a rule that succeeds for any
 *   input by returning the input unchanged.
 * 
 *   See [[pipe*]] for an identical function that accepts an explicit sequence.
 */
pattern.rule.pipe = (function pattern$rule$pipe(var_args){
var G__97272 = arguments.length;
switch (G__97272) {
case 0:
return pattern.rule.pipe.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pattern.rule.pipe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___97339 = arguments.length;
var i__4865__auto___97340 = (0);
while(true){
if((i__4865__auto___97340 < len__4864__auto___97339)){
args_arr__4885__auto__.push((arguments[i__4865__auto___97340]));

var G__97341 = (i__4865__auto___97340 + (1));
i__4865__auto___97340 = G__97341;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return pattern.rule.pipe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(pattern.rule.pipe.cljs$core$IFn$_invoke$arity$0 = (function (){
return pattern.rule.pass;
}));

(pattern.rule.pipe.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(pattern.rule.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (r,rs){
return pattern.rule.pipe_STAR_(cljs.core.cons(r,rs));
}));

/** @this {Function} */
(pattern.rule.pipe.cljs$lang$applyTo = (function (seq97270){
var G__97271 = cljs.core.first(seq97270);
var seq97270__$1 = cljs.core.next(seq97270);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97271,seq97270__$1);
}));

(pattern.rule.pipe.cljs$lang$maxFixedArity = (1));

/**
 * Returns a rule that applies the rule `r` iteratively `n` times to the input
 *   data, failing if any application fails.
 * 
 *   For example, these forms are equivalent, except that the [[n-times]] version
 *   will fail immediately if any application fails vs passing on its failure:
 * 
 *   ```clojure
 *   (n-times 3 my-rule)
 *   (fn [data]
 *  (my-rule (my-rule (my-rule data))))
 *   ```
 */
pattern.rule.n_times = (function pattern$rule$n_times(n,r){
return pattern.rule.pipe_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,r));
});
/**
 * Returns `true` if `r` was marked as an 'attempt' rule, ie, a rule that will
 *   never fail, but return its input on a failed match.
 */
pattern.rule.attempt_QMARK_ = (function pattern$rule$attempt_QMARK_(r){
return new cljs.core.Keyword("pattern.rule","attempt?","pattern.rule/attempt?",670866749).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(r),false);
});
/**
 * Marks the supplied rule as an 'attempt' rule that won't fail.
 */
pattern.rule.as_attempt = (function pattern$rule$as_attempt(r){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(r,cljs.core.assoc,new cljs.core.Keyword("pattern.rule","attempt?","pattern.rule/attempt?",670866749),true);
});
/**
 * Takes a rule `r` and returns a new rule that return either `(r data)` if `r` is
 *   successful, or its original input on failure.
 * 
 *   NOTE that the returned rule will never fail! This makes it inappropriate to
 *   use with [[choice]], for example, if you expect any rule supplied after this
 *   one to ever be matched. [[attempt]] rules are great choices for the final rule
 *   passed to [[choice]], however.
 */
pattern.rule.attempt = (function pattern$rule$attempt(r){
if(cljs.core.truth_(pattern.rule.attempt_QMARK_(r))){
return r;
} else {
return pattern.rule.as_attempt(pattern.rule.choice.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.pass], 0)));
}
});
/**
 * Takes a predicate function `f` and a rule `r`, and returns a new rule that will
 *   return `(r data)` if `(f data)` is true, fail otherwise.
 */
pattern.rule.guard = (function pattern$rule$guard(f,r){
return pattern.rule.pipe.cljs$core$IFn$_invoke$arity$variadic(pattern.rule.predicate(f),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));
});
/**
 * Similar to `clojure.core/iterate` for rule application.
 * 
 *   Takes a rule `r` and returns a new rule that will return the last non-failing
 *   result of the sequence `[data (r data) (r (r data)) ...]`
 * 
 *   This might be `data` itself if `r` fails on first application. This means that
 *   the returned rule will never fail.
 */
pattern.rule.iterated = (function pattern$rule$iterated(r){
return pattern.rule.as_attempt((function (data){
while(true){
var result = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(data) : r.call(null,data));
if(cljs.core.truth_((pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : pattern.rule.failed_QMARK_.call(null,result)))){
return data;
} else {
var G__97344 = result;
data = G__97344;
continue;
}
break;
}
}));
});
/**
 * Returns a new rule which repeatedly applies `r` as long as `f` continues to
 *   return `true` between the input and output of the rule `r` applied iteratively
 *   to the input `data`.
 * 
 *   See [[until]] for a similar function that treats its predicate differently.
 */
pattern.rule.while$ = (function pattern$rule$while(f,r){
return pattern.rule.as_attempt((function pattern$rule$while_$_rec(data){
return pattern.rule.pipe.cljs$core$IFn$_invoke$arity$variadic(pattern.rule.attempt(r),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (data_STAR_){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(data,data_STAR_) : f.call(null,data,data_STAR_)))){
return pattern$rule$while_$_rec(data_STAR_);
} else {
return data_STAR_;
}
})], 0))(data);
}));
});
/**
 * Returns a new rule which repeatedly applies `r` until `f` returns `true`
 *   between the input and output of the rule `r` applied iteratively to the input
 *   `data`, signaling completion.
 * 
 *   See [[while]] for a similar function that treats its predicate differently.
 */
pattern.rule.until = (function pattern$rule$until(f,r){
return pattern.rule.as_attempt((function (data){
while(true){
var data_STAR_ = (function (){var fexpr__97284 = pattern.rule.attempt(r);
return (fexpr__97284.cljs$core$IFn$_invoke$arity$1 ? fexpr__97284.cljs$core$IFn$_invoke$arity$1(data) : fexpr__97284.call(null,data));
})();
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(data,data_STAR_) : f.call(null,data,data_STAR_)))){
return data_STAR_;
} else {
var G__97345 = data_STAR_;
data = G__97345;
continue;
}
break;
}
}));
});
/**
 * Takes a rule `r` and returns a new rule that applies `r` to `data` iteratively
 *   until (= input (r input)).
 */
pattern.rule.fixed_point = (function pattern$rule$fixed_point(r){
return pattern.rule.until(cljs.core._EQ_,r);
});
/**
 * Takes a rule `r` and returns a new version of `r` tagged with a unique `id`.
 *   The returned rule calls the side-effecting `f` with
 * 
 *   ```clojure
 *   {:id id, :in data}
 *   ```
 * 
 *   Before calling `r` with `data`, and calls `f` with
 * 
 *   ```clojure
 *   {:id id, :out (r data)}
 *   ```
 * 
 *   when the rule returns.
 */
pattern.rule.trace = (function pattern$rule$trace(var_args){
var G__97288 = arguments.length;
switch (G__97288) {
case 1:
return pattern.rule.trace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pattern.rule.trace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pattern.rule.trace.cljs$core$IFn$_invoke$arity$1 = (function (r){
return pattern.rule.trace.cljs$core$IFn$_invoke$arity$2(r,cljs.core.prn);
}));

(pattern.rule.trace.cljs$core$IFn$_invoke$arity$2 = (function (r,f){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("t_");
return (function (data){
var G__97291_97350 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"in","in",-1531184865),data], null);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__97291_97350) : f.call(null,G__97291_97350));

var result = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(data) : r.call(null,data));
var G__97292_97351 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"out","out",-910545517),result], null);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__97292_97351) : f.call(null,G__97292_97351));

return result;
});
}));

(pattern.rule.trace.cljs$lang$maxFixedArity = 2);

/**
 * Given a rule `the-rule` and a possibly-nested expression `expr`, attempts to
 *   apply `the-rule` to all subexpressions in breadth-first order. If the
 *   transformed form is equivalent, returns its input so that [[identical?]]
 *   checks before and after don't break.
 * 
 *   Descends correctly into vectors, sequences and dictionaries.
 * 
 *   NOTE: [[try-subexpressions]] assumes that [[the-rule]] will always succeed,
 *   returning its input on a failed match.
 */
pattern.rule.try_subexpressions = (function pattern$rule$try_subexpressions(the_rule,expr){
if(cljs.core.sequential_QMARK_(expr)){
var processed = cljs.core.map.cljs$core$IFn$_invoke$arity$2(the_rule,expr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expr,processed)){
return expr;
} else {
if(cljs.core.vector_QMARK_(expr)){
return cljs.core.vec(processed);
} else {
return processed;
}
}
} else {
if(cljs.core.map_QMARK_(expr)){
var processed = sicmutils.util.map_vals(the_rule,expr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expr,processed)){
return expr;
} else {
return processed;
}
} else {
return expr;

}
}
});
/**
 * Given some rule `the-rule`, returns a new rule that accepts potentially nested
 *   `data` and applies `the-rule` to all subexpressions in depth-first order, from
 *   the leaves on up.
 * 
 *   The transformation is applied a single time to all subexpressions.
 *   See [[iterated-bottom-up]] for a version that will iterate to convergence.
 */
pattern.rule.bottom_up = (function pattern$rule$bottom_up(the_rule){
var r = pattern.rule.attempt(the_rule);
return pattern.rule.as_attempt((function pattern$rule$bottom_up_$_rec(expression){
var G__97297 = pattern.rule.try_subexpressions(pattern$rule$bottom_up_$_rec,expression);
return (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(G__97297) : r.call(null,G__97297));
}));
});
/**
 * Given some rule `the-rule`, returns a new rule that accepts potentially nested
 *   `data` and applies `the-rule` to all subexpressions on the way down AND back
 *   up a traversal. This is a sort of hybrid of breadth-first, depth-first.
 * 
 *   The transformation is applied a single time to all subexpressions.
 *   See [[iterated-top-down]] for a version that will iterate to convergence.
 */
pattern.rule.top_down = (function pattern$rule$top_down(the_rule){
var r = pattern.rule.attempt(the_rule);
return pattern.rule.as_attempt((function pattern$rule$top_down_$_rec(expr){
var G__97298 = pattern.rule.try_subexpressions(pattern$rule$top_down_$_rec,(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(expr) : r.call(null,expr)));
return (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(G__97298) : r.call(null,G__97298));
}));
});
/**
 * Version of [[bottom-up]] that iterates on each subexpression to convergence
 *   before each subexpression returns. Any change in a subexpression triggers a
 *   new iterated-bottom-up replacement of that subexpression.
 * 
 *   The returned rule keeps an internal memoization cache and will return
 *   immediately for subexpressions it's seen before.
 */
pattern.rule.iterated_bottom_up = (function pattern$rule$iterated_bottom_up(the_rule){
var r = pattern.rule.attempt(the_rule);
var rec = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rec_STAR_ = (function pattern$rule$iterated_bottom_up_$_rec_STAR_(expr){
var processed = pattern.rule.try_subexpressions(cljs.core.deref(rec),expr);
var answer = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(processed) : r.call(null,processed));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(answer,processed)){
return answer;
} else {
var fexpr__97305 = cljs.core.deref(rec);
return (fexpr__97305.cljs$core$IFn$_invoke$arity$1 ? fexpr__97305.cljs$core$IFn$_invoke$arity$1(answer) : fexpr__97305.call(null,answer));
}
});
cljs.core.reset_BANG_(rec,cljs.core.memoize(rec_STAR_));

return pattern.rule.as_attempt(cljs.core.deref(rec));
});
/**
 * Version of [[top-down]] that iterates on each subexpression to convergence
 *   before each subexpression returns. Any change in a subexpression triggers a
 *   new iterated-top-down replacement of that subexpression.
 * 
 *   The returned rule keeps an internal memoization cache and will return
 *   immediately for subexpressions it's seen before.
 */
pattern.rule.iterated_top_down = (function pattern$rule$iterated_top_down(the_rule){
var r = pattern.rule.attempt(the_rule);
var rec = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rec_STAR_ = (function pattern$rule$iterated_top_down_$_rec_STAR_(expr){
var answer = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(expr) : r.call(null,expr));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(answer,expr)){
var processed = pattern.rule.try_subexpressions(cljs.core.deref(rec),expr);
var answer__$1 = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(processed) : r.call(null,processed));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(answer__$1,processed)){
return answer__$1;
} else {
var fexpr__97308 = cljs.core.deref(rec);
return (fexpr__97308.cljs$core$IFn$_invoke$arity$1 ? fexpr__97308.cljs$core$IFn$_invoke$arity$1(answer__$1) : fexpr__97308.call(null,answer__$1));
}
} else {
var fexpr__97309 = cljs.core.deref(rec);
return (fexpr__97309.cljs$core$IFn$_invoke$arity$1 ? fexpr__97309.cljs$core$IFn$_invoke$arity$1(answer) : fexpr__97309.call(null,answer));
}
});
cljs.core.reset_BANG_(rec,cljs.core.memoize(rec_STAR_));

return pattern.rule.as_attempt(cljs.core.deref(rec));
});
/**
 * Given some number of `rules`, returns a new rule that will act like [[choice]]
 *   and attempt to apply each rule to the input data, returning the first match.
 * 
 *   If all `rules` fail, the returned rule will return its input `data`.
 * 
 *   See [[ruleset]] for a macro that allows inline rule definition.
 */
pattern.rule.ruleset_STAR_ = (function pattern$rule$ruleset_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___97358 = arguments.length;
var i__4865__auto___97359 = (0);
while(true){
if((i__4865__auto___97359 < len__4864__auto___97358)){
args__4870__auto__.push((arguments[i__4865__auto___97359]));

var G__97360 = (i__4865__auto___97359 + (1));
i__4865__auto___97359 = G__97360;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return pattern.rule.attempt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pattern.rule.choice,rules));
}));

(pattern.rule.ruleset_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(pattern.rule.ruleset_STAR_.cljs$lang$applyTo = (function (seq97310){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97310));
}));

/**
 * Given some number of `rules`, returns a new rule that will attempt to apply
 *   each rule to its input expression (and every subexpression of the input,
 *   bottom up), iterating until no rule causes any change in any level of the
 *   supplied expression.
 */
pattern.rule.rule_simplifier = (function pattern$rule$rule_simplifier(var_args){
var args__4870__auto__ = [];
var len__4864__auto___97365 = arguments.length;
var i__4865__auto___97366 = (0);
while(true){
if((i__4865__auto___97366 < len__4864__auto___97365)){
args__4870__auto__.push((arguments[i__4865__auto___97366]));

var G__97367 = (i__4865__auto___97366 + (1));
i__4865__auto___97366 = G__97367;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return pattern.rule.iterated_bottom_up(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pattern.rule.pipe,cljs.core.map.cljs$core$IFn$_invoke$arity$2(pattern.rule.attempt,rules)));
}));

(pattern.rule.rule_simplifier.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(pattern.rule.rule_simplifier.cljs$lang$applyTo = (function (seq97316){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97316));
}));

/**
 * Alias for [[rule-simplifier]].
 */
pattern.rule.term_rewriting = (function pattern$rule$term_rewriting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___97368 = arguments.length;
var i__4865__auto___97369 = (0);
while(true){
if((i__4865__auto___97369 < len__4864__auto___97368)){
args__4870__auto__.push((arguments[i__4865__auto___97369]));

var G__97370 = (i__4865__auto___97369 + (1));
i__4865__auto___97369 = G__97370;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return pattern.rule.term_rewriting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(pattern.rule.term_rewriting.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pattern.rule.rule_simplifier,rules);
}));

(pattern.rule.term_rewriting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(pattern.rule.term_rewriting.cljs$lang$applyTo = (function (seq97320){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97320));
}));


//# sourceMappingURL=pattern.rule.js.map
