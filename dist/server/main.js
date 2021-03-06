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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue-svgicon");

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue-media");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userAgent; });
var userAgent = {
    validateWindow: function validateWindow() {
        return typeof window !== 'undefined';
    },
    checkUserAgent: function checkUserAgent(check) {
        if (this.validateWindow()) {
            var _userAgent = window.navigator.userAgent;
            return _userAgent.lastIndexOf(check) !== -1;
        }
    },
    isMobile: function isMobile() {
        return this.checkUserAgent('Mobile');
    },
    isFireFox: function isFireFox() {
        return this.checkUserAgent('Firefox');
    },
    isChrome: function isChrome() {
        return this.checkUserAgent('Chrome');
    },
    canUseBackground: function canUseBackground() {
        if (this.validateWindow()) {
            if ((this.isChrome() || this.isFireFox()) && !this.isMobile()) {
                return true;
            }
            return false;
        }
    },
    mobileClassMixin: {
        methods: {
            mobileClassWrapper: function mobileClassWrapper(className) {
                if (userAgent.isMobile()) {
                    className += '--mobile';
                }
                return className;
            }
        }
    },
    mobileSize: 800,
    tabletSize: 1158
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(63);
__webpack_require__(64);
__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(70);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(73);
__webpack_require__(74);
__webpack_require__(75);
__webpack_require__(76);
__webpack_require__(77);
__webpack_require__(78);
__webpack_require__(79);
__webpack_require__(80);
__webpack_require__(81);
__webpack_require__(82);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventBus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

var EventBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios_cache_adapter__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios_cache_adapter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios_cache_adapter__);


var sixtyMinutes = 60 * 60 * 1000;

var api = Object(__WEBPACK_IMPORTED_MODULE_0_axios_cache_adapter__["setup"])({
    cache: {
        maxAge: sixtyMinutes
    }
});

var baseURL;
if (process.env.NODE_ENV === 'production') {
    baseURL = 'https://timcool-me-api.herokuapp.com';
} else {
    baseURL = 'http://local.timcool.test:3000';
}

api.defaults.baseURL = baseURL;

var appService = {
    getPosts: function getPosts(categoryId) {
        if (typeof categoryId === 'undefined') {
            return getAllPosts();
        } else {
            return getPostsWithCategory(categoryId);
        }
    },
    getProjects: function getProjects() {
        return new Promise(function (resolve, reject) {
            api.get('/projects').then(function (response) {
                resolve(response.data);
            }).catch(function (response) {
                reject(response.status);
            });
        });
    }
};

function getAllPosts() {
    return new Promise(function (resolve, reject) {
        api.get('/blog').then(function (response) {
            api.cache.length().then(function (length) {});
            resolve(response.data);
        }).catch(function (response) {
            reject(response.status);
        });
    });
}

function getPostsWithCategory(categoryId) {
    return new Promise(function (resolve, reject) {
        api.get('/blog/category/' + categoryId).then(function (response) {
            resolve(response.data);
        }).catch(function (response) {
            reject(response.status);
        });
    });
}

/* harmony default export */ __webpack_exports__["a"] = (appService);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_app_header_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_footer_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_message_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility_settings_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_project_project_details_project_detail_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_bus_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utility_user_agent_js__ = __webpack_require__(3);
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
    mixins: [__WEBPACK_IMPORTED_MODULE_6__utility_user_agent_js__["a" /* userAgent */].mobileClassMixin],
    data: function data() {
        return {
            'appBackdropClass': 'default-backdrop',
            'project': null,
            'deeplink': null
        };
    },
    components: {
        'app-header': __WEBPACK_IMPORTED_MODULE_0__header_app_header_vue__["a" /* default */],
        'app-footer': __WEBPACK_IMPORTED_MODULE_1__app_footer_vue__["a" /* default */],
        'message': __WEBPACK_IMPORTED_MODULE_2__utility_message_vue__["a" /* default */],
        'project-details': __WEBPACK_IMPORTED_MODULE_4__projects_project_project_details_project_detail_vue__["a" /* default */],
        'settings': __WEBPACK_IMPORTED_MODULE_3__utility_settings_vue__["a" /* default */]
    },
    methods: {
        setProjectDetail: function setProjectDetail(eventData) {
            this.project = eventData.project;
            this.deeplink = eventData.deeplink;
        }
    },
    mounted: function mounted() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_5__event_bus_js__["a" /* EventBus */].$on('showProjectDetail', function (project) {
            _this.setProjectDetail(project);
        });
        __WEBPACK_IMPORTED_MODULE_5__event_bus_js__["a" /* EventBus */].$on('hideProjectDetail', function (project) {
            _this.setProjectDetail({
                'project': null,
                'deeplink': null
            });
        });
        this.appBackdropClass = this.mobileClassWrapper(this.appBackdropClass);
    }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__social_links_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_media__ = __webpack_require__(2);
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





/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        'main-nav': __WEBPACK_IMPORTED_MODULE_0__navigation_vue__["a" /* default */],
        'social-links': __WEBPACK_IMPORTED_MODULE_1__social_links_vue__["a" /* default */],
        Media: __WEBPACK_IMPORTED_MODULE_2_vue_media___default.a
    },
    data: function data() {
        return {
            scrollDown: false,
            resizeWidth: 0,
            showMenu: true
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
            var menuHeight = 120;
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
            window.addEventListener('scroll', this.handleScrollEvent, { passive: true });
            window.addEventListener('resize', this.updateNavigationMenus, { passive: true });
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_media__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_media__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_user_agent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__icons__);
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





var menuClasses = ['navigation-menu', 'site-nav', 'backdrop-sky'];
var routerActiveClass = 'is-active';
var listItemActiveClass = 'active';

/* harmony default export */ __webpack_exports__["a"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_1__utility_user_agent_js__["a" /* userAgent */].mobileClassMixin],
    data: function data() {
        return {
            'showMenu': true,
            'menuClasses': menuClasses,
            'activeItem': 0
        };
    },
    methods: {
        mobileMenuTapped: function mobileMenuTapped(event) {
            this.showMenu = !this.showMenu;
            if (this.showMenu) {
                this.$refs.menuIcon.style.transform = 'translateX(0)';
                this.$refs.menuList.style.transform = 'translateX(0)';
            } else {
                this.$refs.menuIcon.style.transform = 'translateX(-50vw)';
                this.$refs.menuList.style.transform = 'translateX(-50vw)';
            }
        },
        setListItemActive: function setListItemActive() {
            var listItems = this.$refs.menuList.querySelectorAll('li');
            listItems.forEach(function (item) {
                var routerLink = item.firstElementChild;
                var linkClasses = routerLink.className.split(' ');
                if (linkClasses.includes(routerActiveClass)) {
                    item.className = listItemActiveClass;
                } else {
                    item.className = 'menu-item';
                }
            });
        },
        setListItemActiveClick: function setListItemActiveClick(event) {
            var listItem = event.target;
            if (listItem.nodeName !== 'A') {
                event.stopPropagation();
                return;
            }
            this.$refs.menuList.querySelectorAll('li').forEach(function (li) {
                li.className = 'menu-item';
            });
            listItem.parentElement.className = listItemActiveClass;
        }
    },
    components: {
        Media: __WEBPACK_IMPORTED_MODULE_0_vue_media___default.a
    },
    mounted: function mounted() {
        this.setListItemActive();
        this.$refs.menuIcon.style.transform = 'translateX(-50vw)';
        menuClasses.push(this.mobileClassWrapper('menu'));
    },

    watch: {
        $mq: function $mq(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue === 'desktop') {
                    this.$refs.menuIcon.style.transform = 'translateX(0)';
                    this.$refs.menuList.style.transform = 'translateX(0)';
                }
            }
        }
    }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_social_links_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52c8e4e2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_social_links_vue__ = __webpack_require__(85);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(84),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52c8e4e2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_social_links_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(5);
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_social_links_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_media__ = __webpack_require__(2);
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
/* 16 */
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
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        backdropChange: function backdropChange(change) {
            this.$refs.message.className = 'message is-info ' + 'message--' + change;
        },
        closeMessage: function closeMessage() {
            this.$refs.message.remove();
        }
    },
    mounted: function mounted() {
        this.$on('backdropChange', this.backdropChange);
    }
});

/***/ }),
/* 17 */
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


/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        bgCheckboxClick: function bgCheckboxClick() {
            this.$emit('updateBackground');
        }
    }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_detail_vue__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c103c1b8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_detail_vue__ = __webpack_require__(106);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(96),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c103c1b8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "5424e26f"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c103c1b8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_detail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_detail_title_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_meta_info_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_images_section_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_bus__ = __webpack_require__(7);
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







