<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        "comment","email","name","photo"
    ];
  public function answers(){
    return $this->hasMany(Answer::class);
  }
}
