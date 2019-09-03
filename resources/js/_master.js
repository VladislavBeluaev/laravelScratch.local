import {Ajax} from "./classes/Ajax.class";
import {Task} from "./classes/Task.class";
import {taskInitObj} from "./init objects/task/taskInitObj";
import {taskRequestParams} from "./init objects/task/taskRequestParams";
import{routing} from "./init objects/routing";

(function ($,undefined) {
    $(function () {
        let url = location.pathname.substr(1);
        let routingList = Object.keys(routing);
        try{
            switch (url) {
                case "":
                    console.log(`index page`);
                    break;
                case "tasks":
                    let XMLHttpRequest = new Ajax();

                    (new Task(taskInitObj,XMLHttpRequest.configure(taskRequestParams))).run();
                    break;
                default:
                    throw new Error("404 Page not found!!");
            }
        }
        catch (e) {
            console.log(e.stack);
        }

    });
})(jQuery);
