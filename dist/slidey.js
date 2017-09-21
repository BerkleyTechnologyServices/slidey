/**
 * @bts/slidey JavaScript Library v1.1.2
 *
 * @license Apache 2.0 (https://github.com/BerkleyTechnologyServices/slidey/blob/master/LICENSE)
 *
 * Made with ♥ by Nick Woodward <nick@salte.io>, David Marcella <marcella2113@gmail.com>
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define("slidey", ["angular"], factory);
	else if(typeof exports === 'object')
		exports["slidey"] = factory(require("angular"));
	else
		root["slidey"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./slidey.module.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(/*! angular */ 1);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _slideyComponent = __webpack_require__(/*! ./slidey.component.js */ 2);\n\nvar _slideyComponent2 = _interopRequireDefault(_slideyComponent);\n\nvar _slideyConfig = __webpack_require__(/*! ./slidey.config.js */ 5);\n\nvar _slideyConfig2 = _interopRequireDefault(_slideyConfig);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _module = _angular2.default.module('bts.slidey', []);\n\n_module.config(_slideyConfig2.default);\n_module.component('btsSlidey', _slideyComponent2.default);\n\nexports.default = _module.name;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2xpZGV5Lm1vZHVsZS5qcz80YTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHNsaWRleSBmcm9tICcuL3NsaWRleS5jb21wb25lbnQuanMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL3NsaWRleS5jb25maWcuanMnO1xuXG5jb25zdCBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYnRzLnNsaWRleScsIFtdKTtcblxubW9kdWxlLmNvbmZpZyhjb25maWcpO1xubW9kdWxlLmNvbXBvbmVudCgnYnRzU2xpZGV5Jywgc2xpZGV5KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlLm5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NsaWRleS5tb2R1bGUuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_1__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIj8xMWQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************!*\
  !*** ./slidey.component.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slidey = __webpack_require__(/*! ./slidey.html */ 3);\n\nvar _slidey2 = _interopRequireDefault(_slidey);\n\nvar _slideyController = __webpack_require__(/*! ./slidey.controller.js */ 4);\n\nvar _slideyController2 = _interopRequireDefault(_slideyController);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  require: {\n    parentSlidey: '^^?btsSlidey'\n  },\n  bindings: {\n    opened: '=?',\n    contentWidth: '@',\n    reflowContainer: '@',\n    onClose: '&?',\n    onCloseFinished: '&?'\n  },\n  controller: _slideyController2.default,\n  template: _slidey2.default,\n  transclude: true\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2xpZGV5LmNvbXBvbmVudC5qcz8wYjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3NsaWRleS5odG1sJztcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vc2xpZGV5LmNvbnRyb2xsZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlcXVpcmU6IHtcbiAgICBwYXJlbnRTbGlkZXk6ICdeXj9idHNTbGlkZXknXG4gIH0sXG4gIGJpbmRpbmdzOiB7XG4gICAgb3BlbmVkOiAnPT8nLFxuICAgIGNvbnRlbnRXaWR0aDogJ0AnLFxuICAgIHJlZmxvd0NvbnRhaW5lcjogJ0AnLFxuICAgIG9uQ2xvc2U6ICcmPycsXG4gICAgb25DbG9zZUZpbmlzaGVkOiAnJj8nXG4gIH0sXG4gIGNvbnRyb2xsZXIsXG4gIHRlbXBsYXRlLFxuICB0cmFuc2NsdWRlOiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zbGlkZXkuY29tcG9uZW50LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFiQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************!*\
  !*** ./slidey.html ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"slidey-overlay\\\" ng-click=\\\"$ctrl.close()\\\"></div>\\n<div class=\\\"slidey-content-wrapper\\\">\\n    <div class=\\\"slidey-content\\\" ng-transclude></div>\\n</div>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NsaWRleS5odG1sPzViN2QiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRleS1vdmVybGF5XFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuY2xvc2UoKVxcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwic2xpZGV5LWNvbnRlbnQtd3JhcHBlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNsaWRleS1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2xpZGV5Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************!*\
  !*** ./slidey.controller.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SlideyController = function () {\n  function SlideyController($scope, $element) {\n    _classCallCheck(this, SlideyController);\n\n    this.$scope = $scope;\n    this.$element = $element;\n  }\n\n  _createClass(SlideyController, [{\n    key: '$onInit',\n    value: function $onInit() {\n      this.opened = false;\n      this.contentWidth = '80%';\n      this.$scope.$watch('$ctrl.opened', this._onOpenedChanged.bind(this));\n    }\n  }, {\n    key: '$postLink',\n    value: function $postLink() {\n      this._wrapper = this.$element[0].querySelector('.slidey-content-wrapper');\n      this._content = this.$element[0].querySelector('.slidey-content');\n      this._overlay = this.$element[0].querySelector('.slidey-overlay');\n      this.setNested(this._nested);\n      this._wrapper.addEventListener('transitionend', this._onTransitionEnd.bind(this), {\n        passive: true\n      });\n    }\n  }, {\n    key: '$onChanges',\n    value: function $onChanges(changes) {\n      if (changes.contentWidth) {\n        this.setNested(this._nested);\n      }\n\n      if (changes.reflowContainer) {\n        this._container = this.reflowContainer ? document.getElementById(this.reflowContainer) : null;\n        this.adjustContainer();\n      }\n    }\n  }, {\n    key: 'open',\n    value: function open() {\n      this.opened = true;\n    }\n  }, {\n    key: 'close',\n    value: function close() {\n      this.opened = false;\n      if (this.onClose) {\n        this.onClose();\n      }\n    }\n  }, {\n    key: '_onOpenedChanged',\n    value: function _onOpenedChanged() {\n      if (this.opened) {\n        this.$element.addClass('opened');\n      } else {\n        this.$element.removeClass('opened');\n      }\n\n      if (this.parentSlidey) {\n        this._container = this._container || this.parentSlidey._container;\n        this.parentSlidey.setNested(this.opened);\n      }\n      this.adjustContainer();\n    }\n  }, {\n    key: '_onTransitionEnd',\n    value: function _onTransitionEnd(event) {\n      var _this = this;\n\n      // Bail if it wasn't the transform that changed\n      if (event.propertyName !== 'transform') return;\n\n      if (!this.opened && this.onCloseFinished) {\n        this.$scope.$apply(function () {\n          _this.onCloseFinished();\n        });\n      }\n    }\n  }, {\n    key: 'setNested',\n    value: function setNested(nested) {\n      this._nested = nested;\n      if (!this._wrapper) {\n        return;\n      }\n\n      if (this._nested) {\n        this._contentObserver && this._contentObserver.disconnect();\n        this._wrapper.style.width = '100%';\n        this.$element.addClass('nested');\n      } else {\n        this._wrapper.style.width = this.contentWidth;\n        this.$element.removeClass('nested');\n        this.adjustContainer();\n      }\n    }\n  }, {\n    key: 'adjustContainer',\n    value: function adjustContainer() {\n      var _this2 = this;\n\n      if (!window.MutationObserver) {\n        throw new Error('Unfortunately, this browser doesn\\'t support the MutationObserver API!');\n      }\n      if (!this._container) {\n        return;\n      }\n      this._containerObserver && this._containerObserver.disconnect();\n      this._contentObserver && this._contentObserver.disconnect();\n      if (this.opened) {\n        // We need to watch the content for changes to cover instances\n        // where we have async calls or are waiting for angular to bind\n        this._contentObserver = new MutationObserver(function (mutations) {\n          if (!_this2.opened) return;\n\n          _this2._container.style.height = _this2.contentHeight;\n        });\n        this._contentObserver.observe(this._wrapper, {\n          childList: true,\n          subtree: true,\n          attributes: true,\n          attributeFilter: ['class', 'style']\n        });\n        this._container.style.height = this.contentHeight;\n      } else if (this.parentSlidey && this.parentSlidey.opened) {\n        this._container.style.height = this.parentSlidey.contentHeight;\n      } else if (!this.parentSlidey) {\n        // We need to watch the container for changes to cover instances\n        // where we have async calls or are waiting for angular to bind\n        this._containerObserver = new MutationObserver(function (mutations) {\n          if (_this2.opened) return;\n\n          _this2._containerHeight = _this2._container.scrollHeight;\n        });\n        this._containerObserver.observe(this._container, {\n          childList: true,\n          subtree: true,\n          attributes: true,\n          attributeFilter: ['class', 'style']\n        });\n        this._container.style.height = '';\n      }\n    }\n  }, {\n    key: 'containerHeight',\n    get: function get() {\n      if (!this._containerHeight) {\n        this._containerHeight = this.parentSlidey && this.parentSlidey._containerHeight || this._container.scrollHeight;\n      }\n      return this._containerHeight;\n    }\n  }, {\n    key: 'contentHeight',\n    get: function get() {\n      return this._content.scrollHeight < this.containerHeight ? this.containerHeight + 'px' : this._content.scrollHeight + 'px';\n    }\n  }]);\n\n  return SlideyController;\n}();\n\nexports.default = SlideyController;\n\n\nSlideyController.$inject = ['$scope', '$element'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2xpZGV5LmNvbnRyb2xsZXIuanM/MDIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgfVxuXG4gICRvbkluaXQoKSB7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNvbnRlbnRXaWR0aCA9ICc4MCUnO1xuICAgIHRoaXMuJHNjb3BlLiR3YXRjaCgnJGN0cmwub3BlbmVkJywgdGhpcy5fb25PcGVuZWRDaGFuZ2VkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgJHBvc3RMaW5rKCkge1xuICAgIHRoaXMuX3dyYXBwZXIgPSB0aGlzLiRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXktY29udGVudC13cmFwcGVyJyk7XG4gICAgdGhpcy5fY29udGVudCA9IHRoaXMuJGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignLnNsaWRleS1jb250ZW50Jyk7XG4gICAgdGhpcy5fb3ZlcmxheSA9IHRoaXMuJGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignLnNsaWRleS1vdmVybGF5Jyk7XG4gICAgdGhpcy5zZXROZXN0ZWQodGhpcy5fbmVzdGVkKTtcbiAgICB0aGlzLl93cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLl9vblRyYW5zaXRpb25FbmQuYmluZCh0aGlzKSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgJG9uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuY29udGVudFdpZHRoKSB7XG4gICAgICB0aGlzLnNldE5lc3RlZCh0aGlzLl9uZXN0ZWQpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnJlZmxvd0NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5yZWZsb3dDb250YWluZXIgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnJlZmxvd0NvbnRhaW5lcikgOiBudWxsO1xuICAgICAgdGhpcy5hZGp1c3RDb250YWluZXIoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMub25DbG9zZSkge1xuICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgX29uT3BlbmVkQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ29wZW5lZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdvcGVuZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnRTbGlkZXkpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLnBhcmVudFNsaWRleS5fY29udGFpbmVyO1xuICAgICAgdGhpcy5wYXJlbnRTbGlkZXkuc2V0TmVzdGVkKHRoaXMub3BlbmVkKTtcbiAgICB9XG4gICAgdGhpcy5hZGp1c3RDb250YWluZXIoKTtcbiAgfVxuXG4gIF9vblRyYW5zaXRpb25FbmQoZXZlbnQpIHtcbiAgICAvLyBCYWlsIGlmIGl0IHdhc24ndCB0aGUgdHJhbnNmb3JtIHRoYXQgY2hhbmdlZFxuICAgIGlmIChldmVudC5wcm9wZXJ0eU5hbWUgIT09ICd0cmFuc2Zvcm0nKSByZXR1cm47XG5cbiAgICBpZiAoIXRoaXMub3BlbmVkICYmIHRoaXMub25DbG9zZUZpbmlzaGVkKSB7XG4gICAgICB0aGlzLiRzY29wZS4kYXBwbHkoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2xvc2VGaW5pc2hlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmVzdGVkKG5lc3RlZCkge1xuICAgIHRoaXMuX25lc3RlZCA9IG5lc3RlZDtcbiAgICBpZiAoIXRoaXMuX3dyYXBwZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbmVzdGVkKSB7XG4gICAgICB0aGlzLl9jb250ZW50T2JzZXJ2ZXIgJiYgdGhpcy5fY29udGVudE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuX3dyYXBwZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCduZXN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fd3JhcHBlci5zdHlsZS53aWR0aCA9IHRoaXMuY29udGVudFdpZHRoO1xuICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnbmVzdGVkJyk7XG4gICAgICB0aGlzLmFkanVzdENvbnRhaW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIGFkanVzdENvbnRhaW5lcigpIHtcbiAgICBpZiAoIXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZm9ydHVuYXRlbHksIHRoaXMgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCB0aGUgTXV0YXRpb25PYnNlcnZlciBBUEkhJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lck9ic2VydmVyICYmIHRoaXMuX2NvbnRhaW5lck9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLl9jb250ZW50T2JzZXJ2ZXIgJiYgdGhpcy5fY29udGVudE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gd2F0Y2ggdGhlIGNvbnRlbnQgZm9yIGNoYW5nZXMgdG8gY292ZXIgaW5zdGFuY2VzXG4gICAgICAvLyB3aGVyZSB3ZSBoYXZlIGFzeW5jIGNhbGxzIG9yIGFyZSB3YWl0aW5nIGZvciBhbmd1bGFyIHRvIGJpbmRcbiAgICAgIHRoaXMuX2NvbnRlbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm9wZW5lZCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLmNvbnRlbnRIZWlnaHQ7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NvbnRlbnRPYnNlcnZlci5vYnNlcnZlKHRoaXMuX3dyYXBwZXIsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnLCAnc3R5bGUnXVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5jb250ZW50SGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYXJlbnRTbGlkZXkgJiYgdGhpcy5wYXJlbnRTbGlkZXkub3BlbmVkKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5wYXJlbnRTbGlkZXkuY29udGVudEhlaWdodDtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnBhcmVudFNsaWRleSkge1xuICAgICAgLy8gV2UgbmVlZCB0byB3YXRjaCB0aGUgY29udGFpbmVyIGZvciBjaGFuZ2VzIHRvIGNvdmVyIGluc3RhbmNlc1xuICAgICAgLy8gd2hlcmUgd2UgaGF2ZSBhc3luYyBjYWxscyBvciBhcmUgd2FpdGluZyBmb3IgYW5ndWxhciB0byBiaW5kXG4gICAgICB0aGlzLl9jb250YWluZXJPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3BlbmVkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fY29udGFpbmVySGVpZ2h0ID0gdGhpcy5fY29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fY29udGFpbmVyT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9jb250YWluZXIsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnLCAnc3R5bGUnXVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lckhlaWdodCgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lckhlaWdodCkge1xuICAgICAgdGhpcy5fY29udGFpbmVySGVpZ2h0ID0gdGhpcy5wYXJlbnRTbGlkZXkgJiYgdGhpcy5wYXJlbnRTbGlkZXkuX2NvbnRhaW5lckhlaWdodCB8fCB0aGlzLl9jb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVySGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQuc2Nyb2xsSGVpZ2h0IDwgdGhpcy5jb250YWluZXJIZWlnaHQgPyBgJHt0aGlzLmNvbnRhaW5lckhlaWdodH1weGAgOiBgJHt0aGlzLl9jb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gIH1cbn1cblxuU2xpZGV5Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2xpZGV5LmNvbnRyb2xsZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQTNJQTtBQUNBO0FBQ0E7QUE0SUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************!*\
  !*** ./slidey.config.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var style = document.createElement('style');\n  style.setAttribute('type', 'text/css');\n  style.appendChild(document.createTextNode(_slidey2.default));\n  document.head.appendChild(style);\n};\n\nvar _slidey = __webpack_require__(/*! ./slidey.css */ 6);\n\nvar _slidey2 = _interopRequireDefault(_slidey);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2xpZGV5LmNvbmZpZy5qcz8xOTQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnLi9zbGlkZXkuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2xpZGV5LmNvbmZpZy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************!*\
  !*** ./slidey.css ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = \"bts-slidey {\\n  pointer-events: none;\\n}\\n\\nbts-slidey.opened {\\n  pointer-events: auto;\\n}\\n\\n/* Overlay */\\n\\n.slidey-overlay {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  background-color: black;\\n  transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 0.5s;\\n  opacity: 0;\\n  z-index: 9999;\\n}\\n\\nbts-slidey.opened > .slidey-overlay {\\n  opacity: 0.15;\\n}\\n\\n/* Content */\\n\\n.slidey-content-wrapper {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: white;\\n  transform: translateX(100%);\\n  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.5s;\\n  transition-property: transform, width, box-shadow;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n  z-index: 9999;\\n}\\n\\nbts-slidey.opened > .slidey-content-wrapper {\\n  transform: translateX(0%);\\n  box-shadow: 0 8px 8px rgba(0,0,0,0.5);\\n}\\n\\nbts-slidey.nested > .slidey-content-wrapper {\\n  overflow-y: hidden;\\n}\\n\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NsaWRleS5jc3M/OTJkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiYnRzLXNsaWRleSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuYnRzLXNsaWRleS5vcGVuZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi8qIE92ZXJsYXkgKi9cXG5cXG4uc2xpZGV5LW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC41cztcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG5idHMtc2xpZGV5Lm9wZW5lZCA+IC5zbGlkZXktb3ZlcmxheSB7XFxuICBvcGFjaXR5OiAwLjE1O1xcbn1cXG5cXG4vKiBDb250ZW50ICovXFxuXFxuLnNsaWRleS1jb250ZW50LXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIHRyYW5zaXRpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC41cztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgd2lkdGgsIGJveC1zaGFkb3c7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuYnRzLXNsaWRleS5vcGVuZWQgPiAuc2xpZGV5LWNvbnRlbnQtd3JhcHBlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgYm94LXNoYWRvdzogMCA4cHggOHB4IHJnYmEoMCwwLDAsMC41KTtcXG59XFxuXFxuYnRzLXNsaWRleS5uZXN0ZWQgPiAuc2xpZGV5LWNvbnRlbnQtd3JhcHBlciB7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zbGlkZXkuY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);
});