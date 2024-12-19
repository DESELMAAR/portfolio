<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
        "name","image","url","github"
    ];


    public function technologies(){
        return $this->belongsToMany(Technology::class,'project_technology',"project_id","technology_id");
    }

    public function getImageUrlAttribute()
{
    return $this->image ? asset('storage/' . $this->image) : null;
}

}
