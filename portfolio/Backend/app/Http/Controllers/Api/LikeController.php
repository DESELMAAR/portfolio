<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LikeRequest;
use App\Models\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            if($data=Like::get()){
               return response([
                  "data"=>$data,
                  "messsage"=>"success getting likes",
                  "status"=>200
               ]);
            }else{
               return response([
                  "message"=>"failed getting likes",
                  "status"=>400
               ]);
            }
            
        }catch(\Exception $e){
           return response([
            "message"=>"something went wrong!", 

            "error"=>$e
           ]);
        }
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LikeRequest $request)
    {
        $data=$request->validated();
        $name=$data["name"];
        $email=$data["email"];
        $project_id=$data["project_id"];
        // dd($name);
        $like=Like::where(["email"=>$email, "project_id"=>$project_id]);
        if($like->exists()){
            $like->delete();
            // dd(vars: $like);
             return response()->json([
                "status"=>"error",
                "message"=>"like deleted"
             ]);

        }else{
            try{

                if(Like::create($data)){
                    return response([
                        "status"=> "success",
                        "message"=> "like saved successfully",
                        "data"=>$data,
                    ]);
                }else{
                    return response([
                        "status"=>"error",
                        "message"=>"opps something went wrong"
                    ]);
                }
            }catch(\Exception $e){
                return response([
                    "message"=> "something went wrong",
                    "error"=>$e
                 ]);
            }
        }
        
            
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