var closeableClasses = ['project-detail-container', 'close-detail'];

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        'project-detail-title': __WEBPACK_IMPORTED_MODULE_1__project_detail_title_vue__["a" /* default */],
        'project-meta-info': __WEBPACK_IMPORTED_MODULE_2__project_meta_info_vue__["a" /* default */],
        'project-images-section': __WEBPACK_IMPORTED_MODULE_3__project_images_section_vue__["a" /* default */]
    },
    data: function data() {
        return {
            'selectedImage': null
        };
    },
    props: ['project', 'deeplink'],
    methods: {
        closeOutsideClick: function closeOutsideClick(event) {
            var className = event.target.className;
            if (closeableClasses.includes(className)) {
                this.$router.push({
                    'path': '/projects'
                });
            }
        },
        closeButtonClick: function closeButtonClick(event) {
            __WEBPACK_IMPORTED_MODULE_4__event_bus__["a" /* EventBus */].$emit('hideProjectDetail');
        },
        closeImageDetailClick: function closeImageDetailClick(event) {
            event.stopPropagation();
            this.selectedImage = null;
        },
        getImageDetail: function getImageDetail(event) {
            event.stopPropagation();
            var figureNode = event.target.parentElement;
            var imageElement = figureNode.querySelector('img');
            this.selectedImage = imageElement.src;
        }
    },
    watch: {
        '$route': function $route(to, from) {
            if (to.path === '/projects') {
                this.closeButtonClick();
            }
        }
    }
});

/***/ }),
/* 20 */
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
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            'linkCopied': false
        };
    },
    props: ['title', 'deeplink'],
    methods: {
        linkClick: function linkClick(event) {
            var _this = this;

            this.$copyText(this.deeplink).then(function () {
                _this.linkCopied = true;
                setTimeout(function () {
                    _this.linkCopied = false;
                }, 1000);
            });
        }
    }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility_user_agent_js__ = __webpack_require__(3);
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
    mixins: [__WEBPACK_IMPORTED_MODULE_0__utility_user_agent_js__["a" /* userAgent */].mobileClassMixin],
    props: ['project']
});

/***/ }),
/* 22 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['images']
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuex_filters_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex__);
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





var fetchInitialData = function fetchInitialData(store, route) {
    var filterId;
    if (typeof route.query.filter !== 'undefined') {
        var filter = route.query.filter;
        filterId = __WEBPACK_IMPORTED_MODULE_0__vuex_filters_js__["a" /* default */].filterCategories[filter];
    }
    return store.dispatch('postsModule/updateCategory', filterId);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    asyncData: function asyncData(store, route) {
        return fetchInitialData(store, route);
    },

    components: {
        'blog-post': __WEBPACK_IMPORTED_MODULE_1__post_vue__["a" /* default */]
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapGetters"])('postsModule', ['posts'])),
    data: function data() {
        return {
            'showSpinner': true
        };
    },
    methods: {
        loadPosts: function loadPosts() {
            fetchInitialData(this.$store, this.$route);
        },
        updateSpinner: function updateSpinner() {
            if (this.$store.getters['postsModule/posts'].length !== 0) {
                this.showSpinner = false;
            } else {
                this.showSpinner = true;
            }
        }
    },
    watch: {
        '$route': function $route(to, from) {
            this.loadPosts();
        },
        'posts': function posts() {
            this.updateSpinner();
        }
    },
    created: function created() {
        this.loadPosts();
        this.updateSpinner();
    }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var filterCategories = {
    'apps': 2,
    'vr': 6,
    'steam': 3,
    'mac': 7,
    'ios': 8,
    'windows': 9
};

var getFilterNameFromId = function getFilterNameFromId(categoryId) {
    var keys = Object.keys(filterCategories);
    var values = Object.values(filterCategories);
    var index = values.indexOf(categoryId);
    return keys[index];
};

var getIconFromName = function getIconFromName(name) {
    if (name === 'vr') {
        return 'oculus';
    }
    if (name === 'mac' || name === 'ios') {
        return 'apple';
    }
    return name;
};

var getFromCategory = function getFromCategory(categoryId) {
    var name = getFilterNameFromId(categoryId);
    var link = '?filter=' + name;
    var iconName = getIconFromName(name);
    var hoverClass = iconName + '-color';

    return {
        id: categoryId,
        link: link,
        icon: iconName,
        hover: hoverClass
    };
};

/* harmony default export */ __webpack_exports__["a"] = ({
    getFromCategory: getFromCategory,
    filterCategories: filterCategories
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuex_filters_js__ = __webpack_require__(24);
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


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        var filters = [];
        if (typeof this.categories !== 'undefined') {
            this.categories.forEach(function (element) {
                var filter = __WEBPACK_IMPORTED_MODULE_0__vuex_filters_js__["a" /* default */].getFromCategory(element);
                filters.push(filter);
            });
        }
        return {
            'filters': filters
        };
    },
    props: ['categories']
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

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
//
//
//
//
//
//
//
//
//

/*
    <!-- <section id="about-photos"></section>
    <section id="about-skill-stats"></section> -->
*/

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__friends_vue__ = __webpack_require__(120);
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
        'friend-sites': __WEBPACK_IMPORTED_MODULE_0__friends_vue__["a" /* default */]
    }
});

/***/ }),
/* 28 */
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
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            friends: [{
                name: 'Pat Cool',
                url: 'http://www.patrickcool.me/',
                screenshot: '//res.cloudinary.com/hnairgdu6/image/upload/v1516170988/pcool_dstxab.png'
            }, {
                name: 'Tyler Kadish',
                url: 'http://tyler-kadish.squarespace.com/',
                screenshot: '//res.cloudinary.com/hnairgdu6/image/upload/v1516170989/tkadish_elxgfk.png'
            }]
        };
    }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_section_vue__ = __webpack_require__(125);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        'project-section': __WEBPACK_IMPORTED_MODULE_0__project_section_vue__["a" /* default */]
    }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_project_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(6);
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
    return store.dispatch('projectsModule/updateProjects');
};

/* harmony default export */ __webpack_exports__["a"] = ({
    asyncData: function asyncData(store, route) {
        return fetchInitialData(store, route);
    },

    components: {
        'project': __WEBPACK_IMPORTED_MODULE_0__project_project_vue__["a" /* default */]
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])('projectsModule', ['projects'])),
    data: function data() {
        return {
            'showSpinner': true,
            'animateProjects': true,
            'searchProjects': [],
            'projectsModel': [],
            'searchActive': false
        };
    },
    methods: {
        loadProjects: function loadProjects() {
            fetchInitialData(this.$store, this.$route);
        },
        updateSpinner: function updateSpinner() {
            var storedProjects = this.$store.getters['projectsModule/projects'];
            if (storedProjects.length !== 0) {
                this.showSpinner = false;
                this.projectsModel = storedProjects;
            } else {
                this.showSpinner = true;
            }
        },
        checkForDeeplink: function checkForDeeplink() {
            var deeplink = this.$route.params.deeplink;
            if (typeof deeplink === 'undefined') {
                this.animateProjects = true;
            }
        },
        searchFilter: function searchFilter(event) {
            var userInput = event.target.value;
            this.searchActive = userInput !== '';
            var regex = new RegExp(userInput);
            var filtered = this.projects.filter(function (project) {
                return project.searchableDescription.search(regex) > -1;
            });
            this.searchProjects = filtered;
        },
        getProjectData: function getProjectData() {
            return this.searchActive ? this.searchProjects : this.projects;
        },
        filterDateCreated: function filterDateCreated() {
            this.projectsModel.sort(function (projectA, projectB) {
                if (projectA.date_started < projectB.date_started) {
                    return 1;
                } else if (projectA.date_started > projectB.date_started) {
                    return -1;
                }
                return 0;
            });
        },
        filterLastUpdated: function filterLastUpdated() {
            this.projectsModel.sort(function (projectA, projectB) {
                if (projectA.last_updated < projectB.last_updated) {
                    return 1;
                } else if (projectA.last_updated > projectB.last_updated) {
                    return -1;
                }
                return 0;
            });
        },
        updateZOrdering: function updateZOrdering() {
            var projects = this.$refs.projects;
            if (typeof projects === 'undefined') {
                return;
            }
            var projectsModel = this.projectsModel;
            var modelIndices = {};
            projectsModel.forEach(function (model, index) {
                modelIndices[model._id] = index;
            });
            projects.forEach(function (project, index) {
                var id = project.firstChild.attributes['data-id'].value;
                project.style.zIndex = 200 + modelIndices[id];
            });
        }
    },
    watch: {
        'projects': function projects() {
            this.updateSpinner();
        },
        'projectsModel': function projectsModel(val) {
            this.updateZOrdering();
        }
    },
    created: function created() {
        this.checkForDeeplink();
        this.loadProjects();
        this.updateSpinner();
    },
    mounted: function mounted() {
        this.updateZOrdering();
    }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_media__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_media__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_title_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_icon_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_description_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_technology_panel_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_dates_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_details_project_detail_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_bus_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icons__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__icons__);
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











