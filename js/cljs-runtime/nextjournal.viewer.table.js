goog.provide('nextjournal.viewer.table');
nextjournal.viewer.table.viewer = (function nextjournal$viewer$table$viewer(lines){
var with_let95168 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let95168","with-let95168",2074534546));
var temp__5757__auto___95175 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___95175 == null)){
} else {
var c__85826__auto___95176 = temp__5757__auto___95175;
if((with_let95168.generation === c__85826__auto___95176.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let95168.generation = c__85826__auto___95176.ratomGeneration);
}

var init95169 = (with_let95168.length === (0));
var current_page = ((((init95169) || (cljs.core.not(with_let95168.hasOwnProperty((0))))))?(with_let95168[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let95168[(0)]));
var res95170 = (function (){var header = cljs.core.first(lines);
var rest = cljs.core.rest(lines);
var count = cljs.core.count(rest);
var items_per_page = (10);
var pages = Math.floor((count / items_per_page));
var page_count = (pages + (1));
var showing = (function (){var x__4339__auto__ = count;
var y__4340__auto__ = items_per_page;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var rows = cljs.core.take.cljs$core$IFn$_invoke$arity$2(showing,rest);
var items = cljs.core.take.cljs$core$IFn$_invoke$arity$2(items_per_page,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(current_page) * items_per_page),rest));
return nextjournal.viewer.html(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.monospace.rounded.border.border-color-black-10.relative","div.monospace.rounded.border.border-color-black-10.relative",2110126119),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(24)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-auto","div.overflow-auto",-1933741039),((((1) < page_count))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(265)], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.nj-viewer-table","table.nj-viewer-table",299092801),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-padding","cell-padding",978029542),(0),new cljs.core.Keyword(null,"cell-spacing","cell-spacing",769666488),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,val){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-left.whitespace-no-wrap.px-2.border-b.border-solid.border-color-black-05","th.text-left.whitespace-no-wrap.px-2.border-b.border-solid.border-color-black-05",-1257831031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"24px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),(((i === (0)))?null:"border-l")], null),val], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["header-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}),header)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core.even_QMARK_(i))?"bg-near-white ":null),"hover-bg-light-silver"].join('')], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (j,val){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-2.text-left.whitespace-no-wrap.border-color-black-05","td.px-2.text-left.whitespace-no-wrap.border-color-black-05",-598958477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"14px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(showing - (1))))?null:"border-b "),(((j === (0)))?null:"border-l")].join('')], null),val], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["datum-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null));
}),row)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}),items)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.absolute.left-0.bottom-0.w-full.px-2.border-t.border-solid.border-color-black-05.bg-white","div.flex.items-center.justify-between.absolute.left-0.bottom-0.w-full.px-2.border-t.border-solid.border-color-black-05.bg-white",966157221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"24px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),(3),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.black-40","div.black-40",-994503173),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)," items"].join('')], null),(((count > items_per_page))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.black-40.mr-3","span.black-40.mr-3",-1322637247),"showing page ",(cljs.core.deref(current_page) + (1)),"/",page_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nj-button--unstyled.flex.items-center.cursor-pointer","button.nj-button--unstyled.flex.items-center.cursor-pointer",1421066965),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 4px"], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.deref(current_page) === (0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_page,cljs.core.dec);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.icon.view,"ChevronLeft",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"class","class",-2030961996),"fill-teal dim"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nj-button--unstyled.flex.items-center.cursor-pointer","button.nj-button--unstyled.flex.items-center.cursor-pointer",1421066965),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 0 0 4px"], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_page),pages),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_page,cljs.core.inc);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.icon.view,"ChevronRight",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"class","class",-2030961996),"fill-teal dim"], null)], null)], null)], null):null)], null)], null));
})();
return res95170;
});
nextjournal.viewer.register_viewer_BANG_(new cljs.core.Keyword(null,"table","table",-564943036),nextjournal.viewer.table.viewer);
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.view_as(new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null)], null))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.table",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-2"], 0)));


//# sourceMappingURL=nextjournal.viewer.table.js.map
