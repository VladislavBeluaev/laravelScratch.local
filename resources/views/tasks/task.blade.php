@extends('layout.master')

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
    <ul class="to-do-list">
        @foreach($tasks as $index=>$task)
            {{--<li>{{$task->description}}</li>--}}
            <li><span>{{$index+1}}.</span>
                <label class="read-write no-display"><input type="text" value="{{$task->description}}"></label>
                <span class="read-only">{{$task->description}}</span>
                <a href="{{route('edit_task',[$task->getRouteKeyName()=>$task->id])}}" title="edit task"><i
                        class="fa fa-edit"></i></a>
                <a href="{{route('complete_task',[$task->getRouteKeyName()=>$task->id])}}" title="complete task"><i class="fa fa-check"></i></a>
                <a href="{{route('destroy_task',[$task->getRouteKeyName()=>$task->id])}}" title="delete task"><i class="fa fa-times"></i></a>
                <a href="{{route('update_task',[$task->getRouteKeyName()=>$task->id])}}" title="save task"><i class="fa fa-check-circle"></i></a>
                <a href="{{--{{route('delete_task')}}--}}" title="cancel edit task"><i class="fa fa-times-circle"></i></a>
                {{--<a href="" title="edit task"><i class="fa fa-edit"></i></a>--}}
            </li>
        @endforeach
    </ul>
@endsection

