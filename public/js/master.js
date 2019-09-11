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
/* harmony import */ var _classes_Ajax_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Ajax.class */ "./resources/js/classes/Ajax.class.js");
/* harmony import */ var _classes_Task_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Task.class */ "./resources/js/classes/Task.class.js");
/* harmony import */ var _classes_TestPromise_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/TestPromise.class */ "./resources/js/classes/TestPromise.class.js");
/* harmony import */ var _init_objects_task_taskInitObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init objects/task/taskInitObj */ "./resources/js/init objects/task/taskInitObj.js");
/* harmony import */ var _init_objects_task_ajaxReqSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init objects/task/ajaxReqSettings */ "./resources/js/init objects/task/ajaxReqSettings.js");
/* harmony import */ var _init_objects_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./init objects/routing */ "./resources/js/init objects/routing.js");







(function ($, undefined) {
  $(function () {
    var url = location.pathname.substr(1);
    var routingList = Object.keys(_init_objects_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]);

    try {
      switch (url) {
        case "":
          console.log("index page");
          break;

        case "tasks":
          new _classes_Task_class__WEBPACK_IMPORTED_MODULE_1__["Task"](_init_objects_task_taskInitObj__WEBPACK_IMPORTED_MODULE_3__["taskInitObj"], new _classes_Ajax_class__WEBPACK_IMPORTED_MODULE_0__["Ajax"](_init_objects_task_ajaxReqSettings__WEBPACK_IMPORTED_MODULE_4__["ajaxReqSettings"])).run();
          new _classes_TestPromise_class__WEBPACK_IMPORTED_MODULE_2__["TestPromises"](5).run();
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

/***/ "./resources/js/classes/Ajax.class.js":
/*!********************************************!*\
  !*** ./resources/js/classes/Ajax.class.js ***!
  \********************************************/
/*! exports provided: Ajax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ajax", function() { return Ajax; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ajax =
/*#__PURE__*/
function () {
  function Ajax(settings) {
    _classCallCheck(this, Ajax);

    this.req_settings = settings;
  }

  _createClass(Ajax, [{
    key: "send",
    value: function send(callbackEvents) {
      $.ajax(Object.assign(this.req_settings, callbackEvents));
    }
  }, {
    key: "_makeAjaxURLFromTemplate",
    value: function _makeAjaxURLFromTemplate(templateURL) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (templateURL.includes('{') && templateURL.includes('}')) {
        var urlFragments = templateURL.split('}');

        if (params.length !== urlFragments.length - 1) {
          throw new Error("The number of parameters does not match the number of replaced fragments");
        }

        var resultUrl = urlFragments.filter(function (item) {
          return item !== '';
        });
        resultUrl.forEach(function (item, index, arr) {
          var leftBracketPos = item.indexOf('{');
          var newItem = item.replace(item.substr(leftBracketPos), params[index]);
          arr.splice(index, 1, newItem);
        });
        return resultUrl.join('');
      }

      return templateURL;
    }
  }]);

  return Ajax;
}();

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
  function Task(initObj, ajax) {
    _classCallCheck(this, Task);

    this._initObj = initObj;
    this._ajax = ajax;
  }

  _createClass(Task, [{
    key: "run",
    value: function run() {
      var _this$_initObj = this._initObj,
          container = _this$_initObj.container,
          editTask = _this$_initObj.editTask,
          completeTask = _this$_initObj.completeTask,
          removeTask = _this$_initObj.removeTask,
          saveTask = _this$_initObj.saveTask,
          cancelEditTask = _this$_initObj.cancelEditTask;
      $(container).on('click.initEditTask', editTask, $.proxy(this._initEditTaskHandler, this));
      $(container).on('click.saveEditTask', saveTask, $.proxy(this._saveEditTaskHandler, this));
      $(container).on('click.cancelEditTask', cancelEditTask, $.proxy(Task._cancelEditTaskHandler, this));
      $(document.body).on('keydown.cancelEditTaskKeyboard', $.proxy(Task._cancelEditTaskKeyboard, this));
      $(container).on('click.completeTask', completeTask, $.proxy(this._completeTasksHandler, this));
      $(container).on('click.removeTask', removeTask, $.proxy(this._removeTasksHandler, this));
    }
  }, {
    key: "_initEditTaskHandler",
    value: function _initEditTaskHandler(event) {
      event.preventDefault();
      var target = event.target;
      var isEditIcon = Array.from(target.classList).filter(function (item) {
        return item.includes('edit');
      });
      if (!isEditIcon.length) return false;

      this._previousEditTask();

      this._currentEditTaskContainer$ = $(target.closest('li')).addClass(this._initObj.activeEditTask);

      try {
        Task.readOnlyToReadWriteTaskToggle(this._currentEditTaskContainer$, 'write');

        this._currentEditTaskContainer$.data('current-task-val', this._currentEditTaskContainer$.find('input').val());

        this._currentEditTaskContainer$.on('input.editTaskHandler', 'input', $.proxy(this._editTaskHandler, this));
      } catch (e) {
        console.log(e.stack);
      }
    }
  }, {
    key: "_saveEditTaskHandler",
    value: function _saveEditTaskHandler(event) {
      var target = event.target;
      if ($(target).hasClass('save-edit-task') === false) return false;
      var saveIconWrapper = target.closest('a');
      if (saveIconWrapper.title !== 'save task') return false;
      var currentEditTaskContainer$ = $(".".concat(this._initObj.activeEditTask));
      var self = this;

      this._setRequestSettings({
        type: "PATCH",
        url: saveIconWrapper.pathname,
        data: JSON.stringify({
          description: Task.getReadWriteInputVal(currentEditTaskContainer$)
        })
      });

      this._ajax.send({
        success: function success(response) {
          try {
            if (JSON.parse(response).update === true) Task.save.call(self, currentEditTaskContainer$);
          } catch (e) {
            console.log(e.stack);
          }
        },
        error: function error(data, textStatus, errorThrown) {
          console.log(data.getAllResponseHeaders());
          console.log(errorThrown);
        }
      });

      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "_previousEditTask",
    value: function _previousEditTask() {
      var previousEditTask$ = $(".".concat(this._initObj.activeEditTask));
      if (!previousEditTask$.length) return false;
      var committedChangesIcon$ = previousEditTask$.find(this._initObj.saveTask).find('i');
      var inputTaskValue$ = previousEditTask$.find('input');

      if (committedChangesIcon$.hasClass('save-edit-task') === true) {
        var needToSave = window.confirm("Имя предыдущей задачи было изменено, сохранить данные?");
        console.log(needToSave);
        if (needToSave === false) Task.userCancelEditTask.call(this, previousEditTask$);
        Task.userSaveTask.call(this, previousEditTask$);
      }

      if (Task._isEmptyField(inputTaskValue$) === false) {
        alert("Поле задача не может быть пустым!");
        Task.userCancelEditTask.call(this, previousEditTask$);
      }

      if (committedChangesIcon$.hasClass('save-edit-task') === false && Task._isEmptyField(inputTaskValue$)) {
        previousEditTask$.removeClass(this._initObj.activeEditTask);
      }
    }
  }, {
    key: "_editTaskHandler",
    value: function _editTaskHandler(event) {
      var target$ = $(event.target);

      if (this._currentEditTaskContainer$.data('current-task-val') !== target$.val() && Task._isEmptyField(target$)) {
        this._changeControlButtonsIconColor(true, this._currentEditTaskContainer$);
      } else {
        this._changeControlButtonsIconColor(false, this._currentEditTaskContainer$);
      }
    }
  }, {
    key: "_completeTasksHandler",
    value: function _completeTasksHandler(event) {
      var target = event.target;
      var completeIconWrapper = target.closest('a');
      if (completeIconWrapper.title !== 'complete task') return false;

      this._previousEditTask();

      var answer = confirm('Вы действительно хотите завершить задачу?');
      if (answer === false) return false;
      var completeTaskContainer$ = $(target.closest('li'));

      this._setRequestSettings({
        type: "PATCH",
        url: completeIconWrapper.pathname,
        data: JSON.stringify({
          is_completed: true
        })
      });

      this._ajax.send({
        success: function success(response) {
          try {
            if (JSON.parse(response).is_completed === true) {
              Task.successAjaxHandler(completeTaskContainer$, {
                first: function first() {
                  $(this).addClass('complete-task');
                }
              });
            }
          } catch (e) {
            console.log(e.stack);
          }
        },
        error: function error(data, textStatus, errorThrown) {
          console.log(data.getAllResponseHeaders());
          console.log(errorThrown);
        }
      });

      event.preventDefault();
    }
  }, {
    key: "_removeTasksHandler",
    value: function _removeTasksHandler(event) {
      var target = event.target;
      var removeIconWrapper = target.closest('a');
      if (removeIconWrapper.title !== 'delete task') return false;

      this._previousEditTask();

      var answer = confirm('Вы действительно хотите удалить задачу?');
      if (answer === false) return false;
      var removeTaskContainer$ = $(target.closest('li'));

      this._setRequestSettings({
        type: "DELETE",
        url: removeIconWrapper.pathname,
        data: JSON.stringify({
          is_deleted: 'recycle'
        })
      });

      this._ajax.send({
        success: function success(response) {
          try {
            console.log(JSON.parse(response).is_deleted);

            if (JSON.parse(response).is_deleted === true) {
              Task.successAjaxHandler(removeTaskContainer$);
            }
          } catch (e) {
            console.log(e.stack);
          }
        },
        error: function error(data, textStatus, errorThrown) {
          console.log(data.getAllResponseHeaders());
          console.log(errorThrown);
        }
      });

      event.preventDefault();
    }
  }, {
    key: "_setRequestSettings",
    value: function _setRequestSettings(settings) {
      this._ajax.req_settings.type = settings.type;
      this._ajax.req_settings.url = settings.url;
      this._ajax.req_settings.data = settings.data;
    }
  }, {
    key: "_changeControlButtonsIconColor",
    value: function _changeControlButtonsIconColor() {
      var isChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var context$ = arguments.length > 1 ? arguments[1] : undefined;
      var saveEditButtonICon$ = $(this._initObj.saveTask, context$).find('i');
      var cancelSaveEditButtonICon$ = $(this._initObj.cancelEditTask, context$).find('i');
      if (isChange === true) Task.changeIconColor(saveEditButtonICon$, cancelSaveEditButtonICon$);else {
        Task.setDisableIconColor(saveEditButtonICon$, cancelSaveEditButtonICon$);
      }
    }
  }], [{
    key: "save",
    value: function save(taskItemContainer$) {
      Task.readOnlyToReadWriteTaskToggle(taskItemContainer$, 'read');
      taskItemContainer$.removeAttr('class');
      Task.getReadOnlyElem(taskItemContainer$).text(Task.getReadWriteInputVal(taskItemContainer$));

      Object.getPrototypeOf(this)._changeControlButtonsIconColor.apply(this, [false, taskItemContainer$]);
    }
  }, {
    key: "readOnlyToReadWriteTaskToggle",
    value: function readOnlyToReadWriteTaskToggle(context, mode) {
      var readOnlyTaskElem$ = Task.getReadOnlyElem(context);
      var readWriteTaskElem$ = Task.getReadWriteElem(context);

      switch (mode) {
        case "read":
          readOnlyTaskElem$.removeClass('no-display');
          readWriteTaskElem$.addClass('no-display');
          break;

        case "write":
          readOnlyTaskElem$.addClass('no-display');
          readWriteTaskElem$.removeClass('no-display').focus();
          break;

        default:
          throw new Error("mode does not exists");
      }
    }
  }, {
    key: "_cancelEditTaskHandler",
    value: function _cancelEditTaskHandler(event) {
      var target = event.target;
      if (target.closest('a').title !== 'cancel edit task') return false;
      var taskContainer$ = $(target.closest("li.".concat(Object.values(this)[0].activeEditTask)));
      taskContainer$.find('input').val(taskContainer$.data('current-task-val'));
      Task.readOnlyToReadWriteTaskToggle(taskContainer$, 'read');
      taskContainer$.removeAttr('class');
      event.preventDefault();
      event.stopPropagation();

      Object.getPrototypeOf(this)._changeControlButtonsIconColor.apply(this, [false, taskContainer$]); //no send ajax data

    }
  }, {
    key: "userSaveTask",
    value: function userSaveTask(taskContainer$) {
      taskContainer$.find(Object.values(this)[0].saveTask).children(':first-child').trigger('click.saveEditTask'); //send ajax data
    }
  }, {
    key: "userCancelEditTask",
    value: function userCancelEditTask(taskContainer$) {
      taskContainer$.find(Object.values(this)[0].cancelEditTask).children(':first-child').trigger('click.cancelEditTask');
      return -1; //no send ajax data
    }
  }, {
    key: "_cancelEditTaskKeyboard",
    value: function _cancelEditTaskKeyboard(event) {
      if (event.code === 'Escape') Task.userCancelEditTask.call(this, $(".".concat(Object.values(this)[0].activeEditTask)));
    }
  }, {
    key: "successAjaxHandler",
    value: function successAjaxHandler($taskContainer$) {
      var taskQueueContainer = $taskContainer$.queue();
      taskQueueContainer.push(function () {
        $(this).fadeOut(400);
        this.dequeue();
      });
      taskQueueContainer.push(function () {
        var siblingsCollection = $(this).siblings('li');
        $(this).remove();
        var listNumberElem = 'span:first-child';
        siblingsCollection.sort(function (x, y) {
          return $(x).find(listNumberElem).text() - $(y).find(listNumberElem).text();
        }).each(function (i, item) {
          $(item).find(listNumberElem).text(i + 1);
        });
        this.dequeue();
      });

      for (var _len = arguments.length, fxQueue = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        fxQueue[_key - 1] = arguments[_key];
      }

      if (fxQueue.length) {
        fxQueue.forEach(function (item) {
          var objectKey = Object.keys(item)[0];

          switch (objectKey) {
            case "first":
              console.log(item.first);
              taskQueueContainer.unshift(item.first);
              break;

            case "last":
              taskQueueContainer.push(item.last);
              break;

            default:
              throw new Error('Wrong format sending queue handlers');
          }
        });
      }

      taskQueueContainer.shift().call($taskContainer$);

      while (taskQueueContainer.length) {
        setTimeout(taskQueueContainer.shift().bind($taskContainer$), 200);
      }
      /*new Promise(resolve => {
          taskQueueContainer.shift().call($taskContainer$);
          setTimeout(resolve,0,taskQueueContainer);
      }).then((taskQueueContainer)=>{
          taskQueueContainer.shift().call($taskContainer$);
          return new Promise(resolve => {
              setTimeout(resolve,1000,taskQueueContainer);
          });
      }).then((taskQueueContainer)=>{
          taskQueueContainer.shift().call($taskContainer$);
      });*/

    }
  }, {
    key: "changeIconColor",
    value: function changeIconColor() {
      for (var _len2 = arguments.length, icons = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        icons[_key2] = arguments[_key2];
      }

      var saveIcon$ = icons[0],
          cancelIcon$ = icons[1];
      if (saveIcon$.hasClass('save-edit-task') === false) saveIcon$.addClass('save-edit-task');
      if (cancelIcon$.hasClass('cancel-edit-task') === false) cancelIcon$.addClass('cancel-edit-task');
    }
  }, {
    key: "setDisableIconColor",
    value: function setDisableIconColor() {
      for (var _len3 = arguments.length, icons = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        icons[_key3] = arguments[_key3];
      }

      var saveIcon$ = icons[0],
          cancelIcon$ = icons[1];
      if (saveIcon$.hasClass('save-edit-task') === true) saveIcon$.removeClass('save-edit-task');
      if (cancelIcon$.hasClass('cancel-edit-task') === true) cancelIcon$.removeClass('cancel-edit-task');
    }
  }, {
    key: "_isEmptyField",
    value: function _isEmptyField(input$) {
      if (input$.val() === '') {
        input$.attr('placeholder', 'The field cannot be empty');
        return false;
      }

      input$.removeAttr('placeholder');
      return true;
    }
  }, {
    key: "getReadOnlyElem",
    value: function getReadOnlyElem(context) {
      return $('.read-only', context);
    }
  }, {
    key: "getReadWriteElem",
    value: function getReadWriteElem(context) {
      return $('.read-write', context);
    }
  }, {
    key: "getReadWriteInputVal",
    value: function getReadWriteInputVal(context) {
      return Task.getReadWriteElem(context).find('input').val();
    }
  }]);

  return Task;
}();

/***/ }),

/***/ "./resources/js/classes/TestPromise.class.js":
/*!***************************************************!*\
  !*** ./resources/js/classes/TestPromise.class.js ***!
  \***************************************************/
/*! exports provided: TestPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPromises", function() { return TestPromises; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TestPromises =
/*#__PURE__*/
function () {
  function TestPromises(a) {
    _classCallCheck(this, TestPromises);
  }

  _createClass(TestPromises, [{
    key: "run",
    value: function run() {
      console.log('Request data...'); //this._emulateBackendResponse();
      //this.promiseBackendResponse();
      //his._emulatePromise();
      //this._delayPromise(3000);

      this._chainPromises();
    }
  }, {
    key: "_chainPromises",
    value: function _chainPromises() {
      var chain = new Promise(function (resolve) {
        setTimeout(resolve, 1000, 1);
      });
      var foo1 = chain.then(function (result) {
        console.log(result);
        return result * 2;
      });
      var foo2 = foo1.then(function (res) {
        console.log(res);
        return res * 2;
      });
      var foo3 = foo2.then(function (foo2) {
        console.log(foo2);
      });
    }
  }, {
    key: "_delayPromise",
    value: function _delayPromise(ms) {
      var delPromise = function delPromise(ms) {
        return new Promise(function (resolve) {
          setTimeout(resolve, ms, "done");
        });
      };

      delPromise(3000).then(function (result) {
        return alert("\u0432\u044B\u043F\u043E\u043B\u043D\u0438\u043B\u043E\u0441\u044C \u0447\u0435\u0440\u0435\u0437 3 \u0441\u0435\u043A\u0443\u043D\u0434\u044B c \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C ".concat(result));
      });
    }
  }, {
    key: "_emulatePromise",
    value: function _emulatePromise() {
      var getPhone = new Promise(function (resolve, reject) {
        var hasMoney = confirm("Do you have money?");

        if (hasMoney === true) {
          resolve({
            phoneMaker: 'Iphone',
            phoneModel: '8 plus',
            price: '800$',
            color: 'space gray',
            toString: function toString() {
              return "I have ".concat(this.phoneMaker, " ").concat(this.phoneModel, " in ").concat(this.color, " color.");
            }
          });
        } else {
          reject(new Error('You don\'t have enough money to buy this phone'));
        }
      });

      var havePhone = function havePhone(phone) {
        if ($.isPlainObject(phone)) {
          console.log(phone.toString());
          return true;
        }

        if ($.type(phone) === 'string') {
          console.log(phone);
        }

        return true;
      };

      var notHasPhone = function notHasPhone(error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      };

      var notifyFriends = function notifyFriends(phone) {
        var outPut = "I buy new ".concat(phone.phoneMaker, "!!");
        return Promise.resolve(outPut);
      };

      function buyPhone() {
        getPhone.then(notifyFriends).then(havePhone)["catch"](notHasPhone);
      }

      buyPhone();
    }
    /*_emulateBackendResponse() {
        setTimeout(() => {
            console.log('Preparing data...');
            const backEndData = {
                server: "aws",
                port: '1092',
                status: 'working'
            };
            setTimeout(() => {
                backEndData.modified = true;
                console.log('Getting data', backEndData);
            }, 2000);
        }, 2000);
    }*/

    /*promiseBackendResponse() {
        let backPromise = new Promise(function (resolve, reject) {
            let isConnected = Math.random();
            const backEndData = {
                server: "aws",
                port: '1092',
                status: 'working'
            };
            console.log('Preparing answer...');
            setTimeout(()=>{
                if (isConnected > 0.5){
                    console.log('Preparing data...');
                    resolve(backEndData);
                }
                else{
                    console.log('Connection error!');
                    backEndData.status = 'closed';
                    reject(backEndData);
                }
            },2000);
        });
        let publishedConnectionResult = function(backEndData){
          return Promise.resolve('Connected complete'+` with status ${backEndData.status}`);
        };
        backPromise
            .then(publishedConnectionResult)
            .then((clientData)=>{
            setTimeout(()=>{
                console.log('Server answer',clientData);
            },2000);
        }).catch((errorClientData)=>{
            console.log('Server answer',errorClientData);
        });
    }*/

  }]);

  return TestPromises;
}();

/***/ }),

