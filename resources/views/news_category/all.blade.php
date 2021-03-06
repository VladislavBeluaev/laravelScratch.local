@extends('layout.master')
@section('title',"News categories")

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
        <p class="main-header-content">News categories</p>
        <p>
            <a href="{{route('create_news_category')}}"><i class="fa fa-plus" aria-hidden="true"></i>Add new category</a>
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
@endsection
