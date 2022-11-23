goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__90038 = arguments.length;
switch (G__90038) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__90039 = fixed_arity;
switch (G__90039) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__90040){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__90040);

while(true){
var ret__28742__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28742__auto__)){
continue;
} else {
return ret__28742__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__90040 = null;
if (arguments.length > 0) {
var G__90642__i = 0, G__90642__a = new Array(arguments.length -  0);
while (G__90642__i < G__90642__a.length) {G__90642__a[G__90642__i] = arguments[G__90642__i + 0]; ++G__90642__i;}
  G__90040 = new cljs.core.IndexedSeq(G__90642__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__90040);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__90643){
var G__90040 = cljs.core.seq(arglist__90643);
return sci$impl$fns$arity_0__delegate(G__90040);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__90041,G__90042){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90041);

(invoc_array[vararg_idx] = G__90042);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__90041,var_args){
var G__90042 = null;
if (arguments.length > 1) {
var G__90647__i = 0, G__90647__a = new Array(arguments.length -  1);
while (G__90647__i < G__90647__a.length) {G__90647__a[G__90647__i] = arguments[G__90647__i + 1]; ++G__90647__i;}
  G__90042 = new cljs.core.IndexedSeq(G__90647__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__90041,G__90042);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__90648){
var G__90041 = cljs.core.first(arglist__90648);
var G__90042 = cljs.core.rest(arglist__90648);
return sci$impl$fns$arity_1__delegate(G__90041,G__90042);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__90043,G__90044,G__90045){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90043);

(invoc_array[(1)] = G__90044);

(invoc_array[vararg_idx] = G__90045);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__90043,G__90044,var_args){
var G__90045 = null;
if (arguments.length > 2) {
var G__90649__i = 0, G__90649__a = new Array(arguments.length -  2);
while (G__90649__i < G__90649__a.length) {G__90649__a[G__90649__i] = arguments[G__90649__i + 2]; ++G__90649__i;}
  G__90045 = new cljs.core.IndexedSeq(G__90649__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__90043,G__90044,G__90045);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__90650){
var G__90043 = cljs.core.first(arglist__90650);
arglist__90650 = cljs.core.next(arglist__90650);
var G__90044 = cljs.core.first(arglist__90650);
var G__90045 = cljs.core.rest(arglist__90650);
return sci$impl$fns$arity_2__delegate(G__90043,G__90044,G__90045);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__90046,G__90047,G__90048,G__90049){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90046);

(invoc_array[(1)] = G__90047);

(invoc_array[(2)] = G__90048);

(invoc_array[vararg_idx] = G__90049);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__90046,G__90047,G__90048,var_args){
var G__90049 = null;
if (arguments.length > 3) {
var G__90651__i = 0, G__90651__a = new Array(arguments.length -  3);
while (G__90651__i < G__90651__a.length) {G__90651__a[G__90651__i] = arguments[G__90651__i + 3]; ++G__90651__i;}
  G__90049 = new cljs.core.IndexedSeq(G__90651__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__90046,G__90047,G__90048,G__90049);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__90652){
var G__90046 = cljs.core.first(arglist__90652);
arglist__90652 = cljs.core.next(arglist__90652);
var G__90047 = cljs.core.first(arglist__90652);
arglist__90652 = cljs.core.next(arglist__90652);
var G__90048 = cljs.core.first(arglist__90652);
var G__90049 = cljs.core.rest(arglist__90652);
return sci$impl$fns$arity_3__delegate(G__90046,G__90047,G__90048,G__90049);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__90050,G__90051,G__90052,G__90053,G__90054){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90050);

(invoc_array[(1)] = G__90051);

(invoc_array[(2)] = G__90052);

(invoc_array[(3)] = G__90053);

(invoc_array[vararg_idx] = G__90054);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__90050,G__90051,G__90052,G__90053,var_args){
var G__90054 = null;
if (arguments.length > 4) {
var G__90656__i = 0, G__90656__a = new Array(arguments.length -  4);
while (G__90656__i < G__90656__a.length) {G__90656__a[G__90656__i] = arguments[G__90656__i + 4]; ++G__90656__i;}
  G__90054 = new cljs.core.IndexedSeq(G__90656__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__90050,G__90051,G__90052,G__90053,G__90054);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__90657){
var G__90050 = cljs.core.first(arglist__90657);
arglist__90657 = cljs.core.next(arglist__90657);
var G__90051 = cljs.core.first(arglist__90657);
arglist__90657 = cljs.core.next(arglist__90657);
var G__90052 = cljs.core.first(arglist__90657);
arglist__90657 = cljs.core.next(arglist__90657);
var G__90053 = cljs.core.first(arglist__90657);
var G__90054 = cljs.core.rest(arglist__90657);
return sci$impl$fns$arity_4__delegate(G__90050,G__90051,G__90052,G__90053,G__90054);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__90061,G__90062,G__90063,G__90064,G__90065,G__90066){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90061);

(invoc_array[(1)] = G__90062);

(invoc_array[(2)] = G__90063);

(invoc_array[(3)] = G__90064);

(invoc_array[(4)] = G__90065);

(invoc_array[vararg_idx] = G__90066);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__90061,G__90062,G__90063,G__90064,G__90065,var_args){
var G__90066 = null;
if (arguments.length > 5) {
var G__90658__i = 0, G__90658__a = new Array(arguments.length -  5);
while (G__90658__i < G__90658__a.length) {G__90658__a[G__90658__i] = arguments[G__90658__i + 5]; ++G__90658__i;}
  G__90066 = new cljs.core.IndexedSeq(G__90658__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__90061,G__90062,G__90063,G__90064,G__90065,G__90066);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__90659){
var G__90061 = cljs.core.first(arglist__90659);
arglist__90659 = cljs.core.next(arglist__90659);
var G__90062 = cljs.core.first(arglist__90659);
arglist__90659 = cljs.core.next(arglist__90659);
var G__90063 = cljs.core.first(arglist__90659);
arglist__90659 = cljs.core.next(arglist__90659);
var G__90064 = cljs.core.first(arglist__90659);
arglist__90659 = cljs.core.next(arglist__90659);
var G__90065 = cljs.core.first(arglist__90659);
var G__90066 = cljs.core.rest(arglist__90659);
return sci$impl$fns$arity_5__delegate(G__90061,G__90062,G__90063,G__90064,G__90065,G__90066);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__90080,G__90081,G__90082,G__90083,G__90084,G__90085,G__90086){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90080);

(invoc_array[(1)] = G__90081);

(invoc_array[(2)] = G__90082);

(invoc_array[(3)] = G__90083);

(invoc_array[(4)] = G__90084);

(invoc_array[(5)] = G__90085);

(invoc_array[vararg_idx] = G__90086);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__90080,G__90081,G__90082,G__90083,G__90084,G__90085,var_args){
var G__90086 = null;
if (arguments.length > 6) {
var G__90663__i = 0, G__90663__a = new Array(arguments.length -  6);
while (G__90663__i < G__90663__a.length) {G__90663__a[G__90663__i] = arguments[G__90663__i + 6]; ++G__90663__i;}
  G__90086 = new cljs.core.IndexedSeq(G__90663__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__90080,G__90081,G__90082,G__90083,G__90084,G__90085,G__90086);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__90664){
var G__90080 = cljs.core.first(arglist__90664);
arglist__90664 = cljs.core.next(arglist__90664);
var G__90081 = cljs.core.first(arglist__90664);
arglist__90664 = cljs.core.next(arglist__90664);
var G__90082 = cljs.core.first(arglist__90664);
arglist__90664 = cljs.core.next(arglist__90664);
var G__90083 = cljs.core.first(arglist__90664);
arglist__90664 = cljs.core.next(arglist__90664);
var G__90084 = cljs.core.first(arglist__90664);
arglist__90664 = cljs.core.next(arglist__90664);
var G__90085 = cljs.core.first(arglist__90664);
var G__90086 = cljs.core.rest(arglist__90664);
return sci$impl$fns$arity_6__delegate(G__90080,G__90081,G__90082,G__90083,G__90084,G__90085,G__90086);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__90098,G__90099,G__90100,G__90101,G__90102,G__90103,G__90104,G__90105){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90098);

(invoc_array[(1)] = G__90099);

(invoc_array[(2)] = G__90100);

(invoc_array[(3)] = G__90101);

(invoc_array[(4)] = G__90102);

(invoc_array[(5)] = G__90103);

(invoc_array[(6)] = G__90104);

(invoc_array[vararg_idx] = G__90105);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__90098,G__90099,G__90100,G__90101,G__90102,G__90103,G__90104,var_args){
var G__90105 = null;
if (arguments.length > 7) {
var G__90665__i = 0, G__90665__a = new Array(arguments.length -  7);
while (G__90665__i < G__90665__a.length) {G__90665__a[G__90665__i] = arguments[G__90665__i + 7]; ++G__90665__i;}
  G__90105 = new cljs.core.IndexedSeq(G__90665__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__90098,G__90099,G__90100,G__90101,G__90102,G__90103,G__90104,G__90105);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__90666){
var G__90098 = cljs.core.first(arglist__90666);
arglist__90666 = cljs.core.next(arglist__90666);
var G__90099 = cljs.core.first(arglist__90666);
arglist__90666 = cljs.core.next(arglist__90666);
var G__90100 = cljs.core.first(arglist__90666);
arglist__90666 = cljs.core.next(arglist__90666);
var G__90101 = cljs.core.first(arglist__90666);
arglist__90666 = cljs.core.next(arglist__90666);
var G__90102 = cljs.core.first(arglist__90666);
arglist__90666 = cljs.core.next(arglist__90666);
var G__90103 = cljs.core.first(arglist__90666);
arglist__90666 = cljs.core.next(arglist__90666);
var G__90104 = cljs.core.first(arglist__90666);
var G__90105 = cljs.core.rest(arglist__90666);
return sci$impl$fns$arity_7__delegate(G__90098,G__90099,G__90100,G__90101,G__90102,G__90103,G__90104,G__90105);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__90106,G__90107,G__90108,G__90109,G__90110,G__90111,G__90112,G__90113,G__90114){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90106);

(invoc_array[(1)] = G__90107);

(invoc_array[(2)] = G__90108);

(invoc_array[(3)] = G__90109);

(invoc_array[(4)] = G__90110);

(invoc_array[(5)] = G__90111);

(invoc_array[(6)] = G__90112);

(invoc_array[(7)] = G__90113);

(invoc_array[vararg_idx] = G__90114);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__90106,G__90107,G__90108,G__90109,G__90110,G__90111,G__90112,G__90113,var_args){
var G__90114 = null;
if (arguments.length > 8) {
var G__90670__i = 0, G__90670__a = new Array(arguments.length -  8);
while (G__90670__i < G__90670__a.length) {G__90670__a[G__90670__i] = arguments[G__90670__i + 8]; ++G__90670__i;}
  G__90114 = new cljs.core.IndexedSeq(G__90670__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__90106,G__90107,G__90108,G__90109,G__90110,G__90111,G__90112,G__90113,G__90114);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__90671){
var G__90106 = cljs.core.first(arglist__90671);
arglist__90671 = cljs.core.next(arglist__90671);
var G__90107 = cljs.core.first(arglist__90671);
arglist__90671 = cljs.core.next(arglist__90671);
var G__90108 = cljs.core.first(arglist__90671);
arglist__90671 = cljs.core.next(arglist__90671);
var G__90109 = cljs.core.first(arglist__90671);
arglist__90671 = cljs.core.next(arglist__90671);
var G__90110 = cljs.core.first(arglist__90671);
arglist__90671 = cljs.core.next(arglist__90671);
var G__90111 = cljs.core.first(arglist__90671);
arglist__90671 = cljs.core.next(arglist__90671);
var G__90112 = cljs.core.first(arglist__90671);
arglist__90671 = cljs.core.next(arglist__90671);
var G__90113 = cljs.core.first(arglist__90671);
var G__90114 = cljs.core.rest(arglist__90671);
return sci$impl$fns$arity_8__delegate(G__90106,G__90107,G__90108,G__90109,G__90110,G__90111,G__90112,G__90113,G__90114);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__90119,G__90120,G__90121,G__90122,G__90123,G__90124,G__90125,G__90126,G__90127,G__90128){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90119);

(invoc_array[(1)] = G__90120);

(invoc_array[(2)] = G__90121);

(invoc_array[(3)] = G__90122);

(invoc_array[(4)] = G__90123);

(invoc_array[(5)] = G__90124);

(invoc_array[(6)] = G__90125);

(invoc_array[(7)] = G__90126);

(invoc_array[(8)] = G__90127);

(invoc_array[vararg_idx] = G__90128);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__90119,G__90120,G__90121,G__90122,G__90123,G__90124,G__90125,G__90126,G__90127,var_args){
var G__90128 = null;
if (arguments.length > 9) {
var G__90672__i = 0, G__90672__a = new Array(arguments.length -  9);
while (G__90672__i < G__90672__a.length) {G__90672__a[G__90672__i] = arguments[G__90672__i + 9]; ++G__90672__i;}
  G__90128 = new cljs.core.IndexedSeq(G__90672__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__90119,G__90120,G__90121,G__90122,G__90123,G__90124,G__90125,G__90126,G__90127,G__90128);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__90673){
var G__90119 = cljs.core.first(arglist__90673);
arglist__90673 = cljs.core.next(arglist__90673);
var G__90120 = cljs.core.first(arglist__90673);
arglist__90673 = cljs.core.next(arglist__90673);
var G__90121 = cljs.core.first(arglist__90673);
arglist__90673 = cljs.core.next(arglist__90673);
var G__90122 = cljs.core.first(arglist__90673);
arglist__90673 = cljs.core.next(arglist__90673);
var G__90123 = cljs.core.first(arglist__90673);
arglist__90673 = cljs.core.next(arglist__90673);
var G__90124 = cljs.core.first(arglist__90673);
arglist__90673 = cljs.core.next(arglist__90673);
var G__90125 = cljs.core.first(arglist__90673);
arglist__90673 = cljs.core.next(arglist__90673);
var G__90126 = cljs.core.first(arglist__90673);
arglist__90673 = cljs.core.next(arglist__90673);
var G__90127 = cljs.core.first(arglist__90673);
var G__90128 = cljs.core.rest(arglist__90673);
return sci$impl$fns$arity_9__delegate(G__90119,G__90120,G__90121,G__90122,G__90123,G__90124,G__90125,G__90126,G__90127,G__90128);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__90130,G__90131,G__90132,G__90133,G__90134,G__90135,G__90136,G__90137,G__90138,G__90139,G__90140){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90130);

(invoc_array[(1)] = G__90131);

(invoc_array[(2)] = G__90132);

(invoc_array[(3)] = G__90133);

(invoc_array[(4)] = G__90134);

(invoc_array[(5)] = G__90135);

(invoc_array[(6)] = G__90136);

(invoc_array[(7)] = G__90137);

(invoc_array[(8)] = G__90138);

(invoc_array[(9)] = G__90139);

(invoc_array[vararg_idx] = G__90140);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__90130,G__90131,G__90132,G__90133,G__90134,G__90135,G__90136,G__90137,G__90138,G__90139,var_args){
var G__90140 = null;
if (arguments.length > 10) {
var G__90677__i = 0, G__90677__a = new Array(arguments.length -  10);
while (G__90677__i < G__90677__a.length) {G__90677__a[G__90677__i] = arguments[G__90677__i + 10]; ++G__90677__i;}
  G__90140 = new cljs.core.IndexedSeq(G__90677__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__90130,G__90131,G__90132,G__90133,G__90134,G__90135,G__90136,G__90137,G__90138,G__90139,G__90140);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__90678){
var G__90130 = cljs.core.first(arglist__90678);
arglist__90678 = cljs.core.next(arglist__90678);
var G__90131 = cljs.core.first(arglist__90678);
arglist__90678 = cljs.core.next(arglist__90678);
var G__90132 = cljs.core.first(arglist__90678);
arglist__90678 = cljs.core.next(arglist__90678);
var G__90133 = cljs.core.first(arglist__90678);
arglist__90678 = cljs.core.next(arglist__90678);
var G__90134 = cljs.core.first(arglist__90678);
arglist__90678 = cljs.core.next(arglist__90678);
var G__90135 = cljs.core.first(arglist__90678);
arglist__90678 = cljs.core.next(arglist__90678);
var G__90136 = cljs.core.first(arglist__90678);
arglist__90678 = cljs.core.next(arglist__90678);
var G__90137 = cljs.core.first(arglist__90678);
arglist__90678 = cljs.core.next(arglist__90678);
var G__90138 = cljs.core.first(arglist__90678);
arglist__90678 = cljs.core.next(arglist__90678);
var G__90139 = cljs.core.first(arglist__90678);
var G__90140 = cljs.core.rest(arglist__90678);
return sci$impl$fns$arity_10__delegate(G__90130,G__90131,G__90132,G__90133,G__90134,G__90135,G__90136,G__90137,G__90138,G__90139,G__90140);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__90144,G__90145,G__90146,G__90147,G__90148,G__90149,G__90150,G__90151,G__90152,G__90153,G__90154,G__90155){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90144);

(invoc_array[(1)] = G__90145);

(invoc_array[(2)] = G__90146);

(invoc_array[(3)] = G__90147);

(invoc_array[(4)] = G__90148);

(invoc_array[(5)] = G__90149);

(invoc_array[(6)] = G__90150);

(invoc_array[(7)] = G__90151);

(invoc_array[(8)] = G__90152);

(invoc_array[(9)] = G__90153);

(invoc_array[(10)] = G__90154);

(invoc_array[vararg_idx] = G__90155);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__90144,G__90145,G__90146,G__90147,G__90148,G__90149,G__90150,G__90151,G__90152,G__90153,G__90154,var_args){
var G__90155 = null;
if (arguments.length > 11) {
var G__90689__i = 0, G__90689__a = new Array(arguments.length -  11);
while (G__90689__i < G__90689__a.length) {G__90689__a[G__90689__i] = arguments[G__90689__i + 11]; ++G__90689__i;}
  G__90155 = new cljs.core.IndexedSeq(G__90689__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__90144,G__90145,G__90146,G__90147,G__90148,G__90149,G__90150,G__90151,G__90152,G__90153,G__90154,G__90155);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__90690){
var G__90144 = cljs.core.first(arglist__90690);
arglist__90690 = cljs.core.next(arglist__90690);
var G__90145 = cljs.core.first(arglist__90690);
arglist__90690 = cljs.core.next(arglist__90690);
var G__90146 = cljs.core.first(arglist__90690);
arglist__90690 = cljs.core.next(arglist__90690);
var G__90147 = cljs.core.first(arglist__90690);
arglist__90690 = cljs.core.next(arglist__90690);
var G__90148 = cljs.core.first(arglist__90690);
arglist__90690 = cljs.core.next(arglist__90690);
var G__90149 = cljs.core.first(arglist__90690);
arglist__90690 = cljs.core.next(arglist__90690);
var G__90150 = cljs.core.first(arglist__90690);
arglist__90690 = cljs.core.next(arglist__90690);
var G__90151 = cljs.core.first(arglist__90690);
arglist__90690 = cljs.core.next(arglist__90690);
var G__90152 = cljs.core.first(arglist__90690);
arglist__90690 = cljs.core.next(arglist__90690);
var G__90153 = cljs.core.first(arglist__90690);
arglist__90690 = cljs.core.next(arglist__90690);
var G__90154 = cljs.core.first(arglist__90690);
var G__90155 = cljs.core.rest(arglist__90690);
return sci$impl$fns$arity_11__delegate(G__90144,G__90145,G__90146,G__90147,G__90148,G__90149,G__90150,G__90151,G__90152,G__90153,G__90154,G__90155);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__90158,G__90159,G__90160,G__90161,G__90162,G__90163,G__90164,G__90165,G__90166,G__90167,G__90168,G__90169,G__90170){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90158);

(invoc_array[(1)] = G__90159);

(invoc_array[(2)] = G__90160);

(invoc_array[(3)] = G__90161);

(invoc_array[(4)] = G__90162);

(invoc_array[(5)] = G__90163);

(invoc_array[(6)] = G__90164);

(invoc_array[(7)] = G__90165);

(invoc_array[(8)] = G__90166);

(invoc_array[(9)] = G__90167);

(invoc_array[(10)] = G__90168);

(invoc_array[(11)] = G__90169);

(invoc_array[vararg_idx] = G__90170);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__90158,G__90159,G__90160,G__90161,G__90162,G__90163,G__90164,G__90165,G__90166,G__90167,G__90168,G__90169,var_args){
var G__90170 = null;
if (arguments.length > 12) {
var G__90704__i = 0, G__90704__a = new Array(arguments.length -  12);
while (G__90704__i < G__90704__a.length) {G__90704__a[G__90704__i] = arguments[G__90704__i + 12]; ++G__90704__i;}
  G__90170 = new cljs.core.IndexedSeq(G__90704__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__90158,G__90159,G__90160,G__90161,G__90162,G__90163,G__90164,G__90165,G__90166,G__90167,G__90168,G__90169,G__90170);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__90706){
var G__90158 = cljs.core.first(arglist__90706);
arglist__90706 = cljs.core.next(arglist__90706);
var G__90159 = cljs.core.first(arglist__90706);
arglist__90706 = cljs.core.next(arglist__90706);
var G__90160 = cljs.core.first(arglist__90706);
arglist__90706 = cljs.core.next(arglist__90706);
var G__90161 = cljs.core.first(arglist__90706);
arglist__90706 = cljs.core.next(arglist__90706);
var G__90162 = cljs.core.first(arglist__90706);
arglist__90706 = cljs.core.next(arglist__90706);
var G__90163 = cljs.core.first(arglist__90706);
arglist__90706 = cljs.core.next(arglist__90706);
var G__90164 = cljs.core.first(arglist__90706);
arglist__90706 = cljs.core.next(arglist__90706);
var G__90165 = cljs.core.first(arglist__90706);
arglist__90706 = cljs.core.next(arglist__90706);
var G__90166 = cljs.core.first(arglist__90706);
arglist__90706 = cljs.core.next(arglist__90706);
var G__90167 = cljs.core.first(arglist__90706);
arglist__90706 = cljs.core.next(arglist__90706);
var G__90168 = cljs.core.first(arglist__90706);
arglist__90706 = cljs.core.next(arglist__90706);
var G__90169 = cljs.core.first(arglist__90706);
var G__90170 = cljs.core.rest(arglist__90706);
return sci$impl$fns$arity_12__delegate(G__90158,G__90159,G__90160,G__90161,G__90162,G__90163,G__90164,G__90165,G__90166,G__90167,G__90168,G__90169,G__90170);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__90173,G__90174,G__90175,G__90176,G__90177,G__90178,G__90179,G__90180,G__90181,G__90182,G__90183,G__90184,G__90185,G__90186){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90173);

(invoc_array[(1)] = G__90174);

(invoc_array[(2)] = G__90175);

(invoc_array[(3)] = G__90176);

(invoc_array[(4)] = G__90177);

(invoc_array[(5)] = G__90178);

(invoc_array[(6)] = G__90179);

(invoc_array[(7)] = G__90180);

(invoc_array[(8)] = G__90181);

(invoc_array[(9)] = G__90182);

(invoc_array[(10)] = G__90183);

(invoc_array[(11)] = G__90184);

(invoc_array[(12)] = G__90185);

(invoc_array[vararg_idx] = G__90186);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__90173,G__90174,G__90175,G__90176,G__90177,G__90178,G__90179,G__90180,G__90181,G__90182,G__90183,G__90184,G__90185,var_args){
var G__90186 = null;
if (arguments.length > 13) {
var G__90710__i = 0, G__90710__a = new Array(arguments.length -  13);
while (G__90710__i < G__90710__a.length) {G__90710__a[G__90710__i] = arguments[G__90710__i + 13]; ++G__90710__i;}
  G__90186 = new cljs.core.IndexedSeq(G__90710__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__90173,G__90174,G__90175,G__90176,G__90177,G__90178,G__90179,G__90180,G__90181,G__90182,G__90183,G__90184,G__90185,G__90186);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__90711){
var G__90173 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90174 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90175 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90176 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90177 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90178 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90179 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90180 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90181 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90182 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90183 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90184 = cljs.core.first(arglist__90711);
arglist__90711 = cljs.core.next(arglist__90711);
var G__90185 = cljs.core.first(arglist__90711);
var G__90186 = cljs.core.rest(arglist__90711);
return sci$impl$fns$arity_13__delegate(G__90173,G__90174,G__90175,G__90176,G__90177,G__90178,G__90179,G__90180,G__90181,G__90182,G__90183,G__90184,G__90185,G__90186);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__90187,G__90188,G__90189,G__90190,G__90191,G__90192,G__90193,G__90194,G__90195,G__90196,G__90197,G__90198,G__90199,G__90200,G__90201){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90187);

(invoc_array[(1)] = G__90188);

(invoc_array[(2)] = G__90189);

(invoc_array[(3)] = G__90190);

(invoc_array[(4)] = G__90191);

(invoc_array[(5)] = G__90192);

(invoc_array[(6)] = G__90193);

(invoc_array[(7)] = G__90194);

(invoc_array[(8)] = G__90195);

(invoc_array[(9)] = G__90196);

(invoc_array[(10)] = G__90197);

(invoc_array[(11)] = G__90198);

(invoc_array[(12)] = G__90199);

(invoc_array[(13)] = G__90200);

(invoc_array[vararg_idx] = G__90201);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__90187,G__90188,G__90189,G__90190,G__90191,G__90192,G__90193,G__90194,G__90195,G__90196,G__90197,G__90198,G__90199,G__90200,var_args){
var G__90201 = null;
if (arguments.length > 14) {
var G__90715__i = 0, G__90715__a = new Array(arguments.length -  14);
while (G__90715__i < G__90715__a.length) {G__90715__a[G__90715__i] = arguments[G__90715__i + 14]; ++G__90715__i;}
  G__90201 = new cljs.core.IndexedSeq(G__90715__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__90187,G__90188,G__90189,G__90190,G__90191,G__90192,G__90193,G__90194,G__90195,G__90196,G__90197,G__90198,G__90199,G__90200,G__90201);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__90716){
var G__90187 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90188 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90189 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90190 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90191 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90192 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90193 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90194 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90195 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90196 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90197 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90198 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90199 = cljs.core.first(arglist__90716);
arglist__90716 = cljs.core.next(arglist__90716);
var G__90200 = cljs.core.first(arglist__90716);
var G__90201 = cljs.core.rest(arglist__90716);
return sci$impl$fns$arity_14__delegate(G__90187,G__90188,G__90189,G__90190,G__90191,G__90192,G__90193,G__90194,G__90195,G__90196,G__90197,G__90198,G__90199,G__90200,G__90201);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__90206,G__90207,G__90208,G__90209,G__90210,G__90211,G__90212,G__90213,G__90214,G__90215,G__90216,G__90217,G__90218,G__90219,G__90220,G__90221){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90206);

(invoc_array[(1)] = G__90207);

(invoc_array[(2)] = G__90208);

(invoc_array[(3)] = G__90209);

(invoc_array[(4)] = G__90210);

(invoc_array[(5)] = G__90211);

(invoc_array[(6)] = G__90212);

(invoc_array[(7)] = G__90213);

(invoc_array[(8)] = G__90214);

(invoc_array[(9)] = G__90215);

(invoc_array[(10)] = G__90216);

(invoc_array[(11)] = G__90217);

(invoc_array[(12)] = G__90218);

(invoc_array[(13)] = G__90219);

(invoc_array[(14)] = G__90220);

(invoc_array[vararg_idx] = G__90221);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__90206,G__90207,G__90208,G__90209,G__90210,G__90211,G__90212,G__90213,G__90214,G__90215,G__90216,G__90217,G__90218,G__90219,G__90220,var_args){
var G__90221 = null;
if (arguments.length > 15) {
var G__90719__i = 0, G__90719__a = new Array(arguments.length -  15);
while (G__90719__i < G__90719__a.length) {G__90719__a[G__90719__i] = arguments[G__90719__i + 15]; ++G__90719__i;}
  G__90221 = new cljs.core.IndexedSeq(G__90719__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__90206,G__90207,G__90208,G__90209,G__90210,G__90211,G__90212,G__90213,G__90214,G__90215,G__90216,G__90217,G__90218,G__90219,G__90220,G__90221);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__90720){
var G__90206 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90207 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90208 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90209 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90210 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90211 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90212 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90213 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90214 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90215 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90216 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90217 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90218 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90219 = cljs.core.first(arglist__90720);
arglist__90720 = cljs.core.next(arglist__90720);
var G__90220 = cljs.core.first(arglist__90720);
var G__90221 = cljs.core.rest(arglist__90720);
return sci$impl$fns$arity_15__delegate(G__90206,G__90207,G__90208,G__90209,G__90210,G__90211,G__90212,G__90213,G__90214,G__90215,G__90216,G__90217,G__90218,G__90219,G__90220,G__90221);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__90222,G__90223,G__90224,G__90225,G__90226,G__90227,G__90228,G__90229,G__90230,G__90231,G__90232,G__90233,G__90234,G__90235,G__90236,G__90237,G__90238){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90222);

(invoc_array[(1)] = G__90223);

(invoc_array[(2)] = G__90224);

(invoc_array[(3)] = G__90225);

(invoc_array[(4)] = G__90226);

(invoc_array[(5)] = G__90227);

(invoc_array[(6)] = G__90228);

(invoc_array[(7)] = G__90229);

(invoc_array[(8)] = G__90230);

(invoc_array[(9)] = G__90231);

(invoc_array[(10)] = G__90232);

(invoc_array[(11)] = G__90233);

(invoc_array[(12)] = G__90234);

(invoc_array[(13)] = G__90235);

(invoc_array[(14)] = G__90236);

(invoc_array[(15)] = G__90237);

(invoc_array[vararg_idx] = G__90238);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__90222,G__90223,G__90224,G__90225,G__90226,G__90227,G__90228,G__90229,G__90230,G__90231,G__90232,G__90233,G__90234,G__90235,G__90236,G__90237,var_args){
var G__90238 = null;
if (arguments.length > 16) {
var G__90744__i = 0, G__90744__a = new Array(arguments.length -  16);
while (G__90744__i < G__90744__a.length) {G__90744__a[G__90744__i] = arguments[G__90744__i + 16]; ++G__90744__i;}
  G__90238 = new cljs.core.IndexedSeq(G__90744__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__90222,G__90223,G__90224,G__90225,G__90226,G__90227,G__90228,G__90229,G__90230,G__90231,G__90232,G__90233,G__90234,G__90235,G__90236,G__90237,G__90238);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__90753){
var G__90222 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90223 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90224 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90225 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90226 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90227 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90228 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90229 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90230 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90231 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90232 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90233 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90234 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90235 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90236 = cljs.core.first(arglist__90753);
arglist__90753 = cljs.core.next(arglist__90753);
var G__90237 = cljs.core.first(arglist__90753);
var G__90238 = cljs.core.rest(arglist__90753);
return sci$impl$fns$arity_16__delegate(G__90222,G__90223,G__90224,G__90225,G__90226,G__90227,G__90228,G__90229,G__90230,G__90231,G__90232,G__90233,G__90234,G__90235,G__90236,G__90237,G__90238);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__90239,G__90240,G__90241,G__90242,G__90243,G__90244,G__90245,G__90246,G__90247,G__90248,G__90249,G__90250,G__90251,G__90252,G__90253,G__90254,G__90255,G__90256){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90239);

(invoc_array[(1)] = G__90240);

(invoc_array[(2)] = G__90241);

(invoc_array[(3)] = G__90242);

(invoc_array[(4)] = G__90243);

(invoc_array[(5)] = G__90244);

(invoc_array[(6)] = G__90245);

(invoc_array[(7)] = G__90246);

(invoc_array[(8)] = G__90247);

(invoc_array[(9)] = G__90248);

(invoc_array[(10)] = G__90249);

(invoc_array[(11)] = G__90250);

(invoc_array[(12)] = G__90251);

(invoc_array[(13)] = G__90252);

(invoc_array[(14)] = G__90253);

(invoc_array[(15)] = G__90254);

(invoc_array[(16)] = G__90255);

(invoc_array[vararg_idx] = G__90256);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__90239,G__90240,G__90241,G__90242,G__90243,G__90244,G__90245,G__90246,G__90247,G__90248,G__90249,G__90250,G__90251,G__90252,G__90253,G__90254,G__90255,var_args){
var G__90256 = null;
if (arguments.length > 17) {
var G__90785__i = 0, G__90785__a = new Array(arguments.length -  17);
while (G__90785__i < G__90785__a.length) {G__90785__a[G__90785__i] = arguments[G__90785__i + 17]; ++G__90785__i;}
  G__90256 = new cljs.core.IndexedSeq(G__90785__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__90239,G__90240,G__90241,G__90242,G__90243,G__90244,G__90245,G__90246,G__90247,G__90248,G__90249,G__90250,G__90251,G__90252,G__90253,G__90254,G__90255,G__90256);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__90790){
var G__90239 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90240 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90241 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90242 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90243 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90244 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90245 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90246 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90247 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90248 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90249 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90250 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90251 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90252 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90253 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90254 = cljs.core.first(arglist__90790);
arglist__90790 = cljs.core.next(arglist__90790);
var G__90255 = cljs.core.first(arglist__90790);
var G__90256 = cljs.core.rest(arglist__90790);
return sci$impl$fns$arity_17__delegate(G__90239,G__90240,G__90241,G__90242,G__90243,G__90244,G__90245,G__90246,G__90247,G__90248,G__90249,G__90250,G__90251,G__90252,G__90253,G__90254,G__90255,G__90256);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__90257,G__90258,G__90259,G__90260,G__90261,G__90262,G__90263,G__90264,G__90265,G__90266,G__90267,G__90268,G__90269,G__90270,G__90271,G__90272,G__90273,G__90274,G__90275){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90257);

(invoc_array[(1)] = G__90258);

(invoc_array[(2)] = G__90259);

(invoc_array[(3)] = G__90260);

(invoc_array[(4)] = G__90261);

(invoc_array[(5)] = G__90262);

(invoc_array[(6)] = G__90263);

(invoc_array[(7)] = G__90264);

(invoc_array[(8)] = G__90265);

(invoc_array[(9)] = G__90266);

(invoc_array[(10)] = G__90267);

(invoc_array[(11)] = G__90268);

(invoc_array[(12)] = G__90269);

(invoc_array[(13)] = G__90270);

(invoc_array[(14)] = G__90271);

(invoc_array[(15)] = G__90272);

(invoc_array[(16)] = G__90273);

(invoc_array[(17)] = G__90274);

(invoc_array[vararg_idx] = G__90275);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__90257,G__90258,G__90259,G__90260,G__90261,G__90262,G__90263,G__90264,G__90265,G__90266,G__90267,G__90268,G__90269,G__90270,G__90271,G__90272,G__90273,G__90274,var_args){
var G__90275 = null;
if (arguments.length > 18) {
var G__90797__i = 0, G__90797__a = new Array(arguments.length -  18);
while (G__90797__i < G__90797__a.length) {G__90797__a[G__90797__i] = arguments[G__90797__i + 18]; ++G__90797__i;}
  G__90275 = new cljs.core.IndexedSeq(G__90797__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__90257,G__90258,G__90259,G__90260,G__90261,G__90262,G__90263,G__90264,G__90265,G__90266,G__90267,G__90268,G__90269,G__90270,G__90271,G__90272,G__90273,G__90274,G__90275);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__90798){
var G__90257 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90258 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90259 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90260 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90261 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90262 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90263 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90264 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90265 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90266 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90267 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90268 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90269 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90270 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90271 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90272 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90273 = cljs.core.first(arglist__90798);
arglist__90798 = cljs.core.next(arglist__90798);
var G__90274 = cljs.core.first(arglist__90798);
var G__90275 = cljs.core.rest(arglist__90798);
return sci$impl$fns$arity_18__delegate(G__90257,G__90258,G__90259,G__90260,G__90261,G__90262,G__90263,G__90264,G__90265,G__90266,G__90267,G__90268,G__90269,G__90270,G__90271,G__90272,G__90273,G__90274,G__90275);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__90283,G__90284,G__90285,G__90286,G__90287,G__90288,G__90289,G__90290,G__90291,G__90292,G__90293,G__90294,G__90295,G__90296,G__90297,G__90298,G__90299,G__90300,G__90301,G__90302){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90283);

(invoc_array[(1)] = G__90284);

(invoc_array[(2)] = G__90285);

(invoc_array[(3)] = G__90286);

(invoc_array[(4)] = G__90287);

(invoc_array[(5)] = G__90288);

(invoc_array[(6)] = G__90289);

(invoc_array[(7)] = G__90290);

(invoc_array[(8)] = G__90291);

(invoc_array[(9)] = G__90292);

(invoc_array[(10)] = G__90293);

(invoc_array[(11)] = G__90294);

(invoc_array[(12)] = G__90295);

(invoc_array[(13)] = G__90296);

(invoc_array[(14)] = G__90297);

(invoc_array[(15)] = G__90298);

(invoc_array[(16)] = G__90299);

(invoc_array[(17)] = G__90300);

(invoc_array[(18)] = G__90301);

(invoc_array[vararg_idx] = G__90302);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__90283,G__90284,G__90285,G__90286,G__90287,G__90288,G__90289,G__90290,G__90291,G__90292,G__90293,G__90294,G__90295,G__90296,G__90297,G__90298,G__90299,G__90300,G__90301,var_args){
var G__90302 = null;
if (arguments.length > 19) {
var G__90802__i = 0, G__90802__a = new Array(arguments.length -  19);
while (G__90802__i < G__90802__a.length) {G__90802__a[G__90802__i] = arguments[G__90802__i + 19]; ++G__90802__i;}
  G__90302 = new cljs.core.IndexedSeq(G__90802__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__90283,G__90284,G__90285,G__90286,G__90287,G__90288,G__90289,G__90290,G__90291,G__90292,G__90293,G__90294,G__90295,G__90296,G__90297,G__90298,G__90299,G__90300,G__90301,G__90302);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__90803){
var G__90283 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90284 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90285 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90286 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90287 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90288 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90289 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90290 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90291 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90292 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90293 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90294 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90295 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90296 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90297 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90298 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90299 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90300 = cljs.core.first(arglist__90803);
arglist__90803 = cljs.core.next(arglist__90803);
var G__90301 = cljs.core.first(arglist__90803);
var G__90302 = cljs.core.rest(arglist__90803);
return sci$impl$fns$arity_19__delegate(G__90283,G__90284,G__90285,G__90286,G__90287,G__90288,G__90289,G__90290,G__90291,G__90292,G__90293,G__90294,G__90295,G__90296,G__90297,G__90298,G__90299,G__90300,G__90301,G__90302);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__90318,G__90319,G__90320,G__90321,G__90322,G__90323,G__90324,G__90325,G__90326,G__90327,G__90328,G__90329,G__90330,G__90331,G__90332,G__90333,G__90334,G__90335,G__90336,G__90337,G__90338){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90318);

(invoc_array[(1)] = G__90319);

(invoc_array[(2)] = G__90320);

(invoc_array[(3)] = G__90321);

(invoc_array[(4)] = G__90322);

(invoc_array[(5)] = G__90323);

(invoc_array[(6)] = G__90324);

(invoc_array[(7)] = G__90325);

(invoc_array[(8)] = G__90326);

(invoc_array[(9)] = G__90327);

(invoc_array[(10)] = G__90328);

(invoc_array[(11)] = G__90329);

(invoc_array[(12)] = G__90330);

(invoc_array[(13)] = G__90331);

(invoc_array[(14)] = G__90332);

(invoc_array[(15)] = G__90333);

(invoc_array[(16)] = G__90334);

(invoc_array[(17)] = G__90335);

(invoc_array[(18)] = G__90336);

(invoc_array[(19)] = G__90337);

(invoc_array[vararg_idx] = G__90338);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__90318,G__90319,G__90320,G__90321,G__90322,G__90323,G__90324,G__90325,G__90326,G__90327,G__90328,G__90329,G__90330,G__90331,G__90332,G__90333,G__90334,G__90335,G__90336,G__90337,var_args){
var G__90338 = null;
if (arguments.length > 20) {
var G__90805__i = 0, G__90805__a = new Array(arguments.length -  20);
while (G__90805__i < G__90805__a.length) {G__90805__a[G__90805__i] = arguments[G__90805__i + 20]; ++G__90805__i;}
  G__90338 = new cljs.core.IndexedSeq(G__90805__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__90318,G__90319,G__90320,G__90321,G__90322,G__90323,G__90324,G__90325,G__90326,G__90327,G__90328,G__90329,G__90330,G__90331,G__90332,G__90333,G__90334,G__90335,G__90336,G__90337,G__90338);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__90806){
var G__90318 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90319 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90320 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90321 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90322 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90323 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90324 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90325 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90326 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90327 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90328 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90329 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90330 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90331 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90332 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90333 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90334 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90335 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90336 = cljs.core.first(arglist__90806);
arglist__90806 = cljs.core.next(arglist__90806);
var G__90337 = cljs.core.first(arglist__90806);
var G__90338 = cljs.core.rest(arglist__90806);
return sci$impl$fns$arity_20__delegate(G__90318,G__90319,G__90320,G__90321,G__90322,G__90323,G__90324,G__90325,G__90326,G__90327,G__90328,G__90329,G__90330,G__90331,G__90332,G__90333,G__90334,G__90335,G__90336,G__90337,G__90338);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__90039)].join('')));

}
})():(function (){var G__90339 = fixed_arity;
switch (G__90339) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__28742__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28742__auto__)){
continue;
} else {
return ret__28742__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__90340){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90340);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__90350,G__90351){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90350);

