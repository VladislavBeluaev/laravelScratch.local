<?php

namespace App\Http\Controllers;

use App\Http\Repositories\NewsResourceRepository;

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

    protected $repository;
}
