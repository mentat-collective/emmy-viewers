goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var self_ref_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.utils.current_ns_name();
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__77589 = (fixed_arity | (0));
switch (G__77589) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__77590){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__77590);

while(true){
var ret__28588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28588__auto__)){
continue;
} else {
return ret__28588__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__77590 = null;
if (arguments.length > 0) {
var G__78626__i = 0, G__78626__a = new Array(arguments.length -  0);
while (G__78626__i < G__78626__a.length) {G__78626__a[G__78626__i] = arguments[G__78626__i + 0]; ++G__78626__i;}
  G__77590 = new cljs.core.IndexedSeq(G__78626__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__77590);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__78627){
var G__77590 = cljs.core.seq(arglist__78627);
return sci$impl$fns$fun_$_arity_0__delegate(G__77590);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__77593 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__77591,G__77592){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77591);

(invoc_array[vararg_idx] = G__77592);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__77591,var_args){
var G__77592 = null;
if (arguments.length > 1) {
var G__78628__i = 0, G__78628__a = new Array(arguments.length -  1);
while (G__78628__i < G__78628__a.length) {G__78628__a[G__78628__i] = arguments[G__78628__i + 1]; ++G__78628__i;}
  G__77592 = new cljs.core.IndexedSeq(G__78628__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__77591,G__77592);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__78629){
var G__77591 = cljs.core.first(arglist__78629);
var G__77592 = cljs.core.rest(arglist__78629);
return sci$impl$fns$fun_$_arity_1__delegate(G__77591,G__77592);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__77597 = cljs.core._nth(params,(0));
var G__77598 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__77594,G__77595,G__77596){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77594);

(invoc_array[(1)] = G__77595);

(invoc_array[vararg_idx] = G__77596);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__77594,G__77595,var_args){
var G__77596 = null;
if (arguments.length > 2) {
var G__78631__i = 0, G__78631__a = new Array(arguments.length -  2);
while (G__78631__i < G__78631__a.length) {G__78631__a[G__78631__i] = arguments[G__78631__i + 2]; ++G__78631__i;}
  G__77596 = new cljs.core.IndexedSeq(G__78631__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__77594,G__77595,G__77596);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__78632){
var G__77594 = cljs.core.first(arglist__78632);
arglist__78632 = cljs.core.next(arglist__78632);
var G__77595 = cljs.core.first(arglist__78632);
var G__77596 = cljs.core.rest(arglist__78632);
return sci$impl$fns$fun_$_arity_2__delegate(G__77594,G__77595,G__77596);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__77603 = cljs.core._nth(params,(0));
var G__77604 = cljs.core._nth(params,(1));
var G__77605 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__77599,G__77600,G__77601,G__77602){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77599);

(invoc_array[(1)] = G__77600);

(invoc_array[(2)] = G__77601);

(invoc_array[vararg_idx] = G__77602);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__77599,G__77600,G__77601,var_args){
var G__77602 = null;
if (arguments.length > 3) {
var G__78633__i = 0, G__78633__a = new Array(arguments.length -  3);
while (G__78633__i < G__78633__a.length) {G__78633__a[G__78633__i] = arguments[G__78633__i + 3]; ++G__78633__i;}
  G__77602 = new cljs.core.IndexedSeq(G__78633__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__77599,G__77600,G__77601,G__77602);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__78634){
var G__77599 = cljs.core.first(arglist__78634);
arglist__78634 = cljs.core.next(arglist__78634);
var G__77600 = cljs.core.first(arglist__78634);
arglist__78634 = cljs.core.next(arglist__78634);
var G__77601 = cljs.core.first(arglist__78634);
var G__77602 = cljs.core.rest(arglist__78634);
return sci$impl$fns$fun_$_arity_3__delegate(G__77599,G__77600,G__77601,G__77602);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__77611 = cljs.core._nth(params,(0));
var G__77612 = cljs.core._nth(params,(1));
var G__77613 = cljs.core._nth(params,(2));
var G__77614 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__77606,G__77607,G__77608,G__77609,G__77610){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77606);

(invoc_array[(1)] = G__77607);

(invoc_array[(2)] = G__77608);

(invoc_array[(3)] = G__77609);

(invoc_array[vararg_idx] = G__77610);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__77606,G__77607,G__77608,G__77609,var_args){
var G__77610 = null;
if (arguments.length > 4) {
var G__78635__i = 0, G__78635__a = new Array(arguments.length -  4);
while (G__78635__i < G__78635__a.length) {G__78635__a[G__78635__i] = arguments[G__78635__i + 4]; ++G__78635__i;}
  G__77610 = new cljs.core.IndexedSeq(G__78635__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__77606,G__77607,G__77608,G__77609,G__77610);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__78636){
var G__77606 = cljs.core.first(arglist__78636);
arglist__78636 = cljs.core.next(arglist__78636);
var G__77607 = cljs.core.first(arglist__78636);
arglist__78636 = cljs.core.next(arglist__78636);
var G__77608 = cljs.core.first(arglist__78636);
arglist__78636 = cljs.core.next(arglist__78636);
var G__77609 = cljs.core.first(arglist__78636);
var G__77610 = cljs.core.rest(arglist__78636);
return sci$impl$fns$fun_$_arity_4__delegate(G__77606,G__77607,G__77608,G__77609,G__77610);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__77623 = cljs.core._nth(params,(0));
var G__77624 = cljs.core._nth(params,(1));
var G__77625 = cljs.core._nth(params,(2));
var G__77626 = cljs.core._nth(params,(3));
var G__77627 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__77617,G__77618,G__77619,G__77620,G__77621,G__77622){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77617);

(invoc_array[(1)] = G__77618);

(invoc_array[(2)] = G__77619);

(invoc_array[(3)] = G__77620);

(invoc_array[(4)] = G__77621);

(invoc_array[vararg_idx] = G__77622);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__77617,G__77618,G__77619,G__77620,G__77621,var_args){
var G__77622 = null;
if (arguments.length > 5) {
var G__78638__i = 0, G__78638__a = new Array(arguments.length -  5);
while (G__78638__i < G__78638__a.length) {G__78638__a[G__78638__i] = arguments[G__78638__i + 5]; ++G__78638__i;}
  G__77622 = new cljs.core.IndexedSeq(G__78638__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__77617,G__77618,G__77619,G__77620,G__77621,G__77622);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__78639){
var G__77617 = cljs.core.first(arglist__78639);
arglist__78639 = cljs.core.next(arglist__78639);
var G__77618 = cljs.core.first(arglist__78639);
arglist__78639 = cljs.core.next(arglist__78639);
var G__77619 = cljs.core.first(arglist__78639);
arglist__78639 = cljs.core.next(arglist__78639);
var G__77620 = cljs.core.first(arglist__78639);
arglist__78639 = cljs.core.next(arglist__78639);
var G__77621 = cljs.core.first(arglist__78639);
var G__77622 = cljs.core.rest(arglist__78639);
return sci$impl$fns$fun_$_arity_5__delegate(G__77617,G__77618,G__77619,G__77620,G__77621,G__77622);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__77636 = cljs.core._nth(params,(0));
var G__77637 = cljs.core._nth(params,(1));
var G__77638 = cljs.core._nth(params,(2));
var G__77639 = cljs.core._nth(params,(3));
var G__77640 = cljs.core._nth(params,(4));
var G__77641 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__77629,G__77630,G__77631,G__77632,G__77633,G__77634,G__77635){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77629);

(invoc_array[(1)] = G__77630);

(invoc_array[(2)] = G__77631);

(invoc_array[(3)] = G__77632);

(invoc_array[(4)] = G__77633);

(invoc_array[(5)] = G__77634);

(invoc_array[vararg_idx] = G__77635);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__77629,G__77630,G__77631,G__77632,G__77633,G__77634,var_args){
var G__77635 = null;
if (arguments.length > 6) {
var G__78640__i = 0, G__78640__a = new Array(arguments.length -  6);
while (G__78640__i < G__78640__a.length) {G__78640__a[G__78640__i] = arguments[G__78640__i + 6]; ++G__78640__i;}
  G__77635 = new cljs.core.IndexedSeq(G__78640__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__77629,G__77630,G__77631,G__77632,G__77633,G__77634,G__77635);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__78641){
var G__77629 = cljs.core.first(arglist__78641);
arglist__78641 = cljs.core.next(arglist__78641);
var G__77630 = cljs.core.first(arglist__78641);
arglist__78641 = cljs.core.next(arglist__78641);
var G__77631 = cljs.core.first(arglist__78641);
arglist__78641 = cljs.core.next(arglist__78641);
var G__77632 = cljs.core.first(arglist__78641);
arglist__78641 = cljs.core.next(arglist__78641);
var G__77633 = cljs.core.first(arglist__78641);
arglist__78641 = cljs.core.next(arglist__78641);
var G__77634 = cljs.core.first(arglist__78641);
var G__77635 = cljs.core.rest(arglist__78641);
return sci$impl$fns$fun_$_arity_6__delegate(G__77629,G__77630,G__77631,G__77632,G__77633,G__77634,G__77635);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__77650 = cljs.core._nth(params,(0));
var G__77651 = cljs.core._nth(params,(1));
var G__77652 = cljs.core._nth(params,(2));
var G__77653 = cljs.core._nth(params,(3));
var G__77654 = cljs.core._nth(params,(4));
var G__77655 = cljs.core._nth(params,(5));
var G__77656 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__77642,G__77643,G__77644,G__77645,G__77646,G__77647,G__77648,G__77649){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77642);

(invoc_array[(1)] = G__77643);

(invoc_array[(2)] = G__77644);

(invoc_array[(3)] = G__77645);

(invoc_array[(4)] = G__77646);

(invoc_array[(5)] = G__77647);

(invoc_array[(6)] = G__77648);

(invoc_array[vararg_idx] = G__77649);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__77642,G__77643,G__77644,G__77645,G__77646,G__77647,G__77648,var_args){
var G__77649 = null;
if (arguments.length > 7) {
var G__78643__i = 0, G__78643__a = new Array(arguments.length -  7);
while (G__78643__i < G__78643__a.length) {G__78643__a[G__78643__i] = arguments[G__78643__i + 7]; ++G__78643__i;}
  G__77649 = new cljs.core.IndexedSeq(G__78643__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__77642,G__77643,G__77644,G__77645,G__77646,G__77647,G__77648,G__77649);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__78644){
var G__77642 = cljs.core.first(arglist__78644);
arglist__78644 = cljs.core.next(arglist__78644);
var G__77643 = cljs.core.first(arglist__78644);
arglist__78644 = cljs.core.next(arglist__78644);
var G__77644 = cljs.core.first(arglist__78644);
arglist__78644 = cljs.core.next(arglist__78644);
var G__77645 = cljs.core.first(arglist__78644);
arglist__78644 = cljs.core.next(arglist__78644);
var G__77646 = cljs.core.first(arglist__78644);
arglist__78644 = cljs.core.next(arglist__78644);
var G__77647 = cljs.core.first(arglist__78644);
arglist__78644 = cljs.core.next(arglist__78644);
var G__77648 = cljs.core.first(arglist__78644);
var G__77649 = cljs.core.rest(arglist__78644);
return sci$impl$fns$fun_$_arity_7__delegate(G__77642,G__77643,G__77644,G__77645,G__77646,G__77647,G__77648,G__77649);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__77667 = cljs.core._nth(params,(0));
var G__77668 = cljs.core._nth(params,(1));
var G__77669 = cljs.core._nth(params,(2));
var G__77670 = cljs.core._nth(params,(3));
var G__77671 = cljs.core._nth(params,(4));
var G__77672 = cljs.core._nth(params,(5));
var G__77673 = cljs.core._nth(params,(6));
var G__77674 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__77658,G__77659,G__77660,G__77661,G__77662,G__77663,G__77664,G__77665,G__77666){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77658);

(invoc_array[(1)] = G__77659);

(invoc_array[(2)] = G__77660);

(invoc_array[(3)] = G__77661);

(invoc_array[(4)] = G__77662);

(invoc_array[(5)] = G__77663);

(invoc_array[(6)] = G__77664);

(invoc_array[(7)] = G__77665);

(invoc_array[vararg_idx] = G__77666);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__77658,G__77659,G__77660,G__77661,G__77662,G__77663,G__77664,G__77665,var_args){
var G__77666 = null;
if (arguments.length > 8) {
var G__78645__i = 0, G__78645__a = new Array(arguments.length -  8);
while (G__78645__i < G__78645__a.length) {G__78645__a[G__78645__i] = arguments[G__78645__i + 8]; ++G__78645__i;}
  G__77666 = new cljs.core.IndexedSeq(G__78645__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__77658,G__77659,G__77660,G__77661,G__77662,G__77663,G__77664,G__77665,G__77666);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__78646){
var G__77658 = cljs.core.first(arglist__78646);
arglist__78646 = cljs.core.next(arglist__78646);
var G__77659 = cljs.core.first(arglist__78646);
arglist__78646 = cljs.core.next(arglist__78646);
var G__77660 = cljs.core.first(arglist__78646);
arglist__78646 = cljs.core.next(arglist__78646);
var G__77661 = cljs.core.first(arglist__78646);
arglist__78646 = cljs.core.next(arglist__78646);
var G__77662 = cljs.core.first(arglist__78646);
arglist__78646 = cljs.core.next(arglist__78646);
var G__77663 = cljs.core.first(arglist__78646);
arglist__78646 = cljs.core.next(arglist__78646);
var G__77664 = cljs.core.first(arglist__78646);
arglist__78646 = cljs.core.next(arglist__78646);
var G__77665 = cljs.core.first(arglist__78646);
var G__77666 = cljs.core.rest(arglist__78646);
return sci$impl$fns$fun_$_arity_8__delegate(G__77658,G__77659,G__77660,G__77661,G__77662,G__77663,G__77664,G__77665,G__77666);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__77687 = cljs.core._nth(params,(0));
var G__77688 = cljs.core._nth(params,(1));
var G__77689 = cljs.core._nth(params,(2));
var G__77690 = cljs.core._nth(params,(3));
var G__77691 = cljs.core._nth(params,(4));
var G__77692 = cljs.core._nth(params,(5));
var G__77693 = cljs.core._nth(params,(6));
var G__77694 = cljs.core._nth(params,(7));
var G__77695 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__77677,G__77678,G__77679,G__77680,G__77681,G__77682,G__77683,G__77684,G__77685,G__77686){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77677);

(invoc_array[(1)] = G__77678);

(invoc_array[(2)] = G__77679);

(invoc_array[(3)] = G__77680);

(invoc_array[(4)] = G__77681);

(invoc_array[(5)] = G__77682);

(invoc_array[(6)] = G__77683);

(invoc_array[(7)] = G__77684);

(invoc_array[(8)] = G__77685);

(invoc_array[vararg_idx] = G__77686);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__77677,G__77678,G__77679,G__77680,G__77681,G__77682,G__77683,G__77684,G__77685,var_args){
var G__77686 = null;
if (arguments.length > 9) {
var G__78651__i = 0, G__78651__a = new Array(arguments.length -  9);
while (G__78651__i < G__78651__a.length) {G__78651__a[G__78651__i] = arguments[G__78651__i + 9]; ++G__78651__i;}
  G__77686 = new cljs.core.IndexedSeq(G__78651__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__77677,G__77678,G__77679,G__77680,G__77681,G__77682,G__77683,G__77684,G__77685,G__77686);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__78652){
var G__77677 = cljs.core.first(arglist__78652);
arglist__78652 = cljs.core.next(arglist__78652);
var G__77678 = cljs.core.first(arglist__78652);
arglist__78652 = cljs.core.next(arglist__78652);
var G__77679 = cljs.core.first(arglist__78652);
arglist__78652 = cljs.core.next(arglist__78652);
var G__77680 = cljs.core.first(arglist__78652);
arglist__78652 = cljs.core.next(arglist__78652);
var G__77681 = cljs.core.first(arglist__78652);
arglist__78652 = cljs.core.next(arglist__78652);
var G__77682 = cljs.core.first(arglist__78652);
arglist__78652 = cljs.core.next(arglist__78652);
var G__77683 = cljs.core.first(arglist__78652);
arglist__78652 = cljs.core.next(arglist__78652);
var G__77684 = cljs.core.first(arglist__78652);
arglist__78652 = cljs.core.next(arglist__78652);
var G__77685 = cljs.core.first(arglist__78652);
var G__77686 = cljs.core.rest(arglist__78652);
return sci$impl$fns$fun_$_arity_9__delegate(G__77677,G__77678,G__77679,G__77680,G__77681,G__77682,G__77683,G__77684,G__77685,G__77686);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__77711 = cljs.core._nth(params,(0));
var G__77712 = cljs.core._nth(params,(1));
var G__77713 = cljs.core._nth(params,(2));
var G__77714 = cljs.core._nth(params,(3));
var G__77715 = cljs.core._nth(params,(4));
var G__77716 = cljs.core._nth(params,(5));
var G__77717 = cljs.core._nth(params,(6));
var G__77718 = cljs.core._nth(params,(7));
var G__77719 = cljs.core._nth(params,(8));
var G__77720 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__77700,G__77701,G__77702,G__77703,G__77704,G__77705,G__77706,G__77707,G__77708,G__77709,G__77710){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77700);

(invoc_array[(1)] = G__77701);

(invoc_array[(2)] = G__77702);

(invoc_array[(3)] = G__77703);

(invoc_array[(4)] = G__77704);

(invoc_array[(5)] = G__77705);

(invoc_array[(6)] = G__77706);

(invoc_array[(7)] = G__77707);

(invoc_array[(8)] = G__77708);

(invoc_array[(9)] = G__77709);

(invoc_array[vararg_idx] = G__77710);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__77700,G__77701,G__77702,G__77703,G__77704,G__77705,G__77706,G__77707,G__77708,G__77709,var_args){
var G__77710 = null;
if (arguments.length > 10) {
var G__78657__i = 0, G__78657__a = new Array(arguments.length -  10);
while (G__78657__i < G__78657__a.length) {G__78657__a[G__78657__i] = arguments[G__78657__i + 10]; ++G__78657__i;}
  G__77710 = new cljs.core.IndexedSeq(G__78657__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__77700,G__77701,G__77702,G__77703,G__77704,G__77705,G__77706,G__77707,G__77708,G__77709,G__77710);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__78659){
var G__77700 = cljs.core.first(arglist__78659);
arglist__78659 = cljs.core.next(arglist__78659);
var G__77701 = cljs.core.first(arglist__78659);
arglist__78659 = cljs.core.next(arglist__78659);
var G__77702 = cljs.core.first(arglist__78659);
arglist__78659 = cljs.core.next(arglist__78659);
var G__77703 = cljs.core.first(arglist__78659);
arglist__78659 = cljs.core.next(arglist__78659);
var G__77704 = cljs.core.first(arglist__78659);
arglist__78659 = cljs.core.next(arglist__78659);
var G__77705 = cljs.core.first(arglist__78659);
arglist__78659 = cljs.core.next(arglist__78659);
var G__77706 = cljs.core.first(arglist__78659);
arglist__78659 = cljs.core.next(arglist__78659);
var G__77707 = cljs.core.first(arglist__78659);
arglist__78659 = cljs.core.next(arglist__78659);
var G__77708 = cljs.core.first(arglist__78659);
arglist__78659 = cljs.core.next(arglist__78659);
var G__77709 = cljs.core.first(arglist__78659);
var G__77710 = cljs.core.rest(arglist__78659);
return sci$impl$fns$fun_$_arity_10__delegate(G__77700,G__77701,G__77702,G__77703,G__77704,G__77705,G__77706,G__77707,G__77708,G__77709,G__77710);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__77739 = cljs.core._nth(params,(0));
var G__77740 = cljs.core._nth(params,(1));
var G__77741 = cljs.core._nth(params,(2));
var G__77742 = cljs.core._nth(params,(3));
var G__77743 = cljs.core._nth(params,(4));
var G__77744 = cljs.core._nth(params,(5));
var G__77745 = cljs.core._nth(params,(6));
var G__77746 = cljs.core._nth(params,(7));
var G__77747 = cljs.core._nth(params,(8));
var G__77748 = cljs.core._nth(params,(9));
var G__77749 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__77727,G__77728,G__77729,G__77730,G__77731,G__77732,G__77733,G__77734,G__77735,G__77736,G__77737,G__77738){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77727);

(invoc_array[(1)] = G__77728);

(invoc_array[(2)] = G__77729);

(invoc_array[(3)] = G__77730);

(invoc_array[(4)] = G__77731);

(invoc_array[(5)] = G__77732);

(invoc_array[(6)] = G__77733);

(invoc_array[(7)] = G__77734);

(invoc_array[(8)] = G__77735);

(invoc_array[(9)] = G__77736);

(invoc_array[(10)] = G__77737);

(invoc_array[vararg_idx] = G__77738);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__77727,G__77728,G__77729,G__77730,G__77731,G__77732,G__77733,G__77734,G__77735,G__77736,G__77737,var_args){
var G__77738 = null;
if (arguments.length > 11) {
var G__78670__i = 0, G__78670__a = new Array(arguments.length -  11);
while (G__78670__i < G__78670__a.length) {G__78670__a[G__78670__i] = arguments[G__78670__i + 11]; ++G__78670__i;}
  G__77738 = new cljs.core.IndexedSeq(G__78670__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__77727,G__77728,G__77729,G__77730,G__77731,G__77732,G__77733,G__77734,G__77735,G__77736,G__77737,G__77738);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__78671){
var G__77727 = cljs.core.first(arglist__78671);
arglist__78671 = cljs.core.next(arglist__78671);
var G__77728 = cljs.core.first(arglist__78671);
arglist__78671 = cljs.core.next(arglist__78671);
var G__77729 = cljs.core.first(arglist__78671);
arglist__78671 = cljs.core.next(arglist__78671);
var G__77730 = cljs.core.first(arglist__78671);
arglist__78671 = cljs.core.next(arglist__78671);
var G__77731 = cljs.core.first(arglist__78671);
arglist__78671 = cljs.core.next(arglist__78671);
var G__77732 = cljs.core.first(arglist__78671);
arglist__78671 = cljs.core.next(arglist__78671);
var G__77733 = cljs.core.first(arglist__78671);
arglist__78671 = cljs.core.next(arglist__78671);
var G__77734 = cljs.core.first(arglist__78671);
arglist__78671 = cljs.core.next(arglist__78671);
var G__77735 = cljs.core.first(arglist__78671);
arglist__78671 = cljs.core.next(arglist__78671);
var G__77736 = cljs.core.first(arglist__78671);
arglist__78671 = cljs.core.next(arglist__78671);
var G__77737 = cljs.core.first(arglist__78671);
var G__77738 = cljs.core.rest(arglist__78671);
return sci$impl$fns$fun_$_arity_11__delegate(G__77727,G__77728,G__77729,G__77730,G__77731,G__77732,G__77733,G__77734,G__77735,G__77736,G__77737,G__77738);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__77763 = cljs.core._nth(params,(0));
var G__77764 = cljs.core._nth(params,(1));
var G__77765 = cljs.core._nth(params,(2));
var G__77766 = cljs.core._nth(params,(3));
var G__77767 = cljs.core._nth(params,(4));
var G__77768 = cljs.core._nth(params,(5));
var G__77769 = cljs.core._nth(params,(6));
var G__77770 = cljs.core._nth(params,(7));
var G__77771 = cljs.core._nth(params,(8));
var G__77772 = cljs.core._nth(params,(9));
var G__77773 = cljs.core._nth(params,(10));
var G__77774 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__77750,G__77751,G__77752,G__77753,G__77754,G__77755,G__77756,G__77757,G__77758,G__77759,G__77760,G__77761,G__77762){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77750);

(invoc_array[(1)] = G__77751);

(invoc_array[(2)] = G__77752);

(invoc_array[(3)] = G__77753);

(invoc_array[(4)] = G__77754);

(invoc_array[(5)] = G__77755);

(invoc_array[(6)] = G__77756);

(invoc_array[(7)] = G__77757);

(invoc_array[(8)] = G__77758);

(invoc_array[(9)] = G__77759);

(invoc_array[(10)] = G__77760);

(invoc_array[(11)] = G__77761);

(invoc_array[vararg_idx] = G__77762);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__77750,G__77751,G__77752,G__77753,G__77754,G__77755,G__77756,G__77757,G__77758,G__77759,G__77760,G__77761,var_args){
var G__77762 = null;
if (arguments.length > 12) {
var G__78676__i = 0, G__78676__a = new Array(arguments.length -  12);
while (G__78676__i < G__78676__a.length) {G__78676__a[G__78676__i] = arguments[G__78676__i + 12]; ++G__78676__i;}
  G__77762 = new cljs.core.IndexedSeq(G__78676__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__77750,G__77751,G__77752,G__77753,G__77754,G__77755,G__77756,G__77757,G__77758,G__77759,G__77760,G__77761,G__77762);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__78677){
var G__77750 = cljs.core.first(arglist__78677);
arglist__78677 = cljs.core.next(arglist__78677);
var G__77751 = cljs.core.first(arglist__78677);
arglist__78677 = cljs.core.next(arglist__78677);
var G__77752 = cljs.core.first(arglist__78677);
arglist__78677 = cljs.core.next(arglist__78677);
var G__77753 = cljs.core.first(arglist__78677);
arglist__78677 = cljs.core.next(arglist__78677);
var G__77754 = cljs.core.first(arglist__78677);
arglist__78677 = cljs.core.next(arglist__78677);
var G__77755 = cljs.core.first(arglist__78677);
arglist__78677 = cljs.core.next(arglist__78677);
var G__77756 = cljs.core.first(arglist__78677);
arglist__78677 = cljs.core.next(arglist__78677);
var G__77757 = cljs.core.first(arglist__78677);
arglist__78677 = cljs.core.next(arglist__78677);
var G__77758 = cljs.core.first(arglist__78677);
arglist__78677 = cljs.core.next(arglist__78677);
var G__77759 = cljs.core.first(arglist__78677);
arglist__78677 = cljs.core.next(arglist__78677);
var G__77760 = cljs.core.first(arglist__78677);
arglist__78677 = cljs.core.next(arglist__78677);
var G__77761 = cljs.core.first(arglist__78677);
var G__77762 = cljs.core.rest(arglist__78677);
return sci$impl$fns$fun_$_arity_12__delegate(G__77750,G__77751,G__77752,G__77753,G__77754,G__77755,G__77756,G__77757,G__77758,G__77759,G__77760,G__77761,G__77762);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__77790 = cljs.core._nth(params,(0));
var G__77791 = cljs.core._nth(params,(1));
var G__77792 = cljs.core._nth(params,(2));
var G__77793 = cljs.core._nth(params,(3));
var G__77794 = cljs.core._nth(params,(4));
var G__77795 = cljs.core._nth(params,(5));
var G__77796 = cljs.core._nth(params,(6));
var G__77797 = cljs.core._nth(params,(7));
var G__77798 = cljs.core._nth(params,(8));
var G__77799 = cljs.core._nth(params,(9));
var G__77800 = cljs.core._nth(params,(10));
var G__77801 = cljs.core._nth(params,(11));
var G__77802 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__77776,G__77777,G__77778,G__77779,G__77780,G__77781,G__77782,G__77783,G__77784,G__77785,G__77786,G__77787,G__77788,G__77789){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77776);

(invoc_array[(1)] = G__77777);

(invoc_array[(2)] = G__77778);

(invoc_array[(3)] = G__77779);

(invoc_array[(4)] = G__77780);

(invoc_array[(5)] = G__77781);

(invoc_array[(6)] = G__77782);

(invoc_array[(7)] = G__77783);

(invoc_array[(8)] = G__77784);

(invoc_array[(9)] = G__77785);

(invoc_array[(10)] = G__77786);

(invoc_array[(11)] = G__77787);

(invoc_array[(12)] = G__77788);

(invoc_array[vararg_idx] = G__77789);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__77776,G__77777,G__77778,G__77779,G__77780,G__77781,G__77782,G__77783,G__77784,G__77785,G__77786,G__77787,G__77788,var_args){
var G__77789 = null;
if (arguments.length > 13) {
var G__78688__i = 0, G__78688__a = new Array(arguments.length -  13);
while (G__78688__i < G__78688__a.length) {G__78688__a[G__78688__i] = arguments[G__78688__i + 13]; ++G__78688__i;}
  G__77789 = new cljs.core.IndexedSeq(G__78688__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__77776,G__77777,G__77778,G__77779,G__77780,G__77781,G__77782,G__77783,G__77784,G__77785,G__77786,G__77787,G__77788,G__77789);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__78689){
var G__77776 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77777 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77778 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77779 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77780 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77781 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77782 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77783 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77784 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77785 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77786 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77787 = cljs.core.first(arglist__78689);
arglist__78689 = cljs.core.next(arglist__78689);
var G__77788 = cljs.core.first(arglist__78689);
var G__77789 = cljs.core.rest(arglist__78689);
return sci$impl$fns$fun_$_arity_13__delegate(G__77776,G__77777,G__77778,G__77779,G__77780,G__77781,G__77782,G__77783,G__77784,G__77785,G__77786,G__77787,G__77788,G__77789);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__77819 = cljs.core._nth(params,(0));
var G__77820 = cljs.core._nth(params,(1));
var G__77821 = cljs.core._nth(params,(2));
var G__77822 = cljs.core._nth(params,(3));
var G__77823 = cljs.core._nth(params,(4));
var G__77824 = cljs.core._nth(params,(5));
var G__77825 = cljs.core._nth(params,(6));
var G__77826 = cljs.core._nth(params,(7));
var G__77827 = cljs.core._nth(params,(8));
var G__77828 = cljs.core._nth(params,(9));
var G__77829 = cljs.core._nth(params,(10));
var G__77830 = cljs.core._nth(params,(11));
var G__77831 = cljs.core._nth(params,(12));
var G__77832 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__77804,G__77805,G__77806,G__77807,G__77808,G__77809,G__77810,G__77811,G__77812,G__77813,G__77814,G__77815,G__77816,G__77817,G__77818){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77804);

(invoc_array[(1)] = G__77805);

(invoc_array[(2)] = G__77806);

(invoc_array[(3)] = G__77807);

(invoc_array[(4)] = G__77808);

(invoc_array[(5)] = G__77809);

(invoc_array[(6)] = G__77810);

(invoc_array[(7)] = G__77811);

(invoc_array[(8)] = G__77812);

(invoc_array[(9)] = G__77813);

(invoc_array[(10)] = G__77814);

(invoc_array[(11)] = G__77815);

(invoc_array[(12)] = G__77816);

(invoc_array[(13)] = G__77817);

(invoc_array[vararg_idx] = G__77818);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__77804,G__77805,G__77806,G__77807,G__77808,G__77809,G__77810,G__77811,G__77812,G__77813,G__77814,G__77815,G__77816,G__77817,var_args){
var G__77818 = null;
if (arguments.length > 14) {
var G__78701__i = 0, G__78701__a = new Array(arguments.length -  14);
while (G__78701__i < G__78701__a.length) {G__78701__a[G__78701__i] = arguments[G__78701__i + 14]; ++G__78701__i;}
  G__77818 = new cljs.core.IndexedSeq(G__78701__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__77804,G__77805,G__77806,G__77807,G__77808,G__77809,G__77810,G__77811,G__77812,G__77813,G__77814,G__77815,G__77816,G__77817,G__77818);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__78702){
var G__77804 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77805 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77806 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77807 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77808 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77809 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77810 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77811 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77812 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77813 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77814 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77815 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77816 = cljs.core.first(arglist__78702);
arglist__78702 = cljs.core.next(arglist__78702);
var G__77817 = cljs.core.first(arglist__78702);
var G__77818 = cljs.core.rest(arglist__78702);
return sci$impl$fns$fun_$_arity_14__delegate(G__77804,G__77805,G__77806,G__77807,G__77808,G__77809,G__77810,G__77811,G__77812,G__77813,G__77814,G__77815,G__77816,G__77817,G__77818);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__77849 = cljs.core._nth(params,(0));
var G__77850 = cljs.core._nth(params,(1));
var G__77851 = cljs.core._nth(params,(2));
var G__77852 = cljs.core._nth(params,(3));
var G__77853 = cljs.core._nth(params,(4));
var G__77854 = cljs.core._nth(params,(5));
var G__77855 = cljs.core._nth(params,(6));
var G__77856 = cljs.core._nth(params,(7));
var G__77857 = cljs.core._nth(params,(8));
var G__77858 = cljs.core._nth(params,(9));
var G__77859 = cljs.core._nth(params,(10));
var G__77860 = cljs.core._nth(params,(11));
var G__77861 = cljs.core._nth(params,(12));
var G__77862 = cljs.core._nth(params,(13));
var G__77863 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__77833,G__77834,G__77835,G__77836,G__77837,G__77838,G__77839,G__77840,G__77841,G__77842,G__77843,G__77844,G__77845,G__77846,G__77847,G__77848){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77833);

(invoc_array[(1)] = G__77834);

(invoc_array[(2)] = G__77835);

(invoc_array[(3)] = G__77836);

(invoc_array[(4)] = G__77837);

(invoc_array[(5)] = G__77838);

(invoc_array[(6)] = G__77839);

(invoc_array[(7)] = G__77840);

(invoc_array[(8)] = G__77841);

(invoc_array[(9)] = G__77842);

(invoc_array[(10)] = G__77843);

(invoc_array[(11)] = G__77844);

(invoc_array[(12)] = G__77845);

(invoc_array[(13)] = G__77846);

(invoc_array[(14)] = G__77847);

(invoc_array[vararg_idx] = G__77848);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__77833,G__77834,G__77835,G__77836,G__77837,G__77838,G__77839,G__77840,G__77841,G__77842,G__77843,G__77844,G__77845,G__77846,G__77847,var_args){
var G__77848 = null;
if (arguments.length > 15) {
var G__78713__i = 0, G__78713__a = new Array(arguments.length -  15);
while (G__78713__i < G__78713__a.length) {G__78713__a[G__78713__i] = arguments[G__78713__i + 15]; ++G__78713__i;}
  G__77848 = new cljs.core.IndexedSeq(G__78713__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__77833,G__77834,G__77835,G__77836,G__77837,G__77838,G__77839,G__77840,G__77841,G__77842,G__77843,G__77844,G__77845,G__77846,G__77847,G__77848);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__78717){
var G__77833 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77834 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77835 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77836 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77837 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77838 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77839 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77840 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77841 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77842 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77843 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77844 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77845 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77846 = cljs.core.first(arglist__78717);
arglist__78717 = cljs.core.next(arglist__78717);
var G__77847 = cljs.core.first(arglist__78717);
var G__77848 = cljs.core.rest(arglist__78717);
return sci$impl$fns$fun_$_arity_15__delegate(G__77833,G__77834,G__77835,G__77836,G__77837,G__77838,G__77839,G__77840,G__77841,G__77842,G__77843,G__77844,G__77845,G__77846,G__77847,G__77848);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__77898 = cljs.core._nth(params,(0));
var G__77899 = cljs.core._nth(params,(1));
var G__77900 = cljs.core._nth(params,(2));
var G__77901 = cljs.core._nth(params,(3));
var G__77902 = cljs.core._nth(params,(4));
var G__77903 = cljs.core._nth(params,(5));
var G__77904 = cljs.core._nth(params,(6));
var G__77905 = cljs.core._nth(params,(7));
var G__77906 = cljs.core._nth(params,(8));
var G__77907 = cljs.core._nth(params,(9));
var G__77908 = cljs.core._nth(params,(10));
var G__77909 = cljs.core._nth(params,(11));
var G__77910 = cljs.core._nth(params,(12));
var G__77911 = cljs.core._nth(params,(13));
var G__77912 = cljs.core._nth(params,(14));
var G__77913 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__77881,G__77882,G__77883,G__77884,G__77885,G__77886,G__77887,G__77888,G__77889,G__77890,G__77891,G__77892,G__77893,G__77894,G__77895,G__77896,G__77897){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77881);

(invoc_array[(1)] = G__77882);

(invoc_array[(2)] = G__77883);

(invoc_array[(3)] = G__77884);

(invoc_array[(4)] = G__77885);

(invoc_array[(5)] = G__77886);

(invoc_array[(6)] = G__77887);

(invoc_array[(7)] = G__77888);

(invoc_array[(8)] = G__77889);

(invoc_array[(9)] = G__77890);

(invoc_array[(10)] = G__77891);

(invoc_array[(11)] = G__77892);

(invoc_array[(12)] = G__77893);

(invoc_array[(13)] = G__77894);

(invoc_array[(14)] = G__77895);

(invoc_array[(15)] = G__77896);

(invoc_array[vararg_idx] = G__77897);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__77881,G__77882,G__77883,G__77884,G__77885,G__77886,G__77887,G__77888,G__77889,G__77890,G__77891,G__77892,G__77893,G__77894,G__77895,G__77896,var_args){
var G__77897 = null;
if (arguments.length > 16) {
var G__78726__i = 0, G__78726__a = new Array(arguments.length -  16);
while (G__78726__i < G__78726__a.length) {G__78726__a[G__78726__i] = arguments[G__78726__i + 16]; ++G__78726__i;}
  G__77897 = new cljs.core.IndexedSeq(G__78726__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__77881,G__77882,G__77883,G__77884,G__77885,G__77886,G__77887,G__77888,G__77889,G__77890,G__77891,G__77892,G__77893,G__77894,G__77895,G__77896,G__77897);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__78727){
var G__77881 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77882 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77883 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77884 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77885 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77886 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77887 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77888 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77889 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77890 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77891 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77892 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77893 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77894 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77895 = cljs.core.first(arglist__78727);
arglist__78727 = cljs.core.next(arglist__78727);
var G__77896 = cljs.core.first(arglist__78727);
var G__77897 = cljs.core.rest(arglist__78727);
return sci$impl$fns$fun_$_arity_16__delegate(G__77881,G__77882,G__77883,G__77884,G__77885,G__77886,G__77887,G__77888,G__77889,G__77890,G__77891,G__77892,G__77893,G__77894,G__77895,G__77896,G__77897);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__77933 = cljs.core._nth(params,(0));
var G__77934 = cljs.core._nth(params,(1));
var G__77935 = cljs.core._nth(params,(2));
var G__77936 = cljs.core._nth(params,(3));
var G__77937 = cljs.core._nth(params,(4));
var G__77938 = cljs.core._nth(params,(5));
var G__77939 = cljs.core._nth(params,(6));
var G__77940 = cljs.core._nth(params,(7));
var G__77941 = cljs.core._nth(params,(8));
var G__77942 = cljs.core._nth(params,(9));
var G__77943 = cljs.core._nth(params,(10));
var G__77944 = cljs.core._nth(params,(11));
var G__77945 = cljs.core._nth(params,(12));
var G__77946 = cljs.core._nth(params,(13));
var G__77947 = cljs.core._nth(params,(14));
var G__77948 = cljs.core._nth(params,(15));
var G__77949 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__77915,G__77916,G__77917,G__77918,G__77919,G__77920,G__77921,G__77922,G__77923,G__77924,G__77925,G__77926,G__77927,G__77928,G__77929,G__77930,G__77931,G__77932){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77915);

(invoc_array[(1)] = G__77916);

(invoc_array[(2)] = G__77917);

(invoc_array[(3)] = G__77918);

(invoc_array[(4)] = G__77919);

(invoc_array[(5)] = G__77920);

(invoc_array[(6)] = G__77921);

(invoc_array[(7)] = G__77922);

(invoc_array[(8)] = G__77923);

(invoc_array[(9)] = G__77924);

(invoc_array[(10)] = G__77925);

(invoc_array[(11)] = G__77926);

(invoc_array[(12)] = G__77927);

(invoc_array[(13)] = G__77928);

(invoc_array[(14)] = G__77929);

(invoc_array[(15)] = G__77930);

(invoc_array[(16)] = G__77931);

(invoc_array[vararg_idx] = G__77932);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__77915,G__77916,G__77917,G__77918,G__77919,G__77920,G__77921,G__77922,G__77923,G__77924,G__77925,G__77926,G__77927,G__77928,G__77929,G__77930,G__77931,var_args){
var G__77932 = null;
if (arguments.length > 17) {
var G__78733__i = 0, G__78733__a = new Array(arguments.length -  17);
while (G__78733__i < G__78733__a.length) {G__78733__a[G__78733__i] = arguments[G__78733__i + 17]; ++G__78733__i;}
  G__77932 = new cljs.core.IndexedSeq(G__78733__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__77915,G__77916,G__77917,G__77918,G__77919,G__77920,G__77921,G__77922,G__77923,G__77924,G__77925,G__77926,G__77927,G__77928,G__77929,G__77930,G__77931,G__77932);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__78734){
var G__77915 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77916 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77917 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77918 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77919 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77920 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77921 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77922 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77923 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77924 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77925 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77926 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77927 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77928 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77929 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77930 = cljs.core.first(arglist__78734);
arglist__78734 = cljs.core.next(arglist__78734);
var G__77931 = cljs.core.first(arglist__78734);
var G__77932 = cljs.core.rest(arglist__78734);
return sci$impl$fns$fun_$_arity_17__delegate(G__77915,G__77916,G__77917,G__77918,G__77919,G__77920,G__77921,G__77922,G__77923,G__77924,G__77925,G__77926,G__77927,G__77928,G__77929,G__77930,G__77931,G__77932);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__77975 = cljs.core._nth(params,(0));
var G__77976 = cljs.core._nth(params,(1));
var G__77977 = cljs.core._nth(params,(2));
var G__77978 = cljs.core._nth(params,(3));
var G__77979 = cljs.core._nth(params,(4));
var G__77980 = cljs.core._nth(params,(5));
var G__77981 = cljs.core._nth(params,(6));
var G__77982 = cljs.core._nth(params,(7));
var G__77983 = cljs.core._nth(params,(8));
var G__77984 = cljs.core._nth(params,(9));
var G__77985 = cljs.core._nth(params,(10));
var G__77986 = cljs.core._nth(params,(11));
var G__77987 = cljs.core._nth(params,(12));
var G__77988 = cljs.core._nth(params,(13));
var G__77989 = cljs.core._nth(params,(14));
var G__77990 = cljs.core._nth(params,(15));
var G__77991 = cljs.core._nth(params,(16));
var G__77992 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__77956,G__77957,G__77958,G__77959,G__77960,G__77961,G__77962,G__77963,G__77964,G__77965,G__77966,G__77967,G__77968,G__77969,G__77970,G__77971,G__77972,G__77973,G__77974){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77956);

(invoc_array[(1)] = G__77957);

(invoc_array[(2)] = G__77958);

(invoc_array[(3)] = G__77959);

(invoc_array[(4)] = G__77960);

(invoc_array[(5)] = G__77961);

(invoc_array[(6)] = G__77962);

(invoc_array[(7)] = G__77963);

(invoc_array[(8)] = G__77964);

(invoc_array[(9)] = G__77965);

(invoc_array[(10)] = G__77966);

(invoc_array[(11)] = G__77967);

(invoc_array[(12)] = G__77968);

(invoc_array[(13)] = G__77969);

(invoc_array[(14)] = G__77970);

(invoc_array[(15)] = G__77971);

(invoc_array[(16)] = G__77972);

(invoc_array[(17)] = G__77973);

(invoc_array[vararg_idx] = G__77974);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__77956,G__77957,G__77958,G__77959,G__77960,G__77961,G__77962,G__77963,G__77964,G__77965,G__77966,G__77967,G__77968,G__77969,G__77970,G__77971,G__77972,G__77973,var_args){
var G__77974 = null;
if (arguments.length > 18) {
var G__78738__i = 0, G__78738__a = new Array(arguments.length -  18);
while (G__78738__i < G__78738__a.length) {G__78738__a[G__78738__i] = arguments[G__78738__i + 18]; ++G__78738__i;}
  G__77974 = new cljs.core.IndexedSeq(G__78738__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__77956,G__77957,G__77958,G__77959,G__77960,G__77961,G__77962,G__77963,G__77964,G__77965,G__77966,G__77967,G__77968,G__77969,G__77970,G__77971,G__77972,G__77973,G__77974);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__78739){
var G__77956 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77957 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77958 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77959 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77960 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77961 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77962 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77963 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77964 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77965 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77966 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77967 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77968 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77969 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77970 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77971 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77972 = cljs.core.first(arglist__78739);
arglist__78739 = cljs.core.next(arglist__78739);
var G__77973 = cljs.core.first(arglist__78739);
var G__77974 = cljs.core.rest(arglist__78739);
return sci$impl$fns$fun_$_arity_18__delegate(G__77956,G__77957,G__77958,G__77959,G__77960,G__77961,G__77962,G__77963,G__77964,G__77965,G__77966,G__77967,G__77968,G__77969,G__77970,G__77971,G__77972,G__77973,G__77974);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__78013 = cljs.core._nth(params,(0));
var G__78014 = cljs.core._nth(params,(1));
var G__78015 = cljs.core._nth(params,(2));
var G__78016 = cljs.core._nth(params,(3));
var G__78017 = cljs.core._nth(params,(4));
var G__78018 = cljs.core._nth(params,(5));
var G__78019 = cljs.core._nth(params,(6));
var G__78020 = cljs.core._nth(params,(7));
var G__78021 = cljs.core._nth(params,(8));
var G__78022 = cljs.core._nth(params,(9));
var G__78023 = cljs.core._nth(params,(10));
var G__78024 = cljs.core._nth(params,(11));
var G__78025 = cljs.core._nth(params,(12));
var G__78026 = cljs.core._nth(params,(13));
var G__78027 = cljs.core._nth(params,(14));
var G__78028 = cljs.core._nth(params,(15));
var G__78029 = cljs.core._nth(params,(16));
var G__78030 = cljs.core._nth(params,(17));
var G__78031 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__77993,G__77994,G__77995,G__77996,G__77997,G__77998,G__77999,G__78000,G__78001,G__78002,G__78003,G__78004,G__78005,G__78006,G__78007,G__78008,G__78009,G__78010,G__78011,G__78012){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77993);

(invoc_array[(1)] = G__77994);

(invoc_array[(2)] = G__77995);

(invoc_array[(3)] = G__77996);

(invoc_array[(4)] = G__77997);

(invoc_array[(5)] = G__77998);

(invoc_array[(6)] = G__77999);

(invoc_array[(7)] = G__78000);

(invoc_array[(8)] = G__78001);

(invoc_array[(9)] = G__78002);

(invoc_array[(10)] = G__78003);

(invoc_array[(11)] = G__78004);

(invoc_array[(12)] = G__78005);

(invoc_array[(13)] = G__78006);

(invoc_array[(14)] = G__78007);

(invoc_array[(15)] = G__78008);

(invoc_array[(16)] = G__78009);

(invoc_array[(17)] = G__78010);

(invoc_array[(18)] = G__78011);

(invoc_array[vararg_idx] = G__78012);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__77993,G__77994,G__77995,G__77996,G__77997,G__77998,G__77999,G__78000,G__78001,G__78002,G__78003,G__78004,G__78005,G__78006,G__78007,G__78008,G__78009,G__78010,G__78011,var_args){
var G__78012 = null;
if (arguments.length > 19) {
var G__78770__i = 0, G__78770__a = new Array(arguments.length -  19);
while (G__78770__i < G__78770__a.length) {G__78770__a[G__78770__i] = arguments[G__78770__i + 19]; ++G__78770__i;}
  G__78012 = new cljs.core.IndexedSeq(G__78770__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__77993,G__77994,G__77995,G__77996,G__77997,G__77998,G__77999,G__78000,G__78001,G__78002,G__78003,G__78004,G__78005,G__78006,G__78007,G__78008,G__78009,G__78010,G__78011,G__78012);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__78773){
var G__77993 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__77994 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__77995 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__77996 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__77997 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__77998 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__77999 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78000 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78001 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78002 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78003 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78004 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78005 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78006 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78007 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78008 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78009 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78010 = cljs.core.first(arglist__78773);
arglist__78773 = cljs.core.next(arglist__78773);
var G__78011 = cljs.core.first(arglist__78773);
var G__78012 = cljs.core.rest(arglist__78773);
return sci$impl$fns$fun_$_arity_19__delegate(G__77993,G__77994,G__77995,G__77996,G__77997,G__77998,G__77999,G__78000,G__78001,G__78002,G__78003,G__78004,G__78005,G__78006,G__78007,G__78008,G__78009,G__78010,G__78011,G__78012);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__78054 = cljs.core._nth(params,(0));
var G__78055 = cljs.core._nth(params,(1));
var G__78056 = cljs.core._nth(params,(2));
var G__78057 = cljs.core._nth(params,(3));
var G__78058 = cljs.core._nth(params,(4));
var G__78059 = cljs.core._nth(params,(5));
var G__78060 = cljs.core._nth(params,(6));
var G__78061 = cljs.core._nth(params,(7));
var G__78062 = cljs.core._nth(params,(8));
var G__78063 = cljs.core._nth(params,(9));
var G__78064 = cljs.core._nth(params,(10));
var G__78065 = cljs.core._nth(params,(11));
var G__78066 = cljs.core._nth(params,(12));
var G__78067 = cljs.core._nth(params,(13));
var G__78068 = cljs.core._nth(params,(14));
var G__78069 = cljs.core._nth(params,(15));
var G__78070 = cljs.core._nth(params,(16));
var G__78071 = cljs.core._nth(params,(17));
var G__78072 = cljs.core._nth(params,(18));
var G__78073 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__78033,G__78034,G__78035,G__78036,G__78037,G__78038,G__78039,G__78040,G__78041,G__78042,G__78043,G__78044,G__78045,G__78046,G__78047,G__78048,G__78049,G__78050,G__78051,G__78052,G__78053){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78033);

(invoc_array[(1)] = G__78034);

(invoc_array[(2)] = G__78035);

(invoc_array[(3)] = G__78036);

(invoc_array[(4)] = G__78037);

(invoc_array[(5)] = G__78038);

(invoc_array[(6)] = G__78039);

(invoc_array[(7)] = G__78040);

(invoc_array[(8)] = G__78041);

(invoc_array[(9)] = G__78042);

(invoc_array[(10)] = G__78043);

(invoc_array[(11)] = G__78044);

(invoc_array[(12)] = G__78045);

(invoc_array[(13)] = G__78046);

(invoc_array[(14)] = G__78047);

(invoc_array[(15)] = G__78048);

(invoc_array[(16)] = G__78049);

(invoc_array[(17)] = G__78050);

(invoc_array[(18)] = G__78051);

(invoc_array[(19)] = G__78052);

(invoc_array[vararg_idx] = G__78053);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__78033,G__78034,G__78035,G__78036,G__78037,G__78038,G__78039,G__78040,G__78041,G__78042,G__78043,G__78044,G__78045,G__78046,G__78047,G__78048,G__78049,G__78050,G__78051,G__78052,var_args){
var G__78053 = null;
if (arguments.length > 20) {
var G__78835__i = 0, G__78835__a = new Array(arguments.length -  20);
while (G__78835__i < G__78835__a.length) {G__78835__a[G__78835__i] = arguments[G__78835__i + 20]; ++G__78835__i;}
  G__78053 = new cljs.core.IndexedSeq(G__78835__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__78033,G__78034,G__78035,G__78036,G__78037,G__78038,G__78039,G__78040,G__78041,G__78042,G__78043,G__78044,G__78045,G__78046,G__78047,G__78048,G__78049,G__78050,G__78051,G__78052,G__78053);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__78836){
var G__78033 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78034 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78035 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78036 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78037 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78038 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78039 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78040 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78041 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78042 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78043 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78044 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78045 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78046 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78047 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78048 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78049 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78050 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78051 = cljs.core.first(arglist__78836);
arglist__78836 = cljs.core.next(arglist__78836);
var G__78052 = cljs.core.first(arglist__78836);
var G__78053 = cljs.core.rest(arglist__78836);
return sci$impl$fns$fun_$_arity_20__delegate(G__78033,G__78034,G__78035,G__78036,G__78037,G__78038,G__78039,G__78040,G__78041,G__78042,G__78043,G__78044,G__78045,G__78046,G__78047,G__78048,G__78049,G__78050,G__78051,G__78052,G__78053);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77589)].join('')));

}
})():(function (){var G__78080 = (fixed_arity | (0));
switch (G__78080) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__28588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28588__auto__)){
continue;
} else {
return ret__28588__auto__;
}
break;
}
});

