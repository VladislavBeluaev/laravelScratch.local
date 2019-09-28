<?php

namespace App\Http\Controllers;

use App\Http\Traits\ValidateAjaxModelsData;
use App\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
   function __construct(News $news)
   {
       $this->news = $news;
   }

   function all(){
       return $this->news->all();
   }
    function show(News $news)
    {
        //dd($news);
        return view('news.project')->withNews($news);
    }

    function edit(News $news)
    {

        return view('news.edit')->withNews($news);
    }

    function update(News $news)
    {
        $news->update($this->validatedData());
        return redirect('news');
    }

    function destroy(News $news)
    {

    }

    function create()
    {
        return view('projects.create');
    }

    function store()
    {
        $this->project->insert(
        $this->validatedData()
    /*$this->validator->validated()*/
    );
        return redirect(route('news'));
    }
   protected $news;
}