/***/ "./resources/js/init objects/routing.js":
/*!**********************************************!*\
  !*** ./resources/js/init objects/routing.js ***!
  \**********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
var routing = {
  index: '',
  projects: '/projects',
  tasks: '/tasks',
  update_task: 'tasks/{task}/update',
  contacts: '/contacts'
};

/***/ }),

/***/ "./resources/js/init objects/task/ajaxReqSettings.js":
/*!***********************************************************!*\
  !*** ./resources/js/init objects/task/ajaxReqSettings.js ***!
  \***********************************************************/
/*! exports provided: ajaxReqSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxReqSettings", function() { return ajaxReqSettings; });
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routing */ "./resources/js/init objects/routing.js");

var ajaxReqSettings = {
  type: "PATCH",
  url: _routing__WEBPACK_IMPORTED_MODULE_0__["routing"].update_task,
  data: null,
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
    'Content-Type': 'application/json',
    'charset': 'utf-8',
    'async': true,
    'Accept': 'application/json'
  }
};

/***/ }),

/***/ "./resources/js/init objects/task/taskInitObj.js":
/*!*******************************************************!*\
  !*** ./resources/js/init objects/task/taskInitObj.js ***!
  \*******************************************************/
/*! exports provided: taskInitObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskInitObj", function() { return taskInitObj; });
var taskInitObj = {
  container: '.to-do-list',
  activeEditTask: 'active-edit',
  editTask: '[title="edit task"]',
  completeTask: '[title="complete task"]',
  removeTask: '[title="delete task"]',
  saveTask: '[title="save task"]',
  cancelEditTask: '[title="cancel edit task"]'
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