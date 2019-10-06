import {routing} from "../routing";
export
let ajaxReqSettings = {
    type: "PATCH",
    url: routing.update_task,
    data: null,
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        'Content-Type': 'application/json',
        'charset': 'utf-8',
        'async':true,
        'Accept': 'application/json'
    },
    preloader:"preloader"
};
