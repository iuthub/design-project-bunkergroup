<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interest_category;

class Interest_categoryController extends Controller
{
    public function index()
    {
        return Interest_category::all();
    }

    public function show(Article $article)
    {
        return $article;
    }

    public function store(Request $request)
    {
        $article = Interest_category::create($request->all());

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
