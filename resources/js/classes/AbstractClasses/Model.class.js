import {ajaxReqSettings} from "../../init objects/project/ajaxReqSettings";

export class Model{
    constructor(initObj,ajax=null){
        this._initObj = initObj;
        this._ajax = ajax;
    }
    run(){

    }
    _setRequestSettings(settings) {
        this._ajax.req_settings.type = settings.type || ajaxReqSettings.type;
        this._ajax.req_settings.url = settings.url|| ajaxReqSettings.url;
        this._ajax.req_settings.data = settings.data|| ajaxReqSettings.data;
    }
}
