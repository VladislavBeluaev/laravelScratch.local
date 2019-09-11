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
        return view('projects.project')->withProjects($controller->all());
    }

    function tasks(TasksController $controller)
    {
        dd($controller->allWithFilters(['is_completed'=>false,'is_deleted'=>'']));
        return view('tasks.task')->withTasks($controller->all());
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
