<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsLink extends Model
{
    protected $fillable = ['url'];
    function categories(){
        return $this->belongsToMany(NewsCategory::class,'categories_links','fk_link','fk_category');
    }
}
