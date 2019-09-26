import {Model} from "./AbstractClasses/Model.class";

export class Project extends Model {
    constructor(initObj, ajax, errorBag) {
        super(initObj, ajax);
        this._errorBag = errorBag;
    }

    run() {
        super.run();
        let {container, removeTask} = this._initObj;
        $(container).on('click.removeProject', removeTask, $.proxy(this._removeProjectHandler, this));
    }

    _removeProjectHandler(event) {
        let target = event.target;
        let targetWrapper$ = $(this._initObj.removeProject);
        if (targetWrapper$[0] !== target.closest('a')) return;
        let userAnswer = confirm("Do you really want delete this project?");
        if (userAnswer === false) return false;
        this._setRequestSettings({
            url: targetWrapper$[0].pathname,
            data: JSON.stringify({
                is_deleted: 'recycle'
            }),
        });
        try {
            this._ajax.call().then(response => {
                let redirectUrl = response.redirectTo;
                if (!redirectUrl) {
                    throw new URIError(`Not found redirectUrl. Check ajax return redirectUrl json`);
                }
                window.location.replace(redirectUrl);
            }).catch(error => {
                if (error instanceof URIError) {
                    this._errorBag.showDestroyErr();
                    console.log(error.message);
                    return false;
                }
                if ($.type(error) === 'error') {
                    this._errorBag.showDestroyErr();
                    console.log(`${error.message}. Check variable redirectUrl in then method`);
                    return false;
                }
                let {userInfo, errors: consoleErrorArr} = error.responseJSON;
                if(userInfo===undefined){
                    console.log(error.responseJSON.message);
                    this._errorBag.showDestroyErr();
                    return false;
                }
                this._errorBag.showDestroyErr(userInfo);
                //console.log(userInfo);
                consoleErrorArr.forEach(item => {
                    console.log(item);
                });
            });
        } catch (error) {
            console.log(error.stack);
        }
        event.preventDefault();
    }
}
