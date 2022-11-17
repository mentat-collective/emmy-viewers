import "./cljs_env.js";
goog.provide('editscript.diff.quick');
editscript.diff.quick.diff_map = (function editscript$diff$quick$diff_map(script,path,a,b,opts){
cljs.core.reduce_kv((function (_,ka,va){
var path_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ka);
if(cljs.core.contains_QMARK_(b,ka)){
var G__75388 = script;
var G__75389 = path_SINGLEQUOTE_;
var G__75390 = va;
var G__75391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ka);
var G__75392 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__75388,G__75389,G__75390,G__75391,G__75392) : editscript.diff.quick.diff_STAR_.call(null,G__75388,G__75389,G__75390,G__75391,G__75392));
} else {
var G__75393 = script;
var G__75394 = path_SINGLEQUOTE_;
var G__75395 = va;
var G__75396 = editscript.edit.nada();
var G__75397 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__75393,G__75394,G__75395,G__75396,G__75397) : editscript.diff.quick.diff_STAR_.call(null,G__75393,G__75394,G__75395,G__75396,G__75397));
}
}),null,a);

return cljs.core.reduce_kv((function (_,kb,vb){
if(cljs.core.contains_QMARK_(a,kb)){
return null;
} else {
var G__75399 = script;
var G__75400 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,kb);
var G__75401 = editscript.edit.nada();
var G__75402 = vb;
var G__75403 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__75399,G__75400,G__75401,G__75402,G__75403) : editscript.diff.quick.diff_STAR_.call(null,G__75399,G__75400,G__75401,G__75402,G__75403));
}
}),null,b);
});
/**
 * Adjust the indices to have a correct editscript
 */
editscript.diff.quick.diff_vec = (function editscript$diff$quick$diff_vec(script,path,a,b,opts){
var edits = editscript.util.common.vec_edits(a,b,opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edits,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return editscript.edit.replace_data(script,path,b);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__75410,op){
var vec__75411 = p__75410;
var ia = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75411,(0),null);
var ia_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75411,(1),null);
var ib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75411,(2),null);
var G__75416 = op;
var G__75416__$1 = (((G__75416 instanceof cljs.core.Keyword))?G__75416.fqn:null);
switch (G__75416__$1) {
case "-":
var G__75423_75680 = script;
var G__75424_75681 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__75425_75682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__75426_75683 = editscript.edit.nada();
var G__75427_75684 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__75423_75680,G__75424_75681,G__75425_75682,G__75426_75683,G__75427_75684) : editscript.diff.quick.diff_STAR_.call(null,G__75423_75680,G__75424_75681,G__75425_75682,G__75426_75683,G__75427_75684));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),ia_SINGLEQUOTE_,ib], null);

break;
case "+":
var G__75432_75685 = script;
var G__75433_75686 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__75434_75687 = editscript.edit.nada();
var G__75435_75688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__75436_75689 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__75432_75685,G__75433_75686,G__75434_75687,G__75435_75688,G__75436_75689) : editscript.diff.quick.diff_STAR_.call(null,G__75432_75685,G__75433_75686,G__75434_75687,G__75435_75688,G__75436_75689));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ia,(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
case "r":
var G__75442_75690 = script;
var G__75443_75691 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__75444_75692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__75445_75693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__75446_75694 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__75442_75690,G__75443_75691,G__75444_75692,G__75445_75693,G__75446_75694) : editscript.diff.quick.diff_STAR_.call(null,G__75442_75690,G__75443_75691,G__75444_75692,G__75445_75693,G__75446_75694));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + op),(ia_SINGLEQUOTE_ + op),(ib + op)], null);

}
}),cljs.core.transient$(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),edits);
}
});
editscript.diff.quick.diff_set = (function editscript$diff$quick$diff_set(script,path,a,b,opts){
var seq__75451_75695 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b));
var chunk__75452_75696 = null;
var count__75453_75697 = (0);
var i__75454_75698 = (0);
while(true){
if((i__75454_75698 < count__75453_75697)){
var va_75699 = chunk__75452_75696.cljs$core$IIndexed$_nth$arity$2(null,i__75454_75698);
var G__75480_75700 = script;
var G__75481_75701 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_75699);
var G__75482_75702 = va_75699;
var G__75483_75703 = editscript.edit.nada();
var G__75484_75704 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__75480_75700,G__75481_75701,G__75482_75702,G__75483_75703,G__75484_75704) : editscript.diff.quick.diff_STAR_.call(null,G__75480_75700,G__75481_75701,G__75482_75702,G__75483_75703,G__75484_75704));


