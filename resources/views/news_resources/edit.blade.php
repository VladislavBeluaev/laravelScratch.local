@extends('layout.master')
<?php extract($resource);?>
@section('title',"Edit $resource->res_name resource")
@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('projects')}}">Projects</a>
    <a href="{{route('tasks')}}">Tasks</a>
    <a href="{{route('contacts')}}">Contacts</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1',"Edit $resource->res_name resource")

@section('content')
    <form class="text-center border border-light p-5" action="{{route('create_news_resource')}}" method="PATCH"
          id="edit_resource">
        @csrf
        @method('PATCH')
        <h3 class="text-left mb-2">Установленные параметры</h3>
        <input name="res_name"
               class="form-control mb-3 {{$errors->has('res_name')?'error-input-data':''}}"
               placeholder="Enter resource name" required value="{{$resource->res_name}}">
        <div class="alert alert-danger error-update" data-error-update-for="res_name"></div>
        @foreach($resource->categories as $index=>$category)
            <div class="custom-control custom-checkbox text-left mb-2">
                <input type="checkbox" class="custom-control-input" name="category_resource[]"
                       id="fk_category_{{$category->id}}"
                       value="{{$category->id}}" checked>
                <label class="custom-control-label" for="fk_category_{{$category->id}}">{{$category->title}}</label>
                {{--<div class="alert alert-danger error-update" data-error-update-for="fk_category_{{$category->id}}"></div>--}}
            </div>
            @error("category_resource_$index")
            <div class="alert alert-danger error-validation">{{$message}}</div>
            @enderror
            @foreach($category->sources as $index=>$source)
                <input name="source_url_{{$index}}" type="url"
                       class="form-control mb-3 {{($errors->has("source_url_$index"))?'error-input-data':''}}"
                       placeholder="Enter source url" value="{{$source->url}}">
                <div class="alert alert-danger error-update" data-error-update-for="source_url_{{$index}}"></div>
                @error("source_url_$index")
                <div class="alert alert-danger error-validation">{{$message}}</div>
                @enderror
            @endforeach
        @endforeach
    </form>

    <form class="text-center border border-light p-5" action="{{route('create_news_resource')}}" method="PATCH"
          id="add_new_sources">
        @csrf
        @method('PATCH')
        <h3 class="text-left mb-2">Доступные разделы для ресурса</h3>
        <p class="alert alert-danger general-error d-none"></p>
        @foreach($available_categories as $index=>$category)
            <div class="custom-control custom-checkbox text-left mb-2">
                <input type="checkbox" class="custom-control-input" name="category_resource[]"
                       id="fk_category_{{$category->id}}"
                       data-source="source_url_{{$index}}"
                       value="{{$category->id}}">
                <label class="custom-control-label" for="fk_category_{{$category->id}}">{{$category->title}}</label>
                <div class="alert alert-danger error-update d-none" data-error-update-for="fk_category_{{$category->id}}"></div>
            </div>
            @error("category_resource_$index")
            <div class="alert alert-danger error-validation">{{$message}}</div>
            @enderror
            <input name="source_url_{{$index}}" type="url"
                   class="form-control mb-3 {{($errors->has("source_url_$index"))?'error-input-data':''}} d-none"
                   placeholder="Enter source url">
            <div class="alert alert-danger error-update d-none" data-error-update-for="source_url_{{$index}}"></div>
            @error("source_url_$index")
            <div class="alert alert-danger error-validation">{{$message}}</div>
            @enderror
        @endforeach
        <button class="btn btn-success btn-block">Add sources</button>
    </form>
@endsection




