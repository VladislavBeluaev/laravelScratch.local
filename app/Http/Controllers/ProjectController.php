<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Ajax\AjaxProjectController;
use App\Http\Requests\ProjectRequest;
use App\Http\Traits\Filters;
use App\Http\Traits\SimpleModelDataValidator;
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
    use Filters,SimpleModelDataValidator;

    function __construct(Project $project,/*ProjectRequest $validator,*/ AjaxProjectController $ajax_handler)
    {
        $this->project = $project;
        $this->ajax_handler = $ajax_handler;
        /*$this->validator = $validator;*/
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
        $project->update($this->validatedData(ProjectController::RULES));
        return redirect('projects');
    }

    function destroy(Project $project)
    {
        return $this->ajax_handler->destroy($project);
    }

    function create()
    {
        return view('projects.create');
    }

    function store()
    {
        $this->project->insert(
            $this->validatedData(ProjectController::RULES)
            /*$this->validator->validated()*/
        );
        return redirect(route('projects'));
    }
    protected $project;
    protected $ajax_handler;
    protected $validator;
    const  RULES = [
        'title'=>'required|min:5|',
        'description'=>'required|min:5',
    ];
    static $filtersData;
}
