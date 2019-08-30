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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/_master.js":
/*!*********************************!*\
  !*** ./resources/js/_master.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Task_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Task.class */ "./resources/js/classes/Task.class.js");
/* harmony import */ var _init_objects_taskInitObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init objects/taskInitObj */ "./resources/js/init objects/taskInitObj.js");



(function ($, undefined) {
  $(function () {
    var url = location.pathname.substr(1);

    try {
      switch (url) {
        case "tasks":
          new _classes_Task_class__WEBPACK_IMPORTED_MODULE_0__["Task"](_init_objects_taskInitObj__WEBPACK_IMPORTED_MODULE_1__["taskInitObj"]).run();
          break;

        default:
          throw new Error("404 Page not found!!");
      }
    } catch (e) {
      console.log(e.stack);
    }
  });
})(jQuery);

/***/ }),

/***/ "./resources/js/classes/Task.class.js":
/*!********************************************!*\
  !*** ./resources/js/classes/Task.class.js ***!
  \********************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Task =
/*#__PURE__*/
function () {
  function Task(initObj) {
    _classCallCheck(this, Task);

    this._initObj = initObj;
  }

  _createClass(Task, [{
    key: "run",
    value: function run() {
      var _this$_initObj = this._initObj,
          container = _this$_initObj.container,
          editTask = _this$_initObj.editTask,
          completeTask = _this$_initObj.completeTask,
          removeTask = _this$_initObj.removeTask;
      $(container).on('click.editTask', editTask, $.proxy(this._editTaskHandLer, this));
    }
  }, {
    key: "_editTaskHandLer",
    value: function _editTaskHandLer(event) {
      event.preventDefault();
      var target = event.target;
      var isEditIcon = Array.from(target.classList).filter(function (item) {
        return item.includes('edit');
      });
      if (!isEditIcon.length) return false;
      var readOnlyTaskElem$ = $(target.closest('a').previousElementSibling);
      var readWriteTaskElem$ = readOnlyTaskElem$.prev('label');
      console.log(readWriteTaskElem$);
      readOnlyTaskElem$.addClass('no-display');
      readWriteTaskElem$.removeClass('no-display').focus();
      readWriteTaskElem$.closest('li').addClass('active-edit');
    }
  }]);

  return Task;
}();

/***/ }),

/***/ "./resources/js/init objects/taskInitObj.js":
/*!**************************************************!*\
  !*** ./resources/js/init objects/taskInitObj.js ***!
  \**************************************************/
/*! exports provided: taskInitObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskInitObj", function() { return taskInitObj; });
var taskInitObj = {
  container: '.to-do-list',
  editTask: '[title="edit task"]',
  completeTask: '[title="complete task"]',
  removeTask: '[title="delete task"]'
};

/***/ }),

/***/ "./resources/less/master.less":
/*!************************************!*\
  !*** ./resources/less/master.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ./resources/js/_master.js ./resources/less/master.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! c:\osp\OSPanel\domains\laravelScratch.local\resources\js\_master.js */"./resources/js/_master.js");
module.exports = __webpack_require__(/*! c:\osp\OSPanel\domains\laravelScratch.local\resources\less\master.less */"./resources/less/master.less");


/***/ })

/******/ });