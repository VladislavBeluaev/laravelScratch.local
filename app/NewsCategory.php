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

    function  getActualCategory(){
        return $this->filterCollection($this->all(),[
            'is_deleted'=>''
        ]);
    }
}