break;
case (1):
var G__78082 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__78081){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78081);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (2):
var G__78086 = cljs.core._nth(params,(0));
var G__78087 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__78084,G__78085){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78084);

(invoc_array[(1)] = G__78085);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (3):
var G__78091 = cljs.core._nth(params,(0));
var G__78092 = cljs.core._nth(params,(1));
var G__78093 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__78088,G__78089,G__78090){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78088);

(invoc_array[(1)] = G__78089);

(invoc_array[(2)] = G__78090);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (4):
var G__78098 = cljs.core._nth(params,(0));
var G__78099 = cljs.core._nth(params,(1));
var G__78100 = cljs.core._nth(params,(2));
var G__78101 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__78094,G__78095,G__78096,G__78097){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78094);

(invoc_array[(1)] = G__78095);

(invoc_array[(2)] = G__78096);

(invoc_array[(3)] = G__78097);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (5):
var G__78107 = cljs.core._nth(params,(0));
var G__78108 = cljs.core._nth(params,(1));
var G__78109 = cljs.core._nth(params,(2));
var G__78110 = cljs.core._nth(params,(3));
var G__78111 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__78102,G__78103,G__78104,G__78105,G__78106){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78102);

(invoc_array[(1)] = G__78103);

(invoc_array[(2)] = G__78104);

