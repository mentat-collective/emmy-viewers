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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__90596 = (fixed_arity | (0));
switch (G__90596) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__90597){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__90597);

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
var G__90597 = null;
if (arguments.length > 0) {
var G__91582__i = 0, G__91582__a = new Array(arguments.length -  0);
while (G__91582__i < G__91582__a.length) {G__91582__a[G__91582__i] = arguments[G__91582__i + 0]; ++G__91582__i;}
  G__90597 = new cljs.core.IndexedSeq(G__91582__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__90597);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__91583){
var G__90597 = cljs.core.seq(arglist__91583);
return sci$impl$fns$fun_$_arity_0__delegate(G__90597);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__90602 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__90600,G__90601){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90600);

(invoc_array[vararg_idx] = G__90601);

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
var sci$impl$fns$fun_$_arity_1 = function (G__90600,var_args){
var G__90601 = null;
if (arguments.length > 1) {
var G__91586__i = 0, G__91586__a = new Array(arguments.length -  1);
while (G__91586__i < G__91586__a.length) {G__91586__a[G__91586__i] = arguments[G__91586__i + 1]; ++G__91586__i;}
  G__90601 = new cljs.core.IndexedSeq(G__91586__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__90600,G__90601);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__91587){
var G__90600 = cljs.core.first(arglist__91587);
var G__90601 = cljs.core.rest(arglist__91587);
return sci$impl$fns$fun_$_arity_1__delegate(G__90600,G__90601);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__90607 = cljs.core._nth(params,(0));
var G__90608 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__90604,G__90605,G__90606){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90604);

(invoc_array[(1)] = G__90605);

(invoc_array[vararg_idx] = G__90606);

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
var sci$impl$fns$fun_$_arity_2 = function (G__90604,G__90605,var_args){
var G__90606 = null;
if (arguments.length > 2) {
var G__91588__i = 0, G__91588__a = new Array(arguments.length -  2);
while (G__91588__i < G__91588__a.length) {G__91588__a[G__91588__i] = arguments[G__91588__i + 2]; ++G__91588__i;}
  G__90606 = new cljs.core.IndexedSeq(G__91588__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__90604,G__90605,G__90606);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__91589){
var G__90604 = cljs.core.first(arglist__91589);
arglist__91589 = cljs.core.next(arglist__91589);
var G__90605 = cljs.core.first(arglist__91589);
var G__90606 = cljs.core.rest(arglist__91589);
return sci$impl$fns$fun_$_arity_2__delegate(G__90604,G__90605,G__90606);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__90613 = cljs.core._nth(params,(0));
var G__90614 = cljs.core._nth(params,(1));
var G__90615 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__90609,G__90610,G__90611,G__90612){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90609);

(invoc_array[(1)] = G__90610);

(invoc_array[(2)] = G__90611);

(invoc_array[vararg_idx] = G__90612);

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
var sci$impl$fns$fun_$_arity_3 = function (G__90609,G__90610,G__90611,var_args){
var G__90612 = null;
if (arguments.length > 3) {
var G__91590__i = 0, G__91590__a = new Array(arguments.length -  3);
while (G__91590__i < G__91590__a.length) {G__91590__a[G__91590__i] = arguments[G__91590__i + 3]; ++G__91590__i;}
  G__90612 = new cljs.core.IndexedSeq(G__91590__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__90609,G__90610,G__90611,G__90612);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__91591){
var G__90609 = cljs.core.first(arglist__91591);
arglist__91591 = cljs.core.next(arglist__91591);
var G__90610 = cljs.core.first(arglist__91591);
arglist__91591 = cljs.core.next(arglist__91591);
var G__90611 = cljs.core.first(arglist__91591);
var G__90612 = cljs.core.rest(arglist__91591);
return sci$impl$fns$fun_$_arity_3__delegate(G__90609,G__90610,G__90611,G__90612);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__90629 = cljs.core._nth(params,(0));
var G__90630 = cljs.core._nth(params,(1));
var G__90631 = cljs.core._nth(params,(2));
var G__90632 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__90624,G__90625,G__90626,G__90627,G__90628){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90624);

(invoc_array[(1)] = G__90625);

(invoc_array[(2)] = G__90626);

(invoc_array[(3)] = G__90627);

(invoc_array[vararg_idx] = G__90628);

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
var sci$impl$fns$fun_$_arity_4 = function (G__90624,G__90625,G__90626,G__90627,var_args){
var G__90628 = null;
if (arguments.length > 4) {
var G__91592__i = 0, G__91592__a = new Array(arguments.length -  4);
while (G__91592__i < G__91592__a.length) {G__91592__a[G__91592__i] = arguments[G__91592__i + 4]; ++G__91592__i;}
  G__90628 = new cljs.core.IndexedSeq(G__91592__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__90624,G__90625,G__90626,G__90627,G__90628);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__91593){
var G__90624 = cljs.core.first(arglist__91593);
arglist__91593 = cljs.core.next(arglist__91593);
var G__90625 = cljs.core.first(arglist__91593);
arglist__91593 = cljs.core.next(arglist__91593);
var G__90626 = cljs.core.first(arglist__91593);
arglist__91593 = cljs.core.next(arglist__91593);
var G__90627 = cljs.core.first(arglist__91593);
var G__90628 = cljs.core.rest(arglist__91593);
return sci$impl$fns$fun_$_arity_4__delegate(G__90624,G__90625,G__90626,G__90627,G__90628);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__90639 = cljs.core._nth(params,(0));
var G__90640 = cljs.core._nth(params,(1));
var G__90641 = cljs.core._nth(params,(2));
var G__90642 = cljs.core._nth(params,(3));
var G__90643 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__90633,G__90634,G__90635,G__90636,G__90637,G__90638){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90633);

(invoc_array[(1)] = G__90634);

(invoc_array[(2)] = G__90635);

(invoc_array[(3)] = G__90636);

(invoc_array[(4)] = G__90637);

(invoc_array[vararg_idx] = G__90638);

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
var sci$impl$fns$fun_$_arity_5 = function (G__90633,G__90634,G__90635,G__90636,G__90637,var_args){
var G__90638 = null;
if (arguments.length > 5) {
var G__91594__i = 0, G__91594__a = new Array(arguments.length -  5);
while (G__91594__i < G__91594__a.length) {G__91594__a[G__91594__i] = arguments[G__91594__i + 5]; ++G__91594__i;}
  G__90638 = new cljs.core.IndexedSeq(G__91594__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__90633,G__90634,G__90635,G__90636,G__90637,G__90638);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__91595){
var G__90633 = cljs.core.first(arglist__91595);
arglist__91595 = cljs.core.next(arglist__91595);
var G__90634 = cljs.core.first(arglist__91595);
arglist__91595 = cljs.core.next(arglist__91595);
var G__90635 = cljs.core.first(arglist__91595);
arglist__91595 = cljs.core.next(arglist__91595);
var G__90636 = cljs.core.first(arglist__91595);
arglist__91595 = cljs.core.next(arglist__91595);
var G__90637 = cljs.core.first(arglist__91595);
var G__90638 = cljs.core.rest(arglist__91595);
return sci$impl$fns$fun_$_arity_5__delegate(G__90633,G__90634,G__90635,G__90636,G__90637,G__90638);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__90653 = cljs.core._nth(params,(0));
var G__90654 = cljs.core._nth(params,(1));
var G__90655 = cljs.core._nth(params,(2));
var G__90656 = cljs.core._nth(params,(3));
var G__90657 = cljs.core._nth(params,(4));
var G__90658 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__90646,G__90647,G__90648,G__90649,G__90650,G__90651,G__90652){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90646);

(invoc_array[(1)] = G__90647);

(invoc_array[(2)] = G__90648);

(invoc_array[(3)] = G__90649);

(invoc_array[(4)] = G__90650);

(invoc_array[(5)] = G__90651);

(invoc_array[vararg_idx] = G__90652);

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
var sci$impl$fns$fun_$_arity_6 = function (G__90646,G__90647,G__90648,G__90649,G__90650,G__90651,var_args){
var G__90652 = null;
if (arguments.length > 6) {
var G__91598__i = 0, G__91598__a = new Array(arguments.length -  6);
while (G__91598__i < G__91598__a.length) {G__91598__a[G__91598__i] = arguments[G__91598__i + 6]; ++G__91598__i;}
  G__90652 = new cljs.core.IndexedSeq(G__91598__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__90646,G__90647,G__90648,G__90649,G__90650,G__90651,G__90652);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__91599){
var G__90646 = cljs.core.first(arglist__91599);
arglist__91599 = cljs.core.next(arglist__91599);
var G__90647 = cljs.core.first(arglist__91599);
arglist__91599 = cljs.core.next(arglist__91599);
var G__90648 = cljs.core.first(arglist__91599);
arglist__91599 = cljs.core.next(arglist__91599);
var G__90649 = cljs.core.first(arglist__91599);
arglist__91599 = cljs.core.next(arglist__91599);
var G__90650 = cljs.core.first(arglist__91599);
arglist__91599 = cljs.core.next(arglist__91599);
var G__90651 = cljs.core.first(arglist__91599);
var G__90652 = cljs.core.rest(arglist__91599);
return sci$impl$fns$fun_$_arity_6__delegate(G__90646,G__90647,G__90648,G__90649,G__90650,G__90651,G__90652);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__90672 = cljs.core._nth(params,(0));
var G__90673 = cljs.core._nth(params,(1));
var G__90674 = cljs.core._nth(params,(2));
var G__90675 = cljs.core._nth(params,(3));
var G__90676 = cljs.core._nth(params,(4));
var G__90677 = cljs.core._nth(params,(5));
var G__90678 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__90664,G__90665,G__90666,G__90667,G__90668,G__90669,G__90670,G__90671){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90664);

(invoc_array[(1)] = G__90665);

(invoc_array[(2)] = G__90666);

(invoc_array[(3)] = G__90667);

(invoc_array[(4)] = G__90668);

(invoc_array[(5)] = G__90669);

(invoc_array[(6)] = G__90670);

(invoc_array[vararg_idx] = G__90671);

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
var sci$impl$fns$fun_$_arity_7 = function (G__90664,G__90665,G__90666,G__90667,G__90668,G__90669,G__90670,var_args){
var G__90671 = null;
if (arguments.length > 7) {
var G__91600__i = 0, G__91600__a = new Array(arguments.length -  7);
while (G__91600__i < G__91600__a.length) {G__91600__a[G__91600__i] = arguments[G__91600__i + 7]; ++G__91600__i;}
  G__90671 = new cljs.core.IndexedSeq(G__91600__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__90664,G__90665,G__90666,G__90667,G__90668,G__90669,G__90670,G__90671);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__91601){
var G__90664 = cljs.core.first(arglist__91601);
arglist__91601 = cljs.core.next(arglist__91601);
var G__90665 = cljs.core.first(arglist__91601);
arglist__91601 = cljs.core.next(arglist__91601);
var G__90666 = cljs.core.first(arglist__91601);
arglist__91601 = cljs.core.next(arglist__91601);
var G__90667 = cljs.core.first(arglist__91601);
arglist__91601 = cljs.core.next(arglist__91601);
var G__90668 = cljs.core.first(arglist__91601);
arglist__91601 = cljs.core.next(arglist__91601);
var G__90669 = cljs.core.first(arglist__91601);
arglist__91601 = cljs.core.next(arglist__91601);
var G__90670 = cljs.core.first(arglist__91601);
var G__90671 = cljs.core.rest(arglist__91601);
return sci$impl$fns$fun_$_arity_7__delegate(G__90664,G__90665,G__90666,G__90667,G__90668,G__90669,G__90670,G__90671);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__90689 = cljs.core._nth(params,(0));
var G__90690 = cljs.core._nth(params,(1));
var G__90691 = cljs.core._nth(params,(2));
var G__90692 = cljs.core._nth(params,(3));
var G__90693 = cljs.core._nth(params,(4));
var G__90694 = cljs.core._nth(params,(5));
var G__90695 = cljs.core._nth(params,(6));
var G__90696 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__90680,G__90681,G__90682,G__90683,G__90684,G__90685,G__90686,G__90687,G__90688){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90680);

(invoc_array[(1)] = G__90681);

(invoc_array[(2)] = G__90682);

(invoc_array[(3)] = G__90683);

(invoc_array[(4)] = G__90684);

(invoc_array[(5)] = G__90685);

(invoc_array[(6)] = G__90686);

(invoc_array[(7)] = G__90687);

(invoc_array[vararg_idx] = G__90688);

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
var sci$impl$fns$fun_$_arity_8 = function (G__90680,G__90681,G__90682,G__90683,G__90684,G__90685,G__90686,G__90687,var_args){
var G__90688 = null;
if (arguments.length > 8) {
var G__91604__i = 0, G__91604__a = new Array(arguments.length -  8);
while (G__91604__i < G__91604__a.length) {G__91604__a[G__91604__i] = arguments[G__91604__i + 8]; ++G__91604__i;}
  G__90688 = new cljs.core.IndexedSeq(G__91604__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__90680,G__90681,G__90682,G__90683,G__90684,G__90685,G__90686,G__90687,G__90688);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__91605){
var G__90680 = cljs.core.first(arglist__91605);
arglist__91605 = cljs.core.next(arglist__91605);
var G__90681 = cljs.core.first(arglist__91605);
arglist__91605 = cljs.core.next(arglist__91605);
var G__90682 = cljs.core.first(arglist__91605);
arglist__91605 = cljs.core.next(arglist__91605);
var G__90683 = cljs.core.first(arglist__91605);
arglist__91605 = cljs.core.next(arglist__91605);
var G__90684 = cljs.core.first(arglist__91605);
arglist__91605 = cljs.core.next(arglist__91605);
var G__90685 = cljs.core.first(arglist__91605);
arglist__91605 = cljs.core.next(arglist__91605);
var G__90686 = cljs.core.first(arglist__91605);
arglist__91605 = cljs.core.next(arglist__91605);
var G__90687 = cljs.core.first(arglist__91605);
var G__90688 = cljs.core.rest(arglist__91605);
return sci$impl$fns$fun_$_arity_8__delegate(G__90680,G__90681,G__90682,G__90683,G__90684,G__90685,G__90686,G__90687,G__90688);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__90713 = cljs.core._nth(params,(0));
var G__90714 = cljs.core._nth(params,(1));
var G__90715 = cljs.core._nth(params,(2));
var G__90716 = cljs.core._nth(params,(3));
var G__90717 = cljs.core._nth(params,(4));
var G__90718 = cljs.core._nth(params,(5));
var G__90719 = cljs.core._nth(params,(6));
var G__90720 = cljs.core._nth(params,(7));
var G__90721 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__90703,G__90704,G__90705,G__90706,G__90707,G__90708,G__90709,G__90710,G__90711,G__90712){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90703);

(invoc_array[(1)] = G__90704);

(invoc_array[(2)] = G__90705);

(invoc_array[(3)] = G__90706);

(invoc_array[(4)] = G__90707);

(invoc_array[(5)] = G__90708);

(invoc_array[(6)] = G__90709);

(invoc_array[(7)] = G__90710);

(invoc_array[(8)] = G__90711);

(invoc_array[vararg_idx] = G__90712);

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
var sci$impl$fns$fun_$_arity_9 = function (G__90703,G__90704,G__90705,G__90706,G__90707,G__90708,G__90709,G__90710,G__90711,var_args){
var G__90712 = null;
if (arguments.length > 9) {
var G__91606__i = 0, G__91606__a = new Array(arguments.length -  9);
while (G__91606__i < G__91606__a.length) {G__91606__a[G__91606__i] = arguments[G__91606__i + 9]; ++G__91606__i;}
  G__90712 = new cljs.core.IndexedSeq(G__91606__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__90703,G__90704,G__90705,G__90706,G__90707,G__90708,G__90709,G__90710,G__90711,G__90712);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__91607){
var G__90703 = cljs.core.first(arglist__91607);
arglist__91607 = cljs.core.next(arglist__91607);
var G__90704 = cljs.core.first(arglist__91607);
arglist__91607 = cljs.core.next(arglist__91607);
var G__90705 = cljs.core.first(arglist__91607);
arglist__91607 = cljs.core.next(arglist__91607);
var G__90706 = cljs.core.first(arglist__91607);
arglist__91607 = cljs.core.next(arglist__91607);
var G__90707 = cljs.core.first(arglist__91607);
arglist__91607 = cljs.core.next(arglist__91607);
var G__90708 = cljs.core.first(arglist__91607);
arglist__91607 = cljs.core.next(arglist__91607);
var G__90709 = cljs.core.first(arglist__91607);
arglist__91607 = cljs.core.next(arglist__91607);
var G__90710 = cljs.core.first(arglist__91607);
arglist__91607 = cljs.core.next(arglist__91607);
var G__90711 = cljs.core.first(arglist__91607);
var G__90712 = cljs.core.rest(arglist__91607);
return sci$impl$fns$fun_$_arity_9__delegate(G__90703,G__90704,G__90705,G__90706,G__90707,G__90708,G__90709,G__90710,G__90711,G__90712);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__90733 = cljs.core._nth(params,(0));
var G__90734 = cljs.core._nth(params,(1));
var G__90735 = cljs.core._nth(params,(2));
var G__90736 = cljs.core._nth(params,(3));
var G__90737 = cljs.core._nth(params,(4));
var G__90738 = cljs.core._nth(params,(5));
var G__90739 = cljs.core._nth(params,(6));
var G__90740 = cljs.core._nth(params,(7));
var G__90741 = cljs.core._nth(params,(8));
var G__90742 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__90722,G__90723,G__90724,G__90725,G__90726,G__90727,G__90728,G__90729,G__90730,G__90731,G__90732){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90722);

(invoc_array[(1)] = G__90723);

(invoc_array[(2)] = G__90724);

(invoc_array[(3)] = G__90725);

(invoc_array[(4)] = G__90726);

(invoc_array[(5)] = G__90727);

(invoc_array[(6)] = G__90728);

(invoc_array[(7)] = G__90729);

(invoc_array[(8)] = G__90730);

(invoc_array[(9)] = G__90731);

(invoc_array[vararg_idx] = G__90732);

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
var sci$impl$fns$fun_$_arity_10 = function (G__90722,G__90723,G__90724,G__90725,G__90726,G__90727,G__90728,G__90729,G__90730,G__90731,var_args){
var G__90732 = null;
if (arguments.length > 10) {
var G__91608__i = 0, G__91608__a = new Array(arguments.length -  10);
while (G__91608__i < G__91608__a.length) {G__91608__a[G__91608__i] = arguments[G__91608__i + 10]; ++G__91608__i;}
  G__90732 = new cljs.core.IndexedSeq(G__91608__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__90722,G__90723,G__90724,G__90725,G__90726,G__90727,G__90728,G__90729,G__90730,G__90731,G__90732);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__91609){
var G__90722 = cljs.core.first(arglist__91609);
arglist__91609 = cljs.core.next(arglist__91609);
var G__90723 = cljs.core.first(arglist__91609);
arglist__91609 = cljs.core.next(arglist__91609);
var G__90724 = cljs.core.first(arglist__91609);
arglist__91609 = cljs.core.next(arglist__91609);
var G__90725 = cljs.core.first(arglist__91609);
arglist__91609 = cljs.core.next(arglist__91609);
var G__90726 = cljs.core.first(arglist__91609);
arglist__91609 = cljs.core.next(arglist__91609);
var G__90727 = cljs.core.first(arglist__91609);
arglist__91609 = cljs.core.next(arglist__91609);
var G__90728 = cljs.core.first(arglist__91609);
arglist__91609 = cljs.core.next(arglist__91609);
var G__90729 = cljs.core.first(arglist__91609);
arglist__91609 = cljs.core.next(arglist__91609);
var G__90730 = cljs.core.first(arglist__91609);
arglist__91609 = cljs.core.next(arglist__91609);
var G__90731 = cljs.core.first(arglist__91609);
var G__90732 = cljs.core.rest(arglist__91609);
return sci$impl$fns$fun_$_arity_10__delegate(G__90722,G__90723,G__90724,G__90725,G__90726,G__90727,G__90728,G__90729,G__90730,G__90731,G__90732);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__90761 = cljs.core._nth(params,(0));
var G__90762 = cljs.core._nth(params,(1));
var G__90763 = cljs.core._nth(params,(2));
var G__90764 = cljs.core._nth(params,(3));
var G__90765 = cljs.core._nth(params,(4));
var G__90766 = cljs.core._nth(params,(5));
var G__90767 = cljs.core._nth(params,(6));
var G__90768 = cljs.core._nth(params,(7));
var G__90769 = cljs.core._nth(params,(8));
var G__90770 = cljs.core._nth(params,(9));
var G__90771 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__90749,G__90750,G__90751,G__90752,G__90753,G__90754,G__90755,G__90756,G__90757,G__90758,G__90759,G__90760){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90749);

(invoc_array[(1)] = G__90750);

(invoc_array[(2)] = G__90751);

(invoc_array[(3)] = G__90752);

(invoc_array[(4)] = G__90753);

(invoc_array[(5)] = G__90754);

(invoc_array[(6)] = G__90755);

(invoc_array[(7)] = G__90756);

(invoc_array[(8)] = G__90757);

(invoc_array[(9)] = G__90758);

(invoc_array[(10)] = G__90759);

(invoc_array[vararg_idx] = G__90760);

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
var sci$impl$fns$fun_$_arity_11 = function (G__90749,G__90750,G__90751,G__90752,G__90753,G__90754,G__90755,G__90756,G__90757,G__90758,G__90759,var_args){
var G__90760 = null;
if (arguments.length > 11) {
var G__91614__i = 0, G__91614__a = new Array(arguments.length -  11);
while (G__91614__i < G__91614__a.length) {G__91614__a[G__91614__i] = arguments[G__91614__i + 11]; ++G__91614__i;}
  G__90760 = new cljs.core.IndexedSeq(G__91614__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__90749,G__90750,G__90751,G__90752,G__90753,G__90754,G__90755,G__90756,G__90757,G__90758,G__90759,G__90760);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__91615){
var G__90749 = cljs.core.first(arglist__91615);
arglist__91615 = cljs.core.next(arglist__91615);
var G__90750 = cljs.core.first(arglist__91615);
arglist__91615 = cljs.core.next(arglist__91615);
var G__90751 = cljs.core.first(arglist__91615);
arglist__91615 = cljs.core.next(arglist__91615);
var G__90752 = cljs.core.first(arglist__91615);
arglist__91615 = cljs.core.next(arglist__91615);
var G__90753 = cljs.core.first(arglist__91615);
arglist__91615 = cljs.core.next(arglist__91615);
var G__90754 = cljs.core.first(arglist__91615);
arglist__91615 = cljs.core.next(arglist__91615);
var G__90755 = cljs.core.first(arglist__91615);
arglist__91615 = cljs.core.next(arglist__91615);
var G__90756 = cljs.core.first(arglist__91615);
arglist__91615 = cljs.core.next(arglist__91615);
var G__90757 = cljs.core.first(arglist__91615);
arglist__91615 = cljs.core.next(arglist__91615);
var G__90758 = cljs.core.first(arglist__91615);
arglist__91615 = cljs.core.next(arglist__91615);
var G__90759 = cljs.core.first(arglist__91615);
var G__90760 = cljs.core.rest(arglist__91615);
return sci$impl$fns$fun_$_arity_11__delegate(G__90749,G__90750,G__90751,G__90752,G__90753,G__90754,G__90755,G__90756,G__90757,G__90758,G__90759,G__90760);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__90793 = cljs.core._nth(params,(0));
var G__90794 = cljs.core._nth(params,(1));
var G__90795 = cljs.core._nth(params,(2));
var G__90796 = cljs.core._nth(params,(3));
var G__90797 = cljs.core._nth(params,(4));
var G__90798 = cljs.core._nth(params,(5));
var G__90799 = cljs.core._nth(params,(6));
var G__90800 = cljs.core._nth(params,(7));
var G__90801 = cljs.core._nth(params,(8));
var G__90802 = cljs.core._nth(params,(9));
var G__90803 = cljs.core._nth(params,(10));
var G__90804 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__90780,G__90781,G__90782,G__90783,G__90784,G__90785,G__90786,G__90787,G__90788,G__90789,G__90790,G__90791,G__90792){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90780);

(invoc_array[(1)] = G__90781);

(invoc_array[(2)] = G__90782);

(invoc_array[(3)] = G__90783);

(invoc_array[(4)] = G__90784);

(invoc_array[(5)] = G__90785);

(invoc_array[(6)] = G__90786);

(invoc_array[(7)] = G__90787);

(invoc_array[(8)] = G__90788);

(invoc_array[(9)] = G__90789);

(invoc_array[(10)] = G__90790);

(invoc_array[(11)] = G__90791);

(invoc_array[vararg_idx] = G__90792);

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
var sci$impl$fns$fun_$_arity_12 = function (G__90780,G__90781,G__90782,G__90783,G__90784,G__90785,G__90786,G__90787,G__90788,G__90789,G__90790,G__90791,var_args){
var G__90792 = null;
if (arguments.length > 12) {
var G__91616__i = 0, G__91616__a = new Array(arguments.length -  12);
while (G__91616__i < G__91616__a.length) {G__91616__a[G__91616__i] = arguments[G__91616__i + 12]; ++G__91616__i;}
  G__90792 = new cljs.core.IndexedSeq(G__91616__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__90780,G__90781,G__90782,G__90783,G__90784,G__90785,G__90786,G__90787,G__90788,G__90789,G__90790,G__90791,G__90792);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__91617){
var G__90780 = cljs.core.first(arglist__91617);
arglist__91617 = cljs.core.next(arglist__91617);
var G__90781 = cljs.core.first(arglist__91617);
arglist__91617 = cljs.core.next(arglist__91617);
var G__90782 = cljs.core.first(arglist__91617);
arglist__91617 = cljs.core.next(arglist__91617);
var G__90783 = cljs.core.first(arglist__91617);
arglist__91617 = cljs.core.next(arglist__91617);
var G__90784 = cljs.core.first(arglist__91617);
arglist__91617 = cljs.core.next(arglist__91617);
var G__90785 = cljs.core.first(arglist__91617);
arglist__91617 = cljs.core.next(arglist__91617);
var G__90786 = cljs.core.first(arglist__91617);
arglist__91617 = cljs.core.next(arglist__91617);
var G__90787 = cljs.core.first(arglist__91617);
arglist__91617 = cljs.core.next(arglist__91617);
var G__90788 = cljs.core.first(arglist__91617);
arglist__91617 = cljs.core.next(arglist__91617);
var G__90789 = cljs.core.first(arglist__91617);
arglist__91617 = cljs.core.next(arglist__91617);
var G__90790 = cljs.core.first(arglist__91617);
arglist__91617 = cljs.core.next(arglist__91617);
var G__90791 = cljs.core.first(arglist__91617);
var G__90792 = cljs.core.rest(arglist__91617);
return sci$impl$fns$fun_$_arity_12__delegate(G__90780,G__90781,G__90782,G__90783,G__90784,G__90785,G__90786,G__90787,G__90788,G__90789,G__90790,G__90791,G__90792);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__90819 = cljs.core._nth(params,(0));
var G__90820 = cljs.core._nth(params,(1));
var G__90821 = cljs.core._nth(params,(2));
var G__90822 = cljs.core._nth(params,(3));
var G__90823 = cljs.core._nth(params,(4));
var G__90824 = cljs.core._nth(params,(5));
var G__90825 = cljs.core._nth(params,(6));
var G__90826 = cljs.core._nth(params,(7));
var G__90827 = cljs.core._nth(params,(8));
var G__90828 = cljs.core._nth(params,(9));
var G__90829 = cljs.core._nth(params,(10));
var G__90830 = cljs.core._nth(params,(11));
var G__90831 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__90805,G__90806,G__90807,G__90808,G__90809,G__90810,G__90811,G__90812,G__90813,G__90814,G__90815,G__90816,G__90817,G__90818){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90805);

(invoc_array[(1)] = G__90806);

(invoc_array[(2)] = G__90807);

(invoc_array[(3)] = G__90808);

(invoc_array[(4)] = G__90809);

(invoc_array[(5)] = G__90810);

(invoc_array[(6)] = G__90811);

(invoc_array[(7)] = G__90812);

(invoc_array[(8)] = G__90813);

(invoc_array[(9)] = G__90814);

(invoc_array[(10)] = G__90815);

(invoc_array[(11)] = G__90816);

(invoc_array[(12)] = G__90817);

(invoc_array[vararg_idx] = G__90818);

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
var sci$impl$fns$fun_$_arity_13 = function (G__90805,G__90806,G__90807,G__90808,G__90809,G__90810,G__90811,G__90812,G__90813,G__90814,G__90815,G__90816,G__90817,var_args){
var G__90818 = null;
if (arguments.length > 13) {
var G__91618__i = 0, G__91618__a = new Array(arguments.length -  13);
while (G__91618__i < G__91618__a.length) {G__91618__a[G__91618__i] = arguments[G__91618__i + 13]; ++G__91618__i;}
  G__90818 = new cljs.core.IndexedSeq(G__91618__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__90805,G__90806,G__90807,G__90808,G__90809,G__90810,G__90811,G__90812,G__90813,G__90814,G__90815,G__90816,G__90817,G__90818);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__91619){
var G__90805 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90806 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90807 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90808 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90809 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90810 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90811 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90812 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90813 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90814 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90815 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90816 = cljs.core.first(arglist__91619);
arglist__91619 = cljs.core.next(arglist__91619);
var G__90817 = cljs.core.first(arglist__91619);
var G__90818 = cljs.core.rest(arglist__91619);
return sci$impl$fns$fun_$_arity_13__delegate(G__90805,G__90806,G__90807,G__90808,G__90809,G__90810,G__90811,G__90812,G__90813,G__90814,G__90815,G__90816,G__90817,G__90818);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__90853 = cljs.core._nth(params,(0));
var G__90854 = cljs.core._nth(params,(1));
var G__90855 = cljs.core._nth(params,(2));
var G__90856 = cljs.core._nth(params,(3));
var G__90857 = cljs.core._nth(params,(4));
var G__90858 = cljs.core._nth(params,(5));
var G__90859 = cljs.core._nth(params,(6));
var G__90860 = cljs.core._nth(params,(7));
var G__90861 = cljs.core._nth(params,(8));
var G__90862 = cljs.core._nth(params,(9));
var G__90863 = cljs.core._nth(params,(10));
var G__90864 = cljs.core._nth(params,(11));
var G__90865 = cljs.core._nth(params,(12));
var G__90866 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__90838,G__90839,G__90840,G__90841,G__90842,G__90843,G__90844,G__90845,G__90846,G__90847,G__90848,G__90849,G__90850,G__90851,G__90852){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90838);

(invoc_array[(1)] = G__90839);

(invoc_array[(2)] = G__90840);

(invoc_array[(3)] = G__90841);

(invoc_array[(4)] = G__90842);

(invoc_array[(5)] = G__90843);

(invoc_array[(6)] = G__90844);

(invoc_array[(7)] = G__90845);

(invoc_array[(8)] = G__90846);

(invoc_array[(9)] = G__90847);

(invoc_array[(10)] = G__90848);

(invoc_array[(11)] = G__90849);

(invoc_array[(12)] = G__90850);

(invoc_array[(13)] = G__90851);

(invoc_array[vararg_idx] = G__90852);

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
var sci$impl$fns$fun_$_arity_14 = function (G__90838,G__90839,G__90840,G__90841,G__90842,G__90843,G__90844,G__90845,G__90846,G__90847,G__90848,G__90849,G__90850,G__90851,var_args){
var G__90852 = null;
if (arguments.length > 14) {
var G__91624__i = 0, G__91624__a = new Array(arguments.length -  14);
while (G__91624__i < G__91624__a.length) {G__91624__a[G__91624__i] = arguments[G__91624__i + 14]; ++G__91624__i;}
  G__90852 = new cljs.core.IndexedSeq(G__91624__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__90838,G__90839,G__90840,G__90841,G__90842,G__90843,G__90844,G__90845,G__90846,G__90847,G__90848,G__90849,G__90850,G__90851,G__90852);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__91625){
var G__90838 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90839 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90840 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90841 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90842 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90843 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90844 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90845 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90846 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90847 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90848 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90849 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90850 = cljs.core.first(arglist__91625);
arglist__91625 = cljs.core.next(arglist__91625);
var G__90851 = cljs.core.first(arglist__91625);
var G__90852 = cljs.core.rest(arglist__91625);
return sci$impl$fns$fun_$_arity_14__delegate(G__90838,G__90839,G__90840,G__90841,G__90842,G__90843,G__90844,G__90845,G__90846,G__90847,G__90848,G__90849,G__90850,G__90851,G__90852);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__90892 = cljs.core._nth(params,(0));
var G__90893 = cljs.core._nth(params,(1));
var G__90894 = cljs.core._nth(params,(2));
var G__90895 = cljs.core._nth(params,(3));
var G__90896 = cljs.core._nth(params,(4));
var G__90897 = cljs.core._nth(params,(5));
var G__90898 = cljs.core._nth(params,(6));
var G__90899 = cljs.core._nth(params,(7));
var G__90900 = cljs.core._nth(params,(8));
var G__90901 = cljs.core._nth(params,(9));
var G__90902 = cljs.core._nth(params,(10));
var G__90903 = cljs.core._nth(params,(11));
var G__90904 = cljs.core._nth(params,(12));
var G__90905 = cljs.core._nth(params,(13));
var G__90906 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__90876,G__90877,G__90878,G__90879,G__90880,G__90881,G__90882,G__90883,G__90884,G__90885,G__90886,G__90887,G__90888,G__90889,G__90890,G__90891){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90876);

(invoc_array[(1)] = G__90877);

(invoc_array[(2)] = G__90878);

(invoc_array[(3)] = G__90879);

(invoc_array[(4)] = G__90880);

(invoc_array[(5)] = G__90881);

(invoc_array[(6)] = G__90882);

(invoc_array[(7)] = G__90883);

(invoc_array[(8)] = G__90884);

(invoc_array[(9)] = G__90885);

(invoc_array[(10)] = G__90886);

(invoc_array[(11)] = G__90887);

(invoc_array[(12)] = G__90888);

(invoc_array[(13)] = G__90889);

(invoc_array[(14)] = G__90890);

(invoc_array[vararg_idx] = G__90891);

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
var sci$impl$fns$fun_$_arity_15 = function (G__90876,G__90877,G__90878,G__90879,G__90880,G__90881,G__90882,G__90883,G__90884,G__90885,G__90886,G__90887,G__90888,G__90889,G__90890,var_args){
var G__90891 = null;
if (arguments.length > 15) {
var G__91627__i = 0, G__91627__a = new Array(arguments.length -  15);
while (G__91627__i < G__91627__a.length) {G__91627__a[G__91627__i] = arguments[G__91627__i + 15]; ++G__91627__i;}
  G__90891 = new cljs.core.IndexedSeq(G__91627__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__90876,G__90877,G__90878,G__90879,G__90880,G__90881,G__90882,G__90883,G__90884,G__90885,G__90886,G__90887,G__90888,G__90889,G__90890,G__90891);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__91628){
var G__90876 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90877 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90878 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90879 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90880 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90881 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90882 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90883 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90884 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90885 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90886 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90887 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90888 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90889 = cljs.core.first(arglist__91628);
arglist__91628 = cljs.core.next(arglist__91628);
var G__90890 = cljs.core.first(arglist__91628);
var G__90891 = cljs.core.rest(arglist__91628);
return sci$impl$fns$fun_$_arity_15__delegate(G__90876,G__90877,G__90878,G__90879,G__90880,G__90881,G__90882,G__90883,G__90884,G__90885,G__90886,G__90887,G__90888,G__90889,G__90890,G__90891);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__90927 = cljs.core._nth(params,(0));
var G__90928 = cljs.core._nth(params,(1));
var G__90929 = cljs.core._nth(params,(2));
var G__90930 = cljs.core._nth(params,(3));
var G__90931 = cljs.core._nth(params,(4));
var G__90932 = cljs.core._nth(params,(5));
var G__90933 = cljs.core._nth(params,(6));
var G__90934 = cljs.core._nth(params,(7));
var G__90935 = cljs.core._nth(params,(8));
var G__90936 = cljs.core._nth(params,(9));
var G__90937 = cljs.core._nth(params,(10));
var G__90938 = cljs.core._nth(params,(11));
var G__90939 = cljs.core._nth(params,(12));
var G__90940 = cljs.core._nth(params,(13));
var G__90941 = cljs.core._nth(params,(14));
var G__90942 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__90910,G__90911,G__90912,G__90913,G__90914,G__90915,G__90916,G__90917,G__90918,G__90919,G__90920,G__90921,G__90922,G__90923,G__90924,G__90925,G__90926){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90910);

(invoc_array[(1)] = G__90911);

(invoc_array[(2)] = G__90912);

(invoc_array[(3)] = G__90913);

(invoc_array[(4)] = G__90914);

(invoc_array[(5)] = G__90915);

(invoc_array[(6)] = G__90916);

(invoc_array[(7)] = G__90917);

(invoc_array[(8)] = G__90918);

(invoc_array[(9)] = G__90919);

(invoc_array[(10)] = G__90920);

(invoc_array[(11)] = G__90921);

(invoc_array[(12)] = G__90922);

(invoc_array[(13)] = G__90923);

(invoc_array[(14)] = G__90924);

(invoc_array[(15)] = G__90925);

(invoc_array[vararg_idx] = G__90926);

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
var sci$impl$fns$fun_$_arity_16 = function (G__90910,G__90911,G__90912,G__90913,G__90914,G__90915,G__90916,G__90917,G__90918,G__90919,G__90920,G__90921,G__90922,G__90923,G__90924,G__90925,var_args){
var G__90926 = null;
if (arguments.length > 16) {
var G__91634__i = 0, G__91634__a = new Array(arguments.length -  16);
while (G__91634__i < G__91634__a.length) {G__91634__a[G__91634__i] = arguments[G__91634__i + 16]; ++G__91634__i;}
  G__90926 = new cljs.core.IndexedSeq(G__91634__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__90910,G__90911,G__90912,G__90913,G__90914,G__90915,G__90916,G__90917,G__90918,G__90919,G__90920,G__90921,G__90922,G__90923,G__90924,G__90925,G__90926);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__91635){
var G__90910 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90911 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90912 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90913 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90914 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90915 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90916 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90917 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90918 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90919 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90920 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90921 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90922 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90923 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90924 = cljs.core.first(arglist__91635);
arglist__91635 = cljs.core.next(arglist__91635);
var G__90925 = cljs.core.first(arglist__91635);
var G__90926 = cljs.core.rest(arglist__91635);
return sci$impl$fns$fun_$_arity_16__delegate(G__90910,G__90911,G__90912,G__90913,G__90914,G__90915,G__90916,G__90917,G__90918,G__90919,G__90920,G__90921,G__90922,G__90923,G__90924,G__90925,G__90926);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__90961 = cljs.core._nth(params,(0));
var G__90962 = cljs.core._nth(params,(1));
var G__90963 = cljs.core._nth(params,(2));
var G__90964 = cljs.core._nth(params,(3));
var G__90965 = cljs.core._nth(params,(4));
var G__90966 = cljs.core._nth(params,(5));
var G__90967 = cljs.core._nth(params,(6));
var G__90968 = cljs.core._nth(params,(7));
var G__90969 = cljs.core._nth(params,(8));
var G__90970 = cljs.core._nth(params,(9));
var G__90971 = cljs.core._nth(params,(10));
var G__90972 = cljs.core._nth(params,(11));
var G__90973 = cljs.core._nth(params,(12));
var G__90974 = cljs.core._nth(params,(13));
var G__90975 = cljs.core._nth(params,(14));
var G__90976 = cljs.core._nth(params,(15));
var G__90977 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__90943,G__90944,G__90945,G__90946,G__90947,G__90948,G__90949,G__90950,G__90951,G__90952,G__90953,G__90954,G__90955,G__90956,G__90957,G__90958,G__90959,G__90960){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90943);

(invoc_array[(1)] = G__90944);

(invoc_array[(2)] = G__90945);

(invoc_array[(3)] = G__90946);

(invoc_array[(4)] = G__90947);

(invoc_array[(5)] = G__90948);

(invoc_array[(6)] = G__90949);

(invoc_array[(7)] = G__90950);

(invoc_array[(8)] = G__90951);

(invoc_array[(9)] = G__90952);

(invoc_array[(10)] = G__90953);

(invoc_array[(11)] = G__90954);

(invoc_array[(12)] = G__90955);

(invoc_array[(13)] = G__90956);

(invoc_array[(14)] = G__90957);

(invoc_array[(15)] = G__90958);

(invoc_array[(16)] = G__90959);

(invoc_array[vararg_idx] = G__90960);

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
var sci$impl$fns$fun_$_arity_17 = function (G__90943,G__90944,G__90945,G__90946,G__90947,G__90948,G__90949,G__90950,G__90951,G__90952,G__90953,G__90954,G__90955,G__90956,G__90957,G__90958,G__90959,var_args){
var G__90960 = null;
if (arguments.length > 17) {
var G__91641__i = 0, G__91641__a = new Array(arguments.length -  17);
while (G__91641__i < G__91641__a.length) {G__91641__a[G__91641__i] = arguments[G__91641__i + 17]; ++G__91641__i;}
  G__90960 = new cljs.core.IndexedSeq(G__91641__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__90943,G__90944,G__90945,G__90946,G__90947,G__90948,G__90949,G__90950,G__90951,G__90952,G__90953,G__90954,G__90955,G__90956,G__90957,G__90958,G__90959,G__90960);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__91650){
var G__90943 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90944 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90945 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90946 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90947 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90948 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90949 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90950 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90951 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90952 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90953 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90954 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90955 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90956 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90957 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90958 = cljs.core.first(arglist__91650);
arglist__91650 = cljs.core.next(arglist__91650);
var G__90959 = cljs.core.first(arglist__91650);
var G__90960 = cljs.core.rest(arglist__91650);
return sci$impl$fns$fun_$_arity_17__delegate(G__90943,G__90944,G__90945,G__90946,G__90947,G__90948,G__90949,G__90950,G__90951,G__90952,G__90953,G__90954,G__90955,G__90956,G__90957,G__90958,G__90959,G__90960);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__90997 = cljs.core._nth(params,(0));
var G__90998 = cljs.core._nth(params,(1));
var G__90999 = cljs.core._nth(params,(2));
var G__91000 = cljs.core._nth(params,(3));
var G__91001 = cljs.core._nth(params,(4));
var G__91002 = cljs.core._nth(params,(5));
var G__91003 = cljs.core._nth(params,(6));
var G__91004 = cljs.core._nth(params,(7));
var G__91005 = cljs.core._nth(params,(8));
var G__91006 = cljs.core._nth(params,(9));
var G__91007 = cljs.core._nth(params,(10));
var G__91008 = cljs.core._nth(params,(11));
var G__91009 = cljs.core._nth(params,(12));
var G__91010 = cljs.core._nth(params,(13));
var G__91011 = cljs.core._nth(params,(14));
var G__91012 = cljs.core._nth(params,(15));
var G__91013 = cljs.core._nth(params,(16));
var G__91014 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__90978,G__90979,G__90980,G__90981,G__90982,G__90983,G__90984,G__90985,G__90986,G__90987,G__90988,G__90989,G__90990,G__90991,G__90992,G__90993,G__90994,G__90995,G__90996){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90978);

(invoc_array[(1)] = G__90979);

(invoc_array[(2)] = G__90980);

(invoc_array[(3)] = G__90981);

(invoc_array[(4)] = G__90982);

(invoc_array[(5)] = G__90983);

(invoc_array[(6)] = G__90984);

(invoc_array[(7)] = G__90985);

(invoc_array[(8)] = G__90986);

(invoc_array[(9)] = G__90987);

(invoc_array[(10)] = G__90988);

(invoc_array[(11)] = G__90989);

(invoc_array[(12)] = G__90990);

(invoc_array[(13)] = G__90991);

(invoc_array[(14)] = G__90992);

(invoc_array[(15)] = G__90993);

(invoc_array[(16)] = G__90994);

(invoc_array[(17)] = G__90995);

(invoc_array[vararg_idx] = G__90996);

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
var sci$impl$fns$fun_$_arity_18 = function (G__90978,G__90979,G__90980,G__90981,G__90982,G__90983,G__90984,G__90985,G__90986,G__90987,G__90988,G__90989,G__90990,G__90991,G__90992,G__90993,G__90994,G__90995,var_args){
var G__90996 = null;
if (arguments.length > 18) {
var G__91652__i = 0, G__91652__a = new Array(arguments.length -  18);
while (G__91652__i < G__91652__a.length) {G__91652__a[G__91652__i] = arguments[G__91652__i + 18]; ++G__91652__i;}
  G__90996 = new cljs.core.IndexedSeq(G__91652__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__90978,G__90979,G__90980,G__90981,G__90982,G__90983,G__90984,G__90985,G__90986,G__90987,G__90988,G__90989,G__90990,G__90991,G__90992,G__90993,G__90994,G__90995,G__90996);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__91653){
var G__90978 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90979 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90980 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90981 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90982 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90983 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90984 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90985 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90986 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90987 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90988 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90989 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90990 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90991 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90992 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90993 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90994 = cljs.core.first(arglist__91653);
arglist__91653 = cljs.core.next(arglist__91653);
var G__90995 = cljs.core.first(arglist__91653);
var G__90996 = cljs.core.rest(arglist__91653);
return sci$impl$fns$fun_$_arity_18__delegate(G__90978,G__90979,G__90980,G__90981,G__90982,G__90983,G__90984,G__90985,G__90986,G__90987,G__90988,G__90989,G__90990,G__90991,G__90992,G__90993,G__90994,G__90995,G__90996);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__91035 = cljs.core._nth(params,(0));
var G__91036 = cljs.core._nth(params,(1));
var G__91037 = cljs.core._nth(params,(2));
var G__91038 = cljs.core._nth(params,(3));
var G__91039 = cljs.core._nth(params,(4));
var G__91040 = cljs.core._nth(params,(5));
var G__91041 = cljs.core._nth(params,(6));
var G__91042 = cljs.core._nth(params,(7));
var G__91043 = cljs.core._nth(params,(8));
var G__91044 = cljs.core._nth(params,(9));
var G__91045 = cljs.core._nth(params,(10));
var G__91046 = cljs.core._nth(params,(11));
var G__91047 = cljs.core._nth(params,(12));
var G__91048 = cljs.core._nth(params,(13));
var G__91049 = cljs.core._nth(params,(14));
var G__91050 = cljs.core._nth(params,(15));
var G__91051 = cljs.core._nth(params,(16));
var G__91052 = cljs.core._nth(params,(17));
var G__91053 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__91015,G__91016,G__91017,G__91018,G__91019,G__91020,G__91021,G__91022,G__91023,G__91024,G__91025,G__91026,G__91027,G__91028,G__91029,G__91030,G__91031,G__91032,G__91033,G__91034){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91015);

(invoc_array[(1)] = G__91016);

(invoc_array[(2)] = G__91017);

(invoc_array[(3)] = G__91018);

(invoc_array[(4)] = G__91019);

(invoc_array[(5)] = G__91020);

(invoc_array[(6)] = G__91021);

(invoc_array[(7)] = G__91022);

(invoc_array[(8)] = G__91023);

(invoc_array[(9)] = G__91024);

(invoc_array[(10)] = G__91025);

(invoc_array[(11)] = G__91026);

(invoc_array[(12)] = G__91027);

(invoc_array[(13)] = G__91028);

(invoc_array[(14)] = G__91029);

(invoc_array[(15)] = G__91030);

(invoc_array[(16)] = G__91031);

(invoc_array[(17)] = G__91032);

(invoc_array[(18)] = G__91033);

(invoc_array[vararg_idx] = G__91034);

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
var sci$impl$fns$fun_$_arity_19 = function (G__91015,G__91016,G__91017,G__91018,G__91019,G__91020,G__91021,G__91022,G__91023,G__91024,G__91025,G__91026,G__91027,G__91028,G__91029,G__91030,G__91031,G__91032,G__91033,var_args){
var G__91034 = null;
if (arguments.length > 19) {
var G__91663__i = 0, G__91663__a = new Array(arguments.length -  19);
while (G__91663__i < G__91663__a.length) {G__91663__a[G__91663__i] = arguments[G__91663__i + 19]; ++G__91663__i;}
  G__91034 = new cljs.core.IndexedSeq(G__91663__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__91015,G__91016,G__91017,G__91018,G__91019,G__91020,G__91021,G__91022,G__91023,G__91024,G__91025,G__91026,G__91027,G__91028,G__91029,G__91030,G__91031,G__91032,G__91033,G__91034);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__91664){
var G__91015 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91016 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91017 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91018 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91019 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91020 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91021 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91022 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91023 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91024 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91025 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91026 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91027 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91028 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91029 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91030 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91031 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91032 = cljs.core.first(arglist__91664);
arglist__91664 = cljs.core.next(arglist__91664);
var G__91033 = cljs.core.first(arglist__91664);
var G__91034 = cljs.core.rest(arglist__91664);
return sci$impl$fns$fun_$_arity_19__delegate(G__91015,G__91016,G__91017,G__91018,G__91019,G__91020,G__91021,G__91022,G__91023,G__91024,G__91025,G__91026,G__91027,G__91028,G__91029,G__91030,G__91031,G__91032,G__91033,G__91034);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__91075 = cljs.core._nth(params,(0));
var G__91076 = cljs.core._nth(params,(1));
var G__91077 = cljs.core._nth(params,(2));
var G__91078 = cljs.core._nth(params,(3));
var G__91079 = cljs.core._nth(params,(4));
var G__91080 = cljs.core._nth(params,(5));
var G__91081 = cljs.core._nth(params,(6));
var G__91082 = cljs.core._nth(params,(7));
var G__91083 = cljs.core._nth(params,(8));
var G__91084 = cljs.core._nth(params,(9));
var G__91085 = cljs.core._nth(params,(10));
var G__91086 = cljs.core._nth(params,(11));
var G__91087 = cljs.core._nth(params,(12));
var G__91088 = cljs.core._nth(params,(13));
var G__91089 = cljs.core._nth(params,(14));
var G__91090 = cljs.core._nth(params,(15));
var G__91091 = cljs.core._nth(params,(16));
var G__91092 = cljs.core._nth(params,(17));
var G__91093 = cljs.core._nth(params,(18));
var G__91094 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__91054,G__91055,G__91056,G__91057,G__91058,G__91059,G__91060,G__91061,G__91062,G__91063,G__91064,G__91065,G__91066,G__91067,G__91068,G__91069,G__91070,G__91071,G__91072,G__91073,G__91074){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91054);

(invoc_array[(1)] = G__91055);

(invoc_array[(2)] = G__91056);

(invoc_array[(3)] = G__91057);

(invoc_array[(4)] = G__91058);

(invoc_array[(5)] = G__91059);

(invoc_array[(6)] = G__91060);

(invoc_array[(7)] = G__91061);

(invoc_array[(8)] = G__91062);

(invoc_array[(9)] = G__91063);

(invoc_array[(10)] = G__91064);

(invoc_array[(11)] = G__91065);

(invoc_array[(12)] = G__91066);

(invoc_array[(13)] = G__91067);

(invoc_array[(14)] = G__91068);

(invoc_array[(15)] = G__91069);

(invoc_array[(16)] = G__91070);

(invoc_array[(17)] = G__91071);

(invoc_array[(18)] = G__91072);

(invoc_array[(19)] = G__91073);

(invoc_array[vararg_idx] = G__91074);

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
var sci$impl$fns$fun_$_arity_20 = function (G__91054,G__91055,G__91056,G__91057,G__91058,G__91059,G__91060,G__91061,G__91062,G__91063,G__91064,G__91065,G__91066,G__91067,G__91068,G__91069,G__91070,G__91071,G__91072,G__91073,var_args){
var G__91074 = null;
if (arguments.length > 20) {
var G__91682__i = 0, G__91682__a = new Array(arguments.length -  20);
while (G__91682__i < G__91682__a.length) {G__91682__a[G__91682__i] = arguments[G__91682__i + 20]; ++G__91682__i;}
  G__91074 = new cljs.core.IndexedSeq(G__91682__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__91054,G__91055,G__91056,G__91057,G__91058,G__91059,G__91060,G__91061,G__91062,G__91063,G__91064,G__91065,G__91066,G__91067,G__91068,G__91069,G__91070,G__91071,G__91072,G__91073,G__91074);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__91683){
var G__91054 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91055 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91056 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91057 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91058 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91059 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91060 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91061 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91062 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91063 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91064 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91065 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91066 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91067 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91068 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91069 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91070 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91071 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91072 = cljs.core.first(arglist__91683);
arglist__91683 = cljs.core.next(arglist__91683);
var G__91073 = cljs.core.first(arglist__91683);
var G__91074 = cljs.core.rest(arglist__91683);
return sci$impl$fns$fun_$_arity_20__delegate(G__91054,G__91055,G__91056,G__91057,G__91058,G__91059,G__91060,G__91061,G__91062,G__91063,G__91064,G__91065,G__91066,G__91067,G__91068,G__91069,G__91070,G__91071,G__91072,G__91073,G__91074);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__90596)].join('')));

}
})():(function (){var G__91099 = (fixed_arity | (0));
switch (G__91099) {
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
var G__91101 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__91100){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91100);

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
var G__91104 = cljs.core._nth(params,(0));
var G__91105 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__91102,G__91103){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91102);

(invoc_array[(1)] = G__91103);

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
var G__91109 = cljs.core._nth(params,(0));
var G__91110 = cljs.core._nth(params,(1));
var G__91111 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__91106,G__91107,G__91108){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91106);

(invoc_array[(1)] = G__91107);

(invoc_array[(2)] = G__91108);

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
var G__91116 = cljs.core._nth(params,(0));
var G__91117 = cljs.core._nth(params,(1));
var G__91118 = cljs.core._nth(params,(2));
var G__91119 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__91112,G__91113,G__91114,G__91115){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91112);

(invoc_array[(1)] = G__91113);

(invoc_array[(2)] = G__91114);

(invoc_array[(3)] = G__91115);

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
var G__91126 = cljs.core._nth(params,(0));
var G__91127 = cljs.core._nth(params,(1));
var G__91128 = cljs.core._nth(params,(2));
var G__91129 = cljs.core._nth(params,(3));
var G__91130 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__91121,G__91122,G__91123,G__91124,G__91125){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91121);

(invoc_array[(1)] = G__91122);

(invoc_array[(2)] = G__91123);

(invoc_array[(3)] = G__91124);

(invoc_array[(4)] = G__91125);

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
var G__91140 = cljs.core._nth(params,(0));
var G__91141 = cljs.core._nth(params,(1));
var G__91142 = cljs.core._nth(params,(2));
var G__91143 = cljs.core._nth(params,(3));
var G__91144 = cljs.core._nth(params,(4));
var G__91145 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__91134,G__91135,G__91136,G__91137,G__91138,G__91139){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91134);

(invoc_array[(1)] = G__91135);

(invoc_array[(2)] = G__91136);

(invoc_array[(3)] = G__91137);

(invoc_array[(4)] = G__91138);

(invoc_array[(5)] = G__91139);

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
var G__91153 = cljs.core._nth(params,(0));
var G__91154 = cljs.core._nth(params,(1));
var G__91155 = cljs.core._nth(params,(2));
var G__91156 = cljs.core._nth(params,(3));
var G__91157 = cljs.core._nth(params,(4));
var G__91158 = cljs.core._nth(params,(5));
var G__91159 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__91146,G__91147,G__91148,G__91149,G__91150,G__91151,G__91152){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91146);

(invoc_array[(1)] = G__91147);

(invoc_array[(2)] = G__91148);

(invoc_array[(3)] = G__91149);

(invoc_array[(4)] = G__91150);

(invoc_array[(5)] = G__91151);

(invoc_array[(6)] = G__91152);

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
var G__91176 = cljs.core._nth(params,(0));
var G__91177 = cljs.core._nth(params,(1));
var G__91178 = cljs.core._nth(params,(2));
var G__91179 = cljs.core._nth(params,(3));
var G__91180 = cljs.core._nth(params,(4));
var G__91181 = cljs.core._nth(params,(5));
var G__91182 = cljs.core._nth(params,(6));
var G__91183 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__91168,G__91169,G__91170,G__91171,G__91172,G__91173,G__91174,G__91175){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91168);

(invoc_array[(1)] = G__91169);

(invoc_array[(2)] = G__91170);

(invoc_array[(3)] = G__91171);

(invoc_array[(4)] = G__91172);

(invoc_array[(5)] = G__91173);

(invoc_array[(6)] = G__91174);

(invoc_array[(7)] = G__91175);

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
var G__91201 = cljs.core._nth(params,(0));
var G__91202 = cljs.core._nth(params,(1));
var G__91203 = cljs.core._nth(params,(2));
var G__91204 = cljs.core._nth(params,(3));
var G__91205 = cljs.core._nth(params,(4));
var G__91206 = cljs.core._nth(params,(5));
var G__91207 = cljs.core._nth(params,(6));
var G__91208 = cljs.core._nth(params,(7));
var G__91209 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__91192,G__91193,G__91194,G__91195,G__91196,G__91197,G__91198,G__91199,G__91200){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91192);

(invoc_array[(1)] = G__91193);

(invoc_array[(2)] = G__91194);

(invoc_array[(3)] = G__91195);

(invoc_array[(4)] = G__91196);

(invoc_array[(5)] = G__91197);

(invoc_array[(6)] = G__91198);

(invoc_array[(7)] = G__91199);

(invoc_array[(8)] = G__91200);

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
var G__91221 = cljs.core._nth(params,(0));
var G__91222 = cljs.core._nth(params,(1));
var G__91223 = cljs.core._nth(params,(2));
var G__91224 = cljs.core._nth(params,(3));
var G__91225 = cljs.core._nth(params,(4));
var G__91226 = cljs.core._nth(params,(5));
var G__91227 = cljs.core._nth(params,(6));
var G__91228 = cljs.core._nth(params,(7));
var G__91229 = cljs.core._nth(params,(8));
var G__91230 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__91211,G__91212,G__91213,G__91214,G__91215,G__91216,G__91217,G__91218,G__91219,G__91220){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91211);

(invoc_array[(1)] = G__91212);

(invoc_array[(2)] = G__91213);

(invoc_array[(3)] = G__91214);

(invoc_array[(4)] = G__91215);

(invoc_array[(5)] = G__91216);

(invoc_array[(6)] = G__91217);

(invoc_array[(7)] = G__91218);

(invoc_array[(8)] = G__91219);

(invoc_array[(9)] = G__91220);

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
var G__91242 = cljs.core._nth(params,(0));
var G__91243 = cljs.core._nth(params,(1));
var G__91244 = cljs.core._nth(params,(2));
var G__91245 = cljs.core._nth(params,(3));
var G__91246 = cljs.core._nth(params,(4));
var G__91247 = cljs.core._nth(params,(5));
var G__91248 = cljs.core._nth(params,(6));
var G__91249 = cljs.core._nth(params,(7));
var G__91250 = cljs.core._nth(params,(8));
var G__91251 = cljs.core._nth(params,(9));
var G__91252 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__91231,G__91232,G__91233,G__91234,G__91235,G__91236,G__91237,G__91238,G__91239,G__91240,G__91241){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91231);

(invoc_array[(1)] = G__91232);

(invoc_array[(2)] = G__91233);

(invoc_array[(3)] = G__91234);

(invoc_array[(4)] = G__91235);

(invoc_array[(5)] = G__91236);

(invoc_array[(6)] = G__91237);

(invoc_array[(7)] = G__91238);

(invoc_array[(8)] = G__91239);

(invoc_array[(9)] = G__91240);

(invoc_array[(10)] = G__91241);

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
var G__91266 = cljs.core._nth(params,(0));
var G__91267 = cljs.core._nth(params,(1));
var G__91269 = cljs.core._nth(params,(2));
var G__91270 = cljs.core._nth(params,(3));
var G__91271 = cljs.core._nth(params,(4));
var G__91272 = cljs.core._nth(params,(5));
var G__91273 = cljs.core._nth(params,(6));
var G__91274 = cljs.core._nth(params,(7));
var G__91275 = cljs.core._nth(params,(8));
var G__91276 = cljs.core._nth(params,(9));
var G__91277 = cljs.core._nth(params,(10));
var G__91278 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__91254,G__91255,G__91256,G__91257,G__91258,G__91259,G__91260,G__91261,G__91262,G__91263,G__91264,G__91265){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91254);

(invoc_array[(1)] = G__91255);

(invoc_array[(2)] = G__91256);

(invoc_array[(3)] = G__91257);

(invoc_array[(4)] = G__91258);

(invoc_array[(5)] = G__91259);

(invoc_array[(6)] = G__91260);

(invoc_array[(7)] = G__91261);

(invoc_array[(8)] = G__91262);

(invoc_array[(9)] = G__91263);

(invoc_array[(10)] = G__91264);

(invoc_array[(11)] = G__91265);

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
var G__91299 = cljs.core._nth(params,(0));
var G__91300 = cljs.core._nth(params,(1));
var G__91301 = cljs.core._nth(params,(2));
var G__91302 = cljs.core._nth(params,(3));
var G__91303 = cljs.core._nth(params,(4));
var G__91304 = cljs.core._nth(params,(5));
var G__91305 = cljs.core._nth(params,(6));
var G__91306 = cljs.core._nth(params,(7));
var G__91307 = cljs.core._nth(params,(8));
var G__91308 = cljs.core._nth(params,(9));
var G__91309 = cljs.core._nth(params,(10));
var G__91310 = cljs.core._nth(params,(11));
var G__91311 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__91286,G__91287,G__91288,G__91289,G__91290,G__91291,G__91292,G__91293,G__91294,G__91295,G__91296,G__91297,G__91298){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91286);

(invoc_array[(1)] = G__91287);

(invoc_array[(2)] = G__91288);

(invoc_array[(3)] = G__91289);

(invoc_array[(4)] = G__91290);

(invoc_array[(5)] = G__91291);

(invoc_array[(6)] = G__91292);

(invoc_array[(7)] = G__91293);

(invoc_array[(8)] = G__91294);

(invoc_array[(9)] = G__91295);

(invoc_array[(10)] = G__91296);

(invoc_array[(11)] = G__91297);

(invoc_array[(12)] = G__91298);

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
var G__91326 = cljs.core._nth(params,(0));
var G__91327 = cljs.core._nth(params,(1));
var G__91328 = cljs.core._nth(params,(2));
var G__91329 = cljs.core._nth(params,(3));
var G__91330 = cljs.core._nth(params,(4));
var G__91331 = cljs.core._nth(params,(5));
var G__91332 = cljs.core._nth(params,(6));
var G__91333 = cljs.core._nth(params,(7));
var G__91334 = cljs.core._nth(params,(8));
var G__91335 = cljs.core._nth(params,(9));
var G__91336 = cljs.core._nth(params,(10));
var G__91337 = cljs.core._nth(params,(11));
var G__91338 = cljs.core._nth(params,(12));
var G__91339 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__91312,G__91313,G__91314,G__91315,G__91316,G__91317,G__91318,G__91319,G__91320,G__91321,G__91322,G__91323,G__91324,G__91325){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91312);

(invoc_array[(1)] = G__91313);

(invoc_array[(2)] = G__91314);

(invoc_array[(3)] = G__91315);

(invoc_array[(4)] = G__91316);

(invoc_array[(5)] = G__91317);

(invoc_array[(6)] = G__91318);

(invoc_array[(7)] = G__91319);

(invoc_array[(8)] = G__91320);

(invoc_array[(9)] = G__91321);

(invoc_array[(10)] = G__91322);

(invoc_array[(11)] = G__91323);

(invoc_array[(12)] = G__91324);

(invoc_array[(13)] = G__91325);

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
var G__91360 = cljs.core._nth(params,(0));
var G__91361 = cljs.core._nth(params,(1));
var G__91362 = cljs.core._nth(params,(2));
var G__91363 = cljs.core._nth(params,(3));
var G__91364 = cljs.core._nth(params,(4));
var G__91365 = cljs.core._nth(params,(5));
var G__91366 = cljs.core._nth(params,(6));
var G__91367 = cljs.core._nth(params,(7));
var G__91368 = cljs.core._nth(params,(8));
var G__91369 = cljs.core._nth(params,(9));
var G__91370 = cljs.core._nth(params,(10));
var G__91371 = cljs.core._nth(params,(11));
var G__91372 = cljs.core._nth(params,(12));
var G__91373 = cljs.core._nth(params,(13));
var G__91374 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__91345,G__91346,G__91347,G__91348,G__91349,G__91350,G__91351,G__91352,G__91353,G__91354,G__91355,G__91356,G__91357,G__91358,G__91359){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91345);

(invoc_array[(1)] = G__91346);

(invoc_array[(2)] = G__91347);

(invoc_array[(3)] = G__91348);

(invoc_array[(4)] = G__91349);

(invoc_array[(5)] = G__91350);

(invoc_array[(6)] = G__91351);

(invoc_array[(7)] = G__91352);

(invoc_array[(8)] = G__91353);

(invoc_array[(9)] = G__91354);

(invoc_array[(10)] = G__91355);

(invoc_array[(11)] = G__91356);

(invoc_array[(12)] = G__91357);

(invoc_array[(13)] = G__91358);

(invoc_array[(14)] = G__91359);

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
var G__91391 = cljs.core._nth(params,(0));
var G__91392 = cljs.core._nth(params,(1));
var G__91393 = cljs.core._nth(params,(2));
var G__91394 = cljs.core._nth(params,(3));
var G__91395 = cljs.core._nth(params,(4));
var G__91396 = cljs.core._nth(params,(5));
var G__91397 = cljs.core._nth(params,(6));
var G__91398 = cljs.core._nth(params,(7));
var G__91399 = cljs.core._nth(params,(8));
var G__91400 = cljs.core._nth(params,(9));
var G__91401 = cljs.core._nth(params,(10));
var G__91402 = cljs.core._nth(params,(11));
var G__91403 = cljs.core._nth(params,(12));
var G__91404 = cljs.core._nth(params,(13));
var G__91405 = cljs.core._nth(params,(14));
var G__91406 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__91375,G__91376,G__91377,G__91378,G__91379,G__91380,G__91381,G__91382,G__91383,G__91384,G__91385,G__91386,G__91387,G__91388,G__91389,G__91390){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91375);

(invoc_array[(1)] = G__91376);

(invoc_array[(2)] = G__91377);

(invoc_array[(3)] = G__91378);

(invoc_array[(4)] = G__91379);

(invoc_array[(5)] = G__91380);

(invoc_array[(6)] = G__91381);

(invoc_array[(7)] = G__91382);

(invoc_array[(8)] = G__91383);

(invoc_array[(9)] = G__91384);

(invoc_array[(10)] = G__91385);

(invoc_array[(11)] = G__91386);

(invoc_array[(12)] = G__91387);

(invoc_array[(13)] = G__91388);

(invoc_array[(14)] = G__91389);

(invoc_array[(15)] = G__91390);

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
var G__91432 = cljs.core._nth(params,(0));
var G__91433 = cljs.core._nth(params,(1));
var G__91434 = cljs.core._nth(params,(2));
var G__91435 = cljs.core._nth(params,(3));
var G__91436 = cljs.core._nth(params,(4));
var G__91437 = cljs.core._nth(params,(5));
var G__91438 = cljs.core._nth(params,(6));
var G__91439 = cljs.core._nth(params,(7));
var G__91440 = cljs.core._nth(params,(8));
var G__91441 = cljs.core._nth(params,(9));
var G__91442 = cljs.core._nth(params,(10));
var G__91443 = cljs.core._nth(params,(11));
var G__91444 = cljs.core._nth(params,(12));
var G__91445 = cljs.core._nth(params,(13));
var G__91446 = cljs.core._nth(params,(14));
var G__91447 = cljs.core._nth(params,(15));
var G__91448 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__91415,G__91416,G__91417,G__91418,G__91419,G__91420,G__91421,G__91422,G__91423,G__91424,G__91425,G__91426,G__91427,G__91428,G__91429,G__91430,G__91431){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91415);

