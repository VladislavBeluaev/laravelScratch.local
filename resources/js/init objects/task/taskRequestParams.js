import {routing} from "../routing";
export
let taskRequestParams = {
    type: "PATCH",
    url: routing.update_task,
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        'Content-Type': 'application/json',
        'charset': 'utf-8',
        'Accept': 'application/json'
    }
};
