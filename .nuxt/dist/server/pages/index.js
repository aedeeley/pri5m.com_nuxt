exports.ids = [14,1,2,3,4,5,6,8,9,10];
exports.modules = Array(21).concat([
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("699a6c18", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7f4531cc", content, true, context)
};

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=3745b299&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', [_c('TopBar'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container max-w-5xl mx-auto pl-10 pr-10\">", "</div>", [_vm._ssrNode("<div class=\"flex flex-row mt-8 text-base font-medium\">", "</div>", [_vm._ssrNode("<div class=\"basis-3/4 nav text-zinc-500\">", "</div>", [_c('NuxtLink', {
    staticClass: "pr-10 text-zinc-200 hover:text-zinc-100 ease-in duration-300 ease-in duration-300 text-4xl",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "float-left mt-2 pri5m-logo",
    attrs: {
      "src": __webpack_require__(29),
      "alt": "PRI5M logo"
    }
  })]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "pr-8 hover:text-zinc-100 duration-200",
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "pr-8 hover:text-zinc-100 duration-200",
    attrs: {
      "to": "/work"
    }
  }, [_vm._v("Our Work")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "pr-8 hover:text-zinc-100 duration-200",
    attrs: {
      "to": "/services"
    }
  }, [_vm._v("Our Services")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "pr-8 hover:text-zinc-100 duration-200",
    attrs: {
      "to": "/playground"
    }
  }, [_vm._v("Playground")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "pr-8 hover:text-zinc-100 duration-200",
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("Contact")])], 2), _vm._ssrNode(" <div class=\"basis-1/4 text-xl text-right mt-2\"><a href=\"#\" class=\"text-slate-200/75 hover:text-slate-200 duration-300\"><i class=\"fa-brands fa-github\"></i></a> <a href=\"#\" class=\"pl-3 text-pink-600/75 hover:text-pink-600 duration-300\"><i class=\"fa-brands fa-instagram\"></i></a> <a href=\"#\" class=\"pl-3 text-blue-600/75 hover:text-blue-600 duration-300\"><i class=\"fa-brands fa-facebook\"></i></a></div>")], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=3745b299&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
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
  "9282927e"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TopBar: __webpack_require__(28).default,Header: __webpack_require__(24).default})


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=054ba802&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', [_vm._ssrNode("<div class=\"container max-w-5xl mx-auto pl-10 pr-10\"><footer class=\"mt-10 flex pb-10\"><div class=\"basis-3/4 text-zinc-500 text-sm\">\n        © Copyright 2022 Alex Deeley. All rights reserved.\n      </div> <div class=\"basis-1/4 text-xl text-right align-top\"><a href=\"#\" class=\"text-slate-200/75 hover:text-slate-200 duration-300\"><i class=\"fa-brands fa-github\"></i></a> <a href=\"#\" class=\"pl-3 text-pink-600/75 hover:text-pink-600 duration-300\"><i class=\"fa-brands fa-instagram\"></i></a> <a href=\"#\" class=\"pl-3 text-blue-600/75 hover:text-blue-600 duration-300\"><i class=\"fa-brands fa-facebook\"></i></a></div></footer></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=054ba802&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}
function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d4e75a62"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(25).default})


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_0e5920ce_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_0e5920ce_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_0e5920ce_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_0e5920ce_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_0e5920ce_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".gradient-spectrum{background-image:linear-gradient(135deg,#0b6ec5,#5e49af,#f35815,#fed54a 100%)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBar.vue?vue&type=template&id=0e5920ce&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gradient-spectrum pt-1 pb-0 fixed top-0 z-50 w-screen"
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopBar.vue?vue&type=template&id=0e5920ce&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TopBar.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
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
  "04b28b9c"
  
)

