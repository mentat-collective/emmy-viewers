goog.provide('lambdaisland.uri.normalize');
/**
 * Which characters should be percent-encoded depends on which section
 *  of the URI is being normalized. This map contains regexes that for each
 *  case match the characters that need encoding.
 */
lambdaisland.uri.normalize.character_classes = (function (){var alpha = "a-zA-Z";
var digit = "0-9";
var gen_delims = ":\\/\\?#\\[\\]@";
var sub_delims = "!\\$&'\\(\\)\\*\\+,;=";
var reserved = [gen_delims,sub_delims].join('');
var unreserved = [alpha,digit,"\\-\\._~"].join('');
var pchar = [unreserved,sub_delims,":@"].join('');
var scheme = [alpha,digit,"\\-\\+\\."].join('');
var host = [unreserved,sub_delims,"\\[:\\]"].join('');
var authority = pchar;
var path = [pchar,"\\/"].join('');
var query = [unreserved,":@\\/\\?"].join('');
var fragment = [pchar,"\\/\\?"].join('');
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"authority","authority",-551669367),new cljs.core.Keyword(null,"pchar","pchar",-247796372),new cljs.core.Keyword(null,"unreserved","unreserved",354716524),new cljs.core.Keyword(null,"sub-delims","sub-delims",1571683437),new cljs.core.Keyword(null,"gen-delims","gen-delims",-1487021297),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"reserved","reserved",-775228297),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"digit","digit",1612650493)],[cljs.core.re_pattern(["[^",path,"]"].join('')),cljs.core.re_pattern(["[^",fragment,"]"].join('')),cljs.core.re_pattern(["[^",authority,"]"].join('')),cljs.core.re_pattern(["[^",pchar,"]"].join('')),cljs.core.re_pattern(["[^",unreserved,"]"].join('')),cljs.core.re_pattern(["[^",sub_delims,"]"].join('')),cljs.core.re_pattern(["[^",gen_delims,"]"].join('')),cljs.core.re_pattern(["[^",host,"]"].join('')),cljs.core.re_pattern(["[^",reserved,"]"].join('')),cljs.core.re_pattern(["[^",alpha,"]"].join('')),cljs.core.re_pattern(["[^",query,"]"].join('')),cljs.core.re_pattern(["[^",scheme,"]"].join('')),cljs.core.re_pattern(["[^",digit,"]"].join(''))]);
})();
lambdaisland.uri.normalize.high_surrogate_QMARK_ = (function lambdaisland$uri$normalize$high_surrogate_QMARK_(char_code){
return ((((55296) <= char_code)) && ((char_code <= (56319))));
});
/**
 * Return a seq of the characters in a string, making sure not to split up
 *   UCS-2 (or is it UTF-16?) surrogate pairs. Because JavaScript. And Java.
 */
lambdaisland.uri.normalize.char_seq = (function lambdaisland$uri$normalize$char_seq(var_args){
var G__61618 = arguments.length;
switch (G__61618) {
case 1:
return lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$1 = (function (str){
return lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$2(str,(0));
}));

(lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$2 = (function (str,offset){
var offset__$1 = offset;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((offset__$1 >= lambdaisland.uri.platform.str_len(str))){
return res;
} else {
var code = lambdaisland.uri.platform.char_code_at(str,offset__$1);
var width = ((lambdaisland.uri.normalize.high_surrogate_QMARK_(code))?(2):(1));
var next_offset = (offset__$1 + width);
var cur_char = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(str,offset__$1,next_offset);
var G__61730 = next_offset;
var G__61731 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cur_char);
offset__$1 = G__61730;
res = G__61731;
continue;
}
break;
}
}));

(lambdaisland.uri.normalize.char_seq.cljs$lang$maxFixedArity = 2);

/**
 * Convert characters in their percent encoded form. e.g.
 * `(percent_encode "a") #_=> "%61"`. When given a second argument, then
 * only characters of the given character class are encoded,
 * see `character-class`.
 * 
 * Characters are encoded as UTF-8. To use a different encoding. re-bind
 * `*character-encoding*`
 */
lambdaisland.uri.normalize.percent_encode = (function lambdaisland$uri$normalize$percent_encode(var_args){
var G__61627 = arguments.length;
switch (G__61627) {
case 1:
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$1 = (function (component){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61621_SHARP_){
return ["%",lambdaisland.uri.platform.byte__GT_hex(p1__61621_SHARP_)].join('');
}),lambdaisland.uri.platform.string__GT_byte_seq(component)));
}));

(lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2 = (function (component,type){
var char_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.normalize.character_classes,type);
var encode_char = (function (p1__61622_SHARP_){
var G__61649 = p1__61622_SHARP_;
if(cljs.core.truth_(cljs.core.re_find(char_class,p1__61622_SHARP_))){
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$1(G__61649);
} else {
return G__61649;
}
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(encode_char,lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$1(component)));
}));

(lambdaisland.uri.normalize.percent_encode.cljs$lang$maxFixedArity = 2);