(invoc_array[(3)] = G__78105);

(invoc_array[(4)] = G__78106);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (6):
var G__78118 = cljs.core._nth(params,(0));
var G__78119 = cljs.core._nth(params,(1));
var G__78120 = cljs.core._nth(params,(2));
var G__78121 = cljs.core._nth(params,(3));
var G__78122 = cljs.core._nth(params,(4));
var G__78123 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__78112,G__78113,G__78114,G__78115,G__78116,G__78117){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78112);

(invoc_array[(1)] = G__78113);

(invoc_array[(2)] = G__78114);

(invoc_array[(3)] = G__78115);

(invoc_array[(4)] = G__78116);

(invoc_array[(5)] = G__78117);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (7):
var G__78131 = cljs.core._nth(params,(0));
var G__78132 = cljs.core._nth(params,(1));
var G__78133 = cljs.core._nth(params,(2));
var G__78134 = cljs.core._nth(params,(3));
var G__78135 = cljs.core._nth(params,(4));
var G__78136 = cljs.core._nth(params,(5));
var G__78137 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__78124,G__78125,G__78126,G__78127,G__78128,G__78129,G__78130){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78124);

(invoc_array[(1)] = G__78125);

(invoc_array[(2)] = G__78126);

(invoc_array[(3)] = G__78127);

