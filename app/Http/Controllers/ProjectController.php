<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Integer;

class ProjectController extends Controller
{
    function __construct(Project $project)
    {
        $this->project = $project;
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
}
