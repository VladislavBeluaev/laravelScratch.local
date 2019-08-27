@extends('layout.master');

@section('title',"Tasks")

@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('projects')}}">Projects</a>
    <a href="{{route('contacts')}}">Contacts</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1','My tasks')

@section('content')
    <ol class="to-do-list">
        @foreach($tasks as $task)
            <li>{{$task->description}}</li>
        @endforeach
    </ol>

@endsection

