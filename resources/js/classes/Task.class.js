export class Task  {
    constructor(initObj){
        this._initObj = initObj;
    }
    run(){
        let {container,editTask,completeTask,removeTask} = this._initObj;
        $(container).on('click.editTask',editTask,$.proxy(this._editTaskHandLer,this));
    }

    _editTaskHandLer(event){
        event.preventDefault();
        let target = event.target;
        let isEditIcon = Array.from(target.classList).filter(item=>item.includes('edit'));
        if(!isEditIcon.length) return false;
        let readOnlyTaskElem$ = $(target.closest('a').previousElementSibling);
        let readWriteTaskElem$ = readOnlyTaskElem$.prev('label');
        console.log(readWriteTaskElem$);
        readOnlyTaskElem$.addClass('no-display');
        readWriteTaskElem$.removeClass('no-display').focus();
        readWriteTaskElem$.closest('li').addClass('active-edit');
    }
}