(invoc_array[(4)] = G__78128);

(invoc_array[(5)] = G__78129);

(invoc_array[(6)] = G__78130);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (8):
var G__78146 = cljs.core._nth(params,(0));
var G__78147 = cljs.core._nth(params,(1));
var G__78148 = cljs.core._nth(params,(2));
var G__78149 = cljs.core._nth(params,(3));
var G__78150 = cljs.core._nth(params,(4));
var G__78151 = cljs.core._nth(params,(5));
var G__78152 = cljs.core._nth(params,(6));
var G__78153 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__78138,G__78139,G__78140,G__78141,G__78142,G__78143,G__78144,G__78145){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78138);

(invoc_array[(1)] = G__78139);

(invoc_array[(2)] = G__78140);

(invoc_array[(3)] = G__78141);

(invoc_array[(4)] = G__78142);

(invoc_array[(5)] = G__78143);

(invoc_array[(6)] = G__78144);

(invoc_array[(7)] = G__78145);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (9):
var G__78163 = cljs.core._nth(params,(0));
var G__78164 = cljs.core._nth(params,(1));
var G__78165 = cljs.core._nth(params,(2));
var G__78166 = cljs.core._nth(params,(3));
var G__78167 = cljs.core._nth(params,(4));
var G__78168 = cljs.core._nth(params,(5));
var G__78169 = cljs.core._nth(params,(6));
var G__78170 = cljs.core._nth(params,(7));
var G__78171 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__78154,G__78155,G__78156,G__78157,G__78158,G__78159,G__78160,G__78161,G__78162){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78154);