(invoc_array[(1)] = G__91416);

(invoc_array[(2)] = G__91417);

(invoc_array[(3)] = G__91418);

(invoc_array[(4)] = G__91419);

(invoc_array[(5)] = G__91420);

(invoc_array[(6)] = G__91421);

(invoc_array[(7)] = G__91422);

(invoc_array[(8)] = G__91423);

(invoc_array[(9)] = G__91424);

(invoc_array[(10)] = G__91425);

(invoc_array[(11)] = G__91426);

(invoc_array[(12)] = G__91427);

(invoc_array[(13)] = G__91428);

(invoc_array[(14)] = G__91429);

(invoc_array[(15)] = G__91430);

(invoc_array[(16)] = G__91431);

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
var G__91472 = cljs.core._nth(params,(0));
var G__91473 = cljs.core._nth(params,(1));
var G__91474 = cljs.core._nth(params,(2));
var G__91475 = cljs.core._nth(params,(3));
var G__91476 = cljs.core._nth(params,(4));
var G__91477 = cljs.core._nth(params,(5));
var G__91478 = cljs.core._nth(params,(6));
var G__91479 = cljs.core._nth(params,(7));
var G__91480 = cljs.core._nth(params,(8));
var G__91481 = cljs.core._nth(params,(9));
var G__91482 = cljs.core._nth(params,(10));
var G__91483 = cljs.core._nth(params,(11));
var G__91484 = cljs.core._nth(params,(12));
var G__91485 = cljs.core._nth(params,(13));
var G__91486 = cljs.core._nth(params,(14));
var G__91487 = cljs.core._nth(params,(15));
var G__91488 = cljs.core._nth(params,(16));
var G__91489 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__91454,G__91455,G__91456,G__91457,G__91458,G__91459,G__91460,G__91461,G__91462,G__91463,G__91464,G__91465,G__91466,G__91467,G__91468,G__91469,G__91470,G__91471){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91454);

