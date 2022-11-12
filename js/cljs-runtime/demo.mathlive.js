goog.provide('demo.mathlive');
var module$node_modules$mathlive$dist$mathlive_min=shadow.js.require("module$node_modules$mathlive$dist$mathlive_min", {});
demo.mathlive.constants = new cljs.core.PersistentArrayMap(null, 7, ["ExponentialE",new cljs.core.Symbol(null,"E","E",1871381369,null),"ImaginaryUnit",sicmutils.complex.I,"GoldenRatio",new cljs.core.Symbol(null,"phi","phi",113733223,null),"Pi",new cljs.core.Symbol(null,"pi","pi",176774184,null),"CapitalPi",new cljs.core.Symbol(null,"Pi","Pi",-808062776,null),"Gamma",new cljs.core.Symbol(null,"gamma","gamma",-770466082,null),"CapitalGamma",new cljs.core.Symbol(null,"Gamma","Gamma",681602978,null)], null);
demo.mathlive.f_name__GT_sym = cljs.core.PersistentHashMap.fromArrays(["Tanh","Sech","Equal","Sin","Multiply","Arcsin","Subtract","Square","Exp","Csc","Coth","Arccos","Sinh","Ln","Add","Rational","Csch","Cot","Sqrt","Tan","Divide","Arctan","Cosh","Sec","Cos","Negate","Power"],[new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol(null,"sech","sech",-1403979131,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"square","square",-1842001092,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"csc","csc",-427853492,null),new cljs.core.Symbol(null,"coth","coth",1130257730,null),new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"csch","csch",-1950330545,null),new cljs.core.Symbol(null,"cot","cot",-1635649012,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol(null,"sec","sec",60154974,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null)]);
demo.mathlive.process_str = (function demo$mathlive$process_str(s){
var or__4253__auto__ = (demo.mathlive.constants.cljs$core$IFn$_invoke$arity$1 ? demo.mathlive.constants.cljs$core$IFn$_invoke$arity$1(s) : demo.mathlive.constants.call(null,s));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (demo.mathlive.f_name__GT_sym.cljs$core$IFn$_invoke$arity$1 ? demo.mathlive.f_name__GT_sym.cljs$core$IFn$_invoke$arity$1(s) : demo.mathlive.f_name__GT_sym.call(null,s));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = s.startsWith("'");
if(cljs.core.truth_(and__4251__auto__)){
return s.endsWith("'");
} else {
return and__4251__auto__;
}
})())){
return s.slice((1),(-1));
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s);
}
}
}
});
/**
 * Convert the head of a function form into a symbol.
 */
