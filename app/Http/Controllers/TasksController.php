<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Ajax\AjaxTaskController;
use App\Task;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Integer;

class TasksController extends Controller
{
    function __construct(Task $task,AjaxTaskController $ajax_controller)
    {
        $this->task = $task;
        $this->ajax_controller = $ajax_controller;
    }

    function all()
    {
        return $this->task->where([
            'is_completed'=>false,
            'is_deleted'=>''
        ])->get();
    }

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
        $this->task->insert(request()->except('_token'));
        return redirect(route('tasks'));
    }
    function edit(){
    }

    function update(Task $task/*AjaxTaskController $ajax_controller*/)
    {
        return $this->ajax_controller->update($task);
    }
    function complete(Task $task){
        return $this->ajax_controller->complete($task);
    }

    function destroy(Task $task)
    {
        return $this->ajax_controller->destroy($task);
    }

    protected $task;
    protected $ajax_controller;
}