(invoc_array[(1)] = G__78155);

(invoc_array[(2)] = G__78156);

(invoc_array[(3)] = G__78157);

(invoc_array[(4)] = G__78158);

(invoc_array[(5)] = G__78159);

(invoc_array[(6)] = G__78160);

(invoc_array[(7)] = G__78161);

(invoc_array[(8)] = G__78162);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (10):
var G__78182 = cljs.core._nth(params,(0));
var G__78183 = cljs.core._nth(params,(1));
var G__78184 = cljs.core._nth(params,(2));
var G__78185 = cljs.core._nth(params,(3));
var G__78186 = cljs.core._nth(params,(4));
var G__78187 = cljs.core._nth(params,(5));
var G__78188 = cljs.core._nth(params,(6));
var G__78189 = cljs.core._nth(params,(7));
var G__78190 = cljs.core._nth(params,(8));
var G__78191 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__78172,G__78173,G__78174,G__78175,G__78176,G__78177,G__78178,G__78179,G__78180,G__78181){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78172);

(invoc_array[(1)] = G__78173);

(invoc_array[(2)] = G__78174);

(invoc_array[(3)] = G__78175);

(invoc_array[(4)] = G__78176);

(invoc_array[(5)] = G__78177);

(invoc_array[(6)] = G__78178);

