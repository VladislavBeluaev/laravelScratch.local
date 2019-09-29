@extends('layout.master')

@section('title','News')

@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('projects')}}">Projects</a>
    <a href="{{route('tasks')}}">Tasks</a>
    <a href="{{route('contacts')}}">Contacts</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1')
    <div class="main-header-wrapper">
        <p class="main-header-content">Main News</p>
        <div class="news-content">
            <div class="news-content__post">
                <h2 class="news-content__post__header"></h2>
                <div class="news-content__post__items">
                    <div class="news-content__post__items__item">
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


