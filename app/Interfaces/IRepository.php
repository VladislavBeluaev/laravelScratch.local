<?php

namespace App\Interfaces;


use Illuminate\Database\Eloquent\Model;

interface IRepository
{
    function all();
    function show(Model $model);
    function create();
    function update(Model $model);
    function delete(Model $model);
}