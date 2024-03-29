@extends('layout.master')

@section('title',"Update project")

@section('main_menu_links')
    <a href="{{route('home')}}">Home</a>
    <a href="{{route('projects')}}">Projects</a>
    <a href="{{route('tasks')}}">Tasks</a>
    <a href="{{route('contacts')}}">Contacts</a>
    <a href="{{route('about')}}">About</a>
@endsection

@section('h1','Update Project')

@section('content')
    <!-- Default form register -->
    <form class="text-center border border-light p-5 project-manager"  action="{{route('update_project',[$project->id])}}" method="POST">
        @method("PATCH")
        @csrf
        {{--{{method_field("PATCH")}}
        {{csrf_field()}}--}}
        <input type="text" name="title"
               class="form-control mb-4 {{$errors->has('title')?'error-input-data':''}}"
               placeholder="Project title" value="{{$project->title}}">
        @error('title')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror
        <textarea name="description"
                  class="form-control mb-4 {{$errors->has('description')?'error-input-data':''}}"
                  placeholder="Project description">{{$project->description}}</textarea>
        @error('description')
        <div class="alert alert-danger">{{$message}}</div>
        @enderror
        <button class="btn btn-info my-4 btn-block" type="submit">Update project</button>
    </form>
    {{-- <div class="form-row mb-4">
       <div class="col">
           <!-- First name -->
           <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name">
       </div>
       <div class="col">
           <!-- Last name -->
           <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name">
       </div>
   </div>--}}
    <!-- E-mail -->
    {{--<input type="text" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="Task description">--}}

    <!-- Password -->
    {{--<input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>

    <!-- Phone number -->
    <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock">
    <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
        Optional - for two step authentication
    </small>

    <!-- Newsletter -->
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter">
        <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
    </div>--}}

    <!-- Sign up button -->

    {{-- <!-- Social register -->
     <p>or sign up with:</p>

     <a type="button" class="light-blue-text mx-2">
         <i class="fab fa-facebook-f"></i>
     </a>
     <a type="button" class="light-blue-text mx-2">
         <i class="fab fa-twitter"></i>
     </a>
     <a type="button" class="light-blue-text mx-2">
         <i class="fab fa-linkedin-in"></i>
     </a>
     <a type="button" class="light-blue-text mx-2">
         <i class="fab fa-github"></i>
     </a>

     <hr>

     <!-- Terms of service -->
     <p>By clicking
         <em>Sign up</em> you agree to our
         <a href="" target="_blank">terms of service</a>--}}

    <!-- Default form register -->
@endsection