demo.mathlive.process_head = (function demo$mathlive$process_head(head){
try{if((head instanceof cljs.core.Symbol)){
return head;
} else {
throw cljs.core.match.backtrack;

}
}catch (e83010){if((e83010 instanceof Error)){
var e__18676__auto__ = e83010;
if((e__18676__auto__ === cljs.core.match.backtrack)){
try{if(typeof head === 'string'){
return (demo.mathlive.f_name__GT_sym.cljs$core$IFn$_invoke$arity$2 ? demo.mathlive.f_name__GT_sym.cljs$core$IFn$_invoke$arity$2(head,head) : demo.mathlive.f_name__GT_sym.call(null,head,head));
} else {
throw cljs.core.match.backtrack;

}
}catch (e83011){if((e83011 instanceof Error)){
var e__18676__auto____$1 = e83011;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
return head;
} else {
throw e__18676__auto____$1;
}
} else {
throw e83011;

}
}} else {
throw e__18676__auto__;
}
} else {
throw e83010;

}
}});
demo.mathlive.process_map = (function demo$mathlive$process_map(m){
return m;
});
demo.mathlive.v_processor = (function demo$mathlive$v_processor(simplify){
return (function demo$mathlive$v_processor_$_process_v(v){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__83015 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__83015)) && ((cljs.core.count(v_left__83015) === (1))))){
try{var v_left__83015_0__83017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__83015,(0));
if(cljs.core.vector_QMARK_(v_left__83015_0__83017)){
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__83015,(0));
var tail = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
return demo$mathlive$v_processor_$_process_v(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo$mathlive$v_processor_$_process_v(h)], null),tail));
} else {
throw cljs.core.match.backtrack;

}
}catch (e83074){if((e83074 instanceof Error)){
var e__18676__auto__ = e83074;
if((e__18676__auto__ === cljs.core.match.backtrack)){
try{var v_left__83015_0__83017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__83015,(0));
if((v_left__83015_0__83017 === "List")){
var xs = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
return sicmutils.structure.up_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(simplify,xs));
} else {
throw cljs.core.match.backtrack;

}
}catch (e83075){if((e83075 instanceof Error)){
var e__18676__auto____$1 = e83075;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$1;
}
} else {
throw e83075;

}
}} else {
throw e__18676__auto__;
}
} else {
throw e83074;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83073){if((e83073 instanceof Error)){
var e__18676__auto__ = e83073;
if((e__18676__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto__;
}
} else {
throw e83073;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83036){if((e83036 instanceof Error)){
var e__18676__auto__ = e83036;
if((e__18676__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) === 3)))){
try{var v_0__83018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
if((v_0__83018 === "Power")){
try{var v_1__83019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83019 === "ExponentialE")){
var pow = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2));
var G__83072 = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(pow) : simplify.call(null,pow));
var fexpr__83071 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"exp","exp",1378825265,null));
return (fexpr__83071.cljs$core$IFn$_invoke$arity$1 ? fexpr__83071.cljs$core$IFn$_invoke$arity$1(G__83072) : fexpr__83071.call(null,G__83072));
} else {
throw cljs.core.match.backtrack;

}
}catch (e83070){if((e83070 instanceof Error)){
var e__18676__auto____$1 = e83070;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$1;
}
} else {
throw e83070;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83063){if((e83063 instanceof Error)){
var e__18676__auto____$1 = e83063;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
try{var v_0__83018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
if((v_0__83018 === "Root")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2));
var G__83066 = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(l) : simplify.call(null,l));
var G__83067 = (function (){var G__83069 = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(r) : simplify.call(null,r));
var fexpr__83068 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"invert","invert",-1100858266,null));
return (fexpr__83068.cljs$core$IFn$_invoke$arity$1 ? fexpr__83068.cljs$core$IFn$_invoke$arity$1(G__83069) : fexpr__83068.call(null,G__83069));
})();
var fexpr__83065 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"expt","expt",2123850345,null));
return (fexpr__83065.cljs$core$IFn$_invoke$arity$2 ? fexpr__83065.cljs$core$IFn$_invoke$arity$2(G__83066,G__83067) : fexpr__83065.call(null,G__83066,G__83067));
} else {
throw cljs.core.match.backtrack;

}
}catch (e83064){if((e83064 instanceof Error)){
var e__18676__auto____$2 = e83064;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e83064;

}
}} else {
throw e__18676__auto____$1;
}
} else {
throw e83063;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83037){if((e83037 instanceof Error)){
var e__18676__auto____$1 = e83037;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__83021 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__83021)) && ((cljs.core.count(v_left__83021) === (1))))){
try{var v_left__83021_0__83023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__83021,(0));
if((v_left__83021_0__83023 === "Error")){
var _ignore = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83062){if((e83062 instanceof Error)){
var e__18676__auto____$2 = e83062;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e83062;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83061){if((e83061 instanceof Error)){
var e__18676__auto____$2 = e83061;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e83061;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83038){if((e83038 instanceof Error)){
var e__18676__auto____$2 = e83038;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) === 2)))){
try{var v_0__83024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
if((v_0__83024 === "InverseFunction")){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Sin")){
return new cljs.core.Symbol(null,"asin","asin",-904130570,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83049){if((e83049 instanceof Error)){
var e__18676__auto____$3 = e83049;
if((e__18676__auto____$3 === cljs.core.match.backtrack)){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Cos")){
return new cljs.core.Symbol(null,"acos","acos",353741763,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83050){if((e83050 instanceof Error)){
var e__18676__auto____$4 = e83050;
if((e__18676__auto____$4 === cljs.core.match.backtrack)){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Tan")){
return new cljs.core.Symbol(null,"atan","atan",-1026550135,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83051){if((e83051 instanceof Error)){
var e__18676__auto____$5 = e83051;
if((e__18676__auto____$5 === cljs.core.match.backtrack)){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Cot")){
return new cljs.core.Symbol(null,"acot","acot",1103016569,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83052){if((e83052 instanceof Error)){
var e__18676__auto____$6 = e83052;
if((e__18676__auto____$6 === cljs.core.match.backtrack)){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Sec")){
return new cljs.core.Symbol(null,"asec","asec",-81933685,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83053){if((e83053 instanceof Error)){
var e__18676__auto____$7 = e83053;
if((e__18676__auto____$7 === cljs.core.match.backtrack)){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Csc")){
return new cljs.core.Symbol(null,"acsc","acsc",-1149851176,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83054){if((e83054 instanceof Error)){
var e__18676__auto____$8 = e83054;
if((e__18676__auto____$8 === cljs.core.match.backtrack)){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Cosh")){
return new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83055){if((e83055 instanceof Error)){
var e__18676__auto____$9 = e83055;
if((e__18676__auto____$9 === cljs.core.match.backtrack)){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Sinh")){
return new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83056){if((e83056 instanceof Error)){
var e__18676__auto____$10 = e83056;
if((e__18676__auto____$10 === cljs.core.match.backtrack)){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Tanh")){
return new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83057){if((e83057 instanceof Error)){
var e__18676__auto____$11 = e83057;
if((e__18676__auto____$11 === cljs.core.match.backtrack)){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Coth")){
return new cljs.core.Symbol(null,"acoth","acoth",1639672811,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83058){if((e83058 instanceof Error)){
var e__18676__auto____$12 = e83058;
if((e__18676__auto____$12 === cljs.core.match.backtrack)){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Sech")){
return new cljs.core.Symbol(null,"asech","asech",-316284500,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83059){if((e83059 instanceof Error)){
var e__18676__auto____$13 = e83059;
if((e__18676__auto____$13 === cljs.core.match.backtrack)){
try{var v_1__83025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__83025 === "Csch")){
return new cljs.core.Symbol(null,"acsch","acsch",-1449651634,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e83060){if((e83060 instanceof Error)){
var e__18676__auto____$14 = e83060;
if((e__18676__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$14;
}
} else {
throw e83060;

}
}} else {
throw e__18676__auto____$13;
}
} else {
throw e83059;

}
}} else {
throw e__18676__auto____$12;
}
} else {
throw e83058;

}
}} else {
throw e__18676__auto____$11;
}
} else {
throw e83057;

}
}} else {
throw e__18676__auto____$10;
}
} else {
throw e83056;

}
}} else {
throw e__18676__auto____$9;
}
} else {
throw e83055;

}
}} else {
throw e__18676__auto____$8;
}
} else {
throw e83054;

}
}} else {
throw e__18676__auto____$7;
}
} else {
throw e83053;

}
}} else {
throw e__18676__auto____$6;
}
} else {
throw e83052;

}
}} else {
throw e__18676__auto____$5;
}
} else {
throw e83051;

}
}} else {
throw e__18676__auto____$4;
}
} else {
throw e83050;

}
}} else {
throw e__18676__auto____$3;
}
} else {
throw e83049;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83048){if((e83048 instanceof Error)){
var e__18676__auto____$3 = e83048;
if((e__18676__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$3;
}
} else {
throw e83048;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83039){if((e83039 instanceof Error)){
var e__18676__auto____$3 = e83039;
if((e__18676__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__83026 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__83026)) && ((cljs.core.count(v_left__83026) === (1))))){
try{var v_left__83026_0__83028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__83026,(0));
if((v_left__83026_0__83028 === "Sequence")){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e83047){if((e83047 instanceof Error)){
var e__18676__auto____$4 = e83047;
if((e__18676__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$4;
}
} else {
throw e83047;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83046){if((e83046 instanceof Error)){
var e__18676__auto____$4 = e83046;
if((e__18676__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$4;
}
} else {
throw e83046;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83040){if((e83040 instanceof Error)){
var e__18676__auto____$4 = e83040;
if((e__18676__auto____$4 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (2))))){
try{var v_left__83029 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(2));
if(((cljs.core.vector_QMARK_(v_left__83029)) && ((cljs.core.count(v_left__83029) === (2))))){
try{var v_left__83029_0__83031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__83029,(0));
if((v_left__83029_0__83031 === "Delimiter")){
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__83029,(1));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(expr) : simplify.call(null,expr));
} else {
throw cljs.core.match.backtrack;

}
}catch (e83045){if((e83045 instanceof Error)){
var e__18676__auto____$5 = e83045;
if((e__18676__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$5;
}
} else {
throw e83045;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83044){if((e83044 instanceof Error)){
var e__18676__auto____$5 = e83044;
if((e__18676__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$5;
}
} else {
throw e83044;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83041){if((e83041 instanceof Error)){
var e__18676__auto____$5 = e83041;
if((e__18676__auto____$5 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__83033 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__83033)) && ((cljs.core.count(v_left__83033) === (1))))){
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__83033,(0));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
var temp__5751__auto__ = demo.mathlive.process_head(head);
if(cljs.core.truth_(temp__5751__auto__)){
var sym = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.numsymb.symbolic_operator(sym),cljs.core.map.cljs$core$IFn$_invoke$arity$2(simplify,args));
} else {
return v;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e83043){if((e83043 instanceof Error)){
var e__18676__auto____$6 = e83043;
if((e__18676__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$6;
}
} else {
throw e83043;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e83042){if((e83042 instanceof Error)){
var e__18676__auto____$6 = e83042;
if((e__18676__auto____$6 === cljs.core.match.backtrack)){
return v;
} else {
throw e__18676__auto____$6;
}
} else {
throw e83042;

}
}} else {
throw e__18676__auto____$5;
}
} else {
throw e83041;

}
}} else {
throw e__18676__auto____$4;
}
} else {
throw e83040;

}
}} else {
throw e__18676__auto____$3;
}
} else {
throw e83039;

}
}} else {
throw e__18676__auto____$2;
}
} else {
throw e83038;

}
}} else {
throw e__18676__auto____$1;
}
} else {
throw e83037;

}
}} else {
throw e__18676__auto__;
}
} else {
throw e83036;

}
}});
});
demo.mathlive.process = (function demo$mathlive$process(expr){
var process_v = demo.mathlive.v_processor(demo.mathlive.process);
if(typeof expr === 'number'){
return expr;
} else {
if(typeof expr === 'string'){
return demo.mathlive.process_str(expr);
} else {
if(cljs.core.map_QMARK_(expr)){
return demo.mathlive.process_map(expr);
} else {
if(cljs.core.vector_QMARK_(expr)){
return process_v(expr);
} else {
return expr;

}
}
}
}
});
/**
 * Converts MathJSON to an expression or structure of expressions.
 */
demo.mathlive.mathjson__GT_expression = (function demo$mathlive$mathjson__GT_expression(j){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.env.literal_number,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.mathlive.process(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(j))], 0));
});
demo.mathlive.__GT_TeX = (function demo$mathlive$__GT_TeX(x){
return (sicmutils.env.__GT_TeX.cljs$core$IFn$_invoke$arity$1 ? sicmutils.env.__GT_TeX.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.env.__GT_TeX.call(null,x));
});
demo.mathlive.Mathfield = (function demo$mathlive$Mathfield(_BANG_state){
var mfe = (new module$node_modules$mathlive$dist$mathlive_min.MathfieldElement(({"fontsDirectory": "https://unpkg.com/mathlive@0.83.0/dist/fonts/"})));
mfe.addEventListener("input",(function (x){
console.log(x.target.getValue("math-json"));

console.log(x.target.expression.isValid);

console.log(x.target.expression.errors);

return cljs.core.reset_BANG_(_BANG_state,(cljs.core.truth_((function (){var or__4253__auto__ = x.target.expression.isValid;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.empty_QMARK_(x.target.expression.errors);
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),true,new cljs.core.Keyword(null,"expr","expr",745722291),x.target.expression.json], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),false], null)));
}));

cljs.core.reset_BANG_(_BANG_state,mfe.getValue("math-json"));

var ref = (function (el){
if(cljs.core.truth_(el)){
return el.replaceWith(mfe);
} else {
return null;
}
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null)], null)], null);
});
});

//# sourceMappingURL=demo.mathlive.js.map
