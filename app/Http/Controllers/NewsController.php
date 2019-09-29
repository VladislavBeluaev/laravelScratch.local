<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Ajax\AjaxNewsController;
use App\Http\Traits\Filters;
use App\Http\Traits\SimpleModelDataValidator;
use App\News;
use App\NewsCategory;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Validation\Rule;
use Mockery\Exception;

class NewsController extends Controller
{
    use SimpleModelDataValidator,Filters;
   function __construct(News $news,NewsCategory $category, AjaxNewsController $ajax_handler)
   {
       $this->news = $news;
       $this->category = $category;
       $this->ajax_handler = $ajax_handler;
       $this->rules = [
           'title'=>'required|min:4',
           'description'=>'required|min:5',
           'fk_category'=>[
               'required',
               'numeric',
               Rule::in(array_column($this->getActualNewsCategories(),'id'))
           ],
           'news_image'=>'required|file|image|max:20480'
       ];
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
        $news->update($this->validatedData($this->rules));
        return redirect('news');
    }

    function destroy(News $news)
    {

    }

    function create()
    {
        return view('news.create')->withCategories($this->getActualNewsCategories());
    }

    function store()
    {
        $data = $this->validatedData($this->rules);
        $upload_image_instance = array_pop($data);
       if(!$upload_image_instance instanceof UploadedFile){
          throw new Exception("Getting object does not instance of UploadedFile");
       }
       //dd($uploadImageInstance)
        $path= $upload_image_instance->store('uploads/news_img');
        $name = last(explode('/',$path));
       dd($data);
        return redirect(route('news'));
    }
    function import(){

    }
    private function getActualNewsCategories(){
    return $this->filterCollection($this->category->all(),[
        'is_deleted'=>''
    ]);
}
   protected $news;
   protected $category;
   protected $ajax_handler;
   protected $rules;
}
