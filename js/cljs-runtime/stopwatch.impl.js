goog.provide('stopwatch.impl');
stopwatch.impl.node_QMARK_ = (function stopwatch$impl$node_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nodejs",cljs.core._STAR_target_STAR_);
});

stopwatch.impl.oget = (function stopwatch$impl$oget(o,k){
if(cljs.core.truth_(o)){
return (o[k]);
} else {
return null;
}
});

stopwatch.impl._PLUS__QMARK_window = (((typeof window !== 'undefined'))?window:null);

stopwatch.impl._PLUS__QMARK_performance = (((typeof performance !== 'undefined'))?performance:stopwatch.impl.oget(stopwatch.impl._PLUS__QMARK_window,"performance"));

stopwatch.impl._PLUS__QMARK_perf_now = (function (){var or__4253__auto__ = stopwatch.impl.oget(stopwatch.impl._PLUS__QMARK_performance,"now");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = stopwatch.impl.oget(stopwatch.impl._PLUS__QMARK_performance,"mozNow");
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = stopwatch.impl.oget(stopwatch.impl._PLUS__QMARK_performance,"msNow");
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = stopwatch.impl.oget(stopwatch.impl._PLUS__QMARK_performance,"oNow");
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
return stopwatch.impl.oget(stopwatch.impl._PLUS__QMARK_performance,"webkitNow");
}
}
}
}
})();

stopwatch.impl._PLUS__QMARK_process = ((stopwatch.impl.node_QMARK_())?process:null);

stopwatch.impl._PLUS__QMARK_hrtime = stopwatch.impl.oget(stopwatch.impl._PLUS__QMARK_process,"hrtime");

stopwatch.impl._PLUS_has_performance_QMARK_ = cljs.core.boolean$(stopwatch.impl._PLUS__QMARK_perf_now);

stopwatch.impl._PLUS_has_hrtime_QMARK_ = cljs.core.boolean$(stopwatch.impl._PLUS__QMARK_hrtime);

//# sourceMappingURL=stopwatch.impl.js.map
