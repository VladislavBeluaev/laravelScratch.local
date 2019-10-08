<?php

namespace App\Http\Controllers;

use App\Http\Repositories\NewsResourceRepository;
use App\NewsResource;
class NewsResourceController extends Controller
{
    function __construct(NewsResourceRepository $repository)
    {
        $this->repository = $repository;
    }

    function all(){
        return $this->repository->all();
    }

    function create(){
        return $this->repository->create();
    }
    function store(){
        return $this->repository->store();
    }
    function edit(NewsResource $resource){
       return view('news_resources.edit')->withResource($this->repository->edit($resource)) ;
}

    protected $repository;
}
