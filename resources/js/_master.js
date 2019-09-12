import {Ajax} from "./classes/Ajax.class";
import {Task} from "./classes/Task.class";
import {TestPromises} from "./classes/TestPromise.class";
import {taskInitObj} from "./init objects/task/taskInitObj";
import {ajaxReqSettings as taskAjaxReqSettings} from "./init objects/task/ajaxReqSettings";
import {routing} from "./init objects/routing";
import {Project} from "./classes/Project.class";
import {projectInitObj} from "./init objects/project/projectInitObj";
import {ajaxReqSettings as projectAjaxReqSettings} from "./init objects/project/ajaxReqSettings";
import UrlPattern from "url-pattern";

(function ($, undefined) {
    $(function () {
        let url = location.pathname.substr(1);
        let patternProject = new UrlPattern(routing.project);

        let routingList = Object.keys(routing);
        try {
            switch (url) {
                case "":
                    console.log(`index page`);
                    break;
                case "tasks":
                    (new Task(taskInitObj, new Ajax(taskAjaxReqSettings))).run();
                    (new TestPromises(5)).run();
                    break;
                /*case "projects":
                    (new Project(projectInitObj,new Ajax(projectAjaxReqSettings))).run();
                    break;*/
                default:
                    throw new Error("404 Page not found!!");
            }

        } catch (e) {
            if ((patternProject.match(url) !== null)){
                (new Project(projectInitObj, new Ajax(projectAjaxReqSettings))).run();
            } else {
                console.log(e.stack);
            }

        }

    });
})(jQuery);