(invoc_array[(1)] = G__90351);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__90352,G__90353,G__90354){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90352);

(invoc_array[(1)] = G__90353);

(invoc_array[(2)] = G__90354);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__90355,G__90356,G__90357,G__90358){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90355);

(invoc_array[(1)] = G__90356);

(invoc_array[(2)] = G__90357);

(invoc_array[(3)] = G__90358);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__90359,G__90360,G__90361,G__90362,G__90363){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90359);

(invoc_array[(1)] = G__90360);

(invoc_array[(2)] = G__90361);

(invoc_array[(3)] = G__90362);

(invoc_array[(4)] = G__90363);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__90364,G__90365,G__90366,G__90367,G__90368,G__90369){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90364);

(invoc_array[(1)] = G__90365);

(invoc_array[(2)] = G__90366);

(invoc_array[(3)] = G__90367);

(invoc_array[(4)] = G__90368);

(invoc_array[(5)] = G__90369);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__90370,G__90371,G__90372,G__90373,G__90374,G__90375,G__90376){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90370);

(invoc_array[(1)] = G__90371);

(invoc_array[(2)] = G__90372);

(invoc_array[(3)] = G__90373);

(invoc_array[(4)] = G__90374);

(invoc_array[(5)] = G__90375);

(invoc_array[(6)] = G__90376);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__90377,G__90378,G__90379,G__90380,G__90381,G__90382,G__90383,G__90384){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90377);

