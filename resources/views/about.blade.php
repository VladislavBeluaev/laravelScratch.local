@extends('layout.master')

@section('title','About Us')

@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('projects')}}">Projects</a>
    <a href="{{route('tasks')}}">Tasks</a>
    <a href="{{route('contacts')}}">Contacts</a>
@endsection

@section('h1','About')

@section('content')
    <div class="content-contacts">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deleniti enim et quam totam! Ad, alias aperiam architecto ea eligendi iste magni minima, minus modi obcaecati quam quas repellat suscipit?
        </p>
    </div>
@endsection