(invoc_array[(7)] = G__78179);

(invoc_array[(8)] = G__78180);

(invoc_array[(9)] = G__78181);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (11):
var G__78205 = cljs.core._nth(params,(0));
var G__78206 = cljs.core._nth(params,(1));
var G__78207 = cljs.core._nth(params,(2));
var G__78208 = cljs.core._nth(params,(3));
var G__78209 = cljs.core._nth(params,(4));
var G__78210 = cljs.core._nth(params,(5));
var G__78211 = cljs.core._nth(params,(6));
var G__78212 = cljs.core._nth(params,(7));
var G__78213 = cljs.core._nth(params,(8));
var G__78214 = cljs.core._nth(params,(9));
var G__78215 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__78194,G__78195,G__78196,G__78197,G__78198,G__78199,G__78200,G__78201,G__78202,G__78203,G__78204){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78194);

(invoc_array[(1)] = G__78195);

(invoc_array[(2)] = G__78196);

(invoc_array[(3)] = G__78197);

(invoc_array[(4)] = G__78198);

(invoc_array[(5)] = G__78199);

(invoc_array[(6)] = G__78200);

(invoc_array[(7)] = G__78201);

(invoc_array[(8)] = G__78202);

(invoc_array[(9)] = G__78203);

(invoc_array[(10)] = G__78204);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (12):
var G__78230 = cljs.core._nth(params,(0));
var G__78231 = cljs.core._nth(params,(1));
var G__78232 = cljs.core._nth(params,(2));
var G__78233 = cljs.core._nth(params,(3));
var G__78234 = cljs.core._nth(params,(4));
var G__78235 = cljs.core._nth(params,(5));
var G__78236 = cljs.core._nth(params,(6));
var G__78237 = cljs.core._nth(params,(7));
var G__78238 = cljs.core._nth(params,(8));
var G__78239 = cljs.core._nth(params,(9));
var G__78240 = cljs.core._nth(params,(10));
var G__78241 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__78218,G__78219,G__78220,G__78221,G__78222,G__78223,G__78224,G__78225,G__78226,G__78227,G__78228,G__78229){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78218);