(invoc_array[(1)] = G__91455);

(invoc_array[(2)] = G__91456);

(invoc_array[(3)] = G__91457);

(invoc_array[(4)] = G__91458);

(invoc_array[(5)] = G__91459);

(invoc_array[(6)] = G__91460);

(invoc_array[(7)] = G__91461);

(invoc_array[(8)] = G__91462);

(invoc_array[(9)] = G__91463);

(invoc_array[(10)] = G__91464);

(invoc_array[(11)] = G__91465);

(invoc_array[(12)] = G__91466);

(invoc_array[(13)] = G__91467);

(invoc_array[(14)] = G__91468);

(invoc_array[(15)] = G__91469);

(invoc_array[(16)] = G__91470);

(invoc_array[(17)] = G__91471);

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
var G__91509 = cljs.core._nth(params,(0));
var G__91510 = cljs.core._nth(params,(1));
var G__91511 = cljs.core._nth(params,(2));
var G__91512 = cljs.core._nth(params,(3));
var G__91513 = cljs.core._nth(params,(4));
var G__91514 = cljs.core._nth(params,(5));
var G__91515 = cljs.core._nth(params,(6));
var G__91516 = cljs.core._nth(params,(7));
var G__91517 = cljs.core._nth(params,(8));
var G__91518 = cljs.core._nth(params,(9));
var G__91519 = cljs.core._nth(params,(10));
var G__91520 = cljs.core._nth(params,(11));
var G__91521 = cljs.core._nth(params,(12));
var G__91522 = cljs.core._nth(params,(13));
var G__91523 = cljs.core._nth(params,(14));
var G__91524 = cljs.core._nth(params,(15));
var G__91525 = cljs.core._nth(params,(16));
var G__91526 = cljs.core._nth(params,(17));
var G__91527 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__91490,G__91491,G__91492,G__91493,G__91494,G__91495,G__91496,G__91497,G__91498,G__91499,G__91500,G__91501,G__91502,G__91503,G__91504,G__91505,G__91506,G__91507,G__91508){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91490);

