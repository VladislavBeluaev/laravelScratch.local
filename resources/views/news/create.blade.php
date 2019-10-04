@extends('layout.master')

@section('title',"Create News")

@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('projects')}}">Projects</a>
    <a href="{{route('tasks')}}">Tasks</a>
    <a href="{{route('news')}}">News</a>
    <a href="{{route('contacts')}}">Contacts</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1')
    <div class="main-header-wrapper">
        <p class="main-header-content">Create News</p>
        <p>
            <a href="{{route('import_news')}}"><i class="fa fa-plus" aria-hidden="true"></i>Import from news portal</a>
        </p>
    </div>
@endsection

@section('content')
    <!-- Default form register -->
    <form class="text-center border border-light p-5" action="{{route('import_news')}}" method="POST" id="import_news">
        {{csrf_field()}}
        <select size="" name="news_source" class="form-control mb-4 {{$errors->has('news_source')?'error-input-data':''}}">
            <option selected="selected" value="0">Choose news source</option>
            @foreach ($categories as $category)
                <option value="{{$category->id}}">{{$category->title}}</option>
            @endforeach
        </select>
        @error('title')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror
        <textarea name="description"
                  class="form-control mb-4 {{$errors->has('description')?'error-input-data':''}}"
                  placeholder="News description" required>{{old('title')}}</textarea>
        @error('description')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror
        <select size="{{count($categories)}}" name="fk_category" class="form-control mb-4 {{$errors->has('news_category')?'error-input-data':''}}">
            <option selected="selected" value="0">Choose news category</option>
            @foreach ($categories as $category)
                <option value="{{$category->id}}">{{$category->title}}</option>
            @endforeach
        </select>
        @error('fk_category')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror
        <input type="file" name="news_image"
               class="form-control mb-4 {{$errors->has('img')?'error-input-data':''}}"
               placeholder="News description" value="{{old('title')}}" required>
        @error('news_image')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror
        <button class="btn btn-info my-4 btn-block" type="submit">Create</button>
    </form>

    <form class="text-center border border-light p-5" action="{{route('create_news')}}" method="POST"
          enctype="multipart/form-data">
        {{csrf_field()}}
        <input name="title"
               class="form-control mb-4 {{$errors->has('title')?'error-input-data':''}}"
               placeholder="News title" value="{{old('title')}}" required>
        @error('title')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror
        <textarea name="description"
                  class="form-control mb-4 {{$errors->has('description')?'error-input-data':''}}"
                  placeholder="News description" required>{{old('title')}}</textarea>
        @error('description')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror
        <select size="" name="fk_category" class="form-control mb-4 {{$errors->has('news_category')?'error-input-data':''}}">
            <option selected="selected" value="0">Choose news category</option>
            @foreach ($categories as $category)
                <option value="{{$category->id}}">{{$category->title}}</option>
                @endforeach
        </select>
        @error('fk_category')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror
        <input type="file" name="news_image"
               class="form-control mb-4 {{$errors->has('img')?'error-input-data':''}}"
               placeholder="News description" value="{{old('title')}}" required>
        @error('news_image')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror
        <button class="btn btn-info my-4 btn-block" type="submit">Create</button>
    </form>
@endsection