(invoc_array[(1)] = G__90378);

(invoc_array[(2)] = G__90379);

(invoc_array[(3)] = G__90380);

(invoc_array[(4)] = G__90381);

(invoc_array[(5)] = G__90382);

(invoc_array[(6)] = G__90383);

(invoc_array[(7)] = G__90384);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__90386,G__90387,G__90388,G__90389,G__90390,G__90391,G__90392,G__90393,G__90394){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90386);

(invoc_array[(1)] = G__90387);

(invoc_array[(2)] = G__90388);

(invoc_array[(3)] = G__90389);

(invoc_array[(4)] = G__90390);

(invoc_array[(5)] = G__90391);

(invoc_array[(6)] = G__90392);

(invoc_array[(7)] = G__90393);

(invoc_array[(8)] = G__90394);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__90401,G__90402,G__90403,G__90404,G__90405,G__90406,G__90407,G__90408,G__90409,G__90410){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90401);

(invoc_array[(1)] = G__90402);

(invoc_array[(2)] = G__90403);

(invoc_array[(3)] = G__90404);

(invoc_array[(4)] = G__90405);

(invoc_array[(5)] = G__90406);

(invoc_array[(6)] = G__90407);

(invoc_array[(7)] = G__90408);

(invoc_array[(8)] = G__90409);