var parentPathName = '/projects';
var closeableClasses = ['detail-modal-background', 'detail-view-wrapper', 'button--close'];

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        Media: __WEBPACK_IMPORTED_MODULE_0_vue_media___default.a,
        'project-title': __WEBPACK_IMPORTED_MODULE_1__project_title_vue__["a" /* default */],
        'project-icon': __WEBPACK_IMPORTED_MODULE_2__project_icon_vue__["a" /* default */],
        'project-description': __WEBPACK_IMPORTED_MODULE_3__project_description_vue__["a" /* default */],
        'project-detail': __WEBPACK_IMPORTED_MODULE_6__project_details_project_detail_vue__["a" /* default */],
        'project-tech': __WEBPACK_IMPORTED_MODULE_4__project_technology_panel_vue__["a" /* default */],
        'project-dates': __WEBPACK_IMPORTED_MODULE_5__project_dates_vue__["a" /* default */]
    },
    props: ['project'],
    data: function data() {
        return {
            showDetailBackground: false,
            showDetail: false,
            deeplink: null
        };
    },
    methods: {
        getRoute: function getRoute() {
            return {
                path: this.deeplinkName()
            };
        },
        handleProjectOnClick: function handleProjectOnClick() {
            var origin = window.location.origin + parentPathName;
            var link = origin + '/' + this.deeplinkName();
            var eventData = {
                project: this.$props.project,
                deeplink: link
            };
            __WEBPACK_IMPORTED_MODULE_7__event_bus_js__["a" /* EventBus */].$emit('showProjectDetail', eventData);
        },

        closeModal: function closeModal(event) {
            var targetClass = event.target.className;
            event.stopPropagation();
            if (closeableClasses.includes(targetClass)) {
                this.closeDetail();
            }
        },
        handleDeeplink: function handleDeeplink() {
            if (this.deeplink !== null) {
                if (this.deeplink === this.deeplinkName()) {
                    this.handleProjectOnClick();
                }
            }
        },
        deeplinkName: function deeplinkName() {
            var name = this.project.title;
            return name.toLowerCase().replace(/\s/g, '-');
        }
    },
    mounted: function mounted() {
        this.handleDeeplink();
    },

    watch: {
        '$route': function $route(to, from) {
            this.deeplink = this.$route.params.title;
            this.handleDeeplink();
        }
    },
    created: function created() {
        this.deeplink = this.$route.params.title;
    }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['title']
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['project']
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['description']
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility_user_agent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_technology_vue__ = __webpack_require__(36);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__utility_user_agent_js__["a" /* userAgent */].mobileClassMixin],
    components: {
        'project-technology': __WEBPACK_IMPORTED_MODULE_1__project_technology_vue__["a" /* default */]
    },
    data: function data() {
        return {
            'frameworks': [],
            'platforms': [],
            'languages': []
        };
    },
    props: ['project'],
    methods: {}
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_technology_vue__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5eaa4aff_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_technology_vue__ = __webpack_require__(142);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(140),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "42cffd09"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_technology_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5eaa4aff_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_technology_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__technology_resolver_js__ = __webpack_require__(141);
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
    props: ['tech'],
    data: function data() {
        return {
            iconClasses: []
        };
    },
    created: function created() {
        this.iconClasses = this.tech.map(function (tech) {
            return __WEBPACK_IMPORTED_MODULE_0__technology_resolver_js__["a" /* technologyResolver */].classNameForTech(tech);
        });
    }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_media__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_media__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dateformat__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dateformat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dateformat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_user_agent_js__ = __webpack_require__(3);
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





/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        var _this = this;

        return {
            mobileWidth: __WEBPACK_IMPORTED_MODULE_2__utility_user_agent_js__["a" /* userAgent */].mobileSize,
            tabletWidth: __WEBPACK_IMPORTED_MODULE_2__utility_user_agent_js__["a" /* userAgent */].tabletSize,
            showFullDates: true,
            dateFormat: 'mmmm dS, yyyy',
            formattedDate: function formattedDate(rawDate) {
                var date = new Date(rawDate);
                return __WEBPACK_IMPORTED_MODULE_1_dateformat___default()(date, _this.dateFormat);
            }
        };
    },
    methods: {
        mediaEnterTablet: function mediaEnterTablet(query) {
            this.showFullDates = true;
            this.dateFormat = 'mmm yyyy';
        },
        mediaLeaveTablet: function mediaLeaveTablet(query) {
            this.dateFormat = 'mmmm dS, yyyy';
        },
        mediaEnterMobile: function mediaEnterMobile(query) {
            this.showFullDates = false;
            this.dateFormat = 'mmm yyyy';
        }
    },
    props: ['project'],
    components: {
        Media: __WEBPACK_IMPORTED_MODULE_0_vue_media___default.a
    }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resume_job_vue__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobs_job_thismoment__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_job_rewardstyle__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobs_job_hobbyfan__ = __webpack_require__(157);
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            scrollY: 0,
            scrollTimeout: null,
            thismoment: __WEBPACK_IMPORTED_MODULE_1__jobs_job_thismoment__["a" /* default */],
            rewardstyle: __WEBPACK_IMPORTED_MODULE_2__jobs_job_rewardstyle__["a" /* default */],
            hobbyfan: __WEBPACK_IMPORTED_MODULE_3__jobs_job_hobbyfan__["a" /* default */]
        };
    },
    components: {
        'resume-job': __WEBPACK_IMPORTED_MODULE_0__resume_job_vue__["a" /* default */]
    },
    methods: {
        handleScrollEvent: function handleScrollEvent(event) {
            this.$data.scrollY = window.scrollY;
        }
    },
    created: function created() {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', this.handleScrollEvent, { passive: true });
        }
    },
    destroyed: function destroyed() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', this.handleScrollEvent);
        }
    }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__projects_project_project_technology_vue__ = __webpack_require__(36);
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
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['job', 'scroll'],
    data: function data() {
        return {
            showOnScroll: false
        };
    },
    components: {
        'job-technology': __WEBPACK_IMPORTED_MODULE_0__projects_project_project_technology_vue__["a" /* default */]
    },
    methods: {
        handleScrollUpdate: function handleScrollUpdate(scroll) {
            var top = this.$el.offsetTop - 800;
            if (scroll > top) {
                this.showOnScroll = true;
            } else {
                this.showOnScroll = false;
            }
        }
    },
    watch: {
        'scroll': function scroll(_scroll) {
            this.handleScrollUpdate(_scroll);
        }
    },
    mounted: function mounted() {
        this.handleScrollUpdate(0);
    }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(42);


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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuex_index_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_layout_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_svgicon__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_svgicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_svgicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_clipboard2__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_clipboard2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_clipboard2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_lazyload__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_lazyload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_mq__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_mq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_mq__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__router_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__vuex_index_js__["a"]; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










