<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Achievement;

class AchievementController extends Controller
{
    public function sample()
    {
        return Achievement::all();
    }
    public function save()
    {
        return Achievement::all()// 
    }
    {
        
        // $article = Achievement::create($request->all());

        return response()->json($article, 201);
    }

}
