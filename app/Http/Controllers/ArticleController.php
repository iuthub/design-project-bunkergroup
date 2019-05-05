<?php

namespace App\Http\Controllers;

use App\Http\Posts;
use App\Http\quiz;
use App\Models\Book;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Article;
class ArticleController extends Controller
{
    public function index()
    {
        return Article::all();
    }

    public function show(Article $article)
    {
        return $article;
    }

    public function test(){
        return Student::all();
//        $article = Article::all();
//        foreach ($article as $val){
//            $val->id = 0;
//
//        }
//        return $article;
    }

    public function store(Request $request)
    {
        $article = Article::create($request->all());

        return response()->json($article, 201);
    }

    public function update(Request $request, Article $article)
    {
        $article->update($request->all());

        return response()->json($article, 200);
    }

    public function delete(Article $article)
    {
        $article->delete();

        return response()->json(null, 204);
    }
}
