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
            @foreach($lazyLoad as $news_category)
            <div class="news-content__post">
                <h2 class="news-content__post__header">{{$news_category->title}}</h2>
                @foreach($news_category->news as $news)
                <div class="news-content__post__items">
                    @foreach($news->images as $img)
                    <div class="news-content__post__items__item">
                        <p><img src="{{$img->src}}" alt="{{$img->alt}}"></p>
                        @endforeach
                        <p>{{$news->title}}</p>
                    </div>
                </div>
                    @endforeach
            </div>
                @endforeach
        </div>
    </div>
@endsection


