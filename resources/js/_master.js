import {ErrorBag} from "./classes/ErrorBag.class";
import {errorsInitObj} from "./init objects/errors/errorsInitObj";
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
import {newsResourceInitObj} from "./init objects/resources_news/newsResourceInitObj";
import {NewsResource} from "./classes/NewsResource.class";
import {updateNewsResourceInitObj} from "./init objects/resources_news/updateNewsResourceInitObj";
import {updateNewsResReqSettings} from "./init objects/resources_news/updateNewsResReqSettings";
import {EditNewsResource} from "./classes/EditNewsResource.class";

(function ($, undefined) {
    $(function () {
        let url = location.pathname.substr(1);
        let patternProject = new UrlPattern(routing.project);

        let patternEditNewsResource = new UrlPattern(routing.edit_newsResource);
        //console.log(url);
        let routingList = Object.keys(routing);
        let errorBag = new ErrorBag(errorsInitObj);
        errorBag.hideAlertsIForms();
        try {
            switch (url) {
                case "":
                    console.log(`index page`);
                    break;
                case "tasks":
                    (new Task(taskInitObj, new Ajax(taskAjaxReqSettings),errorBag)).run();
                    (new TestPromises(5)).run();
                    break;
                case "news_resource":
                    break;
                case "news_resource/create":
                    (new NewsResource(newsResourceInitObj,errorBag)).run();
                    break;
                default:
                    throw new Error("404 Page not found!!");
            }

        } catch (e) {
            if ((patternProject.match(url) !== null)){
                (new Project(projectInitObj, new Ajax(projectAjaxReqSettings),errorBag)).run();
            }
            else if(patternEditNewsResource.match(url)!==null){
                (new EditNewsResource(updateNewsResourceInitObj,errorBag,new Ajax(updateNewsResReqSettings))).run();
            }
            else {
                window.location.replace('/not_found_url');
                //console.log(e.stack);
            }


        }

    });
})(jQuery);