(invoc_array[(9)] = G__90410);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__90411,G__90412,G__90413,G__90414,G__90415,G__90416,G__90417,G__90418,G__90419,G__90420,G__90421){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90411);

(invoc_array[(1)] = G__90412);

(invoc_array[(2)] = G__90413);

(invoc_array[(3)] = G__90414);

(invoc_array[(4)] = G__90415);

(invoc_array[(5)] = G__90416);

(invoc_array[(6)] = G__90417);

(invoc_array[(7)] = G__90418);

(invoc_array[(8)] = G__90419);

(invoc_array[(9)] = G__90420);

(invoc_array[(10)] = G__90421);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__90425,G__90426,G__90427,G__90428,G__90429,G__90430,G__90431,G__90432,G__90433,G__90434,G__90435,G__90436){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90425);

(invoc_array[(1)] = G__90426);

(invoc_array[(2)] = G__90427);

(invoc_array[(3)] = G__90428);

(invoc_array[(4)] = G__90429);

(invoc_array[(5)] = G__90430);

(invoc_array[(6)] = G__90431);

(invoc_array[(7)] = G__90432);

(invoc_array[(8)] = G__90433);

(invoc_array[(9)] = G__90434);

(invoc_array[(10)] = G__90435);

(invoc_array[(11)] = G__90436);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__90444,G__90445,G__90446,G__90447,G__90448,G__90449,G__90450,G__90451,G__90452,G__90453,G__90454,G__90455,G__90456){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90444);

