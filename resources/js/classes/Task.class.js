export class Task {
    constructor(initObj, ajax,errorBag) {
        this._initObj = initObj;
        this._ajax = ajax;
        this._ajaxResult = false;
        this._errorBag = errorBag;
    }

    run() {
        let {container, editTask, completeTask, removeTask, saveTask, cancelEditTask} = this._initObj;
        $(container).on('click.initEditTask', editTask, $.proxy(this._initEditTaskHandler, this));
        $(container).on('click.saveEditTask', saveTask, $.proxy(this._saveEditTaskHandler, this));
        $(container).on('click.cancelEditTask', cancelEditTask, $.proxy(Task._cancelEditTaskHandler, this));
        $(document.body).on('keydown.cancelEditTaskKeyboard', $.proxy(Task._cancelEditTaskKeyboard, this));
        $(container).on('click.completeTask', completeTask, $.proxy(this._completeTasksHandler, this));
        $(container).on('click.removeTask', removeTask, $.proxy(this._removeTasksHandler, this));

    }

    _initEditTaskHandler(event) {
        event.preventDefault();
        let target = event.target;
        let isEditIcon = Array.from(target.classList).filter(item => item.includes('edit'));
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

    _saveEditTaskHandler(event) {
        let target = event.target;
        if ($(target).hasClass('save-edit-task') === false) return false;
        let saveIconWrapper = target.closest('a');
        if (saveIconWrapper.title !== 'save task') return false;
        let currentEditTaskContainer$ = $(`.${this._initObj.activeEditTask}`);
        let self = this;
        this._setRequestSettings({
            type: "PATCH",
            url: saveIconWrapper.pathname,
            data: JSON.stringify({
                description: Task.getReadWriteInputVal(currentEditTaskContainer$)
            }),
        });
        this._resolveAjaxPromise.call(this._ajax.call(),'update',Task.save.bind(self,currentEditTaskContainer$),this);
       return false;
    }

    static save(taskItemContainer$) {
        Task.readOnlyToReadWriteTaskToggle(taskItemContainer$, 'read');
        taskItemContainer$.removeAttr('class');
        Task.getReadOnlyElem(taskItemContainer$).text(Task.getReadWriteInputVal(taskItemContainer$));
        Object.getPrototypeOf(this)._changeControlButtonsIconColor.apply(this, [false, taskItemContainer$]);
    }

    static readOnlyToReadWriteTaskToggle(context, mode) {
        let readOnlyTaskElem$ = Task.getReadOnlyElem(context);
        let readWriteTaskElem$ = Task.getReadWriteElem(context);
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

    _previousEditTask() {
        let previousEditTask$ = $(`.${this._initObj.activeEditTask}`);
        if (!previousEditTask$.length) return false;
        let committedChangesIcon$ = previousEditTask$.find(this._initObj.saveTask).find('i');
        let inputTaskValue$ = previousEditTask$.find('input');
        if (committedChangesIcon$.hasClass('save-edit-task') === true) {
            let needToSave = window.confirm("Имя предыдущей задачи было изменено, сохранить данные?");
            console.log(needToSave);
            if (needToSave === false)
                Task.userCancelEditTask.call(this, previousEditTask$);

            Task.userSaveTask.call(this, previousEditTask$);
            let self = this;
            setTimeout(function () {
                if(self._ajaxResult===false){
                    let newEditTask$ = $(`.${self._initObj.activeEditTask}`).filter((_,item)=>{
                        return item!==previousEditTask$[0];
                    });
                    Task.userCancelEditTask.call(self, newEditTask$);
                }
            },500);
        }
        if (Task._isEmptyField(inputTaskValue$) === false) {
            alert("Поле задача не может быть пустым!");
            Task.userCancelEditTask.call(this, previousEditTask$);

        }
        if (committedChangesIcon$.hasClass('save-edit-task') === false && Task._isEmptyField(inputTaskValue$)) {
            previousEditTask$.removeClass(this._initObj.activeEditTask);
        }

    }

    static _cancelEditTaskHandler(event) {
        let target = event.target;
        if (target.closest('a').title !== 'cancel edit task') return false;
        let taskContainer$ = $(target.closest(`li.${Object.values(this)[0].activeEditTask}`));
        taskContainer$.find('input').val(taskContainer$.data('current-task-val'));
        Task.readOnlyToReadWriteTaskToggle(taskContainer$, 'read');
        taskContainer$.removeAttr('class');
        event.preventDefault();
        event.stopPropagation();
        Object.getPrototypeOf(this)._changeControlButtonsIconColor.apply(this, [false, taskContainer$]);
        //no send ajax data
    }

    static userSaveTask(taskContainer$) {
        taskContainer$.find(Object.values(this)[0].saveTask).children(':first-child').trigger('click.saveEditTask');
        //send ajax data
    }

    static userCancelEditTask(taskContainer$) {
        taskContainer$.find(Object.values(this)[0].cancelEditTask).children(':first-child').trigger('click.cancelEditTask');
        return -1;
        //no send ajax data
    }

    static _cancelEditTaskKeyboard(event) {
        if (event.code === 'Escape')
            Task.userCancelEditTask.call(this, $(`.${Object.values(this)[0].activeEditTask}`));
    }

    _editTaskHandler(event) {
        let target$ = $(event.target);
        if (this._currentEditTaskContainer$.data('current-task-val') !== target$.val() && Task._isEmptyField(target$)) {
            this._changeControlButtonsIconColor(true, this._currentEditTaskContainer$);
        } else {
            this._changeControlButtonsIconColor(false, this._currentEditTaskContainer$);
        }
    }

    _completeTasksHandler(event) {
        let target = event.target;
        let completeIconWrapper = target.closest('a');
        if (completeIconWrapper.title !== 'complete task') return false;
        this._previousEditTask();
        let answer = confirm('Вы действительно хотите завершить задачу?');
        if (answer === false) return false;

        let completeTaskContainer$ = $(target.closest('li'));
        this._setRequestSettings({
            type: "PATCH",
            url: completeIconWrapper.pathname,
            data: JSON.stringify({
                is_completed: true
            }),
        });
        this._resolveAjaxPromise.call(
            this._ajax.call(),'is_completed',
            Task.successAjaxHandler.bind(null,completeTaskContainer$,{
                first: function () {
                    $(this).addClass('complete-task');
                }
            }),this);
        event.preventDefault();
    }

    _removeTasksHandler(event) {
        let target = event.target;
        let removeIconWrapper = target.closest('a');
        if (removeIconWrapper.title !== 'delete task') return false;
        this._previousEditTask();
        let answer = confirm('Вы действительно хотите удалить задачу?');
        if (answer === false) return false;
        let removeTaskContainer$ = $(target.closest('li'));
        this._setRequestSettings({
            type: "DELETE",
            url: removeIconWrapper.pathname,
            data: JSON.stringify({
                is_deleted: 'recycle'
            }),
        });
        this._resolveAjaxPromise.call(this._ajax.call(),'is_deleted',Task.successAjaxHandler.bind(null,removeTaskContainer$),this);
        event.preventDefault();

    }

    _setRequestSettings(settings) {
        this._ajax.req_settings.type = settings.type;
        this._ajax.req_settings.url = settings.url;
        this._ajax.req_settings.data = settings.data
    }

    _resolveAjaxPromise(checkedJsonColumn,callback,...callBackArgs){
        let taskInstance = callBackArgs.pop();
        taskInstance._errorBag.hideAjaxErrBox();
        this.then(response=>{
            taskInstance._ajaxResult = true;
            console.log(taskInstance);
            let result = response[checkedJsonColumn];
            if (!result) {
                throw new TypeError(`The received data received is different than expected. Expected to receive boolean true,but received ${result}`);
            }
            callback();
        }).catch(error=>{
            if (error instanceof TypeError) {
                taskInstance._errorBag.showAjaxErrBox();
                console.log(error.message);
                return false;
            }
            if ($.type(error) === 'error') {
                taskInstance._errorBag.showAjaxErrBox();
                console.log(`${error.message}. Check variable result in then method`);
                return false;
            }
            let {userInfo, errors: consoleErrorArr} = error.responseJSON;
            taskInstance._errorBag.showAjaxErrBox(userInfo);
            consoleErrorArr.forEach(item => {
                console.log(item);
            });
        });
    }

    static successAjaxHandler($taskContainer$, ...fxQueue) {
        let taskQueueContainer = $taskContainer$.queue();

            taskQueueContainer.push(function () {
                $(this).fadeOut(400);
                this.dequeue();
            });
            taskQueueContainer.push(function () {
                let siblingsCollection = $(this).siblings('li');
                $(this).remove();
                let listNumberElem = 'span:first-child';
                siblingsCollection.sort((x, y) => {
                    return $(x).find(listNumberElem).text() - $(y).find(listNumberElem).text();
                }).each((i, item) => {
                    $(item).find(listNumberElem).text(i + 1);
                });
                this.dequeue();
            });
            if(fxQueue.length){
                fxQueue.forEach(item => {

                    let objectKey = Object.keys(item)[0];
                    switch (objectKey) {
                        case "first":
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
            while(taskQueueContainer.length){
                setTimeout(taskQueueContainer.shift().bind($taskContainer$),200);
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

    _changeControlButtonsIconColor(isChange = true, context$) {
        let saveEditButtonICon$ = $(this._initObj.saveTask, context$).find('i');
        let cancelSaveEditButtonICon$ = $(this._initObj.cancelEditTask, context$).find('i');
        if (isChange === true) Task.changeIconColor(saveEditButtonICon$, cancelSaveEditButtonICon$);
        else {
            Task.setDisableIconColor(saveEditButtonICon$, cancelSaveEditButtonICon$);
        }
    }

    static changeIconColor(...icons) {
        let [saveIcon$, cancelIcon$] = icons;
        if (saveIcon$.hasClass('save-edit-task') === false) saveIcon$.addClass('save-edit-task');
        if (cancelIcon$.hasClass('cancel-edit-task') === false) cancelIcon$.addClass('cancel-edit-task');
    }

    static setDisableIconColor(...icons) {
        let [saveIcon$, cancelIcon$] = icons;
        if (saveIcon$.hasClass('save-edit-task') === true) saveIcon$.removeClass('save-edit-task');
        if (cancelIcon$.hasClass('cancel-edit-task') === true) cancelIcon$.removeClass('cancel-edit-task');
    }

    static _isEmptyField(input$) {
        if (input$.val() === '') {
            input$.attr('placeholder', 'The field cannot be empty');
            return false;
        }
        input$.removeAttr('placeholder');
        return true;
    }

    static getReadOnlyElem(context) {
        return $('.read-only', context);
    }

    static getReadWriteElem(context) {
        return $('.read-write', context);
    }

    static getReadWriteInputVal(context) {
        return Task.getReadWriteElem(context).find('input').val();
    }
}