/* harmony default export */ var TopBar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-emblem.88a8da8.png";

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_3745b299_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_3745b299_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_3745b299_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_3745b299_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_3745b299_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://api.fontshare.com/v2/css?f[]=general-sans@200,500,300,600,401,501,400,700&f[]=satoshi@900,700,500,300,501,401,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*{font-family:\"Satoshi\",sans-serif}h1,h1 a,h2,h2 a,h3,h3 a,h4,h4 a{font-family:\"General Sans\",sans-serif}h1,h2,h3{font-weight:700;text-transform:capitalize}body{background-color:#090b0c}header a.pr-10{vertical-align:middle}.pri5m-logo{height:auto;max-width:40px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_21b2a3c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_21b2a3c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_21b2a3c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_21b2a3c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_21b2a3c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 33 */
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
/* 34 */
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

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1f0ed19f", content, true, context)
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5e4ea8e4", content, true, context)
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7bd23a9a", content, true, context)
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_8d290032_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_8d290032_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_8d290032_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_8d290032_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_8d290032_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Flow+Circular&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#services .flex-row div{background:hsla(0,0%,100%,.02);transition:all .4s}#services .flex-row div:hover{background:hsla(0,0%,100%,.03)}#scrollwheel{display:flex;overflow-x:scroll;scrollbar-color:dark!important}#scrollwheel::-webkit-scrollbar{height:5px}#scrollwheel::-webkit-scrollbar-track{background:hsla(0,0%,100%,.01)}#scrollwheel::-webkit-scrollbar-thumb,#scrollwheel:hover::-webkit-scrollbar-track{background:hsla(0,0%,100%,.02)}#scrollwheel:hover::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.04)}#services p{font-family:\"Flow Circular\",cursive!important;font-size:10pt;line-height:1.6}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/salesforce.5c5feb3.svg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/stripe.afd06f2.svg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vans.c4e3e6c.svg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/adidas.d34eda5.svg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hulu.0f1bbcc.svg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cisco.1d77068.svg";

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trusted_vue_vue_type_style_index_0_id_f0c627c0_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trusted_vue_vue_type_style_index_0_id_f0c627c0_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trusted_vue_vue_type_style_index_0_id_f0c627c0_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trusted_vue_vue_type_style_index_0_id_f0c627c0_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trusted_vue_vue_type_style_index_0_id_f0c627c0_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#trusted i{transition:all .4s}#trusted img{height:auto;opacity:.5;transition:all .3s;width:90px}#trusted img:hover{opacity:.7}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home-aroma.5d6f4f5.jpg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home-cla.83cfd67.jpg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home-misty.a797070.jpg";

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudy_vue_vue_type_style_index_0_id_576cca80_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudy_vue_vue_type_style_index_0_id_576cca80_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudy_vue_vue_type_style_index_0_id_576cca80_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudy_vue_vue_type_style_index_0_id_576cca80_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudy_vue_vue_type_style_index_0_id_576cca80_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#case-study flex{max-height:300px;overflow:hidden}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hero.vue?vue&type=template&id=4c0f42fa&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    attrs: {
      "id": "hero"
    }
  }, [_vm._ssrNode("<div class=\"flex flex-row pt-20 pb-20\"><div class=\"text-zinc-200\"><h1 class=\"text-8xl font-semibold mb-1 leading-none\"><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-purple-600 to-orange-600\">PRISM</span>\n        forges\n        <span class=\"font-bold underline decoration-green-600 decoration-wavy decoration-4 underline-offset-8\">robust</span>\n        &amp;\n        <span class=\"font-bold underline decoration-violet-600 decoration-wavy decoration-4 underline-offset-8\">effective</span>\n        web experiences\n      </h1> <p class=\"mb-4\"></p> <p class=\"text-2xl font-light text-zinc-500 mt-10 mb-10\">\n        We've been obsessed with fast, compliant and accessible web &amp; mobile applications since 2001. <a href=\"/contact\" class=\"underline underline-offset-4 font-medium\">Let's talk</a> about a project you're excited about!\n      </p> <p class=\"mt-10 buttons\"><button href=\"/work\" class=\"px-5 py-3 font-semibold text-base bg-gradient-to-b from-purple-600/75 to-sky-600/75 hover:from-purple-600 hover:to-sky-600 text-white rounded-full shadow-sm mr-3 duration-500\">\n          View our work\n        </button> <button href=\"/playground\" class=\"px-5 py-3 font-semibold text-base bg-gradient-to-b from-zinc-900/75 to-zinc-800/75 hover:from-zinc-900 hover:to-zinc-800 text-white rounded-full shadow-sm duration-500\">\n          Visit our playground\n        </button></p></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Hero.vue?vue&type=template&id=4c0f42fa&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Hero.vue

var script = {}
function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5f817cae"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services.vue?vue&type=template&id=8d290032&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "mt-20",
    attrs: {
      "id": "services"
    }
  }, [_vm._ssrNode("<div class=\"w-3/4 mx-auto mb-10 text-center\"><p class=\"mb-2 clear-both\"><i class=\"fa-solid fa-atom text-5xl text-green-400\"></i></p> <p class=\"mb-1\"><span class=\"font-mono text-xs text-green-400\">Modern &amp; Functional</span></p> <h3 class=\"font-semibold text-3xl text-zinc-100\">\n      My extensive software repertoire\n    </h3></div> <div id=\"scrollwheel\" class=\"flex flex-row pt-5 pb-5 gap-x-8\"><div class=\"flex-none w-56 text-zinc-200 rounded-lg p-8\"><i class=\"fa-regular fa-lightbulb text-6xl text-purple-800 mb-5\"></i> <h3 class=\"text-xl font-semibold mb-1\">Marketing &amp; Advertising</h3> <p class=\"text-xs text-zinc-700 animate-pulse\">\n        faucibus mollis risus eget fringilla. Integer\n      </p></div> <div class=\"flex-none w-56 text-zinc-200 rounded-lg p-8\"><i class=\"fa-solid fa-fingerprint text-6xl text-red-800 mb-5\"></i> <h3 class=\"text-xl font-semibold mb-1\">Brand Identity Design</h3> <p class=\"text-xs text-zinc-700 animate-pulse\">\n        faucibus mollis risus eget fringilla. Integer\n      </p></div> <div class=\"flex-none w-56 text-zinc-200 rounded-lg p-8\"><i class=\"fa-solid fa-chart-simple text-6xl text-orange-600 mb-5\"></i> <h3 class=\"text-xl font-semibold mb-1\">SEO, SEM &amp; Analytics</h3> <p class=\"text-sm text-zinc-700 animate-pulse\">\n        conubia nostra, per inceptos himenaeos\n      </p></div> <div class=\"flex-none w-56 text-zinc-200 rounded-lg p-8\"><i class=\"fa-brands fa-react text-6xl text-sky-400 mb-5\"></i> <h3 class=\"text-xl font-semibold mb-1\">Modern App Development</h3> <p class=\"text-xs text-zinc-700 animate-pulse\">\n        Lorem ipsum dolor sit amet, consectetur\n      </p></div> <div class=\"flex-none w-56 text-zinc-200 rounded-lg p-8\"><i class=\"fa-brands fa-wordpress-simple text-6xl text-zinc-100 mb-5\"></i> <h3 class=\"text-xl font-semibold mb-1\">WordPress Development</h3> <p class=\"text-xs text-zinc-700 animate-pulse\">\n        Mauris eleifend molestie pretium Ut eleifend\n      </p></div> <div class=\"flex-none w-56 text-zinc-200 rounded-lg p-8\"><i class=\"fa-brands fa-shopify text-6xl text-lime-500 mb-5\"></i> <h3 class=\"text-xl font-semibold mb-1\">eCommerce Development</h3> <p class=\"text-sm text-zinc-700 animate-pulse\">\n        quis. Etiam dignissim scelerisque quam non\n      </p></div> <div class=\"flex-none w-56 text-zinc-200 rounded-lg p-8\"><i class=\"fa-brands fa-laravel text-6xl text-red-500 mb-5\"></i> <h3 class=\"text-xl font-semibold mb-1\">Laravel &amp; PHP Development</h3> <p class=\"text-xs text-zinc-700 animate-pulse\">\n        adipiscing elit. Nunc dui massa volutpat\n      </p></div> <div class=\"flex-none w-56 text-zinc-200 rounded-lg p-8\"><i class=\"fa-regular fa-paper-plane text-6xl text-zinc-100 mb-5\"></i> <h3 class=\"text-xl font-semibold mb-1\">Email Marketing &amp; PPC</h3> <p class=\"text-xs text-zinc-700 animate-pulse\">\n        . Donec accumsan velit et pellentesque volutpat.\n      </p></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Services.vue?vue&type=template&id=8d290032&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Services.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
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
  "405405dc"
  
)

/* harmony default export */ var Services = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Trusted.vue?vue&type=template&id=f0c627c0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    attrs: {
      "id": "trusted"
    }
  }, [_vm._ssrNode("<h4 class=\"text-sm text-zinc-500 text-center mt-10 tracking-widest\">\n    Trusted by\n  </h4> <br> <div class=\"flex flex-row mb-10 gap-x-5 text-zinc-500\"><div class=\"basis-1/6 text-5xl text-center\"><img" + _vm._ssrAttr("src", __webpack_require__(41)) + " alt=\"Salesforce\"></div> <div class=\"basis-1/6 text-5xl text-center\"><img" + _vm._ssrAttr("src", __webpack_require__(42)) + " alt=\"stripe\"></div> <div class=\"basis-1/6 text-5xl text-center\"><img" + _vm._ssrAttr("src", __webpack_require__(43)) + " alt=\"Vans\"></div> <div class=\"basis-1/6 text-5xl text-center\"><img" + _vm._ssrAttr("src", __webpack_require__(44)) + " alt=\"Adidas\"></div> <div class=\"basis-1/6 text-5xl text-center\"><img" + _vm._ssrAttr("src", __webpack_require__(45)) + " alt=\"Hulu\"></div> <div class=\"basis-1/6 text-5xl text-center\"><img" + _vm._ssrAttr("src", __webpack_require__(46)) + " alt=\"Cisco\"></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Trusted.vue?vue&type=template&id=f0c627c0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Trusted.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
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
  "353c4773"
  
)

/* harmony default export */ var Trusted = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudy.vue?vue&type=template&id=576cca80&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "mt-20 mb-20",
    attrs: {
      "id": "case-study"
    }
  }, [_vm._ssrNode("<div class=\"flex flex-row mb-5\"><div class=\"basis rounded-lg overflow-hidden relative\"><a href=\"#\"><img" + _vm._ssrAttr("src", __webpack_require__(49)) + " alt=\"Aroma Annapolis\" class=\"opacity-90 hover:opacity-100\"></a></div></div> <div class=\"flex flex-row\"><div class=\"basis w-fit rounded-lg overflow-hidden relative mr-5\"><a href=\"#\"><img" + _vm._ssrAttr("src", __webpack_require__(50)) + " alt=\"Clean Label Alliance\" class=\"opacity-90 hover:opacity-100\"></a></div> <div class=\"basis w-fit rounded-lg overflow-hidden relative\"><a href=\"#\"><img" + _vm._ssrAttr("src", __webpack_require__(51)) + " alt=\"Misty Robotics\" class=\"opacity-90 hover:opacity-100\"></a></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CaseStudy.vue?vue&type=template&id=576cca80&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CaseStudy.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
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
  "5e570e16"
  
)

/* harmony default export */ var CaseStudy = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Playground.vue?vue&type=template&id=5554470c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    attrs: {
      "id": "blog "
    }
  }, [_vm._ssrNode("<div class=\"flex flex-row pt-10 pb-10 text-zinc-200\"><div class=\"basis text-zinc-200 w-full\"><h1 class=\"text-4xl font-semibold mb-3\">From the <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-purple-600 to-orange-600\">Playground</span></h1> <p class=\"mb-8 text-zinc-500\">\n        Learn to build &amp; deploy modern web applications to help build a\n        faster, more efficient internet.\n      </p> <table class=\"table-auto w-full\"><tbody><tr class=\"border-b-2 border-b-gray-900\"><td class=\"pt-3 pb-3 text-zinc-600\">01</td> <td class=\"pt-3 pb-3 font-semibold\"><a href=\"# \" class=\"hover:underline\">Modern Javascript Frameworks Guide</a></td> <td class=\"pt-3 pb-3 text-zinc-600 text-right\">\n              Jan 2, 2022\n              <i class=\"fa-solid fa-circle-play text-zinc-300 text-sm ml-2\"></i></td></tr> <tr class=\"border-b-2 border-b-gray-900\"><td class=\"pt-3 pb-3 text-zinc-600\">02</td> <td class=\"pt-3 pb-3 font-semibold\"><a href=\"# \" class=\"hover:underline\">The Future of the Web as we know it</a></td> <td class=\"pt-3 pb-3 text-zinc-600 text-right\">\n              Dec 24, 2021\n              <i class=\"fa-solid fa-circle-play text-zinc-300 text-sm ml-2\"></i></td></tr> <tr class=\"border-b-2 border-b-gray-900\"><td class=\"pt-3 pb-3 text-zinc-600\">03</td> <td class=\"pt-3 pb-3 font-semibold\"><a href=\"# \" class=\"hover:underline\">React, Angular or Vue? Which is Right for You</a></td> <td class=\"pt-3 pb-3 text-zinc-600 text-right\">\n              Dec 15, 2021\n              <i class=\"fa-solid fa-circle-play text-zinc-300 text-sm ml-2\"></i></td></tr> <tr class=\"border-b-2 border-b-gray-900\"><td class=\"pt-3 pb-3 text-zinc-600\">04</td> <td class=\"pt-3 pb-3 font-semibold\"><a href=\"# \" class=\"hover:underline\">API Development for Beginners</a></td> <td class=\"pt-3 pb-3 text-zinc-600 text-right\">\n              Dec 7, 2021\n              <i class=\"fa-solid fa-circle-play text-zinc-300 text-sm ml-2\"></i></td></tr> <tr class=\"border-b-2 border-b-gray-900\"><td class=\"pt-3 pb-3 text-zinc-600\">05</td> <td class=\"pt-3 pb-3 font-semibold\"><a href=\"# \" class=\"hover:underline\">OS X, Windows or Linux for Developers</a></td> <td class=\"pt-3 pb-3 text-zinc-600 text-right\">\n              Nov 29, 2021\n              <i class=\"fa-solid fa-circle-play text-zinc-300 text-sm ml-2\"></i></td></tr></tbody></table></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Playground.vue?vue&type=template&id=5554470c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Playground.vue

var script = {}
function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0a494cef"
  
)

/* harmony default export */ var Playground = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=74961d3a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_c('Header'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container max-w-5xl mx-auto pl-10 pr-10\">", "</div>", [_c('Hero'), _vm._ssrNode(" "), _c('Services'), _vm._ssrNode(" "), _c('Trusted'), _vm._ssrNode(" <hr class=\"mt-20 mb-20 border-4 border-zinc-900\"> "), _c('CaseStudy'), _vm._ssrNode(" "), _c('Playground'), _vm._ssrNode(" "), _c('Newsletter')], 2), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=74961d3a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  mounted: function () {
    this.$nextTick(function () {
      const element = document.querySelector("#scrollwheel");
      element.addEventListener("wheel", event => {
        event.preventDefault();
        element.scrollBy({
          left: event.deltaY < 0 ? -60 : 60
        });
      });
      const scrollWheel = document.getElementById("scrollwheel");
      const flavoursScrollWidth = scrollWheel.scrollWidth;
      window.addEventListener("load", () => {
        self.setInterval(() => {
          if (scrollWheel.scrollLeft !== flavoursScrollWidth) {
            scrollWheel.scrollTo(scrollWheel.scrollLeft + 1, 0);
          }
        }, 40);
      });
    });
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "701cb0fc"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(24).default,Hero: __webpack_require__(54).default,Services: __webpack_require__(55).default,Trusted: __webpack_require__(56).default,CaseStudy: __webpack_require__(57).default,Playground: __webpack_require__(58).default,Newsletter: __webpack_require__(34).default,Footer: __webpack_require__(25).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map