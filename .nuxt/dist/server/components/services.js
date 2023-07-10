exports.ids = [8];
exports.modules = {

/***/ 36:
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_8d290032_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_8d290032_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_8d290032_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_8d290032_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_8d290032_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
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

/***/ 55:
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

/***/ })

};;
//# sourceMappingURL=services.js.map