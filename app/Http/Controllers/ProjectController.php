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

    function get(Integer $id)
    {
        return $this->project->where('id', $id);
    }
    function create(){

    }

    protected $project;
}
