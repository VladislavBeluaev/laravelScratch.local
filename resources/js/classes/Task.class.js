export class Task {
    constructor(initObj,ajax) {
        this._initObj = initObj;
        this._ajax = ajax;
    }

    run() {
        let {container, editTask, completeTask, removeTask, saveTask, cancelEditTask} = this._initObj;
        $(container).on('click.initEditTask', editTask, $.proxy(this._initEditTaskHandler, this));
        $(container).on('click.saveEditTask', saveTask, $.proxy(this._saveEditTaskHandler,this));
        $(container).on('click.cancelEditTask', cancelEditTask, $.proxy(Task._cancelEditTaskHandler,this));
        $(document.body).on('keydown.cancelEditTaskKeyboard',$.proxy(Task._cancelEditTaskKeyboard,this));
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
_saveEditTaskHandler(event){
    let target = event.target;
    if($(target).hasClass('save-edit-task')===false) return false;
    let saveIconWrapper = target.closest('a');
    if (saveIconWrapper.title !== 'save task') return false;
    let currentEditTaskContainer$ = $(`.${this._initObj.activeEditTask}`);
    let self = this;
    this._ajax.req_settings.url =saveIconWrapper.pathname;
    this._ajax.req_settings.data =JSON.stringify({
        description:Task.getReadWriteInputVal(currentEditTaskContainer$)
    });
    this._ajax.send({
        success:function (response) {
            try{
                if(JSON.parse(response).update===true)
                    Task.save.call(self,currentEditTaskContainer$);
            }
            catch (e) {
                console.log(e.stack);
            }
        },
        error:function (data, textStatus, errorThrown) {
            console.log(data.getAllResponseHeaders());
            console.log(errorThrown);

        },
    });
    event.preventDefault();
    event.stopPropagation();
}
static save(taskItemContainer$){
    Task.readOnlyToReadWriteTaskToggle(taskItemContainer$,'read');
    taskItemContainer$.removeAttr('class');
    Task.getReadOnlyElem(taskItemContainer$).text(Task.getReadWriteInputVal(taskItemContainer$));
    Object.getPrototypeOf(this)._changeControlButtonsIconColor.call(this,false);
}
    static readOnlyToReadWriteTaskToggle(context, mode) {
        let readOnlyTaskElem$ = Task.getReadOnlyElem(context);
        let readWriteTaskElem$ =Task.getReadWriteElem(context);
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
                Task.userCancelEditTask.call(this,previousEditTask$);

            Task.userSaveTask.call(this,previousEditTask$);

        }
        if (Task._isEmptyField(inputTaskValue$) === false) {
            let needToSave = window.confirm("Поле задача не может быть пустым. Отменить редактирование данного поля?");
            if (needToSave === true)
                Task.userCancelEditTask.call(this,previousEditTask$);
            else{
                console.log('here');
                Task.userSaveTask.call(this,previousEditTask$);
            }

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
        Object.getPrototypeOf(this)._changeControlButtonsIconColor.call(this,false);
        //no send ajax data
    }
    static userSaveTask(taskContainer$){
        taskContainer$.find(Object.values(this)[0].saveTask).children(':first-child').trigger('click.saveEditTask');
        //send ajax data
    }
    static userCancelEditTask(taskContainer$) {
        taskContainer$.find(Object.values(this)[0].cancelEditTask).children(':first-child').trigger('click.cancelEditTask');
        return -1;
        //no send ajax data
    }
    static _cancelEditTaskKeyboard(event){
       if(event.code==='Escape')
        Task.userCancelEditTask.call(this,$(`.${Object.values(this)[0].activeEditTask}`));
    }

    _editTaskHandler(event) {
        let target$ = $(event.target);
        if (this._currentEditTaskContainer$.data('current-task-val') !== target$.val() && Task._isEmptyField(target$)) {
            this._changeControlButtonsIconColor(true);
        } else {
            this._changeControlButtonsIconColor(false);
        }
    }

    _changeControlButtonsIconColor(isChange = true) {
        let saveEditButtonICon$ = $(this._initObj.saveTask, this._currentEditTaskContainer$).find('i');
        let cancelSaveEditButtonICon$ = $(this._initObj.cancelEditTask, this._currentEditTaskContainer$).find('i');
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
    static getReadOnlyElem(context){
        return $('.read-only', context);
    }
    static getReadWriteElem(context){
        return $('.read-write', context);
    }
    static getReadWriteInputVal(context){
       return Task.getReadWriteElem(context).find('input').val();
    }
}