(invoc_array[(1)] = G__90445);

(invoc_array[(2)] = G__90446);

(invoc_array[(3)] = G__90447);

(invoc_array[(4)] = G__90448);

(invoc_array[(5)] = G__90449);

(invoc_array[(6)] = G__90450);

(invoc_array[(7)] = G__90451);

(invoc_array[(8)] = G__90452);

(invoc_array[(9)] = G__90453);

(invoc_array[(10)] = G__90454);

(invoc_array[(11)] = G__90455);

(invoc_array[(12)] = G__90456);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__90464,G__90465,G__90466,G__90467,G__90468,G__90469,G__90470,G__90471,G__90472,G__90473,G__90474,G__90475,G__90476,G__90477){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90464);

(invoc_array[(1)] = G__90465);

(invoc_array[(2)] = G__90466);

(invoc_array[(3)] = G__90467);

(invoc_array[(4)] = G__90468);

(invoc_array[(5)] = G__90469);

(invoc_array[(6)] = G__90470);

(invoc_array[(7)] = G__90471);

(invoc_array[(8)] = G__90472);

(invoc_array[(9)] = G__90473);

(invoc_array[(10)] = G__90474);

(invoc_array[(11)] = G__90475);

(invoc_array[(12)] = G__90476);

(invoc_array[(13)] = G__90477);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__90478,G__90479,G__90480,G__90481,G__90482,G__90483,G__90484,G__90485,G__90486,G__90487,G__90488,G__90489,G__90490,G__90491,G__90492){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90478);

