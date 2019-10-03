<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Ajax\AjaxNewsController;
use App\Http\Repositories\NewsRepository;
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
    use SimpleModelDataValidator;
   function __construct(NewsRepository $repository, AjaxNewsController $ajax_handler)
   {
       /*$this->news = $news;
       $this->category = $category;*/
       $this->repository = $repository;
       $this->ajax_handler = $ajax_handler;
       /*$this->rules = [
           'title'=>'required|min:4',
           'description'=>'required|min:5',
           'fk_category'=>[
               'required',
               'numeric',
               Rule::in(array_column($this->getActualNewsCategories(),'id'))
           ],
           'news_image'=>'required|file|image|max:20480'
       ];*/
   }

   function all(){
       return $this->repository->all();
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
        return $this->repository->create();
        //return view('news.create')->withCategories($this->getActualNewsCategories());
    }

    function store()
    {
        $data = $this->validatedData($this->rules);
        $upload_image_instance = array_pop($data);
       if(!$upload_image_instance instanceof UploadedFile){
          throw new Exception("Getting object does not instance of UploadedFile");
       }
        $img_src= $upload_image_instance->store(NewsController::UPLOAD_FOLDER);
        $img_name = last(explode('/',$img_src));

        $news = $this->category->where('id',request()->get('fk_category'))->first()->news()->create($data);
        $news->images()->create(['src'=>$img_src,'name'=>$img_name]);
       //dd($createImgResult);
        return redirect(route('news'));
    }
    function import(){

    }
    private function getActualNewsCategories(){
    return $this->filterCollection($this->category->all(),[
        'is_deleted'=>''
    ]);
}
   protected $repository;
   protected $category;
   protected $ajax_handler;
   protected $rules;
   const UPLOAD_FOLDER = 'public/uploads/news_img';
}
