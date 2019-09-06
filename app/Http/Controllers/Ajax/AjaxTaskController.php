<?php

namespace App\Http\Controllers\Ajax;

use App\Interfaces\Ajax;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AjaxTaskController extends Controller implements Ajax
{
    //
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    function create()
    {
        // TODO: Implement create() method.
    }

    function read()
    {
        // TODO: Implement read() method.
    }

    function update(Model $model)
    {
        $modified_task_description = json_decode($this->request->getContent(), true);
        $result = ['update'=>$model->fill($modified_task_description)->save()];
        echo json_encode($result);
        /*echo json_encode(response()->json($result,204,[
            'Content-Type'=>'application/json',
            'Content-Length'=>15,
            'charset'=>'utf-8',
        ]));
        */
    }

    function delete()
    {
        // TODO: Implement delete() method.
    }
    protected $model;
    protected $request;
}
