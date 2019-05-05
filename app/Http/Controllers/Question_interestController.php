<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Question_interest;

class Question_interestController extends Controller
{
    public function index()
    {
        return Question_interest::all();
    }

    public function show(Article $article)
    {
        return $article;
    }

    public function store(Request $request)
    {
        $article = Question_interest::create($request->all());

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
