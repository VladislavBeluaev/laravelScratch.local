<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    function home()
    {
        return view('welcome')->withTasks([
            'go to store',
            'go to market',
            'go to job',
        ])->with([
            'request' => request('title'),
            'foo' => 'foobar'
        ]);
    }

    function projects(ProjectController $controller)
    {
        //dd($controller->all()[0]);
        $projects = $controller->filterCollection($controller->all(),['is_deleted'=>'']);
        //dd($projects);
        return view('projects.all')->withProjects($projects);
    }

    function tasks(TasksController $controller)
    {
        $tasks = $controller->filterCollection($controller->all(),['is_completed'=>false,'is_deleted'=>'']);
        return view('tasks.task')->withTasks($tasks);
    }

    function contacts()
    {
        return view('contacts');
    }

    function about()
    {
        return view('about');
    }
}
