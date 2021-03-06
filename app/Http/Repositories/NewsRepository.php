<?php


namespace App\Http\Repositories;

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
            'title' => 'required|min:4',
            'description' => 'required|min:5',
            'fk_category' => [
                'required',
                'numeric',
                Rule::in(array_column($this->category->getActualCategory(), 'id'))
            ],
            'url_title'=>'required|min:3|string',
            'news_image' => 'required|file|image|max:20480'
        ];
    }

    function all()
    {
        return $this->category->with('news.images')->where(function ($query) {
            $query->has('news');
        })->get()->map(function($category){
            $category->news = $category->news->sortByDesc('created_at')->take(6);
            return $category;
        });
    }

    function show(Model $model)
    {
        // TODO: Implement show() method.
    }

    function create()
    {
        return view('news.create')->withCategories($this->category->getActualCategory());
    }

    function store()
    {
        $data = $this->validatedData($this->rules);
        $upload_image_instance = array_pop($data);
        if (!$upload_image_instance instanceof UploadedFile) {
            throw new Exception("Getting object does not instance of UploadedFile");
        }
        $img_src = substr($upload_image_instance->store(NewsRepository::UPLOAD_FOLDER), 7);
        $img_name = last(explode('/', $img_src));

        $news = $this->category->where('id', request()->get('fk_category'))->first()->news()->create($data);
        $news->images()->create(['src' => $img_src, 'name' => $img_name]);
        //dd($createImgResult);
        return redirect(route('news'));
    }

    function import(){
        
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
    const UPLOAD_FOLDER = 'public/uploads/news_img';

}