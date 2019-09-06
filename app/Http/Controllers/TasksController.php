<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Ajax\AjaxTaskController;
use App\Task;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Integer;

class TasksController extends Controller
{
    function __construct(Task $task)
    {
        $this->task = $task;
    }

    function all()
    {
        return $this->task->get();
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
    function edit(Task $task){
    }

    function update(Task $task, AjaxTaskController $ajax_controller)
    {
        //dd($task->description);
        $ajax_controller->update($task);
       //echo json_encode($task->description);
    }

    function destroy()
    {

    }

    function complete()
    {

    }

    protected $task;
}
