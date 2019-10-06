<?php

namespace App\Http\Controllers\Ajax;

use App\Http\Traits\ValidateAjaxModelsData;
use App\Interfaces\Ajax;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class AjaxTaskController extends Controller implements Ajax
{
    use ValidateAjaxModelsData;

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
        $modified_task = json_decode($this->request->getContent(), true);
        $resultJson =  $this->makeValidation(
            $model, $modified_task, [
                [
                    'description' => 'required|min:5'
                ],
            ]
        );
        try{
            if($resultJson->getData()->description===true){
                $resultJson->setData(['update'=>true]);
            }
            return $resultJson;
        }
        catch (\ErrorException $error){
            return $resultJson;
        }

    }

    function complete(Model $model)
    {
        $complete_task = json_decode($this->request->getContent(), true);
        return $this->makeValidation(
            $model, $complete_task, [
                [
                    'is_completed' => 'required|boolean'
                ],
                [
                    'boolean' => 'Trying to send incorrect value to is_completed column',
                ]
            ]
        );

    }

    function destroy(Model $model)
    {
        $removingTask = json_decode($this->request->getContent(), true);
        return $this->makeValidation(
            $model, $removingTask, [
                [
                    'is_deleted' => 'required|ends_with:recycle'
                ],
                [
                    'ends_with' => 'Trying to send incorrect value to is_deleted column'
                ]
            ]
        );
    }

    protected $request;
}
