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
}catch (e103985){if((e103985 instanceof Error)){
var e__18830__auto__ = e103985;
if((e__18830__auto__ === cljs.core.match.backtrack)){
try{if(typeof head === 'string'){
return (demo.mathlive.f_name__GT_sym.cljs$core$IFn$_invoke$arity$2 ? demo.mathlive.f_name__GT_sym.cljs$core$IFn$_invoke$arity$2(head,head) : demo.mathlive.f_name__GT_sym.call(null,head,head));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103986){if((e103986 instanceof Error)){
var e__18830__auto____$1 = e103986;
if((e__18830__auto____$1 === cljs.core.match.backtrack)){
return head;
} else {
throw e__18830__auto____$1;
}
} else {
throw e103986;

}
}} else {
throw e__18830__auto__;
}
} else {
throw e103985;

}
}});
demo.mathlive.process_map = (function demo$mathlive$process_map(m){
return m;
});
demo.mathlive.v_processor = (function demo$mathlive$v_processor(simplify){
return (function demo$mathlive$v_processor_$_process_v(v){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__104004 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__104004)) && ((cljs.core.count(v_left__104004) === (1))))){
try{var v_left__104004_0__104010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104004,(0));
if(cljs.core.vector_QMARK_(v_left__104004_0__104010)){
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104004,(0));
var tail = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
return demo$mathlive$v_processor_$_process_v(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo$mathlive$v_processor_$_process_v(h)], null),tail));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104136){if((e104136 instanceof Error)){
var e__18830__auto__ = e104136;
if((e__18830__auto__ === cljs.core.match.backtrack)){
try{var v_left__104004_0__104010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104004,(0));
if((v_left__104004_0__104010 === "List")){
var xs = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
return sicmutils.structure.up_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(simplify,xs));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104137){if((e104137 instanceof Error)){
var e__18830__auto____$1 = e104137;
if((e__18830__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$1;
}
} else {
throw e104137;

}
}} else {
throw e__18830__auto__;
}
} else {
throw e104136;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104135){if((e104135 instanceof Error)){
var e__18830__auto__ = e104135;
if((e__18830__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto__;
}
} else {
throw e104135;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104060){if((e104060 instanceof Error)){
var e__18830__auto__ = e104060;
if((e__18830__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) === 3)))){
try{var v_0__104012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
if((v_0__104012 === "Power")){
try{var v_1__104013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104013 === "ExponentialE")){
var pow = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2));
var G__104134 = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(pow) : simplify.call(null,pow));
var fexpr__104133 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"exp","exp",1378825265,null));
return (fexpr__104133.cljs$core$IFn$_invoke$arity$1 ? fexpr__104133.cljs$core$IFn$_invoke$arity$1(G__104134) : fexpr__104133.call(null,G__104134));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104132){if((e104132 instanceof Error)){
var e__18830__auto____$1 = e104132;
if((e__18830__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$1;
}
} else {
throw e104132;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104122){if((e104122 instanceof Error)){
var e__18830__auto____$1 = e104122;
if((e__18830__auto____$1 === cljs.core.match.backtrack)){
try{var v_0__104012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
if((v_0__104012 === "Root")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2));
var G__104128 = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(l) : simplify.call(null,l));
var G__104129 = (function (){var G__104131 = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(r) : simplify.call(null,r));
var fexpr__104130 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"invert","invert",-1100858266,null));
return (fexpr__104130.cljs$core$IFn$_invoke$arity$1 ? fexpr__104130.cljs$core$IFn$_invoke$arity$1(G__104131) : fexpr__104130.call(null,G__104131));
})();
var fexpr__104127 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"expt","expt",2123850345,null));
return (fexpr__104127.cljs$core$IFn$_invoke$arity$2 ? fexpr__104127.cljs$core$IFn$_invoke$arity$2(G__104128,G__104129) : fexpr__104127.call(null,G__104128,G__104129));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104123){if((e104123 instanceof Error)){
var e__18830__auto____$2 = e104123;
if((e__18830__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$2;
}
} else {
throw e104123;

}
}} else {
throw e__18830__auto____$1;
}
} else {
throw e104122;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104061){if((e104061 instanceof Error)){
var e__18830__auto____$1 = e104061;
if((e__18830__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__104022 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__104022)) && ((cljs.core.count(v_left__104022) === (1))))){
try{var v_left__104022_0__104024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104022,(0));
if((v_left__104022_0__104024 === "Error")){
var _ignore = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104119){if((e104119 instanceof Error)){
var e__18830__auto____$2 = e104119;
if((e__18830__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$2;
}
} else {
throw e104119;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104117){if((e104117 instanceof Error)){
var e__18830__auto____$2 = e104117;
if((e__18830__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$2;
}
} else {
throw e104117;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104062){if((e104062 instanceof Error)){
var e__18830__auto____$2 = e104062;
if((e__18830__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) === 2)))){
try{var v_0__104028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
if((v_0__104028 === "InverseFunction")){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Sin")){
return new cljs.core.Symbol(null,"asin","asin",-904130570,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104092){if((e104092 instanceof Error)){
var e__18830__auto____$3 = e104092;
if((e__18830__auto____$3 === cljs.core.match.backtrack)){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Cos")){
return new cljs.core.Symbol(null,"acos","acos",353741763,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104093){if((e104093 instanceof Error)){
var e__18830__auto____$4 = e104093;
if((e__18830__auto____$4 === cljs.core.match.backtrack)){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Tan")){
return new cljs.core.Symbol(null,"atan","atan",-1026550135,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104094){if((e104094 instanceof Error)){
var e__18830__auto____$5 = e104094;
if((e__18830__auto____$5 === cljs.core.match.backtrack)){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Cot")){
return new cljs.core.Symbol(null,"acot","acot",1103016569,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104095){if((e104095 instanceof Error)){
var e__18830__auto____$6 = e104095;
if((e__18830__auto____$6 === cljs.core.match.backtrack)){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Sec")){
return new cljs.core.Symbol(null,"asec","asec",-81933685,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104096){if((e104096 instanceof Error)){
var e__18830__auto____$7 = e104096;
if((e__18830__auto____$7 === cljs.core.match.backtrack)){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Csc")){
return new cljs.core.Symbol(null,"acsc","acsc",-1149851176,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104097){if((e104097 instanceof Error)){
var e__18830__auto____$8 = e104097;
if((e__18830__auto____$8 === cljs.core.match.backtrack)){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Cosh")){
return new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104098){if((e104098 instanceof Error)){
var e__18830__auto____$9 = e104098;
if((e__18830__auto____$9 === cljs.core.match.backtrack)){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Sinh")){
return new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104099){if((e104099 instanceof Error)){
var e__18830__auto____$10 = e104099;
if((e__18830__auto____$10 === cljs.core.match.backtrack)){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Tanh")){
return new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104100){if((e104100 instanceof Error)){
var e__18830__auto____$11 = e104100;
if((e__18830__auto____$11 === cljs.core.match.backtrack)){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Coth")){
return new cljs.core.Symbol(null,"acoth","acoth",1639672811,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104101){if((e104101 instanceof Error)){
var e__18830__auto____$12 = e104101;
if((e__18830__auto____$12 === cljs.core.match.backtrack)){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Sech")){
return new cljs.core.Symbol(null,"asech","asech",-316284500,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104102){if((e104102 instanceof Error)){
var e__18830__auto____$13 = e104102;
if((e__18830__auto____$13 === cljs.core.match.backtrack)){
try{var v_1__104029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
if((v_1__104029 === "Csch")){
return new cljs.core.Symbol(null,"acsch","acsch",-1449651634,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e104103){if((e104103 instanceof Error)){
var e__18830__auto____$14 = e104103;
if((e__18830__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$14;
}
} else {
throw e104103;

}
}} else {
throw e__18830__auto____$13;
}
} else {
throw e104102;

}
}} else {
throw e__18830__auto____$12;
}
} else {
throw e104101;

}
}} else {
throw e__18830__auto____$11;
}
} else {
throw e104100;

}
}} else {
throw e__18830__auto____$10;
}
} else {
throw e104099;

}
}} else {
throw e__18830__auto____$9;
}
} else {
throw e104098;

}
}} else {
throw e__18830__auto____$8;
}
} else {
throw e104097;

}
}} else {
throw e__18830__auto____$7;
}
} else {
throw e104096;

}
}} else {
throw e__18830__auto____$6;
}
} else {
throw e104095;

}
}} else {
throw e__18830__auto____$5;
}
} else {
throw e104094;

}
}} else {
throw e__18830__auto____$4;
}
} else {
throw e104093;

}
}} else {
throw e__18830__auto____$3;
}
} else {
throw e104092;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104091){if((e104091 instanceof Error)){
var e__18830__auto____$3 = e104091;
if((e__18830__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$3;
}
} else {
throw e104091;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104063){if((e104063 instanceof Error)){
var e__18830__auto____$3 = e104063;
if((e__18830__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__104041 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__104041)) && ((cljs.core.count(v_left__104041) === (1))))){
try{var v_left__104041_0__104044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104041,(0));
if((v_left__104041_0__104044 === "Sequence")){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e104087){if((e104087 instanceof Error)){
var e__18830__auto____$4 = e104087;
if((e__18830__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$4;
}
} else {
throw e104087;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104084){if((e104084 instanceof Error)){
var e__18830__auto____$4 = e104084;
if((e__18830__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$4;
}
} else {
throw e104084;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104065){if((e104065 instanceof Error)){
var e__18830__auto____$4 = e104065;
if((e__18830__auto____$4 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (2))))){
try{var v_left__104046 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(2));
if(((cljs.core.vector_QMARK_(v_left__104046)) && ((cljs.core.count(v_left__104046) === (2))))){
try{var v_left__104046_0__104048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104046,(0));
if((v_left__104046_0__104048 === "Delimiter")){
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104046,(1));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(expr) : simplify.call(null,expr));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104080){if((e104080 instanceof Error)){
var e__18830__auto____$5 = e104080;
if((e__18830__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$5;
}
} else {
throw e104080;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104079){if((e104079 instanceof Error)){
var e__18830__auto____$5 = e104079;
if((e__18830__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$5;
}
} else {
throw e104079;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104067){if((e104067 instanceof Error)){
var e__18830__auto____$5 = e104067;
if((e__18830__auto____$5 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(v)) && ((cljs.core.count(v) >= (1))))){
try{var v_left__104052 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(1));
if(((cljs.core.vector_QMARK_(v_left__104052)) && ((cljs.core.count(v_left__104052) === (1))))){
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_left__104052,(0));
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
}catch (e104070){if((e104070 instanceof Error)){
var e__18830__auto____$6 = e104070;
if((e__18830__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18830__auto____$6;
}
} else {
throw e104070;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104069){if((e104069 instanceof Error)){
var e__18830__auto____$6 = e104069;
if((e__18830__auto____$6 === cljs.core.match.backtrack)){
return v;
} else {
throw e__18830__auto____$6;
}
} else {
throw e104069;

}
}} else {
throw e__18830__auto____$5;
}
} else {
throw e104067;

}
}} else {
throw e__18830__auto____$4;
}
} else {
throw e104065;

}
}} else {
throw e__18830__auto____$3;
}
} else {
throw e104063;

}
}} else {
throw e__18830__auto____$2;
}
} else {
throw e104062;

}
}} else {
throw e__18830__auto____$1;
}
} else {
throw e104061;

}
}} else {
throw e__18830__auto__;
}
} else {
throw e104060;

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
