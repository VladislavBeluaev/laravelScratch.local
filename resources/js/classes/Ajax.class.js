export class Ajax {
    constructor(settings){
        this.req_settings = settings;
    }
    send(callbackEvents) {
        $.ajax(Object.assign(this.req_settings,callbackEvents));
    }
    call(){
        return new Promise((resolve,reject)=>{
            let callbackEvents = {
                success:function (response) {
                    resolve(response);
                },
                error:function (jqXHR) {
                    let errorMessage = jqXHR.responseJSON.message+` Status code ${jqXHR.status}`;
                    reject(errorMessage);
                }
            };
            $.ajax(Object.assign(this.req_settings,callbackEvents));
        });
    }
    _makeAjaxURLFromTemplate(templateURL,params=[]) {
        if(templateURL.includes('{') && templateURL.includes('}')){
            let urlFragments = templateURL.split('}');
            if(params.length!==urlFragments.length-1){
                throw new Error("The number of parameters does not match the number of replaced fragments");
            }
            let resultUrl =  urlFragments.filter(item=>{
                return item!=='';
            });
            resultUrl.forEach(function(item,index,arr){
                let leftBracketPos = item.indexOf('{');
                let newItem = item.replace(item.substr(leftBracketPos),params[index]);
                arr.splice(index,1,newItem);
            });
            return resultUrl.join('');
        }
        return templateURL;
    }
}
