<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Group_section;
class GroupSectionController extends Controller
{
    public function index()
    {
        return Group_section::all();
    }

    public function show(Article $article)
    {
        return $article;
    }

    public function store(Request $request)
    {
        $article = Group_section::create($request->all());

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
