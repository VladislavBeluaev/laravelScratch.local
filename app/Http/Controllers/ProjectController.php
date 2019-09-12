<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Ajax\AjaxProjectController;
use App\Project;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Integer;

class ProjectController extends Controller
{
    function __construct(Project $project,AjaxProjectController $ajax_controller)
    {
        $this->project = $project;
        $this->ajax_controller = $ajax_controller;
    }

    function all()
    {
        return $this->project->get();
    }

    function show(Project $project)
    {
        //dd($project);
        return view('projects.project')->withProject($project);
    }
    function edit(Project $project){

        return view('projects.edit')->withProject($project);
    }
    function update(Project $project){
        $result = $project->fill(request()->except(['_token','_method']))->save();
        /*$project->title = request('title');
        $project->description = request('description');
        $project->save();*/
        if(!$result) return redirect()->back();
        return redirect('projects');
    }
    function destroy(Project $project){
        return $this->ajax_controller->destroy($project);
    }
    function create()
    {
        return view('projects.create');
    }
    function store()
    {
        $this->project->insert(request()->except('_token'));
        return redirect(route('projects'));
    }

    protected $project;
    protected $ajax_controller;
}
