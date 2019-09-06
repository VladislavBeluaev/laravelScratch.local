import {Ajax} from "./classes/Ajax.class";
import {Task} from "./classes/Task.class";
import {taskInitObj} from "./init objects/task/taskInitObj";
import {ajaxReqSettings} from "./init objects/task/ajaxReqSettings";
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

                    (new Task(taskInitObj,new Ajax(ajaxReqSettings))).run();
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