(invoc_array[(1)] = G__90479);

(invoc_array[(2)] = G__90480);

(invoc_array[(3)] = G__90481);

(invoc_array[(4)] = G__90482);

(invoc_array[(5)] = G__90483);

(invoc_array[(6)] = G__90484);

(invoc_array[(7)] = G__90485);

(invoc_array[(8)] = G__90486);

(invoc_array[(9)] = G__90487);

(invoc_array[(10)] = G__90488);

(invoc_array[(11)] = G__90489);

(invoc_array[(12)] = G__90490);

(invoc_array[(13)] = G__90491);

(invoc_array[(14)] = G__90492);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__90503,G__90504,G__90505,G__90506,G__90507,G__90508,G__90509,G__90510,G__90511,G__90512,G__90513,G__90514,G__90515,G__90516,G__90517,G__90518){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90503);

(invoc_array[(1)] = G__90504);

(invoc_array[(2)] = G__90505);

(invoc_array[(3)] = G__90506);

(invoc_array[(4)] = G__90507);

(invoc_array[(5)] = G__90508);

(invoc_array[(6)] = G__90509);

(invoc_array[(7)] = G__90510);

(invoc_array[(8)] = G__90511);

(invoc_array[(9)] = G__90512);

(invoc_array[(10)] = G__90513);