(invoc_array[(1)] = G__91491);

(invoc_array[(2)] = G__91492);

(invoc_array[(3)] = G__91493);

(invoc_array[(4)] = G__91494);

(invoc_array[(5)] = G__91495);

(invoc_array[(6)] = G__91496);

(invoc_array[(7)] = G__91497);

(invoc_array[(8)] = G__91498);

(invoc_array[(9)] = G__91499);

(invoc_array[(10)] = G__91500);

(invoc_array[(11)] = G__91501);

(invoc_array[(12)] = G__91502);

(invoc_array[(13)] = G__91503);

(invoc_array[(14)] = G__91504);

(invoc_array[(15)] = G__91505);

(invoc_array[(16)] = G__91506);

(invoc_array[(17)] = G__91507);

(invoc_array[(18)] = G__91508);

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
var G__91552 = cljs.core._nth(params,(0));
var G__91553 = cljs.core._nth(params,(1));
var G__91554 = cljs.core._nth(params,(2));
var G__91555 = cljs.core._nth(params,(3));
var G__91556 = cljs.core._nth(params,(4));
var G__91557 = cljs.core._nth(params,(5));
var G__91558 = cljs.core._nth(params,(6));
var G__91559 = cljs.core._nth(params,(7));
var G__91560 = cljs.core._nth(params,(8));
var G__91561 = cljs.core._nth(params,(9));
var G__91562 = cljs.core._nth(params,(10));
var G__91563 = cljs.core._nth(params,(11));
var G__91564 = cljs.core._nth(params,(12));
var G__91565 = cljs.core._nth(params,(13));
var G__91566 = cljs.core._nth(params,(14));
var G__91567 = cljs.core._nth(params,(15));
var G__91568 = cljs.core._nth(params,(16));
var G__91569 = cljs.core._nth(params,(17));
var G__91570 = cljs.core._nth(params,(18));
var G__91571 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__91532,G__91533,G__91534,G__91535,G__91536,G__91537,G__91538,G__91539,G__91540,G__91541,G__91542,G__91543,G__91544,G__91545,G__91546,G__91547,G__91548,G__91549,G__91550,G__91551){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__91532);

