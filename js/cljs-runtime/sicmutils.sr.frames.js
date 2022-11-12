goog.provide('sicmutils.sr.frames');
sicmutils.sr.frames.make_SR_coordinates = (function sicmutils$sr$frames$make_SR_coordinates(frame,four_tuple){
if(sicmutils.structure.up_QMARK_(four_tuple)){
} else {
throw (new Error("Assert failed: (s/up? four-tuple)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(four_tuple),(4))){
} else {
throw (new Error("Assert failed: (= (count four-tuple) 4)"));
}

return sicmutils.calculus.frame.claim(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(four_tuple,cljs.core.assoc,new cljs.core.Keyword("sicmutils.sr.frames","SR-coordinates?","sicmutils.sr.frames/SR-coordinates?",-347899963),true),frame);
});
sicmutils.sr.frames.SR_coordinates_QMARK_ = (function sicmutils$sr$frames$SR_coordinates_QMARK_(coords){
return new cljs.core.Keyword("sicmutils.sr.frames","SR-coordinates?","sicmutils.sr.frames/SR-coordinates?",-347899963).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(coords),false);
});
sicmutils.sr.frames.SR_name = (function sicmutils$sr$frames$SR_name(coords){
return sicmutils.calculus.frame.frame_name(sicmutils.calculus.frame.frame_owner(coords));
});
sicmutils.sr.frames.coordinates__GT_event = (function sicmutils$sr$frames$coordinates__GT_event(ancestor_frame,_,p__91140){
var map__91144 = p__91140;
var map__91144__$1 = cljs.core.__destructure_map(map__91144);
var boost_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91144__$1,new cljs.core.Keyword(null,"boost-direction","boost-direction",-1975902118));
var vc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91144__$1,new cljs.core.Keyword(null,"vc","vc",194349650));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91144__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.frame.frame_owner(origin),ancestor_frame)){
} else {
throw (new Error("Assert failed: (= (cf/frame-owner origin) ancestor-frame)"));
}

return (function sicmutils$sr$frames$coordinates__GT_event_$_c__GT_e(coords){
if(cljs.core.truth_(sicmutils.sr.frames.SR_coordinates_QMARK_(coords))){
} else {
throw (new Error("Assert failed: (SR-coordinates? coords)"));
}

return sicmutils.calculus.manifold.point(ancestor_frame)(sicmutils.sr.frames.make_SR_coordinates(ancestor_frame,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.sr.boost.general_boost2(boost_direction,vc)(coords),origin)));
});
});
sicmutils.sr.frames.event__GT_coordinates = (function sicmutils$sr$frames$event__GT_coordinates(ancestor_frame,this_frame,p__91149){
var map__91151 = p__91149;
var map__91151__$1 = cljs.core.__destructure_map(map__91151);
var boost_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91151__$1,new cljs.core.Keyword(null,"boost-direction","boost-direction",-1975902118));
var vc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91151__$1,new cljs.core.Keyword(null,"vc","vc",194349650));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91151__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.frame.frame_owner(origin),ancestor_frame)){
} else {
throw (new Error("Assert failed: (= (cf/frame-owner origin) ancestor-frame)"));
}

return (function sicmutils$sr$frames$event__GT_coordinates_$_e__GT_c(event){
if(cljs.core.truth_(sicmutils.calculus.frame.event_QMARK_(event))){
} else {
throw (new Error("Assert failed: (cf/event? event)"));
}

var coords = sicmutils.sr.boost.general_boost2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(boost_direction),vc)(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.manifold.chart(ancestor_frame)(event),origin));
return sicmutils.sr.frames.make_SR_coordinates(this_frame,coords);
});
});
var make_91167 = sicmutils.calculus.frame.frame_maker(sicmutils.sr.frames.coordinates__GT_event,sicmutils.sr.frames.event__GT_coordinates);
sicmutils.sr.frames.make_SR_frame = (function sicmutils$sr$frames$make_SR_frame(name,ancestor_frame,boost_direction,v_over_c,origin){
return make_91167(name,ancestor_frame,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boost-direction","boost-direction",-1975902118),boost_direction,new cljs.core.Keyword(null,"vc","vc",194349650),v_over_c,new cljs.core.Keyword(null,"origin","origin",1037372088),origin], null));
});
sicmutils.sr.frames.base_frame_point = (function sicmutils$sr$frames$base_frame_point(_,this_frame,___$1){
return (function (coords){
if(cljs.core.truth_(sicmutils.sr.frames.SR_coordinates_QMARK_(coords))){
} else {
throw (new Error("Assert failed: (SR-coordinates? coords)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_frame,sicmutils.calculus.frame.frame_owner(coords))){
} else {
throw (new Error("Assert failed: (= this-frame (cf/frame-owner coords))"));
}

return sicmutils.calculus.frame.make_event(coords);
});
});
sicmutils.sr.frames.base_frame_chart = (function sicmutils$sr$frames$base_frame_chart(_,this_frame,___$1){
return (function (event){
if(cljs.core.truth_(sicmutils.calculus.frame.event_QMARK_(event))){
} else {
throw (new Error("Assert failed: (cf/event? event)"));
}

return sicmutils.sr.frames.make_SR_coordinates(this_frame,event);
});
});
sicmutils.sr.frames.base_frame_maker = sicmutils.calculus.frame.frame_maker(sicmutils.sr.frames.base_frame_point,sicmutils.sr.frames.base_frame_chart);
sicmutils.sr.frames.the_ether = sicmutils.sr.frames.base_frame_maker(new cljs.core.Symbol(null,"the-ether","the-ether",-259961165,null),new cljs.core.Symbol(null,"the-ether","the-ether",-259961165,null));
sicmutils.sr.frames.boost_direction = (function sicmutils$sr$frames$boost_direction(frame){
return new cljs.core.Keyword(null,"boost-direction","boost-direction",-1975902118).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.frame.params(frame));
});
sicmutils.sr.frames.v_COLON_c = (function sicmutils$sr$frames$v_COLON_c(frame){
return new cljs.core.Keyword(null,"vc","vc",194349650).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.frame.params(frame));
});
sicmutils.sr.frames.coordinate_origin = (function sicmutils$sr$frames$coordinate_origin(frame){
return new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.frame.params(frame));
});
sicmutils.sr.frames.add_v_COLON_cs = (function sicmutils$sr$frames$add_v_COLON_cs(v1_COLON_c,v2_COLON_c){
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(v1_COLON_c,v2_COLON_c),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(v1_COLON_c,v2_COLON_c)));
});
/**
 * velocities must be in meters/second, since we don't yet have units support.
 */
sicmutils.sr.frames.add_velocities = (function sicmutils$sr$frames$add_velocities(v1,v2){
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(v1,v2),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(v1,new cljs.core.Symbol(null,"C","C",1466901940,null)),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(v2,new cljs.core.Symbol(null,"C","C",1466901940,null)))));
});

//# sourceMappingURL=sicmutils.sr.frames.js.map
