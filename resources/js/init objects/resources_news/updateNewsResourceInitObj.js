export
let updateNewsResourceInitObj = {
    firstContainer:'form#edit_resource',
    secondContainer:'form#add_new_sources',
    checkBoxInput:'.custom-control-input',
    checkBoxWrapper :'custom-control',
    resourceName:'input[name="res_name"]',
    sourceUrlElem :'source_url',
    urlPattern:new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'),
    addSource:'.btn.btn-success',
    alert:'.alert.alert-danger'
};
