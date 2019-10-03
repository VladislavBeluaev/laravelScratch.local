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

use Illuminate\Support\Facades\Route;

Route::get('/','PagesController@home')->name('home');
Route::group(['prefix'=>'/projects'],function(){
    Route::get('','PagesController@projects')->name('projects');
    Route::get('/create','ProjectController@create')->name('create_projects');
    Route::post('/create','ProjectController@store');
    Route::get('/{project}','ProjectController@show')->name('show_project');
    Route::get('/{project}/edit','ProjectController@edit')->name('edit_project');
    Route::patch('/{project}/update','ProjectController@update')->name('update_project');
    Route::delete('/{project}/delete','ProjectController@destroy')->name('destroy_project');
});
Route::group(['prefix'=>'/tasks'],function(){
    Route::get('','PagesController@tasks')->name('tasks');
    Route::get('/create','TaskController@create')->name('create_tasks');
    Route::post('/create','TaskController@store');
    Route::patch('/{task}/complete','TaskController@complete')->name('complete_task');
    Route::get('/{task}/edit','TaskController@edit')->name('edit_task');
    Route::patch('/{task}/update','TaskController@update')->name('update_task');/*->middleware(['ajax_response_headers']);*/
    Route::delete('/{task}/delete','TaskController@destroy')->name('destroy_task');
});
//Route::get('/news/{newsCategory}','NewsCategoryController@showNewsByCategory');
Route::group(['prefix'=>'/newsCategory'],function(){
    Route::get('','NewsCategoryController@index')->name('all_categories');
    Route::get('/create','NewsCategoryController@create')->name('create_news_category');
    Route::post('/create','NewsCategoryController@store')->name('create_news_category');
    Route::post('/import','NewsCategoryController@import')->name('import_news');
    Route::get('/{newsCategory}/edit','NewsCategoryController@edit')->name('edit_news_category');
    Route::patch('/{newsCategory}/update','NewsCategoryController@update')->name('update_news_category');
    Route::delete('/{newsCategory}/delete','NewsCategoryController@destroy')->name('destroy_news_category');
});
Route::group(['prefix'=>'/news'],function(){
    Route::get('','PagesController@news')->name('news');
    Route::get('{year}/{month}/{day}/{news}',function($year, $month, $day, $news){
        $news = app(\App\News::class)->whereYear('created_at',$year)
            ->whereMonth('created_at',$month)
        ->whereDay('created_at',$day)->whereUrl_title($news)->firstOrFail();
         return app('App\Http\Controllers\NewsController')->show($news);
    })->name('show_news');

    Route::get('/create','NewsController@create')->name('create_news');
    Route::post('/create','NewsController@store');
    Route::get('/{news}/edit','NewsController@edit')->name('edit_news');
    Route::patch('/{news}/update','NewsController@update')->name('update_news');
    Route::delete('/{news}/delete','NewsController@destroy')->name('destroy_news');
});
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
