@extends('layout.master')
@section('title',"News resources")

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
        <p class="main-header-content">News resources</p>
        <p>
            <a href="{{route('create_news_resource')}}"><i class="fa fa-plus" aria-hidden="true"></i>Add new resource</a>
        </p>
    </div>
@endsection
@section('content')
    <div class="preloader d-none">
        <p><img src="{{asset('images/preloader_1.gif')}}" alt="preloader_gif"></p>
    </div>
    <p class="alert alert-danger ajax-error d-none">
        Errors have occurred in the application. Contact administrator.
    </p>
    <ul>
    @foreach($resources as $resource)
        <li><a href="{{route('edit_news_resource',[$resource->getRouteKeyName=>$resource->res_name])}}">{{$resource->res_name}}</a>
            <ul>
                @foreach($resource->categories as $category)
                    <li>{{$category->title}}</li>
                    @endforeach
            </ul>
        </li>
    @endforeach
    </ul>
@endsection
