<?php


namespace App\Http\Traits;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

trait ValidateAjaxModelsData
{
    function makeValidation(Model $model,array $getting_data,array $dataForValidatorFacade){
        $getting_data_key = key($getting_data);
        $rules = array_shift($dataForValidatorFacade);
        $validator = Validator::make($getting_data,$rules);
        if(count($dataForValidatorFacade)==1){
            //dd(array_shift($dataForValidatorFacade));
            $validator = Validator::make($getting_data,$rules,array_shift($dataForValidatorFacade));
        }
        if ($validator->fails()) {
            return Response::json(
                ['errors'=>$validator->errors()->all(),
                    'userInfo'=>'Errors have occurred in the application. Please, contact administrator.'
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
        {
            $returned_data = [$getting_data_key=>$result];
            return Response::json($returned_data,200)->withHeaders([
                'Content-Type' => 'application/json',
                'Content-Length'=>strlen(implode($returned_data,'')),
                'charset'=>'utf-8'
            ]);
        }

        $serverError = 'Internal server Error.Errors occurred while make safe removing. Please, contact with administrator';
        return Response::json(
            ['errors' => [$serverError],
            'userInfo'=>'Errors have occurred in database. Please, contact administrator.'
            ]
            ,500)->withHeaders([
            'Content-Type' => 'application/json',
            'Content-Length'=>strlen($serverError),
            'charset'=>'utf-8'
        ]);
    }
}
