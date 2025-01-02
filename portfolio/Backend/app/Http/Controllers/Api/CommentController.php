<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            // $projects = Project::with('technologies')->get();

           $comments = Comment::with('answers')->orderBy("created_at",'desc')->paginate(5);
           if($comments){
            return response([
                "msg"=>"get Comments",
                "data"=> $comments,
                "status"=>200,
               
            ]);
           }
        }catch(\Exception $e){
             return response([
                "msg"=> "Getting comments failed",
                "error"=> $e->getMessage()
             ]);
        }
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CommentRequest $request)
    {
        $data=$request->validated();
        // dd($data);
        try{
            if(Comment::create($data)){
                return response([
                    "msg"=>"Comment saved successfully",
                    "status"=>200,
                    "data"=> $data
                ]);
            };
        }catch(\Exception $e){
                return response([
                    "msg"=>"Something went wrong!",
                    "status"=>500,
                    "error"=>$e
                ]);
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
    public function destroy(Comment $comment)
    {
       $comment->delete();
       return response([
        "msg"=>"comment deleted",
        "status"=>200,
       ]);
    }
}
