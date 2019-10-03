<?php


namespace App\Http\Repositories;


use App\Http\Controllers\NewsController;
use App\Http\Traits\SimpleModelDataValidator;
use App\Interfaces\IRepository;
use App\NewsCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Validation\Rule;
use Mockery\Exception;

class NewsRepository implements IRepository
{
    use SimpleModelDataValidator;
    function __construct(NewsCategory $category)
    {
        $this->category = $category;
        $this->rules = [
            'title'=>'required|min:4',
            'description'=>'required|min:5',
            'fk_category'=>[
                'required',
                'numeric',
                Rule::in(array_column($this->category->getActualCategory(),'id'))
            ],
            'news_image'=>'required|file|image|max:20480'
        ];
    }

    function all()
    {
        return $this->category->with('news.images')->where(function($query){
            $query->has('news');
        })->get();
    }

    function show(Model $model)
    {
        // TODO: Implement show() method.
    }

    function create()
    {
       return view('news.create')->withCategories($this->category->getActualCategory());
    }

    function store(){
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

    function update(Model $model)
    {
        // TODO: Implement update() method.
    }

    function delete(Model $model)
    {
        // TODO: Implement delete() method.
    }

    protected $category;
    protected $rules;

}