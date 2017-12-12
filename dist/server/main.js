module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue-svgicon");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios_cache_adapter__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios_cache_adapter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios_cache_adapter__);


var api = Object(__WEBPACK_IMPORTED_MODULE_0_axios_cache_adapter__["setup"])({
    cache: {
        maxAge: 15 * 60 * 1000
    }
});

var baseURL;
if (process.env.NODE_ENV === 'production') {
    baseURL = 'https://timcool-me-api.herokuapp.com';
} else {
    baseURL = 'http://local.timcool.dev:3000';
}

api.defaults.baseURL = baseURL;

var appService = {
    getPosts: function getPosts(categoryId) {
        return new Promise(function (resolve, reject) {
            api.get('/blog/category/' + categoryId).then(function (response) {
                // Do something awesome with response.data \o/
                console.log('Request response:', response);
                // Interacting with the store, see `localForage` API.
                api.cache.length().then(function (length) {
                    console.log('Cache store length:', length);
                });
                resolve(response.data);
            }).catch(function (response) {
                reject(response.status);
            });
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (appService);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_social_links_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0c717b76_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_social_links_vue__ = __webpack_require__(30);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(21),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "e9547e0e"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_social_links_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0c717b76_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_social_links_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-media");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_post_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07901c73_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_post_vue__ = __webpack_require__(42);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(40),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07901c73"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "ae41949c"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_post_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07901c73_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_post_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["default"] = (function (context) {
    __WEBPACK_IMPORTED_MODULE_0__app__["b" /* router */].push(context.url);
    return Promise.all(__WEBPACK_IMPORTED_MODULE_0__app__["b" /* router */].getMatchedComponents().map(function (component) {
        if (component.asyncData) {
            return component.asyncData(__WEBPACK_IMPORTED_MODULE_0__app__["c" /* store */], __WEBPACK_IMPORTED_MODULE_0__app__["b" /* router */].currentRoute);
        }
    })).then(function () {
        context.initialState = __WEBPACK_IMPORTED_MODULE_0__app__["c" /* store */].state;
        return __WEBPACK_IMPORTED_MODULE_0__app__["a" /* app */];
    });
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuex_index_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_layout_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_svgicon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_svgicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_svgicon__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__router_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__vuex_index_js__["a"]; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vue_svgicon___default.a);

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(_extends({
    router: __WEBPACK_IMPORTED_MODULE_3__router_js__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_2__theme_layout_vue__["a" /* default */], {
    store: __WEBPACK_IMPORTED_MODULE_1__vuex_index_js__["a" /* default */]
}));



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts_js__ = __webpack_require__(12);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

var state = {
    isAuthenticated: false
};

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
    modules: {
        postsModule: __WEBPACK_IMPORTED_MODULE_3__posts_js__["a" /* default */]
    },
    state: state,
    getters: {
        isAuthenticated: function isAuthenticated(state) {
            return state.isAuthenticated;
        }
    },
    actions: {
        logout: function logout(context) {
            context.commit('logout');
        },
        login: function login(context, credentials) {
            return new Promise(function (resolve) {
                __WEBPACK_IMPORTED_MODULE_2__app_service_js__["a" /* default */].login(credentials).then(function (data) {
                    context.commit('login', data);
                    resolve();
                }).catch(function () {
                    return window.alert('Could not login!');
                });
            });
        }
    },
    mutations: {
        logout: function logout(state) {
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('token', null);
                window.localStorage.setItem('tokenExpiration', null);
            }
            state.isAuthenticated = false;
        },
        login: function login(state, data) {
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('tokenExpiration', data.expiration);
            }
            state.isAuthenticated = true;
        }
    }
});

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function (event) {
        var expiration = window.localStorage.getItem('tokenExpiration');
        var unixTimestamp = new Date().getTime() / 1000;
        if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
            store.state.isAuthenticated = true;
        }
    });
}

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("axios-cache-adapter");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service_js__ = __webpack_require__(4);


var defaultState = {
    posts: [],
    categoryId: 0
};