(invoc_array[(11)] = G__90514);

(invoc_array[(12)] = G__90515);

(invoc_array[(13)] = G__90516);

(invoc_array[(14)] = G__90517);

(invoc_array[(15)] = G__90518);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__90519,G__90520,G__90521,G__90522,G__90523,G__90524,G__90525,G__90526,G__90527,G__90528,G__90529,G__90530,G__90531,G__90532,G__90533,G__90534,G__90535){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90519);

(invoc_array[(1)] = G__90520);

(invoc_array[(2)] = G__90521);

(invoc_array[(3)] = G__90522);

(invoc_array[(4)] = G__90523);

(invoc_array[(5)] = G__90524);

(invoc_array[(6)] = G__90525);

(invoc_array[(7)] = G__90526);

(invoc_array[(8)] = G__90527);

(invoc_array[(9)] = G__90528);

(invoc_array[(10)] = G__90529);

(invoc_array[(11)] = G__90530);

(invoc_array[(12)] = G__90531);

(invoc_array[(13)] = G__90532);

(invoc_array[(14)] = G__90533);

(invoc_array[(15)] = G__90534);

(invoc_array[(16)] = G__90535);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__90540,G__90541,G__90542,G__90543,G__90544,G__90546,G__90547,G__90548,G__90549,G__90550,G__90551,G__90552,G__90553,G__90554,G__90555,G__90556,G__90557,G__90558){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90540);

