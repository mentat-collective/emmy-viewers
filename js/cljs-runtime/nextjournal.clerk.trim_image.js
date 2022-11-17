import "./cljs_env.js";
goog.provide('nextjournal.clerk.trim_image');
nextjournal.clerk.trim_image.get_rgba = (function nextjournal$clerk$trim_image$get_rgba(x,y,img_width,img_data){
var coord = (((img_width * y) + x) * (4));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),img_data.at(coord),new cljs.core.Keyword(null,"g","g",1738089905),img_data.at((coord + (1))),new cljs.core.Keyword(null,"b","b",1482224470),img_data.at((coord + (2))),new cljs.core.Keyword(null,"a","a",-2123407586),img_data.at((coord + (3)))], null);
});
nextjournal.clerk.trim_image.white_QMARK_ = (function nextjournal$clerk$trim_image$white_QMARK_(x,y,img_width,img_data){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),(255),new cljs.core.Keyword(null,"g","g",1738089905),(255),new cljs.core.Keyword(null,"b","b",1482224470),(255),new cljs.core.Keyword(null,"a","a",-2123407586),(255)], null),nextjournal.clerk.trim_image.get_rgba(x,y,img_width,img_data));
});
nextjournal.clerk.trim_image.scan_y = (function nextjournal$clerk$trim_image$scan_y(from_top_QMARK_,img_width,img_height,img_data){
var y = (cljs.core.truth_(from_top_QMARK_)?(0):(img_height - (1)));
var colored_col = null;
while(true){
if((function (){var and__5043__auto__ = cljs.core.not(colored_col);
if(and__5043__auto__){
if(cljs.core.truth_(from_top_QMARK_)){
return (y < img_height);
} else {
return ((-1) < y);
}
} else {
return and__5043__auto__;
}
})()){
var G__80256 = (cljs.core.truth_(from_top_QMARK_)?(y + (1)):(y - (1)));
var G__80257 = (function (){var x = (0);
while(true){
if((!(nextjournal.clerk.trim_image.white_QMARK_(x,y,img_width,img_data)))){
return y;
} else {
if((x < (img_width - (1)))){
var G__80258 = (x + (1));
x = G__80258;
continue;
} else {
return null;
}
}
break;
}
})();
y = G__80256;
colored_col = G__80257;
continue;
} else {
return colored_col;
}
break;
}
});
nextjournal.clerk.trim_image.scan_x = (function nextjournal$clerk$trim_image$scan_x(from_left_QMARK_,img_width,img_height,img_data){
var x = (cljs.core.truth_(from_left_QMARK_)?(0):(img_width - (1)));
var colored_row = null;
while(true){
if((function (){var and__5043__auto__ = cljs.core.not(colored_row);
if(and__5043__auto__){
if(cljs.core.truth_(from_left_QMARK_)){
return (x < img_width);
} else {
return ((0) <= x);
}
} else {
return and__5043__auto__;
}
})()){
var G__80259 = (cljs.core.truth_(from_left_QMARK_)?(x + (1)):(x - (1)));
var G__80260 = (function (){var y = (0);
while(true){
if((!(nextjournal.clerk.trim_image.white_QMARK_(x,y,img_width,img_data)))){
return x;
} else {
if((y < (img_height - (1)))){
var G__80261 = (y + (1));
y = G__80261;
continue;
} else {
return null;
}
}
break;
}
})();
x = G__80259;
colored_row = G__80260;
continue;
} else {
return colored_row;
}
break;
}
});
nextjournal.clerk.trim_image.trim_image = (function nextjournal$clerk$trim_image$trim_image(var_args){
var G__80243 = arguments.length;
switch (G__80243) {
case 1:
return nextjournal.clerk.trim_image.trim_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.trim_image.trim_image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('nextjournal.clerk.trim_image.trim_image', nextjournal.clerk.trim_image.trim_image);

(nextjournal.clerk.trim_image.trim_image.cljs$core$IFn$_invoke$arity$1 = (function (img){
return nextjournal.clerk.trim_image.trim_image.cljs$core$IFn$_invoke$arity$2(img,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.clerk.trim_image.trim_image.cljs$core$IFn$_invoke$arity$2 = (function (img,p__80246){
var map__80247 = p__80246;
var map__80247__$1 = cljs.core.__destructure_map(map__80247);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80247__$1,new cljs.core.Keyword(null,"padding","padding",1660304693),(0));
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var img_width = img.naturalWidth;
var img_height = img.naturalHeight;
var _ = canvas.setAttribute("width",img_width);
var ___$1 = canvas.setAttribute("height",img_height);
var ___$2 = ctx.drawImage(img,(0),(0),img_width,img_height);
var img_data = ctx.getImageData((0),(0),img_width,img_height).data;
var x1 = nextjournal.clerk.trim_image.scan_x(true,img_width,img_height,img_data);
var y1 = nextjournal.clerk.trim_image.scan_y(true,img_width,img_height,img_data);
var x2 = nextjournal.clerk.trim_image.scan_x(false,img_width,img_height,img_data);
var y2 = nextjournal.clerk.trim_image.scan_y(false,img_width,img_height,img_data);
var dx = ((x2 - x1) + (1));
var dy = ((y2 - y1) + (1));
var trimmed_data = ctx.getImageData(x1,y1,dx,dy);
var ___$3 = canvas.setAttribute("width",(dx + (padding * (2))));
var ___$4 = canvas.setAttribute("height",(dy + (padding * (2))));
var ___$5 = ctx.clearRect((0),(0),(dx + padding),(dy + padding));
var ___$6 = (ctx.fillStyle = "white");
var ___$7 = ctx.fillRect((0),(0),canvas.width,canvas.height);
var ___$8 = ctx.putImageData(trimmed_data,padding,padding);
var result_img = document.createElement("img");
result_img.setAttribute("src",canvas.toDataURL("image/png"));

return result_img;
}));

(nextjournal.clerk.trim_image.trim_image.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.trim_image.append_trimmed_image = (function nextjournal$clerk$trim_image$append_trimmed_image(base64,id){
var img = document.createElement("img");
img.addEventListener("load",(function (event){
var trimmed_img = nextjournal.clerk.trim_image.trim_image.cljs$core$IFn$_invoke$arity$2(event.target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null));
trimmed_img.setAttribute("id",id);

return document.body.appendChild(trimmed_img);
}));

return img.setAttribute("src",base64);
});
goog.exportSymbol('nextjournal.clerk.trim_image.append_trimmed_image', nextjournal.clerk.trim_image.append_trimmed_image);

//# sourceMappingURL=nextjournal.clerk.trim_image.js.map
