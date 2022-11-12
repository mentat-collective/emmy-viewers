goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.i18n.LocaleFeature");
  goog.module.declareLegacyNamespace();
  exports.ECMASCRIPT_INTL_OPT_OUT = goog.define("goog.i18n.ECMASCRIPT_INTL_OPT_OUT", false);
  exports.ECMASCRIPT_COMMON_LOCALES_2019 = goog.LOCALE == "am" || goog.LOCALE == "ar" || goog.LOCALE == "bg" || goog.LOCALE == "bn" || goog.LOCALE == "ca" || goog.LOCALE == "cs" || goog.LOCALE == "da" || goog.LOCALE == "de" || goog.LOCALE == "el" || goog.LOCALE == "en" || goog.LOCALE == "es" || goog.LOCALE == "et" || goog.LOCALE == "fa" || goog.LOCALE == "fi" || goog.LOCALE == "fil" || goog.LOCALE == "fr" || goog.LOCALE == "gu" || goog.LOCALE == "he" || goog.LOCALE == "hi" || goog.LOCALE == "hr" || 
  goog.LOCALE == "hu" || goog.LOCALE == "id" || goog.LOCALE == "it" || goog.LOCALE == "ja" || goog.LOCALE == "kn" || goog.LOCALE == "ko" || goog.LOCALE == "lt" || goog.LOCALE == "lv" || goog.LOCALE == "ml" || goog.LOCALE == "mr" || goog.LOCALE == "ms" || goog.LOCALE == "nl" || goog.LOCALE == "pl" || goog.LOCALE == "ro" || goog.LOCALE == "ru" || goog.LOCALE == "sk" || goog.LOCALE == "sl" || goog.LOCALE == "sr" || goog.LOCALE == "sv" || goog.LOCALE == "sw" || goog.LOCALE == "ta" || goog.LOCALE == "te" || 
  goog.LOCALE == "th" || goog.LOCALE == "tr" || goog.LOCALE == "uk" || goog.LOCALE == "vi" || goog.LOCALE == "en_GB" || goog.LOCALE == "en-GB" || goog.LOCALE == "es_419" || goog.LOCALE == "es-419" || goog.LOCALE == "pt_BR" || goog.LOCALE == "pt-BR" || goog.LOCALE == "pt_PT" || goog.LOCALE == "pt-PT" || goog.LOCALE == "zh_CN" || goog.LOCALE == "zh-CN" || goog.LOCALE == "zh_TW" || goog.LOCALE == "zh-TW";
  exports.USE_ECMASCRIPT_I18N = goog.FEATURESET_YEAR >= 2019 && exports.ECMASCRIPT_COMMON_LOCALES_2019 && !exports.ECMASCRIPT_INTL_OPT_OUT;
  exports.USE_ECMASCRIPT_I18N_RDTF = goog.FEATURESET_YEAR >= 2021 && exports.ECMASCRIPT_COMMON_LOCALES_2019;
  exports.USE_ECMASCRIPT_I18N_NUMFORMAT = goog.FEATURESET_YEAR >= 2021 && exports.ECMASCRIPT_COMMON_LOCALES_2019 && !exports.ECMASCRIPT_INTL_OPT_OUT;
  exports.USE_ECMASCRIPT_I18N_PLURALRULES = !exports.ECMASCRIPT_INTL_OPT_OUT && goog.FEATURESET_YEAR >= 2021 && exports.ECMASCRIPT_COMMON_LOCALES_2019;
  exports.USE_ECMASCRIPT_I18N_DATETIMEF = exports.USE_ECMASCRIPT_I18N && !exports.ECMASCRIPT_INTL_OPT_OUT;
  return exports;
});

//# sourceMappingURL=goog.i18n.localefeature.js.map