/**
 * The inverse of `percent-encode`, convert any %XX sequences in a string to
 * characters. Byte sequences are interpreted as UTF-8. To use a different
 * encoding. re-bind `*character-encoding*`
 */
lambdaisland.uri.normalize.percent_decode = (function lambdaisland$uri$normalize$percent_decode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/(%[0-9A-Fa-f]{2})+/,(function (p__61674){
var vec__61675 = p__61674;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61675,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61675,(1),null);
return lambdaisland.uri.platform.byte_seq__GT_string(cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.platform.hex__GT_byte,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),clojure.string.split.cljs$core$IFn$_invoke$arity$2(x,/%/))));
}));
} else {
return null;
}
});
lambdaisland.uri.normalize.normalize_path = (function lambdaisland$uri$normalize$normalize_path(path){
if((path == null)){
return null;
} else {
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.normalize.percent_decode(path),new cljs.core.Keyword(null,"path","path",-188191168));
}
});
lambdaisland.uri.normalize.normalize_fragment = (function lambdaisland$uri$normalize$normalize_fragment(fragment){
if((fragment == null)){
return null;
} else {
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.normalize.percent_decode(fragment),new cljs.core.Keyword(null,"fragment","fragment",826775688));
}
});
lambdaisland.uri.normalize.hex_code_point_QMARK_ = (function lambdaisland$uri$normalize$hex_code_point_QMARK_(cp){
return ((((((48) <= cp)) && ((cp <= (57))))) || (((((((65) <= cp)) && ((cp <= (70))))) || (((((97) <= cp)) && ((cp <= (102))))))));
});
/**
 * RFC3986 section 2.2
 * 
 *   The purpose of reserved characters is to provide a set of delimiting
 *   characters that are distinguishable from other data within a URI.
 *   URIs that differ in the replacement of a reserved character with its
 *   corresponding percent-encoded octet are not equivalent.  Percent-
 *   encoding a reserved character, or decoding a percent-encoded octet
 *   that corresponds to a reserved character, will change how the URI is
 *   interpreted by most applications.  Thus, characters in the reserved
 *   set are protected from normalization and are therefore safe to be
 *   used by scheme-specific and producer-specific algorithms for
 *   delimiting data subcomponents within a URI. 
 */
lambdaisland.uri.normalize.sub_delims = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["'",null,")",null,"=",null,"!",null,"*",null,"(",null,"&",null,";",null,",",null,"+",null,"$",null], null), null);
/**
 * Normalize the query section of a URI
 * 
 *   - sub-delimiters that are not percent encoded are left unencoded
 *   - sub-delimiters and other reserved characters are always percent encoded
 *   - non-reserved characters that are percent-encoded are decoded
 *   
 */
lambdaisland.uri.normalize.normalize_query = (function lambdaisland$uri$normalize$normalize_query(s){
if(cljs.core.truth_(s)){
var len = lambdaisland.uri.platform.str_len(s);
var i = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,len)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,res);
} else {
if((((i < (len - (2)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((37),lambdaisland.uri.platform.char_code_at(s,i))) && (((lambdaisland.uri.normalize.hex_code_point_QMARK_(lambdaisland.uri.platform.char_code_at(s,(i + (1))))) && (lambdaisland.uri.normalize.hex_code_point_QMARK_(lambdaisland.uri.platform.char_code_at(s,(i + (2))))))))))){
var G__61733 = (i + (3));
var G__61734 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.normalize.percent_decode(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,i,(i + (3)))),new cljs.core.Keyword(null,"query","query",-1288509510)));
i = G__61733;
res = G__61734;
continue;
} else {
if(cljs.core.contains_QMARK_(lambdaisland.uri.normalize.sub_delims,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,i,(i + (1))))){
var G__61735 = (i + (1));
var G__61736 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,i,(i + (1))));
i = G__61735;
res = G__61736;
continue;
} else {
var increment = ((lambdaisland.uri.normalize.high_surrogate_QMARK_(lambdaisland.uri.platform.char_code_at(s,i)))?(2):(1));
var G__61737 = (i + increment);
var G__61738 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,i,(i + increment)),new cljs.core.Keyword(null,"query","query",-1288509510)));
i = G__61737;
res = G__61738;
continue;

}
}
}
break;
}
} else {
return null;
}
});
/**
 * Normalize a lambdaisland.uri.URI. Currently normalizes (percent-encodes) the
 *   path, query, and fragment.
 */
lambdaisland.uri.normalize.normalize = (function lambdaisland$uri$normalize$normalize(uri){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(uri,new cljs.core.Keyword(null,"path","path",-188191168),lambdaisland.uri.normalize.normalize_path),new cljs.core.Keyword(null,"query","query",-1288509510),lambdaisland.uri.normalize.normalize_query),new cljs.core.Keyword(null,"fragment","fragment",826775688),lambdaisland.uri.normalize.normalize_fragment);
});

//# sourceMappingURL=lambdaisland.uri.normalize.js.map
