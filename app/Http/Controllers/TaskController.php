<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Ajax\AjaxTaskController;
use App\Http\Traits\Filters;
use App\Task;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Integer;

class TaskController extends Controller
{
    use Filters;
    function __construct(Task $task, AjaxTaskController $ajax_controller)
    {
        $this->task = $task;
        $this->ajax_controller = $ajax_controller;
    }

    function all()
    {
        return $this->task->get();
    }

    /*function allWithFilters(array $filters=[])
    {
        $filters_count = count($filters);
        if($filters_count===0) return $this->all();
        else{
            $filters_data = $this->all();
            while(count($filters)){
                $filter = array_shift($filters);
                $filters_data = $filters_data->where(key($filter),$filter[key($filter)]);
            }
            return $filters_data->values();
        }
    }*/

    function get(Integer $id)
    {
        return $this->task->where('id', $id);
    }

    function create()
    {
        return view('tasks.create');
    }

    function store()
    {
        $this->task->insert(request()->except('_token','id'));
        return redirect(route('tasks'));
    }

    function edit()
    {
    }

    function update(Task $task)
    {
        return $this->ajax_controller->update($task);
    }

    function complete(Task $task)
    {
        return $this->ajax_controller->complete($task);
    }

    function destroy(Task $task)
    {
        return $this->ajax_controller->destroy($task);
    }

    protected $task;
    protected $ajax_controller;
}
