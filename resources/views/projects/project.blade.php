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
    <div class="main-header-wrapper project-header">
        <p class="main-header-content">{{$project->title}}</p>
        <p><a href="{{route('edit_project',[$project->getRouteKeyName()=>$project->id])}}" title="edit project"><i class="fa fa-edit"></i></a></p>
        <p><a href="{{route('edit_project',[$project->getRouteKeyName()=>$project->id])}}" title="remove project"><i class="fa fa-times"></i></a></p>
    </div>
@endsection

@section('content')
    <article>
        {{$project->description}}
    </article>
    @endsection