(invoc_array[(1)] = G__90541);

(invoc_array[(2)] = G__90542);

(invoc_array[(3)] = G__90543);

(invoc_array[(4)] = G__90544);

(invoc_array[(5)] = G__90546);

(invoc_array[(6)] = G__90547);

(invoc_array[(7)] = G__90548);

(invoc_array[(8)] = G__90549);

(invoc_array[(9)] = G__90550);

(invoc_array[(10)] = G__90551);

(invoc_array[(11)] = G__90552);

(invoc_array[(12)] = G__90553);

(invoc_array[(13)] = G__90554);

(invoc_array[(14)] = G__90555);

(invoc_array[(15)] = G__90556);

(invoc_array[(16)] = G__90557);

(invoc_array[(17)] = G__90558);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__90562,G__90563,G__90564,G__90565,G__90566,G__90567,G__90568,G__90569,G__90570,G__90571,G__90572,G__90573,G__90574,G__90575,G__90576,G__90577,G__90578,G__90579,G__90580){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90562);

(invoc_array[(1)] = G__90563);

(invoc_array[(2)] = G__90564);

(invoc_array[(3)] = G__90565);

(invoc_array[(4)] = G__90566);

(invoc_array[(5)] = G__90567);

(invoc_array[(6)] = G__90568);

(invoc_array[(7)] = G__90569);

(invoc_array[(8)] = G__90570);

(invoc_array[(9)] = G__90571);

(invoc_array[(10)] = G__90572);

(invoc_array[(11)] = G__90573);

(invoc_array[(12)] = G__90574);

(invoc_array[(13)] = G__90575);

(invoc_array[(14)] = G__90576);

(invoc_array[(15)] = G__90577);

(invoc_array[(16)] = G__90578);

(invoc_array[(17)] = G__90579);

(invoc_array[(18)] = G__90580);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__90586,G__90587,G__90588,G__90589,G__90590,G__90591,G__90592,G__90593,G__90594,G__90595,G__90596,G__90597,G__90598,G__90599,G__90600,G__90601,G__90602,G__90603,G__90604,G__90605){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__90586);

(invoc_array[(1)] = G__90587);

(invoc_array[(2)] = G__90588);

(invoc_array[(3)] = G__90589);

(invoc_array[(4)] = G__90590);

(invoc_array[(5)] = G__90591);

(invoc_array[(6)] = G__90592);

(invoc_array[(7)] = G__90593);

(invoc_array[(8)] = G__90594);

(invoc_array[(9)] = G__90595);

(invoc_array[(10)] = G__90596);

(invoc_array[(11)] = G__90597);

(invoc_array[(12)] = G__90598);

(invoc_array[(13)] = G__90599);

(invoc_array[(14)] = G__90600);

(invoc_array[(15)] = G__90601);

(invoc_array[(16)] = G__90602);

(invoc_array[(17)] = G__90603);

(invoc_array[(18)] = G__90604);

(invoc_array[(19)] = G__90605);

while(true){
var ret__28743__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28743__auto__)){
continue;
} else {
return ret__28743__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__90339)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});

//# sourceMappingURL=sci.impl.fns.js.map
