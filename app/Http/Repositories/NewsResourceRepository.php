<?php


namespace App\Http\Repositories;

use App\Interfaces\IRepository;
use App\NewsCategory;
use App\NewsLink;
use App\NewsResource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\MessageBag;

class NewsResourceRepository implements IRepository
{
    function __construct(NewsResource $resource, NewsLink $source,NewsCategory $category)
    {
        $this->resource = $resource;
        $this->source = $source;
        $this->category = $category;
    }

    function all()
    {
        $resource =$this->resource->with('categories.sources')->get();
        return view('news_resources.all')->withResources($resource);
    }

    function show(Model $model)
    {
        // TODO: Implement show() method.
    }

    function create()
    {
        return view('news_resources.create')->withCategories(NewsCategory::all());
    }

    function store()
    {
        //dd(request()->all());
        $rules = ['res_name' => 'required|unique:news_resources,res_name|min:3|regex:/^[a-zA-z]*(\.?)[a-zA-z]*$/',
                 'category_resource.*' => 'required|numeric'];
        $output_category_resource_indexes = [];
        foreach (request()->all() as $key=>$value){
            if(strstr($key,'source_url')!==false && $value!==null)
            {
                $output_category_resource_indexes[] = "category_resource.".substr($key,-1,1);
                $rules[$key] = 'required|URL';
            }

        }
        $validator = Validator::make(request()->all(),$rules,[
            'regex'=>'Resource name must contains only letters and one dot',
            'required' =>'The field is required',
            'ends_with'=>'The source_url must end with one of the following: xxx. Given',
            'numeric' => 'Field value must be valid number.'
        ]);
        if ($validator->fails()) {

            $errors = $validator->errors()->getMessages();
            $response_errors = [];
            foreach ($errors as $key => $value) {
                if (strstr($key, 'category_resource') !== false) {
                    $response_errors[array_shift($output_category_resource_indexes)] =$value;
                }
                else
                    $response_errors[$key] = $value;
            }
            return redirect()->route('create_news_resource')->withInput(
                request()->all())
                ->withErrors(new MessageBag($response_errors));
        }
        $save_data = [];
        foreach ($validator->validated() as $key=>$value){
            if(strstr($key,'source_url')!==false){
                $save_data['source_url'][] = $value;
            }
            else
                $save_data[$key] = $value;
        }
        extract($save_data);
        $new_resource = $this->resource->create(compact("res_name"));
        $new_resource->fresh();
        $new_resource->categories()->sync($category_resource);
        foreach ($source_url as $index=>$url) {
            $new_source = $this->source->create(compact("url"));
            $new_source->fresh();
            $new_source->categories()->sync([$category_resource[$index]]);
        }
        return redirect()->route('all_news_resources');
        //dd($save_data);
    }

    function bind_source(){
        //dd(request()->all());
        $rules = ['category_resource.*' => 'required|numeric'];
        $output_category_resource_indexes = [];
        foreach (request()->all() as $key=>$value){
            if(strstr($key,'source_url')!==false && $value!==null)
            {
                $output_category_resource_indexes[] = "category_resource.".substr($key,-1,1);
                $rules[$key] = 'required|URL|ends_with';
            }

        }
        $validator = Validator::make(request()->all(),$rules,[
            'required' =>'The field is required',
            'ends_with'=>'The source_url must end with one of the following: xxx. Given',
            'numeric' => 'Field value must be valid number.'
        ]);
        if ($validator->fails()) {

            $errors = $validator->errors()->getMessages();
            $response_errors = [];
            foreach ($errors as $key => $value) {
                if (strstr($key, 'category_resource') !== false) {
                    $response_errors[array_shift($output_category_resource_indexes)] =$value;
                }
                else
                    $response_errors[$key] = $value;
            }
            return redirect()->route('edit_news_resource',NewsResource::find(1))->withInput(
                request()->all())
                ->withErrors(new MessageBag($response_errors));
        }
        $save_data = [];
        foreach ($validator->validated() as $key=>$value){
            if(strstr($key,'source_url')!==false){
                $save_data['source_url'][] = $value;
            }
            else
                $save_data[$key] = $value;
        }
        dd($save_data);
    }

    function edit(Model $model){
        $all_categories = array_column($this->category->getActualCategory(),'id');
        $established_categories = array_column($model->with('categories')->first()->categories->toArray(),'id');
        $available_categories_id = array_diff($all_categories,$established_categories);
        /*$available_categories =  collect($this->category->getActualCategory())->filter(function ($model) use($available_categories_id){
            return in_array($model->id,$available_categories_id);
        });*/
        $available_categories =$this->category->whereIn('id',$available_categories_id)->get();
        //dd($available_categories);
        $resource = $model->with('categories.sources')->first();
        //dd(compact("resource","available_categories"));
        return compact("resource","available_categories");
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
    protected $source;
    protected $category;

}