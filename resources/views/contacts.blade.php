@extends('layout.master')

@section('title','Contacts Us')

@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('projects')}}">Projects</a>
    <a href="{{route('tasks')}}">Tasks</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1')
    Contacts
@endsection

@section('content')
    <div class="content-contacts">
        <p>
            +375255443077
        </p>
    </div>
@endsection
