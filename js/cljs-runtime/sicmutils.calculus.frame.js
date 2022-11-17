goog.provide('sicmutils.calculus.frame');

/**
 * @interface
 */
sicmutils.calculus.frame.IFrame = function(){};

var sicmutils$calculus$frame$IFrame$coords__GT_event$dyn_100937 = (function (this$,coords){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.calculus.frame.coords__GT_event[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,coords) : m__4551__auto__.call(null,this$,coords));
} else {
var m__4549__auto__ = (sicmutils.calculus.frame.coords__GT_event["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,coords) : m__4549__auto__.call(null,this$,coords));
} else {
throw cljs.core.missing_protocol("IFrame.coords->event",this$);
}
}
});
/**
 * Accepts a coordinate representation `coords` of some `event` and returns a
 *  coordinate-free representation of the event.
 * 
 *  `coords` must be owned this this reference frame; [[coords->event]] will throw
 *  if not.
 */
sicmutils.calculus.frame.coords__GT_event = (function sicmutils$calculus$frame$coords__GT_event(this$,coords){
if((((!((this$ == null)))) && ((!((this$.sicmutils$calculus$frame$IFrame$coords__GT_event$arity$2 == null)))))){
return this$.sicmutils$calculus$frame$IFrame$coords__GT_event$arity$2(this$,coords);
} else {
return sicmutils$calculus$frame$IFrame$coords__GT_event$dyn_100937(this$,coords);
}
});

var sicmutils$calculus$frame$IFrame$event__GT_coords$dyn_100938 = (function (this$,event){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.calculus.frame.event__GT_coords[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4551__auto__.call(null,this$,event));
} else {
var m__4549__auto__ = (sicmutils.calculus.frame.event__GT_coords["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4549__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IFrame.event->coords",this$);
}
}
});
/**
 * Accepts a reference frame and an `event`, and returns this reference
 *  frame's coordinate representation of the supplied `event`.
 */
sicmutils.calculus.frame.event__GT_coords = (function sicmutils$calculus$frame$event__GT_coords(this$,event){
if((((!((this$ == null)))) && ((!((this$.sicmutils$calculus$frame$IFrame$event__GT_coords$arity$2 == null)))))){
return this$.sicmutils$calculus$frame$IFrame$event__GT_coords$arity$2(this$,event);
} else {
return sicmutils$calculus$frame$IFrame$event__GT_coords$dyn_100938(this$,event);
}
});

var sicmutils$calculus$frame$IFrame$ancestor_frame$dyn_100939 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sicmutils.calculus.frame.ancestor_frame[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (sicmutils.calculus.frame.ancestor_frame["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IFrame.ancestor-frame",_);
}
}
});
/**
 * Returns the ancestor [[IFrame]] instance of this frame, or nil if there is
 *  no ancestor.
 */
sicmutils.calculus.frame.ancestor_frame = (function sicmutils$calculus$frame$ancestor_frame(_){
if((((!((_ == null)))) && ((!((_.sicmutils$calculus$frame$IFrame$ancestor_frame$arity$1 == null)))))){
return _.sicmutils$calculus$frame$IFrame$ancestor_frame$arity$1(_);
} else {
return sicmutils$calculus$frame$IFrame$ancestor_frame$dyn_100939(_);
}
});

var sicmutils$calculus$frame$IFrame$frame_name$dyn_100940 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sicmutils.calculus.frame.frame_name[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (sicmutils.calculus.frame.frame_name["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IFrame.frame-name",_);
}
}
});
/**
 * Returns the symbolic name of the suppplied frame.
 */
sicmutils.calculus.frame.frame_name = (function sicmutils$calculus$frame$frame_name(_){
if((((!((_ == null)))) && ((!((_.sicmutils$calculus$frame$IFrame$frame_name$arity$1 == null)))))){
return _.sicmutils$calculus$frame$IFrame$frame_name$arity$1(_);
} else {
return sicmutils$calculus$frame$IFrame$frame_name$dyn_100940(_);
}
});

var sicmutils$calculus$frame$IFrame$params$dyn_100941 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sicmutils.calculus.frame.params[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (sicmutils.calculus.frame.params["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IFrame.params",_);
}
}
});
/**
 * Returns the parameters registered with the supplied frame.
 */
sicmutils.calculus.frame.params = (function sicmutils$calculus$frame$params(_){
if((((!((_ == null)))) && ((!((_.sicmutils$calculus$frame$IFrame$params$arity$1 == null)))))){
return _.sicmutils$calculus$frame$IFrame$params$arity$1(_);
} else {
return sicmutils$calculus$frame$IFrame$params$dyn_100941(_);
}
});

/**
 * Returns true if `x` implements [[IFrame]], false otherwise.
 */
