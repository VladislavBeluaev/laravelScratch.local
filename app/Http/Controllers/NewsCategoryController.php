<?php

namespace App\Http\Controllers;

use App\Http\Traits\Filters;
use App\Http\Traits\SimpleModelDataValidator;
use App\News;
use App\NewsCategory;
use Illuminate\Http\Request;

class NewsCategoryController extends Controller
{
   use Filters,SimpleModelDataValidator;
    function __construct(NewsCategory $category)
    {
        $this->category = $category;
    }
    function index(){
        $actualCategories =$this->filterCollection($this->category->all(),[
            'is_deleted'=>''
        ]);
        return view('news_category.all')->withCategories($actualCategories);
    }
    function showNewsByCategory(News $news){

    }

    function edit(News $news)
    {

        return view('news.edit')->withNews($news);
    }

    function update(News $news)
    {
        $news->update($this->validatedData(NewsCategoryController::RULES));
        return redirect('news');
    }

    function destroy(News $news)
    {

    }

    function create()
    {
        return view('news_category.create');
    }

    function store()
    {
        $this->category->insert(
            $this->validatedData(NewsCategoryController::RULES));

        return redirect(route('all_categories'));
    }
    const RULES = [
        'title'=>'required|min:4'
    ];
    protected $category;
}
