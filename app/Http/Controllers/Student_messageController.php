<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student_message;

class Student_messageController extends Controller
{
    public function index()
    {
        return Student_message::all();
    }

    public function show(Article $article)
    {
        return $article;
    }

    public function store(Request $request)
    {
        $article = Student_message::create($request->all());

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