var G__75705 = seq__75451_75695;
var G__75706 = chunk__75452_75696;
var G__75707 = count__75453_75697;
var G__75708 = (i__75454_75698 + (1));
seq__75451_75695 = G__75705;
chunk__75452_75696 = G__75706;
count__75453_75697 = G__75707;
i__75454_75698 = G__75708;
continue;
} else {
var temp__5753__auto___75709 = cljs.core.seq(seq__75451_75695);
if(temp__5753__auto___75709){
var seq__75451_75710__$1 = temp__5753__auto___75709;
if(cljs.core.chunked_seq_QMARK_(seq__75451_75710__$1)){
var c__5568__auto___75711 = cljs.core.chunk_first(seq__75451_75710__$1);
var G__75712 = cljs.core.chunk_rest(seq__75451_75710__$1);
var G__75713 = c__5568__auto___75711;
var G__75714 = cljs.core.count(c__5568__auto___75711);
var G__75715 = (0);
seq__75451_75695 = G__75712;
chunk__75452_75696 = G__75713;
count__75453_75697 = G__75714;
i__75454_75698 = G__75715;
continue;
} else {
var va_75716 = cljs.core.first(seq__75451_75710__$1);
var G__75489_75717 = script;
var G__75490_75718 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_75716);
var G__75491_75719 = va_75716;
var G__75492_75720 = editscript.edit.nada();
var G__75493_75721 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__75489_75717,G__75490_75718,G__75491_75719,G__75492_75720,G__75493_75721) : editscript.diff.quick.diff_STAR_.call(null,G__75489_75717,G__75490_75718,G__75491_75719,G__75492_75720,G__75493_75721));


var G__75722 = cljs.core.next(seq__75451_75710__$1);
var G__75723 = null;
var G__75724 = (0);
var G__75725 = (0);
seq__75451_75695 = G__75722;
chunk__75452_75696 = G__75723;
count__75453_75697 = G__75724;
i__75454_75698 = G__75725;
continue;
}
} else {
}
}
break;
}

var seq__75495 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a));
var chunk__75496 = null;
var count__75497 = (0);
var i__75498 = (0);
while(true){
if((i__75498 < count__75497)){
var vb = chunk__75496.cljs$core$IIndexed$_nth$arity$2(null,i__75498);
var G__75511_75726 = script;
var G__75512_75727 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__75513_75728 = editscript.edit.nada();
var G__75514_75729 = vb;
var G__75515_75730 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__75511_75726,G__75512_75727,G__75513_75728,G__75514_75729,G__75515_75730) : editscript.diff.quick.diff_STAR_.call(null,G__75511_75726,G__75512_75727,G__75513_75728,G__75514_75729,G__75515_75730));


var G__75731 = seq__75495;
var G__75732 = chunk__75496;
var G__75733 = count__75497;
var G__75734 = (i__75498 + (1));
seq__75495 = G__75731;
chunk__75496 = G__75732;
count__75497 = G__75733;
i__75498 = G__75734;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__75495);
if(temp__5753__auto__){
var seq__75495__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75495__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__75495__$1);
var G__75735 = cljs.core.chunk_rest(seq__75495__$1);
var G__75736 = c__5568__auto__;
var G__75737 = cljs.core.count(c__5568__auto__);
var G__75738 = (0);
seq__75495 = G__75735;
chunk__75496 = G__75736;
count__75497 = G__75737;
i__75498 = G__75738;
continue;
} else {
var vb = cljs.core.first(seq__75495__$1);
var G__75516_75739 = script;
var G__75517_75740 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__75518_75741 = editscript.edit.nada();
var G__75519_75742 = vb;
var G__75520_75743 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__75516_75739,G__75517_75740,G__75518_75741,G__75519_75742,G__75520_75743) : editscript.diff.quick.diff_STAR_.call(null,G__75516_75739,G__75517_75740,G__75518_75741,G__75519_75742,G__75520_75743));


