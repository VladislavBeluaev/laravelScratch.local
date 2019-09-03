export class Ajax {

    configure(requestParams) {
        this.ajax = $.ajax({
            type: requestParams.type,
            url: requestParams.url,
            headers: requestParams.headers
        });
        return this;
    }

    request() {

    }

    response() {

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