(invoc_array[(1)] = G__91533);

(invoc_array[(2)] = G__91534);

(invoc_array[(3)] = G__91535);

(invoc_array[(4)] = G__91536);

(invoc_array[(5)] = G__91537);

(invoc_array[(6)] = G__91538);

(invoc_array[(7)] = G__91539);

(invoc_array[(8)] = G__91540);

(invoc_array[(9)] = G__91541);

(invoc_array[(10)] = G__91542);

(invoc_array[(11)] = G__91543);

(invoc_array[(12)] = G__91544);

(invoc_array[(13)] = G__91545);

(invoc_array[(14)] = G__91546);

(invoc_array[(15)] = G__91547);

(invoc_array[(16)] = G__91548);

(invoc_array[(17)] = G__91549);

(invoc_array[(18)] = G__91550);

(invoc_array[(19)] = G__91551);

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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__91099)].join('')));

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
var G__91769__delegate = function (args){
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
var G__91769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__91770__i = 0, G__91770__a = new Array(arguments.length -  0);
while (G__91770__i < G__91770__a.length) {G__91770__a[G__91770__i] = arguments[G__91770__i + 0]; ++G__91770__i;}
  args = new cljs.core.IndexedSeq(G__91770__a,0,null);
} 
return G__91769__delegate.call(this,args);};
G__91769.cljs$lang$maxFixedArity = 0;
G__91769.cljs$lang$applyTo = (function (arglist__91771){
var args = cljs.core.seq(arglist__91771);
return G__91769__delegate(args);
});
G__91769.cljs$core$IFn$_invoke$arity$variadic = G__91769__delegate;
return G__91769;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__91576_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__91576_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
