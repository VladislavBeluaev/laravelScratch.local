<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsImages extends Model
{
    protected $guarded = [];
    function getNewsByImage(){
        return $this->belongsTo(News::class,'fk_news');
    }
}
