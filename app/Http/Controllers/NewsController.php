<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Ajax\AjaxNewsController;
use App\Http\Repositories\NewsRepository;
use App\Http\Traits\SimpleModelDataValidator;
use App\News;

class NewsController extends Controller
{
    use SimpleModelDataValidator;
   function __construct(NewsRepository $repository, AjaxNewsController $ajax_handler)
   {
       $this->repository = $repository;
       $this->ajax_handler = $ajax_handler;
   }

   function all(){
       return $this->repository->all();
   }
    function show(News $news)
    {
        dd($news);
    }

    function edit(News $news)
    {
        return view('news.edit')->withNews($news);
    }

    function update(News $news)
    {
        $news->update($this->validatedData($this->rules));
        return redirect('news');
    }

    function destroy(News $news)
    {

    }

    function create()
    {
        return $this->repository->create();
        //return view('news.create')->withCategories($this->getActualNewsCategories());
    }

    function store()
    {
        return $this->repository->store();
    }
    function import(){

    }
   protected $repository;
   protected $category;
   protected $ajax_handler;
   protected $rules;
   const UPLOAD_FOLDER = 'public/uploads/news_img';
}
