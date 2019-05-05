<?php
/**
 * Created by PhpStorm.
 * User: Bbro
 * Date: 5/5/2019
 * Time: 13:45
 */

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'student';
    protected $fillable = [
        'user_id','group_group_id','group_'
        ];


}