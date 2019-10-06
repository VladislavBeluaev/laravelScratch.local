export class NewsResource {
    constructor(settings, errorBag) {
        this._settings = settings;
        this._errorBag = errorBag;
    }

    run() {
        let container$ = $(this._settings.container);
        let self = this;
        $(this._settings.resourceName).on({
            'change.addNewsResource': $.proxy(this._inputResourceNameHandler, this),
            'focus.removeErrorBox': function (e) {
                self._errorBag.hideNewsResourceErrorBox(e.target.nextElementSibling);
            }
        });
        $(this._settings.checkBoxInput).on('change.addResourceSource', $.proxy(this._toggleSourceInputHandler, this));
        container$.on('click.CreateNewsResource', container$.find('button[type="button"]'), $.proxy(this._createResourceHandler, this))
        $(window).on('load', $.proxy(this._showSourcesField, this));
    }

    _inputResourceNameHandler() {
        let target = event.target;
        if (target.tagName !== 'INPUT') return false;
        if (!target.value) this._errorBag.showNewsResourceErrorBox(target.nextElementSibling);
        else
            this._errorBag.hideNewsResourceErrorBox(target.nextElementSibling);
    }

    _toggleSourceInputHandler(event) {
        let target = event.target;
        if (target.tagName !== 'INPUT') return false;
        this._errorBag.hideGeneralErrorBox();
        let parent$ = $(target.closest('div'));
        if (parent$.hasClass(this._settings.inputWrapper) === false) return false;
        let sourceURLElem$ = parent$.next();
        if (sourceURLElem$.attr('name').includes(this._settings.sourceUrlElem) === false) return false;
        if ($(target).is(':checked')) this._showSourceElem(sourceURLElem$);
        else {
            console.log(sourceURLElem$);
            this._hideSourceElem(sourceURLElem$,event);
        }

    }

    _showSourceElem(elem$) {
        elem$.queue(next => {
            elem$.removeClass('d-none');
            next();
        }).queue(next => {
            elem$.fadeOut(0);
            next();
        }).queue(next => {
            elem$.fadeIn('normal');
            elem$.on('change.NewsResourceValidURL', $.proxy(this._validURL, this));
            next();
        });
    }

    _hideSourceElem(elem$,e) {
        elem$.queue(next => {
            elem$.fadeOut('normal');
            next();
        }).queue(next => {
            elem$.addClass('d-none');
            if(e.originalEvent){
                elem$.val('');
            }
            next();
        }).queue(next => {
            this._errorBag.hideNewsResourceErrorBox(elem$.next()[0]);
            if(e.originalEvent){
                this._errorBag.hideServerErrorsBox(elem$.next()[0]);
                this._errorBag.hideServerErrorsBox(elem$.prev().find(':last-child')[0]);
            }
            next();
        });
    }

    _validURL(event) {
        let target = event.target;
        if (target.tagName !== 'INPUT' || $(target).attr('name').includes(this._settings.sourceUrlElem) === false) return false;
        let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i');
        let checkRes = !!pattern.test(target.value);
        if (!checkRes)
            this._errorBag.showNewsResourceErrorBox(target.nextElementSibling, 'Not valid URL');
        else this._errorBag.hideNewsResourceErrorBox(target.nextElementSibling);
        $(target).data('validate-before', true);
        event.stopImmediatePropagation();
    }

    _createResourceHandler(event) {
        let resourceName$ = $(this._settings.resourceName);
        if (!resourceName$) throw new Error('Field resource name does not exist. Check form');
        if (event.target.tagName === 'BUTTON') {
            if (!resourceName$.val()) {
                this._errorBag.showNewsResourceErrorBox(resourceName$.next()[0]);
                console.log('resourceName$.val()');
                event.preventDefault();
            }
            let checkedSources = $(this._settings.checkBoxInput).filter(':checked');
            console.log(checkedSources);
            if (!checkedSources.length) {
                this._errorBag.showGeneralErrorBox('At least one category must be selected');
                console.log('checkedSources.length');
                event.preventDefault();
            }
            checkedSources.each((_, item) => {
                let sourceInput$ = $(item.closest('div').nextElementSibling);
                if(sourceInput$.val()==='') {
                    this._errorBag.changeMessageOnVisibleError(sourceInput$.next(),'Trying to send empty value');
                    event.preventDefault();
                }
                if (sourceInput$.data('validate-before') === undefined) {
                    console.log(sourceInput$[0]);
                    sourceInput$.trigger('change.NewsResourceValidURL');
                }
                sourceInput$.removeData('validate-before');
                if (this._errorBag.isNewsResourceErrorBox() !== 0)
                {
                    console.log('checkedSources.length');
                    event.preventDefault();
                }

            });
            //event.preventDefault();
            //if(this._errorBag.isGeneralErrorShow())  event.preventDefault();
        }
    }
    _showSourcesField(){
        $(this._settings.checkBoxInput).filter(':checked').each((_,item)=>{
            $(item).trigger('change.addResourceSource');
        })
    }
}