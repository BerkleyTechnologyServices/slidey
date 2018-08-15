/**
 * @bts/slidey JavaScript Library v1.1.6
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
})(window, function(__WEBPACK_EXTERNAL_MODULE_angular__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./slidey.module.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./slidey.component.js":
/*!*****************************!*\
  !*** ./slidey.component.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slidey = __webpack_require__(/*! ./slidey.html */ "./slidey.html");

var _slidey2 = _interopRequireDefault(_slidey);

var _slideyController = __webpack_require__(/*! ./slidey.controller.js */ "./slidey.controller.js");

var _slideyController2 = _interopRequireDefault(_slideyController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  require: {
    parentSlidey: '^^?btsSlidey'
  },
  bindings: {
    opened: '=?',
    contentWidth: '@',
    reflowContainer: '@',
    onClose: '&?',
    onCloseFinished: '&?'
  },
  controller: _slideyController2.default,
  template: _slidey2.default,
  transclude: true
};

/***/ }),

/***/ "./slidey.config.js":
/*!**************************!*\
  !*** ./slidey.config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.appendChild(document.createTextNode(_slidey2.default));
  document.head.appendChild(style);
};

var _slidey = __webpack_require__(/*! ./slidey.css */ "./slidey.css");

var _slidey2 = _interopRequireDefault(_slidey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./slidey.controller.js":
/*!******************************!*\
  !*** ./slidey.controller.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SlideyController = function () {
  function SlideyController($scope, $element) {
    _classCallCheck(this, SlideyController);

    this.$scope = $scope;
    this.$element = $element;
  }

  _createClass(SlideyController, [{
    key: '$onInit',
    value: function $onInit() {
      this.contentWidth = this.contentWidth || '80%';
      this.opened = this.opened || false;
      this.$scope.$watch('$ctrl.opened', this._onOpenedChanged.bind(this));
    }
  }, {
    key: '$postLink',
    value: function $postLink() {
      this._wrapper = this.$element[0].querySelector('.slidey-content-wrapper');
      this._content = this.$element[0].querySelector('.slidey-content');
      this._overlay = this.$element[0].querySelector('.slidey-overlay');
      this._wrapper.addEventListener('transitionend', this._onTransitionEnd.bind(this), {
        passive: true
      });
      this.setNested(this._nested);
      this.adjustContainer();
    }
  }, {
    key: '$onChanges',
    value: function $onChanges(changes) {
      if (changes.contentWidth) {
        this.setNested(this._nested);
      }

      if (changes.reflowContainer) {
        this._container = this.reflowContainer ? document.getElementById(this.reflowContainer) : null;
        this.adjustContainer();
      }
    }
  }, {
    key: 'open',
    value: function open() {
      this.opened = true;
    }
  }, {
    key: 'close',
    value: function close() {
      this.opened = false;
      if (this.onClose) {
        this.onClose();
      }
    }
  }, {
    key: '_onOpenedChanged',
    value: function _onOpenedChanged() {
      if (this.opened) {
        this.$element.addClass('opened');
      } else {
        this.$element.removeClass('opened');
      }

      if (this.parentSlidey) {
        this._container = this._container || this.parentSlidey._container;
        this.parentSlidey.setNested(this.opened);
      }
      this.adjustContainer();
    }
  }, {
    key: '_onTransitionEnd',
    value: function _onTransitionEnd(event) {
      var _this = this;

      // Bail if it wasn't the transform that changed
      if (event.propertyName !== 'transform') return;

      if (!this.opened && this.onCloseFinished) {
        this.$scope.$apply(function () {
          _this.onCloseFinished();
        });
      }
    }
  }, {
    key: 'setNested',
    value: function setNested(nested) {
      this._nested = nested;
      if (!this._wrapper) {
        return;
      }

      if (this._nested) {
        this._contentObserver && this._contentObserver.disconnect();
        this._wrapper.style.width = '100%';
        this.$element.addClass('nested');
      } else {
        this._wrapper.style.width = this.contentWidth;
        this.$element.removeClass('nested');
        this.adjustContainer();
      }
    }
  }, {
    key: 'adjustContainer',
    value: function adjustContainer() {
      var _this2 = this;

      if (!window.MutationObserver) {
        throw new Error('Unfortunately, this browser doesn\'t support the MutationObserver API!');
      }
      if (!this._container || !this._wrapper) {
        return;
      }
      this._containerObserver && this._containerObserver.disconnect();
      this._contentObserver && this._contentObserver.disconnect();
      if (this.opened) {
        // We need to watch the content for changes to cover instances
        // where we have async calls or are waiting for angular to bind
        this._contentObserver = new MutationObserver(function (mutations) {
          if (!_this2.opened) return;

          _this2._container.style.height = _this2.contentHeight;
        });
        this._contentObserver.observe(this._wrapper, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['class', 'style']
        });
        this._container.style.height = this.contentHeight;
      } else if (this.parentSlidey && this.parentSlidey.opened) {
        this._container.style.height = this.parentSlidey.contentHeight;
      } else if (!this.parentSlidey) {
        // We need to watch the container for changes to cover instances
        // where we have async calls or are waiting for angular to bind
        this._containerObserver = new MutationObserver(function (mutations) {
          if (_this2.opened) return;

          _this2._containerHeight = _this2._container.scrollHeight;
        });
        this._containerObserver.observe(this._container, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['class', 'style']
        });
        this._container.style.height = '';
      }
    }
  }, {
    key: 'containerHeight',
    get: function get() {
      if (!this._containerHeight) {
        this._containerHeight = this.parentSlidey && this.parentSlidey._containerHeight || this._container.scrollHeight;
      }
      return this._containerHeight;
    }
  }, {
    key: 'contentHeight',
    get: function get() {
      return this._content.scrollHeight < this.containerHeight ? this.containerHeight + 'px' : this._content.scrollHeight + 'px';
    }
  }]);

  return SlideyController;
}();

exports.default = SlideyController;


SlideyController.$inject = ['$scope', '$element'];

/***/ }),

