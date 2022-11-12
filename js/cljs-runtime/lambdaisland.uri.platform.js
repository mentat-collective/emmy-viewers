goog.provide('lambdaisland.uri.platform');
lambdaisland.uri.platform.string__GT_byte_seq = (function lambdaisland$uri$platform$string__GT_byte_seq(s){
return goog.crypt.stringToUtf8ByteArray(s);
});
lambdaisland.uri.platform.byte_seq__GT_string = (function lambdaisland$uri$platform$byte_seq__GT_string(arr){
return goog.crypt.utf8ByteArrayToString(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,arr));
});
lambdaisland.uri.platform.hex__GT_byte = (function lambdaisland$uri$platform$hex__GT_byte(hex){
return parseInt(hex,(16));
});
lambdaisland.uri.platform.hex_digit = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(15),(13),(6),(3),(12),(2),(11),(9),(5),(14),(10),(8)],["0","7","1","4","F","D","6","3","C","2","B","9","5","E","A","8"]);
lambdaisland.uri.platform.byte__GT_hex = (function lambdaisland$uri$platform$byte__GT_hex(byte$){
var byte$__$1 = ((255) & byte$);
var low_nibble = ((15) & byte$__$1);
var high_nibble = (byte$__$1 >> (4));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((lambdaisland.uri.platform.hex_digit.cljs$core$IFn$_invoke$arity$1 ? lambdaisland.uri.platform.hex_digit.cljs$core$IFn$_invoke$arity$1(high_nibble) : lambdaisland.uri.platform.hex_digit.call(null,high_nibble))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((lambdaisland.uri.platform.hex_digit.cljs$core$IFn$_invoke$arity$1 ? lambdaisland.uri.platform.hex_digit.cljs$core$IFn$_invoke$arity$1(low_nibble) : lambdaisland.uri.platform.hex_digit.call(null,low_nibble)))].join('');
});
lambdaisland.uri.platform.char_code_at = (function lambdaisland$uri$platform$char_code_at(str,pos){
return str.charCodeAt(pos);
});
lambdaisland.uri.platform.str_len = (function lambdaisland$uri$platform$str_len(s){
return s.length;
});

//# sourceMappingURL=lambdaisland.uri.platform.js.map
