<?php

namespace App\Http\Controllers\Ajax;

use App\Interfaces\Ajax;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

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
        $getting_data = json_decode($this->request->getContent(), true);
        $validator = Validator::make($getting_data, [
            'is_deleted' => 'ends_with:recycle'
        ],[
            'ends_with'=>'Trying to send incorrect value to column is_deleted when trying to remove project.'
        ]);
        if ($validator->fails()) {
            return Response::json(
                ['error'=>$validator->errors()->all(),
                    'userInfo'=>'Errors have occurred in the application. Contact administrator.'
                ],422)->withHeaders(
                [
                    'Content-Type' => 'application/json',
                    'Content-Length'=>strlen(implode($validator->errors()->all(),'')),
                    'charset'=>'utf-8'
                ]
            );
        }
        $result = $model->update($validator->valid());
        if($result===true)
            return Response::json(['redirectTo' => route('projects')],200)->withHeaders([
                'Content-Type' => 'application/json',
                'Content-Length'=>strlen(route('projects')),
                'charset'=>'utf-8'
            ]);
        $serverError = 'Internal server Error.Errors occurred while updating the database data. Contact administrator';
        return Response::json(['serverError' => $serverError],500)->withHeaders([
            'Content-Type' => 'application/json',
            'Content-Length'=>strlen($serverError),
            'charset'=>'utf-8'
        ]);
    }

    protected $request;
}
