<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsResource extends Model
{
    protected $fillable = ['res_name'];

    function categories(){
       return $this->belongsToMany(NewsCategory::class,'categories_resources','fk_resource','fk_category')->withTimestamps();
    }
    public function getResNameAttribute($value)
    {
        $with_dot = strstr($value,'.',true);
        return $with_dot===false?$value:$with_dot;
    }
    function getRouteKey()
    {
        return 'res_name';
    }
}
