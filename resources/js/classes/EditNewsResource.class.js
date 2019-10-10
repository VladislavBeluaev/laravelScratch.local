import {NewsResource} from "./NewsResource.class";
export class EditNewsResource extends NewsResource {
    constructor(settings, errorBag, ajax) {
        super(settings, errorBag);
        this._ajax = ajax;
    }

    run() {
        $(this._settings.checkBoxInput, this._settings.secondContainer).on('change.AddNewSource', $.proxy(this._addNewSourceHandler, this));
        $(this._settings.secondContainer).on('click.SendNewSource',this._settings.addSource,$.proxy(this._sendNewSourceHandler,this));

    }

    _addNewSourceHandler(e) {
        let target = e.target;
        if (target.tagName !== 'INPUT') return false;
        let checkBoxAlertBox = this._getCheckBoxAlertBox(target, this._settings.secondContainer);
        let relatedSourceName = $(target).data('source');
        if (relatedSourceName === undefined) {
            this._errorBag.showUpdateErrorBox(checkBoxAlertBox, 'Errors occurred while trying to find a source input field.');
            return false;
        }
        let relatedSourceElem$ = this._getRelatedSourceElem(target);
        if (!relatedSourceElem$.length) {
            this._errorBag.showUpdateErrorBox(checkBoxAlertBox, 'Errors occurred while trying to open a source input field.');
            return false;
        }
        if ($(target).is(':checked'))
            this._showSourceElem(relatedSourceElem$);
        else
            this._hideSourceElem(relatedSourceElem$, e);
    }

    _validURLHandler(e) {
        let target = e.target;
        if (target.tagName !== 'INPUT' && target.getAttribute('name').includes(this._settings.sourceUrlElem) === false) return false;
        let checkRes = !!this._settings.urlPattern.test(target.value);
        let sourceInputAlertBox = this._getInputAlertBox(target, this._settings.secondContainer);
        if (!checkRes) {

            this._errorBag.showUpdateErrorBox(sourceInputAlertBox, 'Not valid URL');
            return false;
        }
        else{
            this._errorBag.hideUpdateErrorBox(sourceInputAlertBox);
        }
        e.stopImmediatePropagation();
    }
    _sendNewSourceHandler(e){
        let target = e.target;
        if(target.tagName!=='BUTTON') return false;
        let checkedCollection = $(this._settings.checkBoxInput,this._settings.secondContainer).filter(':checked');
        if(!checkedCollection.length){
            this._errorBag.showGeneralErrorBox('At least one category must be selected');
            return false;
        }
        this._errorBag.hideGeneralErrorBox();
        checkedCollection.each((_,item)=>{
            let relatedSource$ = this._getRelatedSourceElem(item);
            if(relatedSource$.val()==='')
            {
                console.log('calling');
                this._errorBag.showUpdateErrorBox(
                    this._getInputAlertBox(relatedSource$.get(0),this._settings.secondContainer),'URL cannot be empty');
                e.preventDefault();
                return false;
            }
            else{
                let checkRes = !!this._settings.urlPattern.test(relatedSource$.val());
                if(!checkRes) e.preventDefault();
            }
        });
    }
    _showSourceElem(sourceElem$) {
        sourceElem$.queue(next => {
            sourceElem$.removeClass('d-none');
            next();
        }).queue(next => {
            sourceElem$.fadeOut(0);
            next();
        }).queue(next => {
            sourceElem$.fadeIn('normal');
            sourceElem$.on('change.ValidURL', $.proxy(this._validURLHandler, this));
            next();
        });
    }

    _hideSourceElem(sourceElem$, e) {
        sourceElem$.queue(next => {
            sourceElem$.fadeOut('normal');
            next();
        }).queue(next => {
            sourceElem$.addClass('d-none');
            if (e.originalEvent) {
                sourceElem$.val('');
            }
            next();
        }).queue(next => {
            this._errorBag.hideUpdateErrorBox(this._getInputAlertBox(sourceElem$.get(0), this._settings.secondContainer));
            next();
        });
    }
    _getRelatedSourceElem(checkbox){
        let relatedSourceName = $(checkbox).data('source');
        $(`[name='${relatedSourceName}']`, this._settings.secondContainer);
        return $(`[name='${relatedSourceName}']`, this._settings.secondContainer);
    }
    _getCheckBoxAlertBox(elem, context) {
        return $(`[data-error-update-for='${elem.getAttribute('id')}']`, context).get(0);
    }

    _getInputAlertBox(elem, context) {
        return $(`[data-error-update-for='${elem.getAttribute('name')}']`, context).get(0);
    }
}
