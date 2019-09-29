<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsImages extends Model
{
    function getNewsByImage(){
        return $this->belongsTo(News::class);
    }
}
