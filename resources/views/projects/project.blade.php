@extends('layout.master')

@section('title',"Project")

@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('projects')}}">Projects</a>
    <a href="{{route('tasks')}}">Tasks</a>
    <a href="{{route('contacts')}}">Contacts</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1')
    <div class="project-content">
        <div class="project-wrapper-content">
            <p>{{$project->title}}</p>
            <p><a href="{{route('edit_project',[$project->getRouteKeyName()=>$project->id])}}" title="edit project"><i
                        class="fa fa-edit"></i></a></p>
            <p><a href="{{route('destroy_project',[$project->getRouteKeyName()=>$project->id])}}" title="delete project"><i
                        class="fa fa-times"></i></a></p>
        </div>
    </div>
    <div class="preloader d-none">
        <p><img src="{{asset('images/preloader_1.gif')}}" alt="preloader_gif"></p>
    </div>
    <p class="alert alert-danger ajax-error d-none">
        Errors have occurred in the application. Contact administrator.
    </p>
@endsection

@section('content')
    <article>
        {{$project->description}}
    </article>
@endsection
