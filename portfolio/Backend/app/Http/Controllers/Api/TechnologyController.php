<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TechnologyRequest;
use App\Models\technologies;
use Exception;
use Illuminate\Http\Request;

class TechnologyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(technologies $technologies)
    {
        $data= $technologies->get();
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TechnologyRequest $request,technologies $technologies)
    {
        $data=$request->validated();
        try{

            if(technologies::create($data)){
                return response([
                    "msg"=>"saved success",
                    "status"=>200,
                    "data"=>$data
                ]);
            }else{
                return response([
                    "msg"=>"something went wrong!",
                    "status"=>404
                ]);
            };
    
        }catch(Exception  $e){
            return response($e);
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
    public function destroy(technologies $technologie)
    {
        $technologie->delete();
        return response([
            "msg"=>"deleted",
            "status"=>200
        ]);
    }
}
