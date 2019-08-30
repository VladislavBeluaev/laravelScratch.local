import {Task} from "./classes/Task.class";
import {taskInitObj} from "./init objects/taskInitObj";

(function ($,undefined) {
    $(function () {
        let url = location.pathname.substr(1);
        try{
            switch (url) {
                case "tasks":
                    (new Task(taskInitObj)).run();
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
