import "./cljs_env.js";
goog.provide('editscript.core');
/**
 * Create an editscript to represent the transformations needed to turn a
 *   Clojure data structure `a` into another Clojure data structure `b`.
 * 
 *   This function accepts any nested Clojure data structures. In Clojure, those
 *   implement `IPersistentVector`, `IPersistentMap`, `IPersistentList`,
 *   and `IPersistentSet` will be treated as collections. The same are true for
 *   the corresponding deftypes in Clojurescript, such as `PersistentVector`,
 *   `PersistentMap`, and so on. Anything else are treated as atomic values.
 * 
 *   The editscript is represented as a vector of basic operations: add `:+`,
 *   delete `:-`, and replace `:r`. Each operation also include a path to the
 *   location of the operation, which is similar to the path vector in `update-in`.
 *   However, editscript path works for all above four collection types, not just
 *   associative ones. For `:+` and `:r`, a new value is also required.
 * 
 *   The following options are supported in the option map of the last argument:
 * 
 *   * `:algo`  chooses the diff algorithm. The value can be `:a-star` (default) or
 *   `:quick`; `:a-star` algorithm minimize the size of the resulting editscript,
 *   `:quick` algorithm is much faster, but does not producing diff with minimal size.
 * 
 *   * `:str-diff` specifies the granularity of string diffing. It may have one of
 *   the following values:
 *     - `:none`  (default), do not perform string diffing, the fastest.
 *     - `:line`, diff by line.
 *     - `:word`, diff by word,
 *     - `:character`, diff by character, the slowest.
 * 
 *   * `:str-change-limit`, a less than `1.0` and greater than `0.0` double value,
 *   representing percentage (default `0.2`). Only diff string when less than given
 *   percentage is changed, otherwise replace the string.
 * 
 *   * `:vec-timeout` specifies a timeout in milliseconds (default `1000`),
 *   for diffing vectors, lists or strings, as it has O(n^2) running time. When
 *   timed-out, a replacement operation will be used.
 */
editscript.core.diff = (function editscript$core$diff(var_args){
var G__75931 = arguments.length;
switch (G__75931) {
case 2:
return editscript.core.diff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return editscript.core.diff.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(editscript.core.diff.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return editscript.core.diff.cljs$core$IFn$_invoke$arity$3(a,b,null);
}));

(editscript.core.diff.cljs$core$IFn$_invoke$arity$3 = (function (a,b,p__75933){
var map__75934 = p__75933;
var map__75934__$1 = cljs.core.__destructure_map(map__75934);
var opts = map__75934__$1;
var algo = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75934__$1,new cljs.core.Keyword(null,"algo","algo",1472048382),new cljs.core.Keyword(null,"a-star","a-star",-171330865));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(algo,new cljs.core.Keyword(null,"a-star","a-star",-171330865))){
return editscript.diff.a_star.diff.cljs$core$IFn$_invoke$arity$3(a,b,opts);
} else {
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3(a,b,opts);
}
}));

(editscript.core.diff.cljs$lang$maxFixedArity = 3);

/**
 * Apply the editscript `script` on `a` to produce `b`, assuming the
 *   script is the results of running  `(diff a b)`, such that
 *   `(= b (patch a (diff a b)))` is true
 */
editscript.core.patch = (function editscript$core$patch(a,script){
if((script instanceof editscript.edit.EditScript)){
} else {
throw (new Error("Assert failed: (instance? editscript.edit.EditScript script)"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__75974_SHARP_,p2__75975_SHARP_){
return editscript.patch.patch_STAR_(p1__75974_SHARP_,p2__75975_SHARP_);
}),a,editscript.edit.get_edits(script));
});
/**
 * Check if the given vector represents valid edits that can be turned
 * into an EditScript
 */
editscript.core.valid_edits_QMARK_ = editscript.edit.valid_edits_QMARK_;
/**
 * Concate that editscript onto this editscript, return the new
 * editscript
 */
editscript.core.combine = editscript.edit.combine;
/**
 * Report the size of the editscript
 */
editscript.core.get_size = editscript.edit.get_size;
/**
 * Report the edit distance of the editscript, i.e. number of
 * operations
 */
editscript.core.edit_distance = editscript.edit.edit_distance;
/**
 * Report the edits of the editscript as a vector
 */
editscript.core.get_edits = editscript.edit.get_edits;
/**
 * Report the number of additions in the editscript
 */
editscript.core.get_adds_num = editscript.edit.get_adds_num;
/**
 * Report the number of deletes in the editscript
 */
editscript.core.get_dels_num = editscript.edit.get_dels_num;
/**
 * Report the edits of replacements in the editscript
 */
editscript.core.get_reps_num = editscript.edit.get_reps_num;
/**
 * Create an EditScript instance from a vector of edits, like those
 * obtained through calling `get-edits` on an EditScript
 */
editscript.core.edits__GT_script = editscript.edit.edits__GT_script;

//# sourceMappingURL=editscript.core.js.map
