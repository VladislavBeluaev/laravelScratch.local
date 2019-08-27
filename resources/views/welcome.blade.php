@extends('layout.master');

@section('title',"Main page")

@section('login')
    @if (Route::has('login'))
        <div class="top-right links">
            @auth
                <a href="{{ url('/home') }}">Home</a>
            @else
                <a href="{{ route('login') }}">Login</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}">Register</a>
                @endif
            @endauth
        </div>
    @endif
@endsection

@section('main_menu_links')
    <a href="{{route('projects')}}">Projects</a>
    <a href="{{route('contacts')}}">Contacts</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1')
    {{--{!! $js_from_string !!}--}}
    @if(!is_null($request))
        Laravel 5.7 start with {{$request}}
     @else
    Laravel 5.7 start
    @endif
    @endsection

@section('content')
    <ul class="to-do-list">
        @foreach($tasks as $task)
            <li>{{ucfirst($task)}}</li>
        @endforeach
    </ul>
@endsection
