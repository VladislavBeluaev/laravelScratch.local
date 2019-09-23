export class ErrorBag{
    constructor(settings){
        this._initObj = settings;
    }
    hideAlertsIForms(){
        $(`.${this._initObj.borderHighlightingClass}`).on('focus.hideErrMsg',$.proxy(this._hideErrBorderHandler,this));
    }
    _hideErrBorderHandler(event){
        $(event.target).removeClass(this._initObj.borderHighlightingClass).off('focus.hideErrMsg');
    }
    showDestroyErr(message=''){
       let alert$ =  $(`.${this._initObj.ajaxErrorBox}`);
       if(!alert$.length) throw new Error('Errors have occurred when trying to show error message.');
        alert$.queue(function(next){
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

}
