<?php

namespace App;

use App\Http\Traits\Filters;
use Illuminate\Database\Eloquent\Model;

class NewsCategory extends Model
{
    use Filters;
    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'title';
    }

    function news(){
        return $this->hasMany(News::class,'fk_category');
    }
    function resources(){
        return $this->belongsToMany('categories_resources','fk_category','fk_resource')->withTimestamps();
    }
    function sources(){
        return $this->belongsToMany(NewsLink::class,'categories_links','fk_category','fk_link');
    }
    /*function getLimitNews(){
        return $this->news()->limit(2);
    }*/

    function  getActualCategory(){
        return $this->filterCollection($this->all(),[
            'is_deleted'=>''
        ]);
    }
}
