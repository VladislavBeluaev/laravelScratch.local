<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsCategory extends Model
{
    protected $guarded = [];
    public function getRouteKeyName()
    {
        return 'title';
    }
}
