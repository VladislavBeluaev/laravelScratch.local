<?php

namespace App\Http\Controllers\Ajax;

use App\Http\Traits\ValidateModelsData;
use App\Interfaces\Ajax;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class AjaxProjectHandler extends Controller implements Ajax
{
    use ValidateModelsData;
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

        $remove_project = json_decode($this->request->getContent(), true);
        $resultJson =  $this->makeValidation(
            $model,$remove_project,[
                ['is_deleted' => 'required|ends_with:recycle'],
                ['ends_with'=>'Trying to send incorrect value to column is_deleted when trying to remove project.']
            ]
        );
        if($resultJson->getData()->is_deleted===true){
            $resultJson->setData(['redirectTo'=>route('projects')]);
        }
        return $resultJson;
    }

    protected $request;
}
