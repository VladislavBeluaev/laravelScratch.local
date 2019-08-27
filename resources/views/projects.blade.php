@extends('layout.master');

@section('title',"Projects")

@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('contacts')}}">Contacts</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1','My projects')

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
@endsection
