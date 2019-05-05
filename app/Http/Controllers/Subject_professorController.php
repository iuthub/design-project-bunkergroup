<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subject_professor;

class Subject_professorController extends Controller
{
    public function index()
    {
        return Subject_professor::all();
    }

    public function show(Article $article)
    {
        return $article;
    }

    public function store(Request $request)
    {
        $article = Subject_professor::create($request->all());

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
