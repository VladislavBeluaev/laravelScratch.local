import {Model} from "./AbstractClasses/Model.class";

export class Project extends Model{
    constructor(initObj,ajax){
       super(initObj,ajax);
       /*console.log(this._ajax,this._initObj);*/
    }
    run() {
        super.run();
        let {container,removeTask} = this._initObj;
        $(container).on('click.removeProject',removeTask,$.proxy(this._removeProjectHandler,this));
    }
    _removeProjectHandler(event){
        let target = event.target;
        let targetWrapper$ = $(this._initObj.removeProject);
        if(targetWrapper$[0] !== target.closest('a')) return;
        let userAnswer = confirm("Do you really want delete this project?");
        if(userAnswer===false) return false;
        this._setRequestSettings({
            url: targetWrapper$[0].pathname,
            data:JSON.stringify({
                is_deleted:'recycle'
            }),
        });
        try{
            this._ajax.call().then(response=>{
                let  redirectUrl = JSON.parse(response).redirectTo;
                if(!redirectUrl)
                    throw new Error(`Not found redirectUrl. Check ajax return redirectUrl json`);
                window.location.replace(redirectUrl);
            }).catch(errorMes=>{
                console.log(errorMes);
            });
        }
        catch (error) {
            console.log(error.stack);
        }


        event.preventDefault();
    }
}
