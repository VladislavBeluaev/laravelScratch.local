<?php

namespace App\Http\Controllers\Ajax;

use App\Interfaces\Ajax;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AjaxProjectController extends Controller implements Ajax
{
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
        // TODO: Implement update() method.
    }

    function destroy(Model $model)
    {
        $getting_data = json_decode($this->request->getContent(),true);
        $result = $model->fill($getting_data)->save();
        echo json_encode(['redirectTo'=>route('projects')]);
    }
    protected $request;
}
