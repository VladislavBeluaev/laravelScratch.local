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
use App\News;

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
        $news = app(News::class)->whereYear('created_at',$year)
            ->whereMonth('created_at',$month)
        ->whereDay('created_at',$day)->whereUrl_title($news)->firstOrFail();
         return app('App\Http\Controllers\NewsController')->show($news);
    })->name('show_news');

    Route::get('/create','NewsController@create')->name('create_news');
    Route::post('/create','NewsController@store');
    Route::post('/import','NewsController@import')->name('import_news');
    Route::get('/{news}/edit','NewsController@edit')->name('edit_news');
    Route::patch('/{news}/update','NewsController@update')->name('update_news');
    Route::delete('/{news}/delete','NewsController@destroy')->name('destroy_news');
});
Route::group(['prefix'=>'/news_resource'],function(){
    Route::get('','NewsResourceController@all')->name('all_news_resources');
    Route::get('/create','NewsResourceController@create')->name('create_news_resource');
    Route::post('/create','NewsResourceController@store');
    Route::get('/{news_resource}/edit','NewsResourceController@edit')->name('edit_news_resource');
    Route::patch('/{news_resource}/update','NewsResourceController@update')->name('update_news_resource');
    Route::patch('/{news_resource}/import_link','NewsResourceController@bind_source')->name('bind_link_resource');
    Route::delete('/{news_resource}/delete','NewsResourceController@destroy')->name('destroy_news_resource');
});
Route::group(['prefix'=>'/import_link'],function(){
    Route::get('','NewsLinkController@all')->name('all_import_link');
    Route::get('/create','NewsLinkController@create')->name('create_import_link');
    //Route::patch('/create','NewsLinkController@store')->name('bind_link_resource');
    Route::get('/{news_link}/edit','NewsLinkController@edit')->name('edit_import_link');
    Route::delete('/{news_link}/delete','NewsLinkController@destroy')->name('destroy_import_link');
});
Route::get('/about','PagesController@about')->name('about');
Route::get('/contacts','PagesController@contacts')->name('contacts');
Route::get('/404','PagesController@not_found')->name('404');
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