if (process.browser) {
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_7_vue_mq___default.a, {
        breakpoints: {
            mobile: 800,
            desktop: Infinity
        }
    });
}

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6_vue_lazyload___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vue_svgicon___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5_vue_clipboard2___default.a);

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(_extends({
    router: __WEBPACK_IMPORTED_MODULE_3__router_js__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_2__theme_layout_vue__["a" /* default */], {
    store: __WEBPACK_IMPORTED_MODULE_1__vuex_index_js__["a" /* default */]
}));



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_js__ = __webpack_require__(46);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
    modules: {
        postsModule: __WEBPACK_IMPORTED_MODULE_2__posts_js__["a" /* default */],
        projectsModule: __WEBPACK_IMPORTED_MODULE_3__projects_js__["a" /* default */]
    }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service_js__ = __webpack_require__(8);


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
            context.commit('updateCategory', {
                categoryId: categoryId,
                posts: data
            });
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
/* 45 */
/***/ (function(module, exports) {

module.exports = require("axios-cache-adapter");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dateformat__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dateformat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dateformat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_decode_html__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_decode_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_decode_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_striphtml__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_striphtml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_js_striphtml__);

// import truncate from 'truncate'




var defaultState = {
    projects: []
};

var inBrowser = typeof window !== 'undefined';
var state = defaultState;
if (inBrowser) {
    var initialState = window.__INITIAL_STATE__;
    state = initialState ? initialState.projectsModule : defaultState;
}

var getters = {
    projects: function projects(state) {
        return state.projects;
    }
};

var actions = {
    updateProjects: function updateProjects(context) {
        return __WEBPACK_IMPORTED_MODULE_0__app_service_js__["a" /* default */].getProjects().then(function (data) {
            data.map(function (project) {
                var decodedDescription = __WEBPACK_IMPORTED_MODULE_2_decode_html___default()(project.description);
                project.description = decodedDescription;
                var strippedDescription = __WEBPACK_IMPORTED_MODULE_3_js_striphtml___default.a.stripTags(project.description);
                project.shortDescription = project.short_description;
                var searchableDescription = strippedDescription.toLowerCase() + project.title.toLowerCase();
                project.searchableDescription = searchableDescription;
                project.lastUpdatedFormatted = __WEBPACK_IMPORTED_MODULE_1_dateformat___default()(new Date(project.last_updated), 'mmmm dS, yyyy');
                project.createdDateFormatted = __WEBPACK_IMPORTED_MODULE_1_dateformat___default()(new Date(project.date_started), 'mmmm dS, yyyy');
                return project;
            });
            context.commit('updateProjects', {
                projects: data
            });
        });
    }
};

var mutations = {
    updateProjects: function updateProjects(state, data) {
        state.projects = data.projects;
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
/* 47 */
/***/ (function(module, exports) {

module.exports = require("decode-html");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("js-striphtml");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_layout_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3492b4a9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_layout_vue__ = __webpack_require__(107);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(50),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3492b4a9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_layout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_header_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7b947c2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_header_vue__ = __webpack_require__(86);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(52),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "63e18d4e"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7b947c2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_header_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navigation_vue__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d43f7b4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navigation_vue__ = __webpack_require__(83);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(54),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "2bc97b98"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navigation_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d43f7b4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navigation_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'android': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M22.146 9.227a1.478 1.478 0 1 0-2.956.002v6.19c0 .81.663 1.48 1.483 1.48.814 0 1.476-.67 1.476-1.48v-6.2h-.01zM5.393 8.032l.004 9.6c0 .885.704 1.59 1.573 1.59h1.063v3.28c0 .82.66 1.482 1.47 1.482s1.467-.66 1.48-1.468v-3.28h1.993v3.28a1.475 1.475 0 1 0 2.952-.007v-3.28h1.078c.87 0 1.573-.71 1.573-1.578v-9.63L5.35 8.03l.04.002zm9.648-2.93a.56.56 0 1 1-.002-1.118.56.56 0 0 1 .002 1.118m-6.06 0a.56.56 0 1 1 .56-.548.565.565 0 0 1-.57.567m6.29-2.9L16.29.33c.06-.105.014-.226-.076-.285a.219.219 0 0 0-.284.09l-1.05 1.9c-.868-.405-1.856-.63-2.89-.63s-2.018.215-2.892.603L8.064.105a.205.205 0 0 0-.278-.08c-.1.045-.136.18-.08.27l1.03 1.875c-2.03 1.047-3.4 3.04-3.4 5.33h13.328c0-2.29-1.368-4.283-3.396-5.33M3.33 7.742c-.817 0-1.48.665-1.48 1.483v6.192a1.48 1.48 0 0 0 2.961 0v-6.19c0-.815-.66-1.478-1.47-1.478"/>'
  }
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'angular': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M9.93 12.645h4.134L11.996 7.74"/><path pid="1" d="M11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z"/>'
  }
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'apple': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M7.078 23.55a5.378 5.378 0 0 1-1.244-1.15c-.383-.463-.738-.95-1.064-1.454a14.065 14.065 0 0 1-1.78-3.636c-.5-1.502-.743-2.94-.743-4.347 0-1.57.34-2.94 1.002-4.09a5.78 5.78 0 0 1 2.1-2.182 5.6 5.6 0 0 1 2.84-.84c.35 0 .73.05 1.13.15.29.08.64.21 1.07.37.55.21.85.34.95.37.32.12.59.17.8.17.16 0 .39-.05.645-.13.145-.05.42-.14.81-.31.386-.14.692-.26.935-.35.37-.11.728-.21 1.05-.26.39-.06.777-.08 1.148-.05.71.05 1.36.2 1.94.42 1.02.41 1.843 1.05 2.457 1.96-.26.16-.5.346-.725.55-.487.43-.9.94-1.23 1.505a5.1 5.1 0 0 0-.644 2.52c.015 1.083.29 2.035.84 2.86a5.33 5.33 0 0 0 1.534 1.536c.31.21.582.355.84.45-.12.375-.252.74-.405 1.1-.347.807-.76 1.58-1.25 2.31-.432.63-.772 1.1-1.03 1.41-.402.48-.79.84-1.18 1.097-.43.285-.935.436-1.452.436-.35.015-.7-.03-1.034-.127-.29-.095-.576-.202-.856-.323a6.94 6.94 0 0 0-.905-.34 4.52 4.52 0 0 0-1.164-.147c-.4 0-.79.05-1.16.145-.31.088-.61.196-.907.325-.42.175-.695.29-.855.34a4.47 4.47 0 0 1-.99.175c-.52 0-1.004-.15-1.486-.45zm6.854-18.46c-.68.34-1.326.484-1.973.436-.1-.646 0-1.31.27-2.037.24-.62.56-1.18 1-1.68.46-.52 1.01-.95 1.63-1.26.66-.34 1.29-.52 1.89-.55.08.68 0 1.35-.25 2.07a5.938 5.938 0 0 1-1 1.76c-.435.52-.975.95-1.586 1.26z"/>'
  }
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'closebutton': {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M0 0h24v24H0z" _fill="none"/><path pid="1" d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>'
  }
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'css3': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>'
  }
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'facebook': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>'
  }
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'github': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>'
  }
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'heroku': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M20.61 0H3.39a2.15 2.15 0 0 0-2.16 2.16v19.681A2.15 2.15 0 0 0 3.39 24h17.22a2.15 2.15 0 0 0 2.159-2.159V2.16A2.149 2.149 0 0 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39a.948.948 0 0 1-.96-.96V2.16c0-.54.42-.961.96-.961h17.22a.95.95 0 0 1 .96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"/>'
  }
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'html5': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>'
  }
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'instagram': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>'
  }
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'javascript': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>'
  }
});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'jquery': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M1.534 5.874c-2.123 3.05-1.86 7.017-.237 10.256.037.079.078.154.118.229.023.052.049.1.077.149.013.028.031.057.047.083.026.052.054.102.081.152l.157.265c.029.049.057.097.09.146.055.094.12.187.177.281.026.039.05.078.079.117a6.36 6.36 0 0 0 .31.444c.078.107.156.211.24.315.027.038.057.076.085.114l.221.269c.027.031.054.067.083.099.098.118.202.233.306.349 0 .002.003.004.005.007a3.13 3.13 0 0 0 .424.44c.08.082.16.164.245.244l.101.097c.111.104.222.208.339.308.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.173.133.26.2l.136.104c.093.07.192.139.287.207.035.025.07.05.106.073l.029.023.281.185.12.08c.147.094.293.183.438.271.042.021.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.233.125a.324.324 0 0 1 .056.023c.033.015.064.031.096.047.12.06.245.117.375.174.024.01.05.02.076.034.144.063.288.123.437.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.153.052.304.102.459.15.036.01.073.023.111.033.159.048.313.105.473.136 10.26 1.87 13.242-6.169 13.242-6.169-2.505 3.262-6.95 4.122-11.16 3.165-.156-.036-.312-.086-.469-.132a13.522 13.522 0 0 1-.567-.181l-.062-.024c-.136-.046-.267-.097-.4-.148a1.613 1.613 0 0 0-.11-.041c-.147-.059-.29-.12-.432-.183-.031-.01-.057-.024-.088-.036a23.41 23.41 0 0 1-.361-.17 1.483 1.483 0 0 1-.106-.052c-.094-.044-.188-.094-.28-.142a3.942 3.942 0 0 1-.187-.096c-.113-.06-.226-.125-.339-.187-.034-.024-.073-.044-.112-.066a15.902 15.902 0 0 1-.438-.269 2.104 2.104 0 0 1-.118-.079 6.002 6.002 0 0 1-.312-.206c-.035-.023-.067-.048-.103-.073a9.541 9.541 0 0 1-.294-.212c-.042-.034-.087-.066-.132-.1-.088-.069-.177-.135-.265-.208l-.118-.094a10.58 10.58 0 0 1-.334-.281.258.258 0 0 0-.037-.03l-.347-.316-.1-.094c-.082-.083-.166-.163-.25-.245l-.097-.1a9.07 9.07 0 0 1-.309-.323l-.015-.016a17.944 17.944 0 0 1-.313-.354c-.027-.031-.052-.064-.08-.097l-.226-.277a21.248 21.248 0 0 1-.34-.448C2.16 11.786 1.315 7.386 3.184 3.777"/><path pid="1" d="M8.121 3.305c-1.539 2.209-1.452 5.163-.254 7.499a9.1 9.1 0 0 0 .677 1.132c.23.33.484.72.792.986.107.122.223.24.344.359l.09.09c.114.11.231.218.35.325l.015.013a9.855 9.855 0 0 0 .414.342c.034.023.063.05.096.073.14.108.281.212.427.315l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.317.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.099.054.067.033.133.068.197.102l.032.014c.135.066.273.128.408.19.034.013.063.024.092.038.111.048.224.094.335.137.05.017.097.037.144.052.102.038.209.073.31.108l.14.045c.146.045.294.104.448.129 7.92 1.313 9.754-4.787 9.754-4.787-1.651 2.376-4.846 3.508-8.251 2.624a8.03 8.03 0 0 1-.448-.13c-.048-.013-.09-.028-.136-.042-.104-.036-.211-.071-.312-.109l-.144-.054c-.112-.045-.226-.087-.335-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.417-.192l-.206-.107-.119-.06a5.67 5.67 0 0 1-.265-.15.62.62 0 0 1-.062-.034c-.106-.066-.216-.13-.317-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.427-.312-.032-.029-.063-.053-.094-.079-1.497-1.177-2.678-2.786-3.238-4.608-.59-1.894-.46-4.018.559-5.742"/><path pid="2" d="M13.66 1.384c-.908 1.332-.995 2.986-.37 4.455.664 1.56 2.022 2.785 3.604 3.365.065.025.128.046.195.07l.088.027c.092.029.185.063.28.084 4.376.844 5.56-2.247 5.879-2.701-1.042 1.496-2.789 1.855-4.932 1.334a4.844 4.844 0 0 1-.516-.16 6.344 6.344 0 0 1-.617-.254 6.521 6.521 0 0 1-1.08-.66c-1.92-1.454-3.109-4.23-1.857-6.491"/>'
  }
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'link': {
    width: 512,
    height: 512,
    viewBox: '0 0 512 512',
    data: '<path pid="0" d="M220.118 317.883a25.917 25.917 0 0 1-18.385-7.615c-47.567-47.568-47.567-124.967 0-172.535l96-96C320.777 18.69 351.413 6 384 6s63.224 12.69 86.268 35.732c47.566 47.568 47.566 124.967 0 172.535l-43.883 43.883c-10.154 10.154-26.615 10.154-36.77 0-10.153-10.153-10.153-26.616 0-36.77l43.883-43.883c27.292-27.293 27.292-71.702 0-98.995C420.277 65.281 402.698 58 384 58s-36.276 7.281-49.498 20.503l-96 95.999c-27.293 27.293-27.293 71.703 0 98.996 10.154 10.153 10.153 26.616 0 36.77a25.919 25.919 0 0 1-18.384 7.615z"/><path pid="1" d="M128 506c-32.588 0-63.225-12.69-86.267-35.732-47.567-47.568-47.567-124.967 0-172.535l43.882-43.882c10.154-10.153 26.617-10.153 36.77 0 10.154 10.153 10.154 26.616 0 36.77l-43.882 43.882c-27.293 27.293-27.293 71.703 0 98.996C91.723 446.719 109.302 454 128 454s36.276-7.281 49.499-20.503l96-95.999c27.292-27.293 27.292-71.703 0-98.996-10.154-10.154-10.153-26.616 0-36.77 10.153-10.153 26.616-10.153 36.77.001 47.566 47.567 47.566 124.966.001 172.534l-96.001 96C191.224 493.311 160.587 506 128 506z"/>'
  }
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'linkedin': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
  }
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'magento': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M12 24l-4.455-2.572v-12l2.97-1.715v12.001l1.485.902 1.485-.902V7.713l2.971 1.715v12L12 24zM22.391 6v12l-2.969 1.714V7.713L12 3.43 4.574 7.713v12.001L1.609 18V6L12 0l10.391 6z"/>'
  }
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'menu': {
    width: 8,
    height: 8,
    viewBox: '0 0 8 8',
    data: '<path pid="0" d="M0 1v1h8V1H0zm0 2.97v1h8v-1H0zm0 3v1h8v-1H0z"/>'
  }
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'mysql': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M16.405 5.676c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.87h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008L4.25 13.34h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.79h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483h.88zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.763c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156s-.803.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 0 0 .3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 0 0-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 0 0-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168z"/><path pid="1" d="M23.224 11.486c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 0 0-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 0 0-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 0 1-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 0 1-.35-.4 8.76 8.76 0 0 1-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 0 1-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 0 1 2.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"/>'
  }
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'nodejs': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M11.435.153l-9.37 5.43c-.35.203-.564.578-.563.983V17.43c0 .404.215.78.564.982l9.37 5.435c.35.203.78.203 1.13 0l9.366-5.433a1.14 1.14 0 0 0 .565-.982V6.566c0-.404-.216-.78-.566-.984L12.567.152a1.124 1.124 0 0 0-1.13 0"/>'
  }
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'oculus': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M18.135 13.949c-.319.221-.675.355-1.057.416s-.761.049-1.142.049H8.063c-.382 0-.762.014-1.145-.049a2.588 2.588 0 0 1-1.057-.416 2.378 2.378 0 0 1-1.027-1.951c0-.796.387-1.515 1.029-1.95.314-.225.674-.359 1.049-.42s.75-.061 1.141-.061h7.875c.375 0 .765-.014 1.14.046s.735.194 1.051.405a2.342 2.342 0 0 1 1.02 1.949c0 .78-.391 1.5-1.035 1.95l.031.032zm3.174-7.555a7.235 7.235 0 0 0-2.865-1.398 8.78 8.78 0 0 0-1.822-.23c-.449-.015-.899-.01-1.364-.01H8.76c-.457 0-.915-.005-1.372.01a8.912 8.912 0 0 0-1.825.23 7.26 7.26 0 0 0-2.865 1.4A7.169 7.169 0 0 0 0 12c0 2.182.99 4.241 2.689 5.606a7.292 7.292 0 0 0 2.865 1.4 8.764 8.764 0 0 0 1.823.229c.45.016.9.012 1.365.012h6.496c.449 0 .914.004 1.364-.012a8.597 8.597 0 0 0 1.814-.229 7.374 7.374 0 0 0 2.866-1.402A7.125 7.125 0 0 0 24 12c0-2.181-.99-4.241-2.691-5.606z"/>'
  }
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'sass': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256a.362.362 0 0 0-.105-.105c-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"/>'
  }
});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'stackoverflow': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"/>'
  }
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'steam': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.063 0 .125.004.188.006l2.861-4.142V8.91a4.528 4.528 0 0 1 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159a3.392 3.392 0 0 1-3.39 3.396 3.412 3.412 0 0 1-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25a2.551 2.551 0 0 0 3.337-3.324 2.547 2.547 0 0 0-3.255-1.413l1.523.63a1.878 1.878 0 0 1-1.445 3.467H7.54zm11.415-9.303a3.019 3.019 0 0 0-3.015-3.015 3.015 3.015 0 1 0 3.015 3.015zm-5.273-.005a2.264 2.264 0 1 1 4.531 0 2.267 2.267 0 0 1-2.266 2.265 2.264 2.264 0 0 1-2.265-2.265z"/>'
  }
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'twitter': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>'
  }
});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'visualstudiocode': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M23.846 1.979L18.895 0 8.125 10.5 1.57 5.49l-1.424.705v11.64l1.41.69 6.555-4.995L18.906 24l4.948-1.949V1.995l-.012-.016h.004zM2.275 14.729V9.271l3.03 2.699-3.03 2.745v.014zm9.721-2.744L18.07 7.44v9.121l-6.074-4.576z"/>'
  }
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'vuejs': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M12 6.4l2.775-4.798H19.2l-.003.006H24L12 22.392 0 1.607h4.803v-.005h4.425L12 6.402z"/>'
  }
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'webpack': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M21.016 18.12L12.35 23v-3.8l5.399-2.957 3.266 1.877zm.592-.534V7.38l-3.17 1.821v6.56l3.17 1.824zm-18.682.534L11.59 23v-3.8l-5.398-2.957-3.266 1.877zm-.593-.534V7.38l3.17 1.821v6.56l-3.17 1.824zM2.704 6.72l8.886-5.005v3.674L5.897 8.507l-.043.025-3.15-1.812zm18.534 0L12.35 1.715v3.674l5.693 3.118.043.025 3.15-1.812zM11.59 18.335l-5.327-2.916V9.642l5.326 3.062v5.63zm.76 0l5.326-2.916V9.642l-5.326 3.062v5.63zM6.625 8.973l5.347-2.928 5.347 2.928-5.347 3.075-5.347-3.075z"/>'
  }
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'windows': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>'
  }
});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var icon = __webpack_require__(0);
icon.register({
  'wordpress': {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    data: '<path pid="0" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709A10.794 10.794 0 0 1 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>'
  }
});

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation-container noselect"},[_vm._ssrNode("<div class=\"mobile-menu\">","</div>",[_c('svgicon',{staticClass:"clickable",attrs:{"icon":"menu"}})],1),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade-out","mode":"out-in"},on:{"enter":_vm.setListItemActive}},[_c('ul',{ref:"menuList",class:_vm.menuClasses,on:{"click":_vm.setListItemActiveClick}},[_c('li',{staticClass:"menu-item",attrs:{"aria-label":"show about"}},[_c('router-link',{staticClass:"navigation-item",attrs:{"to":"/about"}},[_vm._v("About")])],1),_vm._v(" "),_c('li',{staticClass:"menu-item",attrs:{"aria-label":"show resume"}},[_c('router-link',{staticClass:"navigation-item",attrs:{"to":"/work"}},[_vm._v("Work Exp")])],1),_vm._v(" "),_c('li',{staticClass:"menu-item",attrs:{"aria-label":"show projects"}},[_c('router-link',{staticClass:"navigation-item",attrs:{"to":"/projects"}},[_vm._v("Projects")])],1),_vm._v(" "),_c('li',{staticClass:"menu-item",attrs:{"aria-label":"show blog"}},[_c('router-link',{staticClass:"navigation-item",attrs:{"to":"/blog"}},[_vm._v("Blog")])],1),_vm._v(" "),_c('li',{staticClass:"menu-item",attrs:{"aria-label":"show extra"}},[_c('router-link',{staticClass:"navigation-item",attrs:{"to":"/extra"}},[_vm._v("Extra")])],1)])])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"social-links-wrapper no-focus"},[_vm._ssrNode("<li class=\"social-item\">","</li>",[_vm._ssrNode("<a href=\"//www.facebook.com/timcool\" target=\"_blank\" rel=\"noopener\" alt=\"facebook\">","</a>",[_c('svgicon',{staticClass:"icon-large clickable facebook-color",attrs:{"icon":"facebook"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"social-item\">","</li>",[_vm._ssrNode("<a href=\"//twitter.com/timothymcool\" target=\"_blank\" rel=\"noopener\" alt=\"twitter\">","</a>",[_c('svgicon',{staticClass:"icon-large clickable twitter-color",attrs:{"icon":"twitter"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"social-item\">","</li>",[_vm._ssrNode("<a href=\"//www.linkedin.com/in/tim-cool-1898111b\" rel=\"noopener\" target=\"_blank\" alt=\"linkedin\">","</a>",[_c('svgicon',{staticClass:"icon-large clickable linkedin-color",attrs:{"icon":"linkedin"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"social-item\">","</li>",[_vm._ssrNode("<a href=\"//github.com/tcool86\" target=\"_blank\" rel=\"noopener\" alt=\"github\">","</a>",[_c('svgicon',{staticClass:"icon-large clickable github-color",attrs:{"icon":"github"}})],1)])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"nav-main"}},[_vm._ssrNode("<nav class=\"navigation\""+(_vm._ssrStyle(null,_vm.staticStyles, null))+">","</nav>",[(_vm.showMenu)?_c('main-nav'):_vm._e(),_vm._ssrNode(" "),_c('media',{attrs:{"query":{minWidth: 1158}}},[_c('social-links')],1)],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_footer_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b0565f0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_footer_vue__ = __webpack_require__(89);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(88),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "71cdc64e"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b0565f0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer-with-social"},[_c('media',{attrs:{"query":{maxWidth: 1158}}},[_c('social-links',{staticClass:"social-links level is-mobile"})],1),_vm._ssrNode(" <div class=\"container\"><div class=\"content has-text-centered\">\n            Copyright © 2018 Timothy Cool \n        </div></div>")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_619b9b7c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_vue__ = __webpack_require__(92);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(91),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "06cbd842"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_619b9b7c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{ref:"message",staticClass:"message is-info"},[_vm._ssrNode("<div class=\"message-header\"><p>Site under construction</p> <button aria-label=\"delete\" class=\"delete\"></button></div> <div class=\"message-body\">\n        This site is still under construction. Don't mind the temporary &quot;lorem ipsum&quot; text througout some parts. :-)\n        <br>Thanks,\n        <br>-Tim\n    </div>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_settings_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f850e53_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_settings_vue__ = __webpack_require__(95);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(94),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "41d14878"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_settings_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f850e53_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_settings_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-menu"},[_vm._ssrNode("<label class=\"checkbox\"><input type=\"checkbox\">\n        Toggle BG animation\n    </label>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_detail_title_vue__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26064b24_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_detail_title_vue__ = __webpack_require__(99);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(98),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-26064b24"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "9555040c"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_detail_title_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26064b24_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_detail_title_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-title title-text backdrop-red"},[_vm._ssrNode("<h2 data-v-26064b24>","</h2>",[_vm._ssrNode(_vm._ssrEscape("\n        "+_vm._s(_vm.title)+"\n        ")),_vm._ssrNode("<span data-v-26064b24>","</span>",[_c('svgicon',{staticClass:"icon-large clickable icon-link",attrs:{"icon":"link"}})],1),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade-out"}},[(_vm.linkCopied)?_c('div',{staticClass:"link--copy-message"},[_vm._v("link copied")]):_vm._e()])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_meta_info_vue__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_712a7ea8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_meta_info_vue__ = __webpack_require__(102);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(101),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-712a7ea8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "790d8548"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_meta_info_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_712a7ea8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_meta_info_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mobileClassWrapper('meta-info') + ' level'},[_vm._ssrNode("<div class=\"project-date last-updated level-left\" data-v-712a7ea8><span data-v-712a7ea8>Updated: <b data-v-712a7ea8>"+_vm._ssrEscape(_vm._s(_vm.project.lastUpdatedFormatted))+"</b></span></div> <div class=\"project-date level-left\" data-v-712a7ea8><span data-v-712a7ea8>Created: <b data-v-712a7ea8>"+_vm._ssrEscape(_vm._s(_vm.project.createdDateFormatted))+"</b></span></div>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_images_section_vue__ = __webpack_require__(22);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b169a55a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_images_section_vue__ = __webpack_require__(105);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(104),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b169a55a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "a027cda4"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_images_section_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b169a55a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_images_section_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-images-container"},[_vm._ssrNode((_vm._ssrList((_vm.images),function(image){return ("<div class=\"project-image-container no-focus\" data-v-b169a55a><a"+(_vm._ssrAttr("href",image.image))+" data-fancybox=\"projectImages\""+(_vm._ssrAttr("data-caption",image.caption))+" data-v-b169a55a><img"+(_vm._ssrAttr("src",image.thumb))+" class=\"project-image\" data-v-b169a55a></a></div>")})))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-detail-container",on:{"click":_vm.closeOutsideClick}},[_vm._ssrNode("<div class=\"project-detail\" data-v-c103c1b8>","</div>",[_c('project-detail-title',{attrs:{"title":_vm.project.title,"deeplink":_vm.deeplink}}),_vm._ssrNode(" "),_c('project-meta-info',{attrs:{"project":_vm.project}}),_vm._ssrNode(" <div tabindex=\"0\" class=\"project-description-container\" data-v-c103c1b8><p class=\"project-description\" data-v-c103c1b8>"+(_vm._s(_vm.project.description))+"</p></div> <div class=\"separator\" data-v-c103c1b8></div> "),_c('project-images-section',{attrs:{"images":_vm.project.images},on:{"imageClicked":_vm.getImageDetail}}),_vm._ssrNode(" "),_c('router-link',{staticClass:"close-detail button button--long",attrs:{"to":"/projects"}},[_vm._v("\n            close\n        ")])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.appBackdropClass,attrs:{"id":"app"}},[_c('transition',{attrs:{"name":"fade-in"}},[(_vm.project !== null)?_c('project-details',{attrs:{"project":_vm.project,"deeplink":_vm.deeplink}}):_vm._e()],1),_vm._ssrNode(" "),_c('app-header'),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"view-height\">","</section>",[_vm._ssrNode("<div class=\"container-content\">","</div>",[_c('router-view')],1)]),_vm._ssrNode(" "),_c('app-footer')],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_blog_blog_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_about_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_extras_extra_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_projects_projects_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_resume_resume_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_not_found_vue__ = __webpack_require__(159);









// const notFound = () => System.import('./theme/not-found.vue')

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [{
        path: '/',
        redirect: '/about'
    }, {
        path: '/about',
        component: __WEBPACK_IMPORTED_MODULE_3__theme_about_vue__["default"]
    }, {
        path: '/work',
        component: __WEBPACK_IMPORTED_MODULE_6__theme_resume_resume_vue__["a" /* default */]
    }, {
        path: '/projects',
        component: __WEBPACK_IMPORTED_MODULE_5__theme_projects_projects_vue__["a" /* default */]
    }, {
        path: '/projects/:title',
        component: __WEBPACK_IMPORTED_MODULE_5__theme_projects_projects_vue__["a" /* default */]
    }, {
        path: '/blog',
        component: __WEBPACK_IMPORTED_MODULE_2__theme_blog_blog_vue__["a" /* default */]
    }, {
        path: '/extra',
        component: __WEBPACK_IMPORTED_MODULE_4__theme_extras_extra_vue__["a" /* default */]
    }, {
        path: '*',
        component: __WEBPACK_IMPORTED_MODULE_7__theme_not_found_vue__["a" /* default */]
    }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_blog_vue__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0bcbc58a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_blog_vue__ = __webpack_require__(114);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(111),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "7ef32acd"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_blog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0bcbc58a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_blog_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_post_vue__ = __webpack_require__(25);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fc7d4b2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_post_vue__ = __webpack_require__(113);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "58fe366a"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_post_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fc7d4b2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_post_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"post-wrapper media"},[_vm._ssrNode("<div class=\"image-wrapper media-left\"><div class=\"post-image\"></div></div> "),_vm._ssrNode("<div class=\"content-wrapper media-content\">","</div>",[_vm._ssrNode("<div class=\"title-wrapper skew-20 backdrop-red\">","</div>",[_vm._t("title")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"topics\">","</div>",_vm._l((_vm.filters),function(filter){return _vm._ssrNode("<span>","</span>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",filter.link))+">","</a>",[_c('svgicon',{staticClass:"icon-large clickable",class:filter.hover,attrs:{"icon":filter.icon}})],1)])})),_vm._ssrNode(" "),_vm._t("content")],2),_vm._ssrNode(" <div id=\"disqus_thread\"></div> <noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog-posts container is-fluid"},[_vm._ssrNode("<h1 class=\"content-title\">Blog</h1> "),_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(_vm.showSpinner)?_c('div',{staticClass:"spinner-container"},[_c('div',{staticClass:"spinner"},[_c('div',{staticClass:"loader"})])]):_vm._e(),_vm._v(" "),_vm._l((_vm.posts),function(post){return _c('div',{key:post.id,staticClass:"list-group-item view-height"},[_c('blog-post',{attrs:{"categories":post.categories}},[_c('h2',{staticClass:"title-text",attrs:{"slot":"title"},domProps:{"innerHTML":_vm._s(post.title.rendered)},slot:"title"}),_vm._v(" "),_c('div',{staticClass:"text-wrapper",attrs:{"slot":"content"},domProps:{"innerHTML":_vm._s(post.content.rendered)},slot:"content"})]),_vm._v(" "),_c('br')],1)})],2)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_about_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_about_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_about_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2436bee2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_about_vue__ = __webpack_require__(117);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(116),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2436bee2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "a329472a"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_about_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2436bee2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_about_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-container"},[_vm._ssrNode("<h1 class=\"content-title\" data-v-2436bee2>About</h1> <section id=\"about-section\" class=\"view-height content-section columns\" data-v-2436bee2><div tabindex=\"0\" class=\"column about-text\" data-v-2436bee2><h2 data-v-2436bee2>Tim Cool</h2> <div class=\"text-wrapper about-background\" data-v-2436bee2><figure tabindex=\"0\" class=\"avatar-wrapper\" data-v-2436bee2><img src=\"//res.cloudinary.com/hnairgdu6/image/upload/v1516937711/timcool-profile-image_b6m3bc.jpg\" class=\"cool-shadow\" data-v-2436bee2></figure> <p data-v-2436bee2>\n                    I’m Tim Cool, and this is my website. I live in Oakland, CA and work full time as a Software Engineer. \n                    Ever since I was young, I’ve always been interested in science, technology, video games, comics, and movies. \n                    I started creating computer games when I was around ten years old, using the visual programming application \n                    CocoaDR3, along with programs like Hypercard and Hyperstudio on my family's Macintosh Performa 550. \n                    From there I would graduate to more advanced programming languages like REALbasic, then C++ (mostly for school, and fun).\n                </p> <p data-v-2436bee2>\n                    For most of my academic and professional life, I’ve enjoyed working with interactive media and writing software applications. \n                    I’ve been building iOS apps and developing websites for the past eight years or so. \n                    It's great to be in a field where every day I'm learning something new!\n                </p></div> <div class=\"text-wrapper about-interests\" data-v-2436bee2><p data-v-2436bee2><strong data-v-2436bee2>From my LinkedIn:</strong> I'm a software developer, technology enthusiast, and geek with an appreciation for art. \n                    My primary objective is to work with other self-motivated individuals to create great things. \n                    I love games, challenges, and solving interesting problems.\n                </p> <p data-v-2436bee2>\n                    My other interests include going to the gym, philosophy, Japanese culture, and my mustang.\n                </p> <p data-v-2436bee2>\n                    Current interests: Vue.js, Unity Engine, VR/AR, and Quantum assembly.\n                </p></div></div></section>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_extra_vue__ = __webpack_require__(27);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f4524400_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_extra_vue__ = __webpack_require__(123);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(119),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "ef9f9b14"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_extra_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f4524400_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_extra_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_friends_vue__ = __webpack_require__(28);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c76c0a9_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_friends_vue__ = __webpack_require__(122);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(121),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c76c0a9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "7e45e1fb"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_friends_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c76c0a9_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_friends_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"friends-container view-height"},[_vm._ssrNode("<h1 data-v-7c76c0a9>Friends</h1> <ul class=\"friend-site-list\" data-v-7c76c0a9>"+(_vm._ssrList((_vm.friends),function(friend){return ("<li class=\"friend-site-item\" data-v-7c76c0a9><a"+(_vm._ssrAttr("href",friend.url))+" target=\"_blank\" data-v-7c76c0a9><div class=\"friend-site-wrapper\" data-v-7c76c0a9><img"+(_vm._ssrAttr("src",friend.screenshot))+(_vm._ssrAttr("alt",friend.name))+" class=\"site-image\" data-v-7c76c0a9> <span data-v-7c76c0a9>"+_vm._ssrEscape(_vm._s(friend.name))+"</span></div></a></li>")}))+"</ul>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"extras-container"},[_vm._ssrNode("<h1>Extra</h1> "),_vm._ssrNode("<section id=\"friend-sites \">","</section>",[_c('friend-sites')],1)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_projects_vue__ = __webpack_require__(29);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_634c6616_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_projects_vue__ = __webpack_require__(149);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "5cf8494d"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_projects_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_634c6616_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_projects_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_section_vue__ = __webpack_require__(30);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d9d614a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_section_vue__ = __webpack_require__(148);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(126),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "03c53aa4"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_section_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d9d614a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_section_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_vue__ = __webpack_require__(31);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f067141_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_vue__ = __webpack_require__(147);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(128),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "998f80c0"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f067141_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_title_vue__ = __webpack_require__(32);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_606768bc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_title_vue__ = __webpack_require__(131);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(130),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "047f1b2a"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_title_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_606768bc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_title_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-title title-text skew-20 backdrop-red"},[_vm._ssrNode("<h2 class=\"skew-minus-20\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_icon_vue__ = __webpack_require__(33);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_694dbae2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_icon_vue__ = __webpack_require__(134);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(133),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-694dbae2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "b3203494"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_icon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_694dbae2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_icon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-image"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.project.icon))+(_vm._ssrAttr("alt",_vm.project.iconAlt))+" data-v-694dbae2>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_description_vue__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2799b874_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_description_vue__ = __webpack_require__(137);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(136),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2799b874"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "ecb7cc62"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_description_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2799b874_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_description_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-description"},[_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.description)+" ")+"<span class=\"read-more\" data-v-2799b874>Read More</span>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_technology_panel_vue__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19632b82_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_technology_panel_vue__ = __webpack_require__(143);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(139),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "1334eec0"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_technology_panel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19632b82_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_technology_panel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return technologyResolver; });
var techDictionary = {
    'uikit': 'apple',
    'foundation': 'apple',
    'superspritesurface': 'sss'
};

var technologyResolver = {
    'classNameForTech': function classNameForTech(tech) {
        var name = tech;
        if (typeof techDictionary[tech] !== 'undefined') {
            name = techDictionary[tech];
        }
        return 'tech-icon--' + name;
    }
};

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-tech-icons"},[_vm._ssrNode((_vm._ssrList((_vm.iconClasses),function(icon){return ("<div class=\"tech-wrapper\"><i"+(_vm._ssrAttr("alt",icon))+(_vm._ssrClass(null,'tech-icon ' + icon))+"></i></div>")})))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mobileClassWrapper('project-tech')},[_c('project-technology',{attrs:{"tech":_vm.project.technologies.platforms}}),_vm._ssrNode(" "),_c('project-technology',{attrs:{"tech":_vm.project.technologies.languages}}),_vm._ssrNode(" "),_c('project-technology',{attrs:{"tech":_vm.project.technologies.frameworks}})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_dates_vue__ = __webpack_require__(38);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04ece656_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_dates_vue__ = __webpack_require__(146);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(145),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-04ece656"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "6f437818"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_project_dates_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04ece656_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_project_dates_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-dates"},[_c('media',{attrs:{"query":{ maxWidth: _vm.mobileWidth }},on:{"media-enter":_vm.mediaEnterMobile,"media-leave":_vm.mediaEnterTablet}}),_vm._ssrNode(" "),_c('media',{attrs:{"query":{ maxWidth: _vm.tabletWidth, minWidth: _vm.mobileWidth }},on:{"media-enter":_vm.mediaEnterTablet,"media-leave":_vm.mediaLeaveTablet}}),_vm._ssrNode(" <div class=\"project-date date--updated\" data-v-04ece656>"+((_vm.showFullDates)?("<span data-v-04ece656>Updated: </span>"):"<!---->")+_vm._ssrEscape("\n        "+_vm._s(_vm.formattedDate(_vm.project.last_updated))+"\n    ")+"</div> "+((_vm.showFullDates)?("<div class=\"project-date date--created\" data-v-04ece656><span data-v-04ece656>Created: </span>"+_vm._ssrEscape("\n        "+_vm._s(_vm.formattedDate(_vm.project.date_started))+"\n    ")+"</div>"):"<!---->"))],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-wrapper"},[_c('router-link',{staticClass:"project",attrs:{"tag":"article","to":_vm.getRoute(),"tabindex":"0","append":""}},[_c('project-icon',{attrs:{"project":_vm.project}}),_vm._v(" "),_c('div',{staticClass:"project-media backdrop-sky"},[_c('project-title',{attrs:{"title":_vm.project.title}}),_vm._v(" "),_c('project-tech',{attrs:{"project":_vm.project}}),_vm._v(" "),_c('project-description',{attrs:{"description":_vm.project.shortDescription}}),_vm._v(" "),_c('project-dates',{attrs:{"project":_vm.project}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"project-section"}},[_vm._ssrNode("<div class=\"controls-container\"><div class=\"filter-controls\"><div class=\"filter-item\"><button aria-label=\"sort projects by date created\" class=\"button\"><span>Date Created</span> <span class=\"icon is-small icon--text\">\n                        ▼\n                    </span></button></div> <div class=\"filter-item\"><button aria-label=\"sort projects by last updated\" class=\"button\"><span>Last Update</span> <span class=\"icon is-small icon--text\">\n                        ▼\n                    </span></button></div></div></div> "),_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(_vm.showSpinner)?_c('div',{staticClass:"spinner-container content"},[_c('div',{staticClass:"spinner"},[_c('div',{staticClass:"loader"})])]):_vm._e(),_vm._v(" "),(!_vm.showSpinner)?_c('div',{staticClass:"projects-container no-focus push-up-animation"},[_c('transition-group',{staticClass:"projects-list",attrs:{"name":"project","tag":"div"}},_vm._l((_vm.projectsModel),function(project){return _c('div',{key:project._id,ref:"projects",refInFor:true,class:{ 'project-container' : true }},[_c('project',{attrs:{"project":project,"data-id":project._id}})],1)}))],1):_vm._e()])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"projects-container"},[_vm._ssrNode("<h1>Projects</h1> "),_c('project-section')],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_vue__ = __webpack_require__(39);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0585fa3d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_vue__ = __webpack_require__(158);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(151),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0585fa3d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "c8b2b3a6"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0585fa3d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 151 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_job_vue__ = __webpack_require__(40);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2305c319_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_job_vue__ = __webpack_require__(154);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(153),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "dd3da7c6"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_job_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2305c319_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_job_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 153 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"job-container view-height"},[_c('transition',{attrs:{"name":"fade-slow"}},[(_vm.showOnScroll)?_c('div',{staticClass:"job-wrapper"},[_c('div',{class:'company-name title-text ' + _vm.job.bannerClass},[_c('h2',{class:_vm.job.textColor},[_vm._v(_vm._s(_vm.job.company))])]),_vm._v(" "),_c('job-technology',{attrs:{"tech":_vm.job.technologies}}),_vm._v(" "),_c('div',{staticClass:"job-title job-detail"},[_c('h3',[_vm._v(_vm._s(_vm.job.title))])]),_vm._v(" "),_c('div',{staticClass:"max-1024 job-detail job-description backdrop-dark-blue"},[_c('h3',[_vm._v("Primary Achievements:")]),_vm._v(" "),_vm._l((_vm.job.achievements),function(achievement){return _c('div',{key:achievement},[_c('li',{staticClass:"job-achievement"},[_vm._v("\n                        "+_vm._s(achievement)+"\n                    ")])])})],2),_vm._v(" "),_c('div',{staticClass:"job-detail"},[_c('div',{staticClass:"job-links"},[_c('h3',[_vm._v("Links:")]),_vm._v(" "),_vm._l((_vm.job.links),function(link){return _c('ul',{key:link.name},[_c('a',{attrs:{"href":link.href}},[_c('li',{staticClass:"job-link"},[_vm._v("\n                                "+_vm._s(link.name)+"\n                            ")])])])})],2)])],1):_vm._e()])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var technologies = ['html', 'css', 'js', 'jquery', 'angular', 'bash', 'symfony', 'mysql', 'php', 'apache'];

var achievements = ['Wrote and designed framework and modular components for frontend SDK.', 'Created web APIs to help drive frontend Content Cloud experiences.', 'Rewrote and refactored legacy code to make it easier to maintain and extend.', 'Added frontend components to Content Cloud integrating with 3rd party software such as Adobe Experience Manager.'];

var links = [{
    'name': 'thismoment.com',
    'href': '//www.thismoment.com'
}, {
    'name': 'Content Cloud Promo',
    'href': '//www.youtube.com/watch?v=fhoLu9UnusY'
}];

var company = 'thismoment';

var title = 'Software Engineer (Tech Lead)';

var bannerClass = 'backdrop-thismoment';

/* harmony default export */ __webpack_exports__["a"] = ({
    technologies: technologies,
    achievements: achievements,
    links: links,
    company: company,
    title: title,
    bannerClass: bannerClass
});

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var technologies = ['ios', 'apple', 'objc', 'swift', 'cocoapods', 'html', 'css', 'js', 'angular', 'bash'];

var achievements = ['Fixed core issues, bugs, and crashes within the rewardStyle iOS influencer app.', 'Built new features and maintained legacy code inside the influencer app. The influencer app was used to post 1k+ original pieces of content daily by 12k+ publishers. Those posts engaged 2.3M+ LIKEtoKNOW.it users generating $210 million in sales to retail partners.', 'Developed part of the frontend web experience for rewardStyle\'s Display product.', 'Integration of new rewardStyle APIs for mobile app consumption.'];

var links = [{
    'name': 'rewardStyle.com',
    'href': '//www.rewardstyle.com'
}, {
    'name': 'influencer app',
    'href': '//itunes.apple.com/us/app/rewardstyle/id632918824'
}, {
    'name': 'LIKEtoKNOW.it',
    'href': '//www.liketoknow.it'
}, {
    'name': 'consumer app',
    'href': '//itunes.apple.com/us/app/liketoknow-it/id1154027990'
}];

var company = 'rewardStyle + LIKEtoKNOW.it';

var title = 'Software Engineer (iOS/Full-Stack)';

var bannerClass = 'backdrop-sky';

var textColor = 'dark-text';

/* harmony default export */ __webpack_exports__["a"] = ({
    technologies: technologies,
    achievements: achievements,
    links: links,
    company: company,
    title: title,
    bannerClass: bannerClass,
    textColor: textColor
});

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var technologies = ['html', 'css', 'js', 'jquery', 'linux', 'bash', 'php', 'magento', 'mysql', 'realbasic'];

var achievements = ['Reduced the time creating and uploading products to Hobbyfan by automating the process, an invaluable increase in efficiency.', 'Implemented various carts and payment systems.', 'Worked in a small team and was responsible for a variety of functions including processing orders and organizing shipments for conventions.', 'Created software to help automize business processes.'];

var links = [{
    'name': 'hobbyfan.com',
    'href': '//www.hobbyfan.com'
}];

var company = 'hobbyfan';

var title = 'Web Developer (Part Time)';

var bannerClass = 'backdrop-hobbyfan';

/* harmony default export */ __webpack_exports__["a"] = ({
    technologies: technologies,
    achievements: achievements,
    links: links,
    company: company,
    title: title,
    bannerClass: bannerClass
});

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume-container"},[_vm._ssrNode("<h1 class=\"content-title\" data-v-0585fa3d>Work Experience</h1> "),_c('resume-job',{attrs:{"job":_vm.rewardstyle,"scroll":_vm.scrollY}}),_vm._ssrNode(" "),_c('resume-job',{attrs:{"job":_vm.thismoment,"scroll":_vm.scrollY}}),_vm._ssrNode(" "),_c('resume-job',{attrs:{"job":_vm.hobbyfan,"scroll":_vm.scrollY}})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_032d9621_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_not_found_vue__ = __webpack_require__(160);
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_032d9621_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_not_found_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',[_vm._ssrNode("Oops, page not found!")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = require("vue-clipboard2");

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = require("vue-lazyload");

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = require("vue-mq");

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map