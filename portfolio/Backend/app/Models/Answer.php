<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;
    protected $fillable = [
        "name","email","comment","comment_id","photo"
    ];
    public function comment(){
        return $this->belongsTo(Comment::class);
    }
}