(invoc_array[(1)] = G__78219);

(invoc_array[(2)] = G__78220);

(invoc_array[(3)] = G__78221);

(invoc_array[(4)] = G__78222);

(invoc_array[(5)] = G__78223);

(invoc_array[(6)] = G__78224);

(invoc_array[(7)] = G__78225);

(invoc_array[(8)] = G__78226);

(invoc_array[(9)] = G__78227);

(invoc_array[(10)] = G__78228);

(invoc_array[(11)] = G__78229);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (13):
var G__78271 = cljs.core._nth(params,(0));
var G__78272 = cljs.core._nth(params,(1));
var G__78273 = cljs.core._nth(params,(2));
var G__78274 = cljs.core._nth(params,(3));
var G__78275 = cljs.core._nth(params,(4));
var G__78276 = cljs.core._nth(params,(5));
var G__78277 = cljs.core._nth(params,(6));
var G__78278 = cljs.core._nth(params,(7));
var G__78279 = cljs.core._nth(params,(8));
var G__78280 = cljs.core._nth(params,(9));
var G__78281 = cljs.core._nth(params,(10));
var G__78282 = cljs.core._nth(params,(11));
var G__78283 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__78258,G__78259,G__78260,G__78261,G__78262,G__78263,G__78264,G__78265,G__78266,G__78267,G__78268,G__78269,G__78270){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78258);

(invoc_array[(1)] = G__78259);

(invoc_array[(2)] = G__78260);

(invoc_array[(3)] = G__78261);

(invoc_array[(4)] = G__78262);

(invoc_array[(5)] = G__78263);

(invoc_array[(6)] = G__78264);

(invoc_array[(7)] = G__78265);

(invoc_array[(8)] = G__78266);

(invoc_array[(9)] = G__78267);

(invoc_array[(10)] = G__78268);

(invoc_array[(11)] = G__78269);

(invoc_array[(12)] = G__78270);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (14):
var G__78300 = cljs.core._nth(params,(0));
var G__78301 = cljs.core._nth(params,(1));
var G__78302 = cljs.core._nth(params,(2));
var G__78303 = cljs.core._nth(params,(3));
var G__78304 = cljs.core._nth(params,(4));
var G__78305 = cljs.core._nth(params,(5));
var G__78306 = cljs.core._nth(params,(6));
var G__78307 = cljs.core._nth(params,(7));
var G__78309 = cljs.core._nth(params,(8));
var G__78310 = cljs.core._nth(params,(9));
var G__78311 = cljs.core._nth(params,(10));
var G__78312 = cljs.core._nth(params,(11));
var G__78313 = cljs.core._nth(params,(12));
var G__78314 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__78286,G__78287,G__78288,G__78289,G__78290,G__78291,G__78292,G__78293,G__78294,G__78295,G__78296,G__78297,G__78298,G__78299){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78286);

(invoc_array[(1)] = G__78287);

(invoc_array[(2)] = G__78288);

(invoc_array[(3)] = G__78289);

(invoc_array[(4)] = G__78290);

(invoc_array[(5)] = G__78291);

(invoc_array[(6)] = G__78292);

(invoc_array[(7)] = G__78293);

(invoc_array[(8)] = G__78294);

(invoc_array[(9)] = G__78295);

(invoc_array[(10)] = G__78296);

(invoc_array[(11)] = G__78297);

(invoc_array[(12)] = G__78298);

(invoc_array[(13)] = G__78299);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (15):
var G__78344 = cljs.core._nth(params,(0));
var G__78345 = cljs.core._nth(params,(1));
var G__78346 = cljs.core._nth(params,(2));
var G__78347 = cljs.core._nth(params,(3));
var G__78348 = cljs.core._nth(params,(4));
var G__78349 = cljs.core._nth(params,(5));
var G__78350 = cljs.core._nth(params,(6));
var G__78351 = cljs.core._nth(params,(7));
var G__78352 = cljs.core._nth(params,(8));
var G__78353 = cljs.core._nth(params,(9));
var G__78354 = cljs.core._nth(params,(10));
var G__78355 = cljs.core._nth(params,(11));
var G__78356 = cljs.core._nth(params,(12));
var G__78357 = cljs.core._nth(params,(13));
var G__78358 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__78329,G__78330,G__78331,G__78332,G__78333,G__78334,G__78335,G__78336,G__78337,G__78338,G__78339,G__78340,G__78341,G__78342,G__78343){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78329);

(invoc_array[(1)] = G__78330);

(invoc_array[(2)] = G__78331);

(invoc_array[(3)] = G__78332);

(invoc_array[(4)] = G__78333);

(invoc_array[(5)] = G__78334);

(invoc_array[(6)] = G__78335);

(invoc_array[(7)] = G__78336);

(invoc_array[(8)] = G__78337);

(invoc_array[(9)] = G__78338);

(invoc_array[(10)] = G__78339);

(invoc_array[(11)] = G__78340);

(invoc_array[(12)] = G__78341);

(invoc_array[(13)] = G__78342);

(invoc_array[(14)] = G__78343);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (16):
var G__78376 = cljs.core._nth(params,(0));
var G__78377 = cljs.core._nth(params,(1));
var G__78378 = cljs.core._nth(params,(2));
var G__78379 = cljs.core._nth(params,(3));
var G__78380 = cljs.core._nth(params,(4));
var G__78381 = cljs.core._nth(params,(5));
var G__78382 = cljs.core._nth(params,(6));
var G__78383 = cljs.core._nth(params,(7));
var G__78384 = cljs.core._nth(params,(8));
var G__78385 = cljs.core._nth(params,(9));
var G__78386 = cljs.core._nth(params,(10));
var G__78387 = cljs.core._nth(params,(11));
var G__78388 = cljs.core._nth(params,(12));
var G__78389 = cljs.core._nth(params,(13));
var G__78390 = cljs.core._nth(params,(14));
var G__78391 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__78360,G__78361,G__78362,G__78363,G__78364,G__78365,G__78366,G__78367,G__78368,G__78369,G__78370,G__78371,G__78372,G__78373,G__78374,G__78375){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78360);