sicmutils.calculus.frame.frame_QMARK_ = (function sicmutils$calculus$frame$frame_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.sicmutils$calculus$frame$IFrame$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(sicmutils.calculus.frame.IFrame,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(sicmutils.calculus.frame.IFrame,x);
}
});
/**
 * Marks the input event `e` as an event via its metadata. The return value will
 *   return `true` when passed to [[event?]].
 */
sicmutils.calculus.frame.make_event = (function sicmutils$calculus$frame$make_event(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,new cljs.core.Keyword("sicmutils.calculus.frame","event?","sicmutils.calculus.frame/event?",-1638764572),true);
});
/**
 * Returns true if `e` is an event, false otherwise.
 * 
 *   Make new events with [[make-event]].
 */
sicmutils.calculus.frame.event_QMARK_ = (function sicmutils$calculus$frame$event_QMARK_(e){
return new cljs.core.Keyword("sicmutils.calculus.frame","event?","sicmutils.calculus.frame/event?",-1638764572).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(e),false);
});
/**
 * Returns the owning [[IFrame]] instance of the supplied coordinates `coords`,
 *   nil if there's no owner otherwise.
 */
sicmutils.calculus.frame.frame_owner = (function sicmutils$calculus$frame$frame_owner(coords){
return new cljs.core.Keyword("sicmutils.calculus.frame","owner","sicmutils.calculus.frame/owner",1598257347).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(coords));
});
/**
 * Marks (via metadata) the supplied set of `coords` as being owned by `owner`. If
 *   `coords` already has an owner (that is not equal to `owner`), throws.
 */
sicmutils.calculus.frame.claim = (function sicmutils$calculus$frame$claim(coords,owner){
var temp__5751__auto__ = sicmutils.calculus.frame.frame_owner(coords);
if(cljs.core.truth_(temp__5751__auto__)){
var other = temp__5751__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(other,owner)){
return coords;
} else {
return sicmutils.util.illegal(["Someone else owns these coords: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(coords),cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner)].join(''));
}
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(coords,cljs.core.assoc,new cljs.core.Keyword("sicmutils.calculus.frame","owner","sicmutils.calculus.frame/owner",1598257347),owner);
}
});
/**
 * Takes:
 * 
 *   - `c->e`, a function mapping coordinates to events
 *   - `e->c`, a function mapping events to coordinates
 * 
 *   and returns a function that takes:
 * 
 *   - a symbolic name
 *   - an ancestor frame
 *   - a dictionary of params
 * 
 *   and returns instance of [[IFrame]].
 * 
 *   Both `c->e` and `e->c` must accept three arguments:
 * 
 *   - `ancestor-frame`
 *   - the [[IFrame]] instance
 *   - a map of parameters supplied to the returned function (possibly empty!).
 */
sicmutils.calculus.frame.frame_maker = (function sicmutils$calculus$frame$frame_maker(c__GT_e,e__GT_c){
return (function() {
var sicmutils$calculus$frame$frame_maker_$_call = null;
var sicmutils$calculus$frame$frame_maker_$_call__1 = (function (name){
return sicmutils$calculus$frame$frame_maker_$_call.cljs$core$IFn$_invoke$arity$3(name,null,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$calculus$frame$frame_maker_$_call__2 = (function (name,ancestor_frame){
return sicmutils$calculus$frame$frame_maker_$_call.cljs$core$IFn$_invoke$arity$3(name,ancestor_frame,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$calculus$frame$frame_maker_$_call__3 = (function (name,ancestor_frame,params){
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.calculus !== 'undefined') && (typeof sicmutils.calculus.frame !== 'undefined') && (typeof sicmutils.calculus.frame.t_sicmutils$calculus$frame100932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {sicmutils.calculus.frame.IFrame}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sicmutils.calculus.frame.t_sicmutils$calculus$frame100932 = (function (c__GT_e,e__GT_c,call,name,ancestor_frame,params,meta100933){
this.c__GT_e = c__GT_e;
this.e__GT_c = e__GT_c;
this.call = call;
this.name = name;
this.ancestor_frame = ancestor_frame;
this.params = params;
this.meta100933 = meta100933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100934,meta100933__$1){
var self__ = this;
var _100934__$1 = this;
return (new sicmutils.calculus.frame.t_sicmutils$calculus$frame100932(self__.c__GT_e,self__.e__GT_c,self__.call,self__.name,self__.ancestor_frame,self__.params,meta100933__$1));
}));

(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100934){
var self__ = this;
var _100934__$1 = this;
return self__.meta100933;
}));

(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.prototype.sicmutils$calculus$frame$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.prototype.sicmutils$calculus$frame$IFrame$ancestor_frame$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ancestor_frame;
}));

(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.prototype.sicmutils$calculus$frame$IFrame$frame_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
}));

(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.prototype.sicmutils$calculus$frame$IFrame$params$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.params;
}));

(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.prototype.sicmutils$calculus$frame$IFrame$coords__GT_event$arity$2 = (function (this$,coords){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.frame.frame_owner(coords),this$__$1)){
} else {
throw (new Error("Assert failed: (= (frame-owner coords) this)"));
}

var event = (function (){var fexpr__100935 = (self__.c__GT_e.cljs$core$IFn$_invoke$arity$3 ? self__.c__GT_e.cljs$core$IFn$_invoke$arity$3(self__.ancestor_frame,this$__$1,self__.params) : self__.c__GT_e.call(null,self__.ancestor_frame,this$__$1,self__.params));
return (fexpr__100935.cljs$core$IFn$_invoke$arity$1 ? fexpr__100935.cljs$core$IFn$_invoke$arity$1(coords) : fexpr__100935.call(null,coords));
})();
if(cljs.core.truth_(sicmutils.calculus.frame.event_QMARK_(event))){
} else {
throw (new Error("Assert failed: (event? event)"));
}

return event;
}));

(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.prototype.sicmutils$calculus$frame$IFrame$event__GT_coords$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(sicmutils.calculus.frame.event_QMARK_(event))){
} else {
throw (new Error("Assert failed: (event? event)"));
}

var coords = (function (){var fexpr__100936 = (self__.e__GT_c.cljs$core$IFn$_invoke$arity$3 ? self__.e__GT_c.cljs$core$IFn$_invoke$arity$3(self__.ancestor_frame,this$__$1,self__.params) : self__.e__GT_c.call(null,self__.ancestor_frame,this$__$1,self__.params));
return (fexpr__100936.cljs$core$IFn$_invoke$arity$1 ? fexpr__100936.cljs$core$IFn$_invoke$arity$1(event) : fexpr__100936.call(null,event));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.frame.frame_owner(coords),this$__$1)){
} else {
throw (new Error("Assert failed: (= (frame-owner coords) this)"));
}

return coords;
}));

