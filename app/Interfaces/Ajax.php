<?php


namespace App\Interfaces;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

interface Ajax
{
     function __construct(Request $request);
    function create();
    function read();
    function update(Model $model);
    function destroy(Model $model);
}