(invoc_array[(1)] = G__78361);

(invoc_array[(2)] = G__78362);

(invoc_array[(3)] = G__78363);

(invoc_array[(4)] = G__78364);

(invoc_array[(5)] = G__78365);

(invoc_array[(6)] = G__78366);

(invoc_array[(7)] = G__78367);

(invoc_array[(8)] = G__78368);

(invoc_array[(9)] = G__78369);

(invoc_array[(10)] = G__78370);

(invoc_array[(11)] = G__78371);

(invoc_array[(12)] = G__78372);

(invoc_array[(13)] = G__78373);

(invoc_array[(14)] = G__78374);

(invoc_array[(15)] = G__78375);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (17):
var G__78426 = cljs.core._nth(params,(0));
var G__78427 = cljs.core._nth(params,(1));
var G__78428 = cljs.core._nth(params,(2));
var G__78429 = cljs.core._nth(params,(3));
var G__78430 = cljs.core._nth(params,(4));
var G__78431 = cljs.core._nth(params,(5));
var G__78432 = cljs.core._nth(params,(6));
var G__78433 = cljs.core._nth(params,(7));
var G__78434 = cljs.core._nth(params,(8));
var G__78435 = cljs.core._nth(params,(9));
var G__78436 = cljs.core._nth(params,(10));
var G__78437 = cljs.core._nth(params,(11));
var G__78438 = cljs.core._nth(params,(12));
var G__78439 = cljs.core._nth(params,(13));
var G__78440 = cljs.core._nth(params,(14));
var G__78441 = cljs.core._nth(params,(15));
var G__78442 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__78409,G__78410,G__78411,G__78412,G__78413,G__78414,G__78415,G__78416,G__78417,G__78418,G__78419,G__78420,G__78421,G__78422,G__78423,G__78424,G__78425){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78409);

(invoc_array[(1)] = G__78410);

(invoc_array[(2)] = G__78411);

(invoc_array[(3)] = G__78412);

(invoc_array[(4)] = G__78413);

(invoc_array[(5)] = G__78414);

(invoc_array[(6)] = G__78415);

(invoc_array[(7)] = G__78416);

(invoc_array[(8)] = G__78417);

(invoc_array[(9)] = G__78418);

(invoc_array[(10)] = G__78419);

(invoc_array[(11)] = G__78420);

(invoc_array[(12)] = G__78421);

(invoc_array[(13)] = G__78422);

(invoc_array[(14)] = G__78423);

(invoc_array[(15)] = G__78424);

(invoc_array[(16)] = G__78425);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (18):
var G__78490 = cljs.core._nth(params,(0));
var G__78491 = cljs.core._nth(params,(1));
var G__78492 = cljs.core._nth(params,(2));
var G__78493 = cljs.core._nth(params,(3));
var G__78494 = cljs.core._nth(params,(4));
var G__78495 = cljs.core._nth(params,(5));
var G__78496 = cljs.core._nth(params,(6));
var G__78497 = cljs.core._nth(params,(7));
var G__78498 = cljs.core._nth(params,(8));
var G__78499 = cljs.core._nth(params,(9));
var G__78500 = cljs.core._nth(params,(10));
var G__78501 = cljs.core._nth(params,(11));
var G__78502 = cljs.core._nth(params,(12));
var G__78503 = cljs.core._nth(params,(13));
var G__78504 = cljs.core._nth(params,(14));
var G__78505 = cljs.core._nth(params,(15));
var G__78506 = cljs.core._nth(params,(16));
var G__78507 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__78472,G__78473,G__78474,G__78475,G__78476,G__78477,G__78478,G__78479,G__78480,G__78481,G__78482,G__78483,G__78484,G__78485,G__78486,G__78487,G__78488,G__78489){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78472);

(invoc_array[(1)] = G__78473);

(invoc_array[(2)] = G__78474);

(invoc_array[(3)] = G__78475);

(invoc_array[(4)] = G__78476);

(invoc_array[(5)] = G__78477);

(invoc_array[(6)] = G__78478);

(invoc_array[(7)] = G__78479);

(invoc_array[(8)] = G__78480);

(invoc_array[(9)] = G__78481);

(invoc_array[(10)] = G__78482);

(invoc_array[(11)] = G__78483);

(invoc_array[(12)] = G__78484);

(invoc_array[(13)] = G__78485);

(invoc_array[(14)] = G__78486);

(invoc_array[(15)] = G__78487);

(invoc_array[(16)] = G__78488);

(invoc_array[(17)] = G__78489);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (19):
var G__78542 = cljs.core._nth(params,(0));
var G__78543 = cljs.core._nth(params,(1));
var G__78544 = cljs.core._nth(params,(2));
var G__78545 = cljs.core._nth(params,(3));
var G__78546 = cljs.core._nth(params,(4));
var G__78547 = cljs.core._nth(params,(5));
var G__78548 = cljs.core._nth(params,(6));
var G__78549 = cljs.core._nth(params,(7));
var G__78550 = cljs.core._nth(params,(8));
var G__78551 = cljs.core._nth(params,(9));
var G__78552 = cljs.core._nth(params,(10));
var G__78553 = cljs.core._nth(params,(11));
var G__78554 = cljs.core._nth(params,(12));
var G__78555 = cljs.core._nth(params,(13));
var G__78556 = cljs.core._nth(params,(14));
var G__78557 = cljs.core._nth(params,(15));
var G__78558 = cljs.core._nth(params,(16));
var G__78559 = cljs.core._nth(params,(17));
var G__78560 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__78523,G__78524,G__78525,G__78526,G__78527,G__78528,G__78529,G__78530,G__78531,G__78532,G__78533,G__78534,G__78535,G__78536,G__78537,G__78538,G__78539,G__78540,G__78541){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78523);

(invoc_array[(1)] = G__78524);

(invoc_array[(2)] = G__78525);

(invoc_array[(3)] = G__78526);

(invoc_array[(4)] = G__78527);

(invoc_array[(5)] = G__78528);

(invoc_array[(6)] = G__78529);

(invoc_array[(7)] = G__78530);

(invoc_array[(8)] = G__78531);

(invoc_array[(9)] = G__78532);

(invoc_array[(10)] = G__78533);

(invoc_array[(11)] = G__78534);

(invoc_array[(12)] = G__78535);

(invoc_array[(13)] = G__78536);

(invoc_array[(14)] = G__78537);

(invoc_array[(15)] = G__78538);

(invoc_array[(16)] = G__78539);

(invoc_array[(17)] = G__78540);

(invoc_array[(18)] = G__78541);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
case (20):
var G__78582 = cljs.core._nth(params,(0));
var G__78583 = cljs.core._nth(params,(1));
var G__78584 = cljs.core._nth(params,(2));
var G__78585 = cljs.core._nth(params,(3));
var G__78586 = cljs.core._nth(params,(4));
var G__78587 = cljs.core._nth(params,(5));
var G__78588 = cljs.core._nth(params,(6));
var G__78589 = cljs.core._nth(params,(7));
var G__78590 = cljs.core._nth(params,(8));
var G__78591 = cljs.core._nth(params,(9));
var G__78592 = cljs.core._nth(params,(10));
var G__78593 = cljs.core._nth(params,(11));
var G__78594 = cljs.core._nth(params,(12));
var G__78595 = cljs.core._nth(params,(13));
var G__78596 = cljs.core._nth(params,(14));
var G__78597 = cljs.core._nth(params,(15));
var G__78598 = cljs.core._nth(params,(16));
var G__78599 = cljs.core._nth(params,(17));
var G__78600 = cljs.core._nth(params,(18));
var G__78601 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__78562,G__78563,G__78564,G__78565,G__78566,G__78567,G__78568,G__78569,G__78570,G__78571,G__78572,G__78573,G__78574,G__78575,G__78576,G__78577,G__78578,G__78579,G__78580,G__78581){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78562);

(invoc_array[(1)] = G__78563);

(invoc_array[(2)] = G__78564);

(invoc_array[(3)] = G__78565);

(invoc_array[(4)] = G__78566);

(invoc_array[(5)] = G__78567);

(invoc_array[(6)] = G__78568);

(invoc_array[(7)] = G__78569);

(invoc_array[(8)] = G__78570);

(invoc_array[(9)] = G__78571);

(invoc_array[(10)] = G__78572);

(invoc_array[(11)] = G__78573);

(invoc_array[(12)] = G__78574);

(invoc_array[(13)] = G__78575);

(invoc_array[(14)] = G__78576);

(invoc_array[(15)] = G__78577);

(invoc_array[(16)] = G__78578);

(invoc_array[(17)] = G__78579);

(invoc_array[(18)] = G__78580);

(invoc_array[(19)] = G__78581);

while(true){
var ret__28589__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28589__auto__)){
continue;
} else {
return ret__28589__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78080)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,enclosed_array,bindings,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__78905__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5751__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__78905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78910__i = 0, G__78910__a = new Array(arguments.length -  0);
while (G__78910__i < G__78910__a.length) {G__78910__a[G__78910__i] = arguments[G__78910__i + 0]; ++G__78910__i;}
  args = new cljs.core.IndexedSeq(G__78910__a,0,null);
} 
return G__78905__delegate.call(this,args);};
G__78905.cljs$lang$maxFixedArity = 0;
G__78905.cljs$lang$applyTo = (function (arglist__78911){
var args = cljs.core.seq(arglist__78911);
return G__78905__delegate(args);
});
G__78905.cljs$core$IFn$_invoke$arity$variadic = G__78905__delegate;
return G__78905;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__78623_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__78623_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
