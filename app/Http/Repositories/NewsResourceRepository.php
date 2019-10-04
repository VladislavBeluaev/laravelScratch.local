<?php


namespace App\Http\Repositories;


use App\Interfaces\IRepository;
use App\NewsCategory;
use App\NewsResource;
use Illuminate\Database\Eloquent\Model;

class NewsResourceRepository implements IRepository
{
    function __construct(NewsResource $resource)
    {
        $this->resource = $resource;
    }

    function all()
    {
        return view('news_resources.all')->withResources($this->resource->all());
    }

    function show(Model $model)
    {
        // TODO: Implement show() method.
    }

    function create()
    {
        return view('news_resources.create')->withCategories(NewsCategory::all());
    }

    function store(){
        dd(request()->all());
    }

    function update(Model $model)
    {
        // TODO: Implement update() method.
    }

    function delete(Model $model)
    {
        // TODO: Implement delete() method.
    }

    protected $resource;

}