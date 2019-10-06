@extends('layout.master')

@section('title',"Create new resource")

@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('projects')}}">Projects</a>
    <a href="{{route('tasks')}}">Tasks</a>
    <a href="{{route('contacts')}}">Contacts</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1','Create new resource')

@section('content')
    <!-- Default form register -->
    {{--<ul>
    @foreach($errors->all() as $key=>$er)
        <li>{{$er}}</li>
        @endforeach
    </ul>--}}
    <form class="text-center border border-light p-5" action="{{route('create_news_resource')}}" method="POST"
          id="create_resource">
        {{csrf_field()}}
        <input name="res_name"
               class="form-control mb-3 {{$errors->has('res_name')?'error-input-data':''}}"
               placeholder="Enter resource name" required value="{{old('res_name')}}">
        <p class="alert alert-danger error-create d-none">
            The field cannot be empty
        </p>
        @error('res_name')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror
        <h3 class="text-left mb-2">Категории для загрузки</h3>
        <p class="alert alert-danger general-error d-none"></p>
        @foreach($categories as $index=>$category)
            <div class="custom-control custom-checkbox text-left mb-2">
                <input type="checkbox" class="custom-control-input" name="category_resource[]"
                       id="fk_category_{{$category->id}}"
                       value="{{$category->id}}" {{$errors->has("category_resource.$index") ||$errors->has("source_url_$index") ? ' checked' : '' }}>
                <label class="custom-control-label" for="fk_category_{{$category->id}}">{{$category->title}}</label>
                @error("category_resource.$index")
                <div class="alert alert-danger error-validation">{{$message}}</div>
                @enderror
            </div>
            <input name="source_url_{{$index}}" type="url"
                   class="form-control mb-3 {{($errors->has("source_url_$index"))?'error-input-data':''}} d-none"
                   placeholder="Enter source url" value="{{old("source_url_$index")}}">
            @error("source_url_$index")
            <div class="alert alert-danger error-validation">{{$message}}</div>
            @enderror
            <p class="alert alert-danger error-create d-none">
                Errors have occurred in the application. Contact administrator.
            </p>
           {{-- @error('source_url')
            <div class="alert alert-danger">{{$message}}</div>
            @enderror--}}
        @endforeach
        {{--@error('category_resource')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror--}}
        <button class="btn btn-info btn-block" type="submit">Create resource</button>
    </form>
@endsection



