export class ErrorBag{
    constructor(settings){
        this._initObj = settings;
        this._generalErrorBox$ = $(`.${this._initObj.generalErrorBox}`);
        this._alertAjaxBox$ = $(`.${this._initObj.ajaxErrorBox}`);
        this._newsResourceErrorBox = $(`.${this._initObj.newsResourceErrorBox}`);
        this._serverErrorBox = $(`.${this._initObj.serverErrorBox}`);
    }
    hideAlertsIForms(){
        $(`.${this._initObj.borderHighlightingClass}`).on('focus.hideErrMsg',$.proxy(this._hideErrBorderHandler,this));
    }
    _hideErrBorderHandler(event){
        $(event.target).removeClass(this._initObj.borderHighlightingClass).off('focus.hideErrMsg');
    }
    showAjaxErrBox(message=''){
       if(!this._alertAjaxBox$.length) throw new Error('Errors have occurred when trying to show Ajax error message.');

       this._showProcess.call(this._alertAjaxBox$,message);
    }
    hideAjaxErrBox(){
        this._hideProcess.call(this._alertAjaxBox$);
    }
    showNewsResourceErrorBox(siblingElem,message=''){
       let alertBox$ =  this._newsResourceErrorBox.filter((_,item)=>{
            return siblingElem===item;
        });
       if(!alertBox$.length) return false; //throw new Error('Errors have occurred when trying to show NewsResourceErrorBox message.');
        this._showProcess.call(alertBox$,message);
    }
    hideNewsResourceErrorBox(siblingElem){
        let alertBox$ =  this._newsResourceErrorBox.filter((_,item)=>{
            return siblingElem===item;
        });
        if(!alertBox$.length) return false;//throw new Error('Errors have occurred when trying to hide NewsResourceErrorBox message.');
        this._hideProcess.call(alertBox$);
    }
    isNewsResourceErrorBox(){
        return this._newsResourceErrorBox.filter((_,item)=>{
            return $(item).hasClass('d-none')===false
        }).length;
    }
    hideServerErrorsBox(siblingElem){
        let alertBox$ =  this._serverErrorBox.filter((_,item)=>{
            return siblingElem===item;
        });
        if(!alertBox$.length) return false;//throw new Error('Errors have occurred when trying to hide NewsResourceErrorBox message.');
        this._hideProcess.call(alertBox$);
        console.log(alertBox$.prev());
        alertBox$.prev().removeClass(this._initObj.borderHighlightingClass);
    }
    showGeneralErrorBox(message){
        if(!this._generalErrorBox$.length) throw new Error('Errors have occurred when trying to show General error message.');
        this._showProcess.call(this._generalErrorBox$,message);
    }
    hideGeneralErrorBox(){
        if(!this._generalErrorBox$.length) return false;// throw new Error('Errors have occurred when trying to hide General error message.');
        this._hideProcess.call(this._generalErrorBox$);
    }
    changeMessageOnVisibleError(errorBox$,text){
        errorBox$.text(text);
    }
    _showProcess(message){
        this.queue(function(next){
            $(this).removeClass('d-none');
            next();
        }).queue(function(next){
            $(this).fadeOut(0);
            if(message.length!==0)
                $(this).text(message);
            next();
        }).queue(function(next){
            $(this).fadeIn('normal');
            next();
        });
    }

    _hideProcess(){
        this.queue(function(next){
            $(this).fadeOut('normal');
            next();
        }).queue(next=>{
            $(this).addClass('d-none');
            next();
        });
    }
}