(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c->e","c->e",366611773,null),new cljs.core.Symbol(null,"e->c","e->c",-1459982439,null),new cljs.core.Symbol(null,"call","call",1120531661,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"ancestor-frame","ancestor-frame",-1796645653,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta100933","meta100933",1542357859,null)], null);
}));

(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.cljs$lang$type = true);

(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.cljs$lang$ctorStr = "sicmutils.calculus.frame/t_sicmutils$calculus$frame100932");

(sicmutils.calculus.frame.t_sicmutils$calculus$frame100932.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.calculus.frame/t_sicmutils$calculus$frame100932");
}));

/**
 * Positional factory function for sicmutils.calculus.frame/t_sicmutils$calculus$frame100932.
 */
sicmutils.calculus.frame.__GT_t_sicmutils$calculus$frame100932 = (function sicmutils$calculus$frame$frame_maker_$_call_$___GT_t_sicmutils$calculus$frame100932(c__GT_e__$1,e__GT_c__$1,call__$1,name__$1,ancestor_frame__$1,params__$1,meta100933){
return (new sicmutils.calculus.frame.t_sicmutils$calculus$frame100932(c__GT_e__$1,e__GT_c__$1,call__$1,name__$1,ancestor_frame__$1,params__$1,meta100933));
});

}

return (new sicmutils.calculus.frame.t_sicmutils$calculus$frame100932(c__GT_e,e__GT_c,sicmutils$calculus$frame$frame_maker_$_call,name,ancestor_frame,params,cljs.core.PersistentArrayMap.EMPTY));
});
sicmutils$calculus$frame$frame_maker_$_call = function(name,ancestor_frame,params){
switch(arguments.length){
case 1:
return sicmutils$calculus$frame$frame_maker_$_call__1.call(this,name);
case 2:
return sicmutils$calculus$frame$frame_maker_$_call__2.call(this,name,ancestor_frame);
case 3:
return sicmutils$calculus$frame$frame_maker_$_call__3.call(this,name,ancestor_frame,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$calculus$frame$frame_maker_$_call.cljs$core$IFn$_invoke$arity$1 = sicmutils$calculus$frame$frame_maker_$_call__1;
sicmutils$calculus$frame$frame_maker_$_call.cljs$core$IFn$_invoke$arity$2 = sicmutils$calculus$frame$frame_maker_$_call__2;
sicmutils$calculus$frame$frame_maker_$_call.cljs$core$IFn$_invoke$arity$3 = sicmutils$calculus$frame$frame_maker_$_call__3;
return sicmutils$calculus$frame$frame_maker_$_call;
})()
});

//# sourceMappingURL=sicmutils.calculus.frame.js.map
