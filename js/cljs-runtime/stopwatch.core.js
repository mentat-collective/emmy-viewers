goog.provide('stopwatch.core');
stopwatch.core._PLUS__QMARK_performance_now_stopwatch = ((stopwatch.impl._PLUS_has_performance_QMARK_)?(function (){
var start = stopwatch.impl._PLUS__QMARK_perf_now.call(stopwatch.impl._PLUS__QMARK_performance);
return (function (){
var end = stopwatch.impl._PLUS__QMARK_perf_now.call(stopwatch.impl._PLUS__QMARK_performance);
return (((end - start) * (1000)) * (1000));
});
}):null);

stopwatch.core._PLUS__QMARK_process_hrtime_stopwatch = ((stopwatch.impl._PLUS_has_hrtime_QMARK_)?(function (){
var start = (stopwatch.impl._PLUS__QMARK_hrtime.cljs$core$IFn$_invoke$arity$0 ? stopwatch.impl._PLUS__QMARK_hrtime.cljs$core$IFn$_invoke$arity$0() : stopwatch.impl._PLUS__QMARK_hrtime.call(null));
return (function (){
var vec__98698 = (stopwatch.impl._PLUS__QMARK_hrtime.cljs$core$IFn$_invoke$arity$1 ? stopwatch.impl._PLUS__QMARK_hrtime.cljs$core$IFn$_invoke$arity$1(start) : stopwatch.impl._PLUS__QMARK_hrtime.call(null,start));
var diff_sec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98698,(0),null);
var diff_nano = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98698,(1),null);
return ((((diff_sec * (1000)) * (1000)) * (1000)) + diff_nano);
});
}):null);

stopwatch.core.ms_date_stopwatch = (function stopwatch$core$ms_date_stopwatch(){
var start = (new Date()).getTime();
return (function (){
var end = (new Date()).getTime();
return (((end - start) * (1000)) * (1000));
});
});

stopwatch.core.start_STAR_ = (function (){var or__4253__auto__ = stopwatch.core._PLUS__QMARK_performance_now_stopwatch;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = stopwatch.core._PLUS__QMARK_process_hrtime_stopwatch;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return stopwatch.core.ms_date_stopwatch;
}
}
})();

/**
 * Creates and starts the stopwatch.
 * 
 *   The stopwatch is a function which returns the elapsed time in units of
 *   nanosecond:
 * 
 *  (let [elapsed (start)]
 *    (do-work)
 *    (println "Elapsed:" (elapsed) "ns"))
 * 
 *   Uses the most precise mechanism available on the target platform.
 */
stopwatch.core.start = (function stopwatch$core$start(){
return (stopwatch.core.start_STAR_.cljs$core$IFn$_invoke$arity$0 ? stopwatch.core.start_STAR_.cljs$core$IFn$_invoke$arity$0() : stopwatch.core.start_STAR_.call(null));
});

//# sourceMappingURL=stopwatch.core.js.map
