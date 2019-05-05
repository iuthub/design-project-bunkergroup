<?php
/**
 * Created by PhpStorm.
 * User: Bbro
 * Date: 5/5/2019
 * Time: 13:36
 */

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'book';
    protected $fillable = [
        'fs',
    ];
}