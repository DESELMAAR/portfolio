<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserRoot extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login(UserRequest $request){
        
         $credentials = $request->validated();

         if(!Auth::attempt($credentials)){
            return response([
                "msg"=>"Login or password not correct"
             ]);
        
         }else{
            $user = Auth::user();
            $token= $user->createToken("mytoken")->plainTextToken;
            return response([
                "msg"=>"connected",
                "user"=>Auth()->user(),
                "status"=>"ok",
                "token"=>$token
             ]);

         };
        
    }
    public function user(){
        $user=Auth()->user();
        // dd($user);
        return response([
            "user"=>$user,
            "msg"=>"user data"
        ]);
    }

    public function logout(Request $request){
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response([
            "msg"=>"logged out success",
            "status_code"=>205
        ]);
    }

    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
