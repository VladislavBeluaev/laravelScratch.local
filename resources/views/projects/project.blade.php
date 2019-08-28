@extends('layout.master');

@section('title',"Projects")

@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('tasks')}}">Tasks</a>
    <a href="{{route('contacts')}}">Contacts</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1')
    <div class="main-header-wrapper">
        <p class="main-header-content">My projects</p>
        <p>
            <a href="{{route('create_projects')}}"><i class="fa fa-plus" aria-hidden="true"></i>Add new project</a>
        </p>
    </div>
@endsection

@section('content')
    <table class="table projects-list">
        <thead>
        <tr>
            @foreach($projects as $project)
                <th>{{$project->title}}</th>
            @endforeach
        </tr>
        </thead>
        <tbody>
        <tr>
            @foreach($projects as $project)
                <th>{{$project->description}}</th>
            @endforeach
        </tr>
        </tbody>
    </table>
@endsection
