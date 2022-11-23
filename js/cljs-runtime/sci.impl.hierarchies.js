goog.provide('sci.impl.hierarchies');
sci.impl.hierarchies.global_hierarchy = (function sci$impl$hierarchies$global_hierarchy(ctx){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.Symbol(null,"global-hierarchy","global-hierarchy",-2014004345,null)], null));
});
sci.impl.hierarchies.__GT_tag = (function sci$impl$hierarchies$__GT_tag(x){
if((x instanceof sci.lang.Type)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(x),cljs.core.name(x));
} else {
return x;
}
});
sci.impl.hierarchies.derive_STAR_ = (function sci$impl$hierarchies$derive_STAR_(var_args){
var G__89850 = arguments.length;
switch (G__89850) {
case 3:
return sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ctx,tag,parent){
var tag_89872__$1 = sci.impl.hierarchies.__GT_tag(tag);
sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$2(sci.impl.hierarchies.global_hierarchy(ctx),(function (h){
return cljs.core.derive.cljs$core$IFn$_invoke$arity$3(h,tag_89872__$1,parent);
}));

return null;
}));

(sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_ctx,h,tag,parent){
var tag__$1 = sci.impl.hierarchies.__GT_tag(tag);
return cljs.core.derive.cljs$core$IFn$_invoke$arity$3(h,tag__$1,parent);
}));

(sci.impl.hierarchies.derive_STAR_.cljs$lang$maxFixedArity = 4);

sci.impl.hierarchies.underive_STAR_ = (function sci$impl$hierarchies$underive_STAR_(var_args){
var G__89860 = arguments.length;
switch (G__89860) {
case 3:
return sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ctx,tag,parent){
var tag_89874__$1 = sci.impl.hierarchies.__GT_tag(tag);
sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$2(sci.impl.hierarchies.global_hierarchy(ctx),(function (h){
return cljs.core.underive.cljs$core$IFn$_invoke$arity$3(h,tag_89874__$1,parent);
}));

return null;
}));

(sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_ctx,h,tag,parent){
var tag__$1 = sci.impl.hierarchies.__GT_tag(tag);
return cljs.core.underive.cljs$core$IFn$_invoke$arity$3(h,tag__$1,parent);
}));

(sci.impl.hierarchies.underive_STAR_.cljs$lang$maxFixedArity = 4);

sci.impl.hierarchies.isa_QMARK__STAR_ = (function sci$impl$hierarchies$isa_QMARK__STAR_(var_args){
var G__89862 = arguments.length;
switch (G__89862) {
case 3:
return sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ctx,child,parent){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy(ctx));
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,sci.impl.hierarchies.__GT_tag(child),parent);
}));

(sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_ctx,h,child,parent){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,sci.impl.hierarchies.__GT_tag(child),parent);
}));

(sci.impl.hierarchies.isa_QMARK__STAR_.cljs$lang$maxFixedArity = 4);

sci.impl.hierarchies.ancestors_STAR_ = (function sci$impl$hierarchies$ancestors_STAR_(var_args){
var G__89866 = arguments.length;
switch (G__89866) {
case 2:
return sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ctx,tag){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy(ctx));
return cljs.core.ancestors.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_ctx,h,tag){
return cljs.core.ancestors.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.ancestors_STAR_.cljs$lang$maxFixedArity = 3);

sci.impl.hierarchies.descendants_STAR_ = (function sci$impl$hierarchies$descendants_STAR_(var_args){
var G__89868 = arguments.length;
switch (G__89868) {
case 2:
return sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ctx,tag){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy(ctx));
return cljs.core.descendants.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_ctx,h,tag){
return cljs.core.descendants.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.descendants_STAR_.cljs$lang$maxFixedArity = 3);

sci.impl.hierarchies.parents_STAR_ = (function sci$impl$hierarchies$parents_STAR_(var_args){
var G__89870 = arguments.length;
switch (G__89870) {
case 2:
return sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ctx,tag){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy(ctx));
return cljs.core.parents.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_ctx,h,tag){
return cljs.core.parents.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.parents_STAR_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.hierarchies.js.map
