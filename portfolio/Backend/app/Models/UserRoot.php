<?php

namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;

class UserRoot extends Authenticatable 
{
    use HasFactory,HasApiTokens ;
    protected $fillable = [
        'user', 
        'password'
    ];

    protected $hidden = [
        'password',
        'remember_token'
    ];
}