/***/ "./slidey.css":
/*!********************!*\
  !*** ./slidey.css ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("bts-slidey {\n  pointer-events: none;\n}\n\nbts-slidey.opened {\n  pointer-events: auto;\n}\n\n/* Overlay */\n\n.slidey-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: black;\n  transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 0.5s;\n  opacity: 0;\n  z-index: 9999;\n}\n\nbts-slidey.opened > .slidey-overlay {\n  opacity: 0.15;\n}\n\n/* Content */\n\n.slidey-content-wrapper {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: white;\n  transform: translateX(100%);\n  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.5s;\n  transition-property: transform, width, box-shadow;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 9999;\n}\n\nbts-slidey.opened > .slidey-content-wrapper {\n  transform: translateX(0%);\n  box-shadow: 0 8px 8px rgba(0,0,0,0.5);\n}\n\nbts-slidey.nested > .slidey-content-wrapper {\n  overflow-y: hidden;\n}\n");

/***/ }),

/***/ "./slidey.html":
/*!*********************!*\
  !*** ./slidey.html ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slidey-overlay\" ng-click=\"$ctrl.close()\"></div>\n<div class=\"slidey-content-wrapper\">\n    <div class=\"slidey-content\" ng-transclude></div>\n</div>\n";

/***/ }),

/***/ "./slidey.module.js":
/*!**************************!*\
  !*** ./slidey.module.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(/*! angular */ "angular");

var _angular2 = _interopRequireDefault(_angular);

var _slideyComponent = __webpack_require__(/*! ./slidey.component.js */ "./slidey.component.js");

var _slideyComponent2 = _interopRequireDefault(_slideyComponent);

var _slideyConfig = __webpack_require__(/*! ./slidey.config.js */ "./slidey.config.js");

var _slideyConfig2 = _interopRequireDefault(_slideyConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = _angular2.default.module('bts.slidey', []);

_module.config(_slideyConfig2.default);
_module.component('btsSlidey', _slideyComponent2.default);

exports.default = _module.name;

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_angular__;

/***/ })

/******/ });
});
//# sourceMappingURL=slidey.js.map