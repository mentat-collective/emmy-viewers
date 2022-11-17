goog.provide('demo.mathlive');
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
}catch (e103932){if((e103932 instanceof Error)){
var e__18676__auto__ = e103932;
if((e__18676__auto__ === cljs.core.match.backtrack)){
try{if(typeof head === 'string'){
return (demo.mathlive.f_name__GT_sym.cljs$core$IFn$_invoke$arity$2 ? demo.mathlive.f_name__GT_sym.cljs$core$IFn$_invoke$arity$2(head,head) : demo.mathlive.f_name__GT_sym.call(null,head,head));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103934){if((e103934 instanceof Error)){
var e__18676__auto____$1 = e103934;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
return head;
} else {
throw e__18676__auto____$1;
}
} else {
throw e103934;

}
}} else {
throw e__18676__auto__;
}
} else {
throw e103932;

}
}});
demo.mathlive.process_map = (function demo$mathlive$process_map(m){
return m;
});
demo.mathlive.v_processor = (function demo$mathlive$v_processor(simplify){
return (function demo$mathlive$v_processor_$_process_v(v){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__103960 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__103960)) && ((cljs.core.count(v_left__103960) === (1))))){
try{var v_left__103960_0__103966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__103960,(0));
if(cljs.core.vector_QMARK_(v_left__103960_0__103966)){
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__103960,(0));
var tail = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
return demo$mathlive$v_processor_$_process_v(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo$mathlive$v_processor_$_process_v(h)], null),tail));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104146){if((e104146 instanceof Error)){
var e__18676__auto__ = e104146;
if((e__18676__auto__ === cljs.core.match.backtrack)){
try{var v_left__103960_0__103966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__103960,(0));
if((v_left__103960_0__103966 === "List")){
var xs = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
return sicmutils.structure.up_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(simplify,xs));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104147){if((e104147 instanceof Error)){
var e__18676__auto____$1 = e104147;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$1;
}
} else {
throw e104147;

}
}} else {
throw e__18676__auto__;
}
} else {
throw e104146;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104144){if((e104144 instanceof Error)){
var e__18676__auto__ = e104144;
if((e__18676__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto__;
}
} else {
throw e104144;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104027){if((e104027 instanceof Error)){
var e__18676__auto__ = e104027;
if((e__18676__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) === 3)))){
try{var v_0__103971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
if((v_0__103971 === "Power")){
try{var v_1__103972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103972 === "ExponentialE")){
var pow = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2));
var G__104140 = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(pow) : simplify.call(null,pow));
var fexpr__104139 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"exp","exp",1378825265,null));
return (fexpr__104139.cljs$core$IFn$_invoke$arity$1 ? fexpr__104139.cljs$core$IFn$_invoke$arity$1(G__104140) : fexpr__104139.call(null,G__104140));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104137){if((e104137 instanceof Error)){
var e__18676__auto____$1 = e104137;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$1;
}
} else {
throw e104137;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104130){if((e104130 instanceof Error)){
var e__18676__auto____$1 = e104130;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
try{var v_0__103971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
if((v_0__103971 === "Root")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2));
var G__104133 = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(l) : simplify.call(null,l));
var G__104134 = (function (){var G__104136 = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(r) : simplify.call(null,r));
var fexpr__104135 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"invert","invert",-1100858266,null));
return (fexpr__104135.cljs$core$IFn$_invoke$arity$1 ? fexpr__104135.cljs$core$IFn$_invoke$arity$1(G__104136) : fexpr__104135.call(null,G__104136));
})();
var fexpr__104132 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"expt","expt",2123850345,null));
return (fexpr__104132.cljs$core$IFn$_invoke$arity$2 ? fexpr__104132.cljs$core$IFn$_invoke$arity$2(G__104133,G__104134) : fexpr__104132.call(null,G__104133,G__104134));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104131){if((e104131 instanceof Error)){
var e__18676__auto____$2 = e104131;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e104131;

}
}} else {
throw e__18676__auto____$1;
}
} else {
throw e104130;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104032){if((e104032 instanceof Error)){
var e__18676__auto____$1 = e104032;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__103979 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__103979)) && ((cljs.core.count(v_left__103979) === (1))))){
try{var v_left__103979_0__103981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__103979,(0));
if((v_left__103979_0__103981 === "Error")){
var _ignore = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104129){if((e104129 instanceof Error)){
var e__18676__auto____$2 = e104129;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e104129;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104125){if((e104125 instanceof Error)){
var e__18676__auto____$2 = e104125;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e104125;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104033){if((e104033 instanceof Error)){
var e__18676__auto____$2 = e104033;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) === 2)))){
try{var v_0__103986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
if((v_0__103986 === "InverseFunction")){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Sin")){
return new cljs.core.Symbol(null,"asin","asin",-904130570,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104110){if((e104110 instanceof Error)){
var e__18676__auto____$3 = e104110;
if((e__18676__auto____$3 === cljs.core.match.backtrack)){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Cos")){
return new cljs.core.Symbol(null,"acos","acos",353741763,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104111){if((e104111 instanceof Error)){
var e__18676__auto____$4 = e104111;
if((e__18676__auto____$4 === cljs.core.match.backtrack)){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Tan")){
return new cljs.core.Symbol(null,"atan","atan",-1026550135,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104112){if((e104112 instanceof Error)){
var e__18676__auto____$5 = e104112;
if((e__18676__auto____$5 === cljs.core.match.backtrack)){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Cot")){
return new cljs.core.Symbol(null,"acot","acot",1103016569,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104113){if((e104113 instanceof Error)){
var e__18676__auto____$6 = e104113;
if((e__18676__auto____$6 === cljs.core.match.backtrack)){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Sec")){
return new cljs.core.Symbol(null,"asec","asec",-81933685,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104116){if((e104116 instanceof Error)){
var e__18676__auto____$7 = e104116;
if((e__18676__auto____$7 === cljs.core.match.backtrack)){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Csc")){
return new cljs.core.Symbol(null,"acsc","acsc",-1149851176,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104118){if((e104118 instanceof Error)){
var e__18676__auto____$8 = e104118;
if((e__18676__auto____$8 === cljs.core.match.backtrack)){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Cosh")){
return new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104119){if((e104119 instanceof Error)){
var e__18676__auto____$9 = e104119;
if((e__18676__auto____$9 === cljs.core.match.backtrack)){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Sinh")){
return new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104120){if((e104120 instanceof Error)){
var e__18676__auto____$10 = e104120;
if((e__18676__auto____$10 === cljs.core.match.backtrack)){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Tanh")){
return new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104121){if((e104121 instanceof Error)){
var e__18676__auto____$11 = e104121;
if((e__18676__auto____$11 === cljs.core.match.backtrack)){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Coth")){
return new cljs.core.Symbol(null,"acoth","acoth",1639672811,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104122){if((e104122 instanceof Error)){
var e__18676__auto____$12 = e104122;
if((e__18676__auto____$12 === cljs.core.match.backtrack)){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Sech")){
return new cljs.core.Symbol(null,"asech","asech",-316284500,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104123){if((e104123 instanceof Error)){
var e__18676__auto____$13 = e104123;
if((e__18676__auto____$13 === cljs.core.match.backtrack)){
try{var v_1__103987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__103987 === "Csch")){
return new cljs.core.Symbol(null,"acsch","acsch",-1449651634,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104124){if((e104124 instanceof Error)){
var e__18676__auto____$14 = e104124;
if((e__18676__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$14;
}
} else {
throw e104124;

}
}} else {
throw e__18676__auto____$13;
}
} else {
throw e104123;

}
}} else {
throw e__18676__auto____$12;
}
} else {
throw e104122;

}
}} else {
throw e__18676__auto____$11;
}
} else {
throw e104121;

}
}} else {
throw e__18676__auto____$10;
}
} else {
throw e104120;

}
}} else {
throw e__18676__auto____$9;
}
} else {
throw e104119;

}
}} else {
throw e__18676__auto____$8;
}
} else {
throw e104118;

}
}} else {
throw e__18676__auto____$7;
}
} else {
throw e104116;

}
}} else {
throw e__18676__auto____$6;
}
} else {
throw e104113;

}
}} else {
throw e__18676__auto____$5;
}
} else {
throw e104112;

}
}} else {
throw e__18676__auto____$4;
}
} else {
throw e104111;

}
}} else {
throw e__18676__auto____$3;
}
} else {
throw e104110;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104106){if((e104106 instanceof Error)){
var e__18676__auto____$3 = e104106;
if((e__18676__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$3;
}
} else {
throw e104106;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104034){if((e104034 instanceof Error)){
var e__18676__auto____$3 = e104034;
if((e__18676__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__104002 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__104002)) && ((cljs.core.count(v_left__104002) === (1))))){
try{var v_left__104002_0__104005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104002,(0));
if((v_left__104002_0__104005 === "Sequence")){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e104085){if((e104085 instanceof Error)){
var e__18676__auto____$4 = e104085;
if((e__18676__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$4;
}
} else {
throw e104085;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104075){if((e104075 instanceof Error)){
var e__18676__auto____$4 = e104075;
if((e__18676__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$4;
}
} else {
throw e104075;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104037){if((e104037 instanceof Error)){
var e__18676__auto____$4 = e104037;
if((e__18676__auto____$4 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (2))))){
try{var v_left__104006 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(2));
if(((cljs.core.vector_QMARK_(v_left__104006)) && ((cljs.core.count(v_left__104006) === (2))))){
try{var v_left__104006_0__104008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104006,(0));
if((v_left__104006_0__104008 === "Delimiter")){
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104006,(1));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(expr) : simplify.call(null,expr));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104067){if((e104067 instanceof Error)){
var e__18676__auto____$5 = e104067;
if((e__18676__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$5;
}
} else {
throw e104067;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104055){if((e104055 instanceof Error)){
var e__18676__auto____$5 = e104055;
if((e__18676__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$5;
}
} else {
throw e104055;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104038){if((e104038 instanceof Error)){
var e__18676__auto____$5 = e104038;
if((e__18676__auto____$5 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__104010 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__104010)) && ((cljs.core.count(v_left__104010) === (1))))){
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104010,(0));
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
}catch (e104043){if((e104043 instanceof Error)){
var e__18676__auto____$6 = e104043;
if((e__18676__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$6;
}
} else {
throw e104043;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104042){if((e104042 instanceof Error)){
var e__18676__auto____$6 = e104042;
if((e__18676__auto____$6 === cljs.core.match.backtrack)){
return v;
} else {
throw e__18676__auto____$6;
}
} else {
throw e104042;

}
}} else {
throw e__18676__auto____$5;
}
} else {
throw e104038;

}
}} else {
throw e__18676__auto____$4;
}
} else {
throw e104037;

}
}} else {
throw e__18676__auto____$3;
}
} else {
throw e104034;

}
}} else {
throw e__18676__auto____$2;
}
} else {
throw e104033;

}
}} else {
throw e__18676__auto____$1;
}
} else {
throw e104032;

}
}} else {
throw e__18676__auto__;
}
} else {
throw e104027;

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

//# sourceMappingURL=demo.mathlive.js.map
