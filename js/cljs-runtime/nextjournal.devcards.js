goog.provide('nextjournal.devcards');
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.devcards !== 'undefined') && (typeof nextjournal.devcards.registry !== 'undefined')){
} else {
nextjournal.devcards.registry = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$0());
}
nextjournal.devcards.register_devcard_STAR_ = (function nextjournal$devcards$register_devcard_STAR_(p__88779){
var map__88780 = p__88779;
var map__88780__$1 = cljs.core.__destructure_map(map__88780);
var opts = map__88780__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88780__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88780__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nextjournal.devcards.registry,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,name], null),opts);
});
nextjournal.devcards.error_boundary = (function nextjournal$devcards$error_boundary(_elem){
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"UNSAFE_component-will-receive-props","UNSAFE_component-will-receive-props",530028103),(function (_this,_){
if(cljs.core.truth_(cljs.core.deref(error))){
return cljs.core.reset_BANG_(error,null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (_this,e,info){
cljs.core.reset_BANG_(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,info], null));

var trace = (function (){var G__88784 = info;
var G__88784__$1 = (((G__88784 == null))?null:G__88784.componentStack);
var G__88784__$2 = (((G__88784__$1 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__88784__$1,"\n"));
if((G__88784__$2 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,G__88784__$2)));
}
})();
return (info.componentStack = trace);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (elem){
var temp__5751__auto__ = cljs.core.deref(error);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__88786 = temp__5751__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88786,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88786,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sans-serif","div.sans-serif",-783434288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.b.f6.red","div.b.f6.red",-718265232),"Error"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.text-xs.red.mt2.b","pre.text-xs.red.mt2.b",1458917606),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),e.message], null),(function (){var temp__5753__auto__ = info.componentStack;
if(cljs.core.truth_(temp__5753__auto__)){
var stack = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.text-xs.red.mt2","pre.text-xs.red.mt2",-1217916151),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),stack], null);
} else {
return null;
}
})()], null);
} else {
cljs.core.reset_BANG_(error,null);

return elem;
}
})], null));
});
nextjournal.devcards.testview = reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),nextjournal.view.wrap_render((function nextjournal$devcards$testview(p__88790){
var map__88791 = p__88790;
var map__88791__$1 = cljs.core.__destructure_map(map__88791);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88791__$1,new cljs.core.Keyword("nextjournal.view","state","nextjournal.view/state",-1424072930));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"clicks","clicks",673274951),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
})], null),"Hello ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),"! (",new cljs.core.Keyword(null,"clicks","clicks",673274951).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),(0))," clicks)"], null);
})),new cljs.core.Keyword(null,"display-name","display-name",694513143),"nextjournal.devcards/testview"], null),null,nextjournal.view.wrap_methods(null)], 0)));
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"World"], null),new cljs.core.Keyword(null,"some-value-in-db","some-value-in-db",-574964984),(1)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"evaluating this form should change the inital state if changed.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1915495166,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.devcards.testview,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643),state], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.devcards",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"testview-card"], 0)));

re_frame.context.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nextjournal.devcards","counter","nextjournal.devcards/counter",1209240473),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword("nextjournal.devcards","counter","nextjournal.devcards/counter",1209240473).cljs$core$IFn$_invoke$arity$2(db,(0));
})], 0));
re_frame.context.reg_event_db.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nextjournal.devcards","inc","nextjournal.devcards/inc",1768266442),(function (db){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("nextjournal.devcards","counter","nextjournal.devcards/counter",1209240473),cljs.core.inc);
})], 0));
nextjournal.devcards.testc = reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),nextjournal.view.wrap_render((function nextjournal$devcards$testc(p__88793){
var map__88794 = p__88793;
var map__88794__$1 = cljs.core.__destructure_map(map__88794);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88794__$1,new cljs.core.Keyword("re-frame.context","dispatch","re-frame.context/dispatch",1850204165));
var subscribe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88794__$1,new cljs.core.Keyword("re-frame.context","subscribe","re-frame.context/subscribe",-119266480));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__88795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal.devcards","inc","nextjournal.devcards/inc",1768266442)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__88795) : dispatch.call(null,G__88795));
})], null),"Counter = ",cljs.core.deref((function (){var G__88796 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal.devcards","counter","nextjournal.devcards/counter",1209240473)], null);
return (subscribe.cljs$core$IFn$_invoke$arity$1 ? subscribe.cljs$core$IFn$_invoke$arity$1(G__88796) : subscribe.call(null,G__88796));
})())], null);
})),new cljs.core.Keyword(null,"display-name","display-name",694513143),"nextjournal.devcards/testc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context-type","context-type",-1445212185),re_frame.context.frame_context], null),nextjournal.view.wrap_methods(null)], 0)));
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","counter","nextjournal.devcards/counter",1209240473),(10)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"cards can use completely isolated dbs and use subscriptions and event handlers.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-819022003,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.devcards.testc], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.devcards",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"counter-db-1"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","counter","nextjournal.devcards/counter",1209240473),(999)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"notice how clicking here doesn't affect the card above.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),852335920,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.devcards.testc], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.devcards",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"counter-db-2"], 0)));

nextjournal.devcards.frame_display = reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),nextjournal.view.wrap_render((function nextjournal$devcards$frame_display(p__88798){
var map__88799 = p__88798;
var map__88799__$1 = cljs.core.__destructure_map(map__88799);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88799__$1,new cljs.core.Keyword("nextjournal.view","state","nextjournal.view/state",-1424072930));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref(state),"/",new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame())], null);
})),new cljs.core.Keyword(null,"display-name","display-name",694513143),"nextjournal.devcards/frame-display"], null),null,nextjournal.view.wrap_methods(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643),(function (){
return new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame());
})], null))], 0)));
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Demonstrates using multiple isolated frames in a component",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){
var frame = re_frame.frame.make_frame.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame()),new cljs.core.Keyword(null,"app-db","app-db",865606302),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.context.provide_frame,frame,(function (){var _STAR_current_frame_STAR__orig_val__88802 = re_frame.registry._STAR_current_frame_STAR_;
var _STAR_current_frame_STAR__temp_val__88803 = frame;
(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__temp_val__88803);

try{if((((!((frame == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === frame.re_frame$frame$IFrame$))))?true:(((!frame.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(re_frame.frame.IFrame,frame):false)):cljs.core.native_satisfies_QMARK_(re_frame.frame.IFrame,frame))){
} else {
throw (new Error(["Assert failed: ","given frame is not of type `re-frame.frame/IFrame`","\n","(clojure.core/satisfies? re-frame.frame/IFrame frame)"].join('')));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.devcards.frame_display], null);
}finally {(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__orig_val__88802);
}})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((2))));
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.devcards",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"multiframe"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","device","nextjournal.devcards/device",-2083640400),new cljs.core.Keyword(null,"iphone","iphone",1689490215)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders inside an iframe with a device frame, currently limited to :iphone",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),57078613,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-sans","div.font-sans",-1516939114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-8.text-2xl.fixed.left-0.top-0.right-0.bg-red-500","div.p-8.text-2xl.fixed.left-0.top-0.right-0.bg-red-500",-52257431),"Fixed on top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-8.text-2xl.fixed.left-0.right-0.bg-blue-500","div.p-8.text-2xl.fixed.left-0.right-0.bg-blue-500",-384294424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bottom-[78px]"], null),"Fixed on bottom"], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.devcards",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"device-frame"], 0)));


//# sourceMappingURL=nextjournal.devcards.js.map
