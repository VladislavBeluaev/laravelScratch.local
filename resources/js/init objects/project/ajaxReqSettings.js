import {routing} from "../routing";
export
let ajaxReqSettings = {
    type: "DELETE",
    url: routing.delete_project,
    data: null,
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        'Content-Type': 'application/json',
        'charset': 'utf-8',
        'async':true,
        'Accept': 'application/json'
    },
};
