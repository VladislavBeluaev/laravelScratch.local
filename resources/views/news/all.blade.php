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
                <div class="news-content__posts">
                    <h2 class="news-content__post__category">{{$news_category->title}}</h2>
                    @foreach($news_category->news as $news)
                        <div class="news-content__post__item">
                                <p><img src="{{asset("storage/{$news->images->first()->src}")}}" alt="{{$news->images->first()->alt}}"></p>
                            <p>{{$news->title}}</p>
                        </div>
                    @endforeach
                </div>
            @endforeach
        </div>
    </div>
@endsection


