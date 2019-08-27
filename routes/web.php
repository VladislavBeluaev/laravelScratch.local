<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/','PagesController@home')->name('home');
Route::group(['prefix'=>'/projects'],function(){
    Route::get('','PagesController@projects')->name('projects');
    Route::get('/create','ProjectController@create')->name('create_projects');
});
Route::group(['prefix'=>'/tasks'],function(){
    Route::get('/tasks','PagesController@tasks')->name('tasks');
    Route::get('/create','TasksController@create')->name('create_tasks');
});

Route::get('/tasks','PagesController@tasks')->name('tasks');
Route::get('/about','PagesController@about')->name('about');
Route::get('/contacts','PagesController@contacts')->name('contacts');
/*Route::get('/', function () {
    return view('welcome')->withTasks([
        'go to store',
        'go to market',
        'go to job',
    ])->with([
        'request'=>request('title'),
        'foo'=>'foobar'
    ]);
})->name('index');

Route::get('/about', function () {
    return view('about');
})->name('about');
Route::get('/contacts', function () {
    return view('contacts');
})->name('contacts');
*/
