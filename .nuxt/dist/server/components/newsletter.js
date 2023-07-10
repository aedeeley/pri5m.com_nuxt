exports.ids = [5];
exports.modules = {

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4e2ddb73", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_21b2a3c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_21b2a3c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_21b2a3c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_21b2a3c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_21b2a3c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#mc-embedded-subscribe-form .w-full{background:rgba(0,0,0,.1);border:1px solid hsla(0,0%,100%,.04);border-radius:6px}#mc-embedded-subscribe-form input{background:rgba(0,0,0,.6);color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Newsletter.vue?vue&type=template&id=21b2a3c6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "mc_embed_shell"
    }
  }, [_vm._ssrNode("<div id=\"mc_embed_signup\"><form action=\"https://pri5m.us21.list-manage.com/subscribe/post?u=178d0619272ec350f61902556&id=fc2a35afa7&f_id=004959e1f0\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" target=\"_self\" class=\"validate\"><div class=\"w-full p-10 rounded-lg mt-5\"><h3 class=\"mb-2 text-xl font-bold text-slate-200\">\n          Subscribe to the newsletter\n        </h3> <span class=\"text-slate-500\">Get the latest &amp; greatest news about tech, design and\n          development.</span> <input type=\"email\" name=\"EMAIL\" placeholder=\"join@newsletter.com\" id=\"mce-EMAIL\" value class=\"required email mt-3 w-full p-2\"> <div id=\"mce-responses\" class=\"clear foot\"><div id=\"mce-error-response\" class=\"response\" style=\"display: none;\"></div> <div id=\"mce-success-response\" class=\"response\" style=\"display: none;\"></div></div> <div aria-hidden=\"true\" style=\"position: absolute; left: -5000px;\">\n          /* real people should not fill this in and expect good things - do\n          not remove this or risk form bot signups */\n          <input type=\"text\" name=\"b_178d0619272ec350f61902556_fc2a35afa7\" tabindex=\"-1\" value></div> <div class=\"optionalParent\"><div class=\"clear foot\"><input type=\"submit\" name=\"subscribe\" id=\"mc-embedded-subscribe\" value=\"Subscribe\" class=\"hidden button\"> <p class=\"brandingLogo\" style=\"margin: 0px auto;\"><a href=\"http://eepurl.com/ivd5Kk\" title=\"Mailchimp - email marketing made easy and fun\"><img src=\"https://eep.io/mc-cdn-images/template_images/branding_logo_text_light_dtp.svg\" alt=\"referral badge\" class=\"hidden\"></a></p></div></div></div></form></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Newsletter.vue?vue&type=template&id=21b2a3c6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Newsletter.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "22811626"
  
)

/* harmony default export */ var Newsletter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=newsletter.js.map