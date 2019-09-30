<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $guarded = [];

    function images(){
        return $this->hasMany(NewsImages::class,'fk_news');
    }
}
