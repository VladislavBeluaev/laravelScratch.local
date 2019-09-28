<?php


namespace App\Http\Traits;


trait SimpleModelDataValidator
{
    function validatedData($rules){
        return request()->validate($rules);
    }
}
