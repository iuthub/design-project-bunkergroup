<?php
/**
 * Created by PhpStorm.
 * User: Bbro
 * Date: 5/5/2019
 * Time: 14:59
 */

namespace App\Http\Controllers;


use App\Group_;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    public function getGroup(Request $request){
        return Group_::where('group_id','=',$request->group_id)->first();
    }
}