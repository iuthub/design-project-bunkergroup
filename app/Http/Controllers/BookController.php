<?php
/**
 * Created by PhpStorm.
 * User: Bbro
 * Date: 5/5/2019
 * Time: 15:06
 */

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Subject;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function findByFS(Request $request){

        //this only for future
        $subjects = Subject::all()->where('fs',$request->fs);
        $subject_id_numbers = [];

        foreach ($subjects as $subject){
            if (in_array($subject->fs,$subject_id_numbers)){
                array_push($subject_id_numbers,$subject->subject_id);
            }
        }
        //***********************************

        $books = Book::all();

        return $books;
    }
}