var inBrowser = typeof window !== 'undefined';
var state = defaultState;
if (inBrowser) {
    var initialState = window.__INITIAL_STATE__;
    state = initialState ? initialState.postsModule : defaultState;
}

var getters = {
    posts: function posts(state) {
        return state.posts;
    }
};

var actions = {
    updateCategory: function updateCategory(context, categoryId) {
        return __WEBPACK_IMPORTED_MODULE_0__app_service_js__["a" /* default */].getPosts(categoryId).then(function (data) {
            context.commit('updateCategory', { categoryId: categoryId, posts: data });
        });
    }
};

var mutations = {
    updateCategory: function updateCategory(state, data) {
        state.categoryId = data.categoryId;
        state.posts = data.posts;
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_layout_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b77a8566_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_layout_vue__ = __webpack_require__(35);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(14),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "3e8ee688"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_layout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b77a8566_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_layout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_app_header_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_footer_vue__ = __webpack_require__(32);
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        'app-header': __WEBPACK_IMPORTED_MODULE_0__header_app_header_vue__["a" /* default */],
        'app-footer': __WEBPACK_IMPORTED_MODULE_1__app_footer_vue__["a" /* default */]
    }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_header_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c4d5ab6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_header_vue__ = __webpack_require__(31);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "63e18d4e"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c4d5ab6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_nav_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__social_links_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_media__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_media__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        'main-nav': __WEBPACK_IMPORTED_MODULE_0__main_nav_vue__["a" /* default */],
        'social-links': __WEBPACK_IMPORTED_MODULE_1__social_links_vue__["a" /* default */],
        Media: __WEBPACK_IMPORTED_MODULE_2_vue_media___default.a
    },
    data: function data() {
        return {
            scrollDown: false,
            resizeWidth: 0
        };
    },
    computed: {
        styles: function styles() {
            var isVisible = this.scrollDown ? 'flex' : 'none';
            var styles = {
                'display': isVisible
            };
            if (this.scrollDown) {
                var leftPos = this.getMenuLeftPosition();
                var width = this.getMenuWidth();
                var resizeWidth = this.resizeWidth;
                styles['left'] = leftPos + 'px';
                if (resizeWidth < 1158) {
                    styles['width'] = '100%';
                } else {
                    styles['width'] = width + 'px';
                }
                styles['animation'] = 'pushDown 0.5s ease-out';
            }
            return styles;
        },
        staticStyles: function staticStyles() {
            var styles = {};
            if (this.scrollDown) {
                styles['transition'] = '0.5s';
                styles['opacity'] = '0';
            }
            return styles;
        }
    },
    methods: {
        handleScrollEvent: function handleScrollEvent(event) {
            var menuHeight = 2;
            if (window.scrollY >= menuHeight) {
                this.$data.scrollDown = true;
            } else {
                this.$data.scrollDown = false;
            }
        },
        getMenuLeftPosition: function getMenuLeftPosition() {
            var staticMenu = this.$refs.staticmenu;
            return staticMenu.offsetLeft;
        },
        getMenuWidth: function getMenuWidth() {
            var staticMenu = this.$refs.staticmenu;
            return staticMenu.offsetWidth;
        },
        updateNavigationMenus: function updateNavigationMenus() {
            this.$data.resizeWidth = window.document.body.clientWidth;
        }
    },
    created: function created() {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', this.handleScrollEvent);
            window.addEventListener('resize', this.updateNavigationMenus);
        }
    },
    destroyed: function destroyed() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', this.handleScrollEvent);
            window.removeEventListener('resize', this.updateNavigationMenus);
        }
    }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fffb7e0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_nav_vue__ = __webpack_require__(20);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(19),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "6ea023af"
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fffb7e0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_nav_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"nav-wrapper site-nav level-left"},[_vm._ssrNode("<li class=\"skew-20\">","</li>",[_c('router-link',{staticClass:"navbar-item level-item",attrs:{"to":"/about"}},[_vm._v("About")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"skew-20\">","</li>",[_c('router-link',{staticClass:"navbar-item level-item",attrs:{"to":"/portfolio"}},[_vm._v("Portfolio")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"skew-20\">","</li>",[_c('router-link',{staticClass:"navbar-item level-item",attrs:{"to":"/blog"}},[_vm._v("Blog")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"skew-20\">","</li>",[_c('router-link',{staticClass:"navbar-item level-item",attrs:{"to":"/friends"}},[_vm._v("Friends")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"skew-20\">","</li>",[_c('router-link',{staticClass:"navbar-item level-item",attrs:{"to":"/stuff"}},[_vm._v("Stuff")])],1)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__icons__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(1);
icon.register({
  'facebook': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>'
  }
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(1);
icon.register({
  'github': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>'
  }
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(1);
icon.register({
  'instagram': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>'
  }
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(1);
icon.register({
  'linkedin': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
  }
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(1);
icon.register({
  'stackoverflow': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"/>'
  }
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(1);
icon.register({
  'twitter': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>'
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"nav-wrapper social-links-wrapper"},[_vm._ssrNode("<li class=\"level-item\">","</li>",[_vm._ssrNode("<a href=\"//www.facebook.com/timcool\" target=\"_blank\" alt=\"facebook\">","</a>",[_c('svgicon',{staticClass:"icon-large clickable facebook-color",attrs:{"icon":"facebook"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"level-item\">","</li>",[_vm._ssrNode("<a href=\"//twitter.com/timothymcool\" target=\"_blank\" alt=\"twitter\">","</a>",[_c('svgicon',{staticClass:"icon-large clickable twitter-color",attrs:{"icon":"twitter"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"level-item\">","</li>",[_vm._ssrNode("<a href=\"//www.linkedin.com/in/tim-cool-1898111b\" target=\"_blank\" alt=\"linkedin\">","</a>",[_c('svgicon',{staticClass:"icon-large clickable linkedin-color",attrs:{"icon":"linkedin"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"level-item\">","</li>",[_vm._ssrNode("<a href=\"//stackoverflow.com/users/1347616/tcool\" target=\"_blank\" alt=\"stackoverflow\">","</a>",[_c('svgicon',{staticClass:"icon-large clickable stackoverflow-color",attrs:{"icon":"stackoverflow"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"level-item\">","</li>",[_vm._ssrNode("<a href=\"//github.com/tcool86\" target=\"_blank\" alt=\"github\">","</a>",[_c('svgicon',{staticClass:"icon-large clickable github-color",attrs:{"icon":"github"}})],1)])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"nav-main"}},[_vm._ssrNode("<nav class=\"level container\""+(_vm._ssrStyle(null,_vm.staticStyles, null))+">","</nav>",[_c('main-nav'),_vm._ssrNode(" "),_c('media',{attrs:{"query":{minWidth: 1158}}},[_c('social-links',{staticClass:"level-right"})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<nav class=\"level container top-layer\""+(_vm._ssrStyle(null,_vm.styles, null))+">","</nav>",[_c('main-nav'),_vm._ssrNode(" "),_c('media',{attrs:{"query":{minWidth: 1158}}},[_c('social-links',{staticClass:"level-right"})],1)],2)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_footer_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e2bcdf1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_footer_vue__ = __webpack_require__(34);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "71cdc64e"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e2bcdf1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_social_links_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_media__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_media__);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        'social-links': __WEBPACK_IMPORTED_MODULE_0__header_social_links_vue__["a" /* default */],
        Media: __WEBPACK_IMPORTED_MODULE_1_vue_media___default.a
    }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_c('media',{attrs:{"query":{maxWidth: 1158}}},[_c('social-links',{staticClass:"level is-mobile"})],1),_vm._ssrNode(" <div class=\"container\"><div class=\"content has-text-centered\">\n            Copyright © 2017 Timothy Cool \n        </div></div>")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('app-header'),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"main-section\">","</section>",[_vm._ssrNode("<div class=\"container-content\">","</div>",[_c('router-view')],1)]),_vm._ssrNode(" "),_c('app-footer')],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_category_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_blog_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_about_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_portfolio_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_not_found_vue__ = __webpack_require__(54);








// const category = () => System.import('./theme/category.vue')
// const login = () => System.import('./theme/login.vue')
// const notFound = () => System.import('./theme/not-found.vue')

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
    mode: 'history',
    linkActiveClass: 'is-active',
    scrollBehavior: function scrollBehavior(to, from, savedPosition) {
        return { y: 0 };
    },
    routes: [{
        path: '/',
        redirect: '/blog'
    }, {
        path: '/category/:id',
        name: 'category',
        component: __WEBPACK_IMPORTED_MODULE_2__theme_category_vue__["a" /* default */]
    }, {
        path: '/about',
        component: __WEBPACK_IMPORTED_MODULE_4__theme_about_vue__["a" /* default */]
    }, {
        path: '/friend',
        component: __WEBPACK_IMPORTED_MODULE_3__theme_blog_vue__["a" /* default */]
    }, {
        path: '/portfolio',
        component: __WEBPACK_IMPORTED_MODULE_5__theme_portfolio_vue__["a" /* default */]
    }, {
        path: '/blog',
        component: __WEBPACK_IMPORTED_MODULE_3__theme_blog_vue__["a" /* default */]
    }, {
        path: '*',
        component: __WEBPACK_IMPORTED_MODULE_6__theme_not_found_vue__["a" /* default */]
    }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_category_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60990b06_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_category_vue__ = __webpack_require__(43);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "7cb22e10"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_category_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60990b06_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_category_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//




var fetchInitialData = function fetchInitialData(store, route) {
    var categoryId = 2;
    if (route.params.id === 'apps') {
        categoryId = 2;
    }
    if (route.params.id === 'vr') {
        categoryId = 6;
    }
    return store.dispatch('postsModule/updateCategory', categoryId);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    asyncData: function asyncData(store, route) {
        return fetchInitialData(store, route);
    },

    components: {
        'app-post': __WEBPACK_IMPORTED_MODULE_0__post_vue__["a" /* default */]
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])('postsModule', ['posts'])),
    methods: {
        loadPosts: function loadPosts() {
            fetchInitialData(this.$store, this.$route);
        }
    },
    watch: {
        '$route': function $route(to, from) {
            this.loadPosts();
        }
    },
    created: function created() {
        this.loadPosts();
    }
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['link']
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_vm._ssrNode("<div class=\"card-content\" data-v-07901c73>","</div>",[_vm._t("title"),_vm._ssrNode(" "),_vm._t("content")],2),_vm._ssrNode(" <footer data-v-07901c73><a"+(_vm._ssrAttr("href",_vm.link))+" target=\"_blank\" class=\"card-footer-item\" data-v-07901c73>Read More</a></footer>")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns"},_vm._l((_vm.posts),function(post,title){return _vm._ssrNode("<div class=\"column is-one-third\">","</div>",[_c('app-post',{attrs:{"link":post.link}},[_c('h3',{attrs:{"slot":"title"},domProps:{"innerHTML":_vm._s(post.title.rendered)},slot:"title"}),_vm._v(" "),_c('span',{attrs:{"slot":"content"},domProps:{"innerHTML":_vm._s(post.content.rendered)},slot:"content"})])],1)}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_blog_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cd2f281_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_blog_vue__ = __webpack_require__(47);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(45),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "54517bb4"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_blog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cd2f281_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_blog_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var fetchInitialData = function fetchInitialData(store, route) {
    var categoryId = 6;
    if (route.params.id === 'apps') {
        categoryId = 2;
    }
    if (route.params.id === 'vr') {
        categoryId = 6;
    }
    return store.dispatch('postsModule/updateCategory', categoryId);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    asyncData: function asyncData(store, route) {
        return fetchInitialData(store, route);
    },

    components: {
        'app-post': __WEBPACK_IMPORTED_MODULE_0__post_vue__["a" /* default */]
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])('postsModule', ['posts'])),
    methods: {
        loadPosts: function loadPosts() {
            fetchInitialData(this.$store, this.$route);
        }
    },
    watch: {
        '$route': function $route(to, from) {
            this.loadPosts();
        }
    },
    created: function created() {
        this.loadPosts();
    }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-posts container is-fluid"},[_vm._ssrNode("<h1 class=\"content-title\">Blog</h1> "),_vm._l((_vm.posts),function(post,title){return _vm._ssrNode("<div class=\"list-group-item\">","</div>",[_vm._ssrNode("<article class=\"post-wrapper media\">","</article>",[_vm._ssrNode("<section class=\"image-wrapper media-left\"><div class=\"post-image\"></div></section> "),_vm._ssrNode("<section class=\"content-wrapper media-content\">","</section>",[_vm._ssrNode("<div class=\"title-wrapper skew-20\"><h2 class=\"blog-title\">"+(_vm._s(post.title.rendered))+"</h2></div> "),_vm._ssrNode("<div class=\"topics\">","</div>",[_c('svgicon',{staticClass:"icon-large clickable stackoverflow-color",attrs:{"icon":"stackoverflow"}}),_vm._ssrNode(" "),_c('svgicon',{staticClass:"icon-large clickable stackoverflow-color",attrs:{"icon":"stackoverflow"}}),_vm._ssrNode(" "),_c('svgicon',{staticClass:"icon-large clickable stackoverflow-color",attrs:{"icon":"stackoverflow"}}),_vm._ssrNode(" "),_c('svgicon',{staticClass:"icon-large clickable stackoverflow-color",attrs:{"icon":"stackoverflow"}}),_vm._ssrNode(" "),_c('svgicon',{staticClass:"icon-large clickable stackoverflow-color",attrs:{"icon":"stackoverflow"}}),_vm._ssrNode(" "),_c('svgicon',{staticClass:"icon-large clickable stackoverflow-color",attrs:{"icon":"stackoverflow"}}),_vm._ssrNode(" "),_c('svgicon',{staticClass:"icon-large clickable stackoverflow-color",attrs:{"icon":"stackoverflow"}}),_vm._ssrNode(" "),_c('svgicon',{staticClass:"icon-large clickable stackoverflow-color",attrs:{"icon":"stackoverflow"}})],2),_vm._ssrNode(" <div class=\"text-wrapper\"><span>"+(_vm._s(post.content.rendered))+"</span></div>")],2)],2),_vm._ssrNode(" <br>")],2)})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f2232a1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_about_vue__ = __webpack_require__(50);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(49),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "a329472a"
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f2232a1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_about_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-container"},[_vm._ssrNode("<h1 class=\"content-title\">About</h1> <section id=\"about-section\" class=\"content-section columns\"><div class=\"column is-narrow\"><figure class=\"avatar-wrapper image is-256x256\"><img src=\"//res.cloudinary.com/hnairgdu6/image/upload/v1512179156/about-image_cis9vz.jpg\"></figure></div> <div class=\"column\"><h2>Timothy Michael Ignatius Cool</h2> <div class=\"text-wrapper\"><p>\n                    This is some text about me. Let's just put some lipsum here for now...Suspendisse euismod elementum interdum. Donec dignissim luctus purus, mollis facilisis tellus lacinia vel. Mauris a vestibulum sem. Nam et commodo orci. Nunc ut purus tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed venenatis dui id neque aliquet mattis. Nam aliquet tristique ante ac scelerisque. Praesent eget venenatis quam.\n                </p></div></div></section> <section id=\"about-photos\"></section> <section id=\"about-skill-stats\"></section>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43cff8ee_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_portfolio_vue__ = __webpack_require__(53);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(52),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "421bd4b4"
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43cff8ee_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_portfolio_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio-container"},[_vm._ssrNode("<h1 class=\"content-title\">Portfolio</h1> <div class=\"protfolio-section-wrapper columns\"><div class=\"column is-half is-offset-one-quarter\"><section id=\"portfolio-section\" class=\"columns level\"><div class=\"column level-item has-text-centered\"><h2 class=\"button\">Business</h2></div> <div class=\"column level-item has-text-centered\"><h2 class=\"button\">Projects</h2></div></section></div></div> <section id=\"project-section\"><div class=\"project-container\"><article class=\"project-article\"></article></div></section>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f4f4226_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_not_found_vue__ = __webpack_require__(55);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "4f5c5c66"
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f4f4226_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_not_found_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',[_vm._ssrNode("Oops, page not found!")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map