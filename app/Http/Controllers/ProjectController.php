<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Ajax\AjaxProjectController;
use App\Http\Traits\Filters;
use App\Project;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Integer;

/*
         * update method vs fill. Method Fill used when we don't want to update model immediately. He returns updated model.
         * When we call save() on updated model then model updates.
         * Update method immediately changes model. No need to call method save().
         * */

class ProjectController extends Controller
{
    use Filters;

    function __construct(Project $project, AjaxProjectController $ajax_controller)
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

    function edit(Project $project)
    {

        return view('projects.edit')->withProject($project);
    }

    function update(Project $project)
    {
        //$result = $project->fill(request()->except(['_token','_method']))->save();
        $result = $project->update(\request()->except(['_token', '_method', 'id']));
        if (!$result) return redirect()->back();
        return redirect('projects');
    }

    function destroy(Project $project)
    {
        return $this->ajax_controller->destroy($project);
    }

    function create()
    {
        return view('projects.create');
    }

    function store()
    {
        $this->project->insert(request()->except('_token','id'));
        return redirect(route('projects'));
    }

    protected $project;
    protected $ajax_controller;
    static $filtersData;
}
