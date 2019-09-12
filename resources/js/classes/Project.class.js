import {Model} from "./AbstractClasses/Model.class";

export class Project extends Model{
    constructor(initObj,ajax){
       super(initObj,ajax);
       /*console.log(this._ajax,this._initObj);*/
    }
    run() {
        super.run();
        console.log('here');
        let {container,removeTask} = this._initObj;
        $(container).on('click.removeProject',removeTask,$.proxy(this._removeProjectHandler,this));
    }
    _removeProjectHandler(event){
        let target = event.target;
        let targetWrapper$ = $(this._initObj.removeProject);
        if(targetWrapper$[0] !== target.closest('a')) return;
        this._setRequestSettings({
            url: targetWrapper$[0].pathname,
            data:JSON.stringify({
                is_deleted:'recycle'
            }),
        });
        this._ajax.call().then(response=>{
            console.log(response);
        });
        event.preventDefault();
    }
}