var G__75744 = cljs.core.next(seq__75495__$1);
var G__75745 = null;
var G__75746 = (0);
var G__75747 = (0);
seq__75495 = G__75744;
chunk__75496 = G__75745;
count__75497 = G__75746;
i__75498 = G__75747;
continue;
}
} else {
return null;
}
}
break;
}
});
editscript.diff.quick.diff_lst = (function editscript$diff$quick$diff_lst(script,path,a,b,opts){
return editscript.diff.quick.diff_vec(script,path,cljs.core.vec(a),cljs.core.vec(b),opts);
});
editscript.diff.quick.diff_val = (function editscript$diff$quick$diff_val(script,path,_,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editscript.edit.get_type(b),new cljs.core.Keyword(null,"nil","nil",99600501))){
return editscript.edit.delete_data(script,path);
} else {
return editscript.edit.replace_data(script,path,b);
}
});
editscript.diff.quick.diff_STAR_ = (function editscript$diff$quick$diff_STAR_(script,path,a,b,p__75524){
var map__75525 = p__75524;
var map__75525__$1 = cljs.core.__destructure_map(map__75525);
var opts = map__75525__$1;
var str_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75525__$1,new cljs.core.Keyword(null,"str-diff","str-diff",1239614806),new cljs.core.Keyword(null,"none","none",1333468478));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return null;
} else {
var G__75527 = editscript.edit.get_type(a);
var G__75527__$1 = (((G__75527 instanceof cljs.core.Keyword))?G__75527.fqn:null);
switch (G__75527__$1) {
case "nil":
return editscript.edit.add_data(script,path,b);

break;
case "map":
var G__75529 = editscript.edit.get_type(b);
var G__75529__$1 = (((G__75529 instanceof cljs.core.Keyword))?G__75529.fqn:null);
switch (G__75529__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "map":
var fexpr__75551 = new cljs.core.Var(function(){return editscript.diff.quick.diff_map;},new cljs.core.Symbol("editscript.diff.quick","diff-map","editscript.diff.quick/diff-map",1973051147,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-map","diff-map",-711364586,null),"editscript/diff/quick.cljc",16,1,22,22,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_map)?editscript.diff.quick.diff_map.cljs$lang$test:null)]));
return (fexpr__75551.cljs$core$IFn$_invoke$arity$5 ? fexpr__75551.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__75551.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "vec":
var G__75552 = editscript.edit.get_type(b);
var G__75552__$1 = (((G__75552 instanceof cljs.core.Keyword))?G__75552.fqn:null);
switch (G__75552__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "vec":
var fexpr__75559 = new cljs.core.Var(function(){return editscript.diff.quick.diff_vec;},new cljs.core.Symbol("editscript.diff.quick","diff-vec","editscript.diff.quick/diff-vec",-1781503036,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-vec","diff-vec",-170849589,null),"editscript/diff/quick.cljc",16,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),"Adjust the indices to have a correct editscript",(cljs.core.truth_(editscript.diff.quick.diff_vec)?editscript.diff.quick.diff_vec.cljs$lang$test:null)]));
return (fexpr__75559.cljs$core$IFn$_invoke$arity$5 ? fexpr__75559.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__75559.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "set":
var G__75564 = editscript.edit.get_type(b);
var G__75564__$1 = (((G__75564 instanceof cljs.core.Keyword))?G__75564.fqn:null);
switch (G__75564__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "set":
var fexpr__75620 = new cljs.core.Var(function(){return editscript.diff.quick.diff_set;},new cljs.core.Symbol("editscript.diff.quick","diff-set","editscript.diff.quick/diff-set",1246078730,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-set","diff-set",-364591609,null),"editscript/diff/quick.cljc",16,1,58,58,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_set)?editscript.diff.quick.diff_set.cljs$lang$test:null)]));
return (fexpr__75620.cljs$core$IFn$_invoke$arity$5 ? fexpr__75620.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__75620.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "lst":
var G__75622 = editscript.edit.get_type(b);
var G__75622__$1 = (((G__75622 instanceof cljs.core.Keyword))?G__75622.fqn:null);
switch (G__75622__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "lst":
var fexpr__75631 = new cljs.core.Var(function(){return editscript.diff.quick.diff_lst;},new cljs.core.Symbol("editscript.diff.quick","diff-lst","editscript.diff.quick/diff-lst",-1885319001,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-lst","diff-lst",799109538,null),"editscript/diff/quick.cljc",16,1,65,65,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_lst)?editscript.diff.quick.diff_lst.cljs$lang$test:null)]));
return (fexpr__75631.cljs$core$IFn$_invoke$arity$5 ? fexpr__75631.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__75631.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "str":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(str_diff,new cljs.core.Keyword(null,"none","none",1333468478))){
return editscript.diff.quick.diff_val(script,path,a,b);
} else {
var G__75634 = editscript.edit.get_type(b);
var G__75634__$1 = (((G__75634 instanceof cljs.core.Keyword))?G__75634.fqn:null);
switch (G__75634__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "str":
var fexpr__75661 = new cljs.core.Var(function(){return editscript.util.common.diff_str;},new cljs.core.Symbol("editscript.util.common","diff-str","editscript.util.common/diff-str",283460236,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"editscript.util.common","editscript.util.common",1209759084,null),new cljs.core.Symbol(null,"diff-str","diff-str",1255675210,null),"editscript/util/common.cljc",15,1,161,161,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"str-change-limit","str-change-limit",-2124863440,null),new cljs.core.Symbol(null,"str-diff","str-diff",-1414820963,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"str-change-limit","str-change-limit",-2124863440,null),0.2], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),null,(cljs.core.truth_(editscript.util.common.diff_str)?editscript.util.common.diff_str.cljs$lang$test:null)]));
return (fexpr__75661.cljs$core$IFn$_invoke$arity$5 ? fexpr__75661.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__75661.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}
}

break;
case "val":
return editscript.diff.quick.diff_val(script,path,a,b);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75527__$1)].join('')));

}
}
});
/**
 * Create an EditScript that represents the difference between `b` and `a`
 *   This algorithm is fast, but it does not attempt to generate an EditScript
 *   that is minimal in size
 */
editscript.diff.quick.diff = (function editscript$diff$quick$diff(var_args){
var G__75666 = arguments.length;
switch (G__75666) {
case 2:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3(a,b,null);
}));

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3 = (function (a,b,opts){
var script = editscript.edit.edits__GT_script(cljs.core.PersistentVector.EMPTY);
editscript.diff.quick.diff_STAR_(script,cljs.core.PersistentVector.EMPTY,a,b,opts);

return script;
}));

(editscript.diff.quick.diff.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=editscript.diff.quick.js.map
