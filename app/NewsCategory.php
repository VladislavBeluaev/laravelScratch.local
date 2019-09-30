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

    function news(){
        return $this->hasMany(News::class,'fk_category');
    }
}
