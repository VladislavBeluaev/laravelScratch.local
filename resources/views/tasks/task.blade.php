@extends('layout.master');

@section('title',"Tasks")

@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('projects')}}">Projects</a>
    <a href="{{route('contacts')}}">Contacts</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1')
    <div class="main-header-wrapper">
        <p class="main-header-content">My tasks</p>
        <p>
            <a href="{{route('create_tasks')}}"><i class="fa fa-plus" aria-hidden="true"></i>Add new task</a>
        </p>
    </div>
@endsection
@section('content')
    <ol class="to-do-list">
        @foreach($tasks as $task)
            <li>{{$task->description}}</li>
        @endforeach
    </ol>
@endsection

