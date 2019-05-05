<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('articles', 'ArticleController@index');
Route::get('articles/test', 'ArticleController@test');
Route::get('articles/{article}', 'ArticleController@show');
Route::post('articles', 'ArticleController@store');
Route::put('articles/{article}', 'ArticleController@update');
Route::delete('articles/{article}', 'ArticleController@delete');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Student API

Route::get('student', 'StudentController@index');
Route::get('student/all', 'StudentController@showAll');
Route::post('student/login', 'StudentController@login');
Route::post('student', 'StudentController@store');
Route::put('student/{studentId}', 'StudentController@update');
Route::delete('student/{studentId}', 'StudentController@delete');

//group api

Route::post('group/byId', 'GroupController@getGroup');

//book api

Route::post('book/byFS','BookController@findByFS');

