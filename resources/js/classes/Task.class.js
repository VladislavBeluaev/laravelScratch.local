export class Task {
    constructor(initObj) {
        this._initObj = initObj;
    }

    run() {
        let {container, editTask, completeTask, removeTask} = this._initObj;
        $(container).on('click.initEditTask', editTask, $.proxy(this._initEditTaskHandler, this));
    }

    _initEditTaskHandler(event) {
        event.preventDefault();
        let target = event.target;
        let isEditIcon = Array.from(target.classList).filter(item => item.includes('edit'));
        if (!isEditIcon.length) return false;
        this._currentEditTaskContainer$ = $(target.closest('li'));
        Task.readOnlyToReadWriteTaskToggle(this._currentEditTaskContainer$,'write');
        this._currentEditTaskContainer$.addClass('active-edit');
        this._previousEditTask();
        if (this._currentEditTaskContainer$.data('current-task-val') === undefined)
            this._currentEditTaskContainer$.data('current-task-val', this._currentEditTaskContainer$.find('input').val());
        this._currentEditTaskContainer$.on('input.editTaskHandler', 'input', $.proxy(this._editTaskHandler, this));
    }
    static readOnlyToReadWriteTaskToggle(context,mode){
       let  readOnlyTaskElem$ = $('.read-only',context);
       let  readWriteTaskElem$ = $('.read-write',context);
       console.log(readOnlyTaskElem$);
       console.log(readWriteTaskElem$);
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
    _previousEditTask(){
        let previousEditTask$ = $('.active-edit');
        if(!previousEditTask$.length) return false;
        let committedChangesIcon$ = previousEditTask$.find(this._initObj.saveTask).find('i');
        let inputTaskValue$ = previousEditTask$.find('input');
        if(committedChangesIcon$.hasClass('save-edit-task')===true){
            let needToSave = window.confirm("Имя задачи было изменено, сохранить данные?");
            console.log(needToSave);
        }
        if(Task._isEmptyField(inputTaskValue$)===false){
            let needToSave = window.confirm("Поле задача не может быть пустым? Отменить редактирование данного поля");
            if(needToSave===true){
                previousEditTask$.find('input').val(previousEditTask$.data('current-task-val'));
                Task.readOnlyToReadWriteTaskToggle(previousEditTask$,'read');
            }
        }
        if(committedChangesIcon$.hasClass('save-edit-task')===false && Task._isEmptyField(inputTaskValue$) ){
            previousEditTask$.removeClass('active-edit');
        }
        console.log(committedChangesIcon$);

    }
    _editTaskHandler(event) {
        let target$ = $(event.target);
        if (this._currentEditTaskContainer$.data('current-task-val') !== target$.val() && Task._isEmptyField(target$)) {
            this._changeControlButtonsIconColor(true);
        }
        else{
            this._changeControlButtonsIconColor(false);
        }
    }

    _changeControlButtonsIconColor(isChange = true) {
        let saveEditButtonICon$ = $(this._initObj.saveTask,this._currentEditTaskContainer$).find('i');
        let cancelSaveEditButtonICon$ = $(this._initObj.cancelEditTask,this._currentEditTaskContainer$).find('i');
        if(isChange===true) Task.changeIconColor(saveEditButtonICon$,cancelSaveEditButtonICon$);
        else{
            Task.setDisableIconColor(saveEditButtonICon$,cancelSaveEditButtonICon$);
        }
    }
    static changeIconColor(...icons){
        let [saveIcon$,cancelIcon$] = icons;
        if(saveIcon$.hasClass('save-edit-task') === false) saveIcon$.addClass('save-edit-task');
        if(cancelIcon$.hasClass('cancel-edit-task') === false) cancelIcon$.addClass('cancel-edit-task');
    }
    static setDisableIconColor(...icons){
        let [saveIcon$,cancelIcon$] = icons;
        if (saveIcon$.hasClass('save-edit-task') === true)  saveIcon$.removeClass('save-edit-task').addClass('disable');
        if (cancelIcon$.hasClass('cancel-edit-task') === true) cancelIcon$.removeClass('cancel-edit-task').addClass('disable');
    }
    static _isEmptyField(input$){
        if(input$.val()==='')
        {
            input$.attr('placeholder','The field cannot be empty');
            return false;
        }
        input$.removeAttr('placeholder');
        return true;
    }
}
