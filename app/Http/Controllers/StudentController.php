<?php

namespace App\Http\Controllers;

use App\Http\Posts;
use App\Models\Group_;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Article;
class StudentController extends Controller
{
    public function index()
    {
        return new Student();
    }

    public function showAll(){
        return Student::all();
    }
    public function login(Request $request){
        if (Student::where('user_id', '=', $request->user_id)) {
            $student = Student::where('user_id', '=', $request->user_id)->first();
            $student->group_ = Group_::where('group_id', '=' , $student->group_group_id)->first();
            return $student;
        }
    }
    public function getGroup(Request $request){
        return Group_::where('group_id','=',$request->group_id)->first();
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
