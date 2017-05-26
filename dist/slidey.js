/**
 * @bts/slidey JavaScript Library v1.0.0
 *
 * @license Apache 2.0 (https://github.com/BerkleyTechnologyServices/slidey/blob/master/LICENSE)
 *
 * Made with ♥ by Ceci <admin@cecilias.me>, David Marcella <marcella2113@gmail.com>
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
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!*****************************!*\
  !*** ./slidey.component.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slidey = __webpack_require__(/*! ./slidey.html */ 5);\n\nvar _slidey2 = _interopRequireDefault(_slidey);\n\nvar _slideyController = __webpack_require__(/*! ./slidey.controller.js */ 3);\n\nvar _slideyController2 = _interopRequireDefault(_slideyController);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  require: {\n    parentSlidey: '^^?btsSlidey'\n  },\n  bindings: {\n    opened: '=?',\n    contentWidth: '@',\n    reflowContainer: '@',\n    onClose: '&?',\n    onCloseFinished: '&?'\n  },\n  controller: _slideyController2.default,\n  template: _slidey2.default,\n  transclude: true\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2xpZGV5LmNvbXBvbmVudC5qcz8wYjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3NsaWRleS5odG1sJztcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vc2xpZGV5LmNvbnRyb2xsZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlcXVpcmU6IHtcbiAgICBwYXJlbnRTbGlkZXk6ICdeXj9idHNTbGlkZXknXG4gIH0sXG4gIGJpbmRpbmdzOiB7XG4gICAgb3BlbmVkOiAnPT8nLFxuICAgIGNvbnRlbnRXaWR0aDogJ0AnLFxuICAgIHJlZmxvd0NvbnRhaW5lcjogJ0AnLFxuICAgIG9uQ2xvc2U6ICcmPycsXG4gICAgb25DbG9zZUZpbmlzaGVkOiAnJj8nXG4gIH0sXG4gIGNvbnRyb2xsZXIsXG4gIHRlbXBsYXRlLFxuICB0cmFuc2NsdWRlOiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zbGlkZXkuY29tcG9uZW50LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFiQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!**************************!*\
  !*** ./slidey.config.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var style = document.createElement('style');\n  style.setAttribute('type', 'text/css');\n  style.appendChild(document.createTextNode(_slidey2.default));\n  document.head.appendChild(style);\n};\n\nvar _slidey = __webpack_require__(/*! ./slidey.css */ 6);\n\nvar _slidey2 = _interopRequireDefault(_slidey);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2xpZGV5LmNvbmZpZy5qcz8xOTQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnLi9zbGlkZXkuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2xpZGV5LmNvbmZpZy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_2__;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIj8xMWQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./slidey.controller.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SlideyController = function () {\n  function SlideyController($scope, $element) {\n    _classCallCheck(this, SlideyController);\n\n    this.$scope = $scope;\n    this.$element = $element;\n  }\n\n  _createClass(SlideyController, [{\n    key: '$onInit',\n    value: function $onInit() {\n      this.opened = false;\n      this.contentWidth = '80%';\n      this.$scope.$watch('$ctrl.opened', this._onOpenedChanged.bind(this));\n    }\n  }, {\n    key: '$postLink',\n    value: function $postLink() {\n      this._wrapper = this.$element[0].querySelector('.slidey-content-wrapper');\n      this._content = this.$element[0].querySelector('.slidey-content');\n      this._overlay = this.$element[0].querySelector('.slidey-overlay');\n      this.setNested(this._nested);\n      this._wrapper.addEventListener('transitionend', this._onTransitionEnd.bind(this), {\n        passive: true\n      });\n    }\n  }, {\n    key: '$onChanges',\n    value: function $onChanges(changes) {\n      if (changes.contentWidth) {\n        this.setNested(this._nested);\n      }\n\n      if (changes.reflowContainer) {\n        this._container = this.reflowContainer ? document.getElementById(this.reflowContainer) : null;\n        this.adjustContainer();\n      }\n    }\n  }, {\n    key: 'open',\n    value: function open() {\n      this.opened = true;\n    }\n  }, {\n    key: 'close',\n    value: function close() {\n      this.opened = false;\n      if (this.onClose) {\n        this.onClose();\n      }\n    }\n  }, {\n    key: '_onOpenedChanged',\n    value: function _onOpenedChanged() {\n      if (this.opened) {\n        this.$element.addClass('opened');\n        this._overlay.scrollIntoView({\n          behavior: 'smooth'\n        });\n      } else {\n        this.$element.removeClass('opened');\n      }\n\n      if (this.parentSlidey) {\n        this._container = this._container || this.parentSlidey._container;\n        this.parentSlidey.setNested(this.opened);\n      }\n      this.adjustContainer();\n    }\n  }, {\n    key: '_onTransitionEnd',\n    value: function _onTransitionEnd(event) {\n      var _this = this;\n\n      // Bail if it wasn't the transform that changed\n      if (event.propertyName !== 'transform') return;\n\n      if (!this.opened && this.onCloseFinished) {\n        this.$scope.$apply(function () {\n          _this.onCloseFinished();\n        });\n      }\n    }\n  }, {\n    key: 'setNested',\n    value: function setNested(nested) {\n      this._nested = nested;\n      if (!this._wrapper) {\n        return;\n      }\n\n      if (this._nested) {\n        this._contentObserver && this._contentObserver.disconnect();\n        this._wrapper.style.width = '100%';\n        this.$element.addClass('nested');\n      } else {\n        this._wrapper.style.width = this.contentWidth;\n        this.$element.removeClass('nested');\n      }\n    }\n  }, {\n    key: 'adjustContainer',\n    value: function adjustContainer() {\n      var _this2 = this;\n\n      if (!window.MutationObserver) {\n        throw new Error('Unfortunately, this browser doesn\\'t support the MutationObserver API!');\n      }\n      if (!this._container) {\n        return;\n      }\n      this._containerObserver && this._containerObserver.disconnect();\n      this._contentObserver && this._contentObserver.disconnect();\n      if (this.opened) {\n        // We need to watch the content for changes to cover instances\n        // where we have async calls or are waiting for angular to bind\n        this._contentObserver = new MutationObserver(function (mutations) {\n          if (!_this2.opened) return;\n\n          _this2._container.style.height = _this2.contentHeight;\n        });\n        this._contentObserver.observe(this._wrapper, {\n          childList: true,\n          subtree: true\n        });\n        this._container.style.height = this.contentHeight;\n      } else if (this.parentSlidey && this.parentSlidey.opened) {\n        // We're closing to a parent slidey, so we should match its height.\n        this._container.style.height = this.parentSlidey.contentHeight;\n      } else {\n        // We need to watch the container for changes to cover instances\n        // where we have async calls or are waiting for angular to bind\n        this._containerObserver = new MutationObserver(function (mutations) {\n          if (_this2.opened) return;\n\n          _this2._containerHeight = _this2._container.scrollHeight;\n        });\n        this._containerObserver.observe(this._container, {\n          childList: true,\n          subtree: true\n        });\n        this._container.style.height = '';\n      }\n    }\n  }, {\n    key: 'containerHeight',\n    get: function get() {\n      if (!this._containerHeight) {\n        this._containerHeight = this.parentSlidey && this.parentSlidey._containerHeight || this._container.scrollHeight;\n      }\n      return this._containerHeight;\n    }\n  }, {\n    key: 'contentHeight',\n    get: function get() {\n      return this._content.scrollHeight < this.containerHeight ? this.containerHeight + 'px' : this._content.scrollHeight + 'px';\n    }\n  }]);\n\n  return SlideyController;\n}();\n\nexports.default = SlideyController;\n\n\nSlideyController.$inject = ['$scope', '$element'];//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2xpZGV5LmNvbnRyb2xsZXIuanM/MDIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgfVxuXG4gICRvbkluaXQoKSB7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNvbnRlbnRXaWR0aCA9ICc4MCUnO1xuICAgIHRoaXMuJHNjb3BlLiR3YXRjaCgnJGN0cmwub3BlbmVkJywgdGhpcy5fb25PcGVuZWRDaGFuZ2VkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgJHBvc3RMaW5rKCkge1xuICAgIHRoaXMuX3dyYXBwZXIgPSB0aGlzLiRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXktY29udGVudC13cmFwcGVyJyk7XG4gICAgdGhpcy5fY29udGVudCA9IHRoaXMuJGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignLnNsaWRleS1jb250ZW50Jyk7XG4gICAgdGhpcy5fb3ZlcmxheSA9IHRoaXMuJGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignLnNsaWRleS1vdmVybGF5Jyk7XG4gICAgdGhpcy5zZXROZXN0ZWQodGhpcy5fbmVzdGVkKTtcbiAgICB0aGlzLl93cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLl9vblRyYW5zaXRpb25FbmQuYmluZCh0aGlzKSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgJG9uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuY29udGVudFdpZHRoKSB7XG4gICAgICB0aGlzLnNldE5lc3RlZCh0aGlzLl9uZXN0ZWQpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnJlZmxvd0NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5yZWZsb3dDb250YWluZXIgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnJlZmxvd0NvbnRhaW5lcikgOiBudWxsO1xuICAgICAgdGhpcy5hZGp1c3RDb250YWluZXIoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMub25DbG9zZSkge1xuICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgX29uT3BlbmVkQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgdGhpcy5fb3ZlcmxheS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcmVudFNsaWRleSkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMucGFyZW50U2xpZGV5Ll9jb250YWluZXI7XG4gICAgICB0aGlzLnBhcmVudFNsaWRleS5zZXROZXN0ZWQodGhpcy5vcGVuZWQpO1xuICAgIH1cbiAgICB0aGlzLmFkanVzdENvbnRhaW5lcigpO1xuICB9XG5cbiAgX29uVHJhbnNpdGlvbkVuZChldmVudCkge1xuICAgIC8vIEJhaWwgaWYgaXQgd2Fzbid0IHRoZSB0cmFuc2Zvcm0gdGhhdCBjaGFuZ2VkXG4gICAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSAhPT0gJ3RyYW5zZm9ybScpIHJldHVybjtcblxuICAgIGlmICghdGhpcy5vcGVuZWQgJiYgdGhpcy5vbkNsb3NlRmluaXNoZWQpIHtcbiAgICAgIHRoaXMuJHNjb3BlLiRhcHBseSgoKSA9PiB7XG4gICAgICAgIHRoaXMub25DbG9zZUZpbmlzaGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZXROZXN0ZWQobmVzdGVkKSB7XG4gICAgdGhpcy5fbmVzdGVkID0gbmVzdGVkO1xuICAgIGlmICghdGhpcy5fd3JhcHBlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9uZXN0ZWQpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnRPYnNlcnZlciAmJiB0aGlzLl9jb250ZW50T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fd3JhcHBlci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ25lc3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl93cmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy5jb250ZW50V2lkdGg7XG4gICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCduZXN0ZWQnKTtcbiAgICB9XG4gIH1cblxuICBhZGp1c3RDb250YWluZXIoKSB7XG4gICAgaWYgKCF3aW5kb3cuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmZvcnR1bmF0ZWx5LCB0aGlzIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgdGhlIE11dGF0aW9uT2JzZXJ2ZXIgQVBJIScpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJPYnNlcnZlciAmJiB0aGlzLl9jb250YWluZXJPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5fY29udGVudE9ic2VydmVyICYmIHRoaXMuX2NvbnRlbnRPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHdhdGNoIHRoZSBjb250ZW50IGZvciBjaGFuZ2VzIHRvIGNvdmVyIGluc3RhbmNlc1xuICAgICAgLy8gd2hlcmUgd2UgaGF2ZSBhc3luYyBjYWxscyBvciBhcmUgd2FpdGluZyBmb3IgYW5ndWxhciB0byBiaW5kXG4gICAgICB0aGlzLl9jb250ZW50T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5vcGVuZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5jb250ZW50SGVpZ2h0O1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jb250ZW50T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl93cmFwcGVyLCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5jb250ZW50SGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYXJlbnRTbGlkZXkgJiYgdGhpcy5wYXJlbnRTbGlkZXkub3BlbmVkKSB7XG4gICAgICAvLyBXZSdyZSBjbG9zaW5nIHRvIGEgcGFyZW50IHNsaWRleSwgc28gd2Ugc2hvdWxkIG1hdGNoIGl0cyBoZWlnaHQuXG4gICAgICB0aGlzLl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5wYXJlbnRTbGlkZXkuY29udGVudEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2UgbmVlZCB0byB3YXRjaCB0aGUgY29udGFpbmVyIGZvciBjaGFuZ2VzIHRvIGNvdmVyIGluc3RhbmNlc1xuICAgICAgLy8gd2hlcmUgd2UgaGF2ZSBhc3luYyBjYWxscyBvciBhcmUgd2FpdGluZyBmb3IgYW5ndWxhciB0byBiaW5kXG4gICAgICB0aGlzLl9jb250YWluZXJPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3BlbmVkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fY29udGFpbmVySGVpZ2h0ID0gdGhpcy5fY29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fY29udGFpbmVyT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9jb250YWluZXIsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVySGVpZ2h0KCkge1xuICAgIGlmICghdGhpcy5fY29udGFpbmVySGVpZ2h0KSB7XG4gICAgICB0aGlzLl9jb250YWluZXJIZWlnaHQgPSB0aGlzLnBhcmVudFNsaWRleSAmJiB0aGlzLnBhcmVudFNsaWRleS5fY29udGFpbmVySGVpZ2h0IHx8IHRoaXMuX2NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJIZWlnaHQ7XG4gIH1cblxuICBnZXQgY29udGVudEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudC5zY3JvbGxIZWlnaHQgPCB0aGlzLmNvbnRhaW5lckhlaWdodCA/IGAke3RoaXMuY29udGFpbmVySGVpZ2h0fXB4YCA6IGAke3RoaXMuX2NvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxufVxuXG5TbGlkZXlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCddO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zbGlkZXkuY29udHJvbGxlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQTFJQTtBQUNBO0FBQ0E7QUEySUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */
/* no static exports found */
/* all exports used */
/*!**************************!*\
  !*** ./slidey.module.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(/*! angular */ 2);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _slideyComponent = __webpack_require__(/*! ./slidey.component.js */ 0);\n\nvar _slideyComponent2 = _interopRequireDefault(_slideyComponent);\n\nvar _slideyConfig = __webpack_require__(/*! ./slidey.config.js */ 1);\n\nvar _slideyConfig2 = _interopRequireDefault(_slideyConfig);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _module = _angular2.default.module('bts.slidey', []);\n\n_module.config(_slideyConfig2.default);\n_module.component('btsSlidey', _slideyComponent2.default);\n\nexports.default = _module.name;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2xpZGV5Lm1vZHVsZS5qcz80YTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHNsaWRleSBmcm9tICcuL3NsaWRleS5jb21wb25lbnQuanMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL3NsaWRleS5jb25maWcuanMnO1xuXG5jb25zdCBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYnRzLnNsaWRleScsIFtdKTtcblxubW9kdWxlLmNvbmZpZyhjb25maWcpO1xubW9kdWxlLmNvbXBvbmVudCgnYnRzU2xpZGV5Jywgc2xpZGV5KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlLm5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NsaWRleS5tb2R1bGUuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 5 */
/* no static exports found */
/* all exports used */
/*!*********************!*\
  !*** ./slidey.html ***!
  \*********************/
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"slidey-overlay\\\" ng-click=\\\"$ctrl.close()\\\"></div>\\n<div class=\\\"slidey-content-wrapper\\\">\\n    <div class=\\\"slidey-content\\\" ng-transclude></div>\\n</div>\\n\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NsaWRleS5odG1sPzgyNTgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRleS1vdmVybGF5XFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuY2xvc2UoKVxcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwic2xpZGV5LWNvbnRlbnQtd3JhcHBlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNsaWRleS1jb250ZW50XFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2xpZGV5Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 6 */
/* no static exports found */
/* all exports used */
/*!********************!*\
  !*** ./slidey.css ***!
  \********************/
/***/ (function(module, exports) {

eval("module.exports = \"slidey {\\n  pointer-events: none;\\n}\\n\\nslidey.opened {\\n  pointer-events: auto;\\n}\\n\\n/* Overlay */\\n\\n.slidey-overlay {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  background-color: black;\\n  transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 0.5s;\\n  opacity: 0;\\n  z-index: 9999;\\n}\\n\\nslidey.opened > .slidey-overlay {\\n  opacity: 0.15;\\n}\\n\\n/* Content */\\n\\n.slidey-content-wrapper {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: white;\\n  transform: translateX(100%);\\n  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.5s;\\n  transition-property: transform, width, box-shadow;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n  z-index: 9999;\\n}\\n\\nslidey.opened > .slidey-content-wrapper {\\n  transform: translateX(0%);\\n  box-shadow: 0 8px 8px rgba(0,0,0,0.5);\\n}\\n\\nslidey.nested > .slidey-content-wrapper {\\n  overflow-y: hidden;\\n}\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NsaWRleS5jc3M/MzNkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwic2xpZGV5IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5zbGlkZXkub3BlbmVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4vKiBPdmVybGF5ICovXFxuXFxuLnNsaWRleS1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuNXM7XFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuc2xpZGV5Lm9wZW5lZCA+IC5zbGlkZXktb3ZlcmxheSB7XFxuICBvcGFjaXR5OiAwLjE1O1xcbn1cXG5cXG4vKiBDb250ZW50ICovXFxuXFxuLnNsaWRleS1jb250ZW50LXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIHRyYW5zaXRpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC41cztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgd2lkdGgsIGJveC1zaGFkb3c7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuc2xpZGV5Lm9wZW5lZCA+IC5zbGlkZXktY29udGVudC13cmFwcGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICBib3gtc2hhZG93OiAwIDhweCA4cHggcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG5cXG5zbGlkZXkubmVzdGVkID4gLnNsaWRleS1jb250ZW50LXdyYXBwZXIge1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2xpZGV5LmNzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);
});