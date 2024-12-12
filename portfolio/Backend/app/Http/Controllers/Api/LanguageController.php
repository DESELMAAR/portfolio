<?php

namespace App\Http\Controllers\Api;
use App\Http\Requests\LanguageRequest;
use App\Http\Controllers\Controller;
use App\Models\Language;
use Illuminate\Http\Request;
class LanguageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $language=Language::all();
      return response([
        "msg"=>"index",
        "language"=> $language

      ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LanguageRequest $request,Language $language)
    {
        // $language->fill($request->all());
        $data=$request->validated();
        // dd($data);
       $language = Language::create($data);
       if($language){
        return response([
            "msg"=>"success",
            "status"=>200,
            "language"=>$language
        ]);
       }else{
        return response([
            "msg"=>"failed",
            "status"=> 400,
            
        ]);
       }

        // dd($language);
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
    public function destroy(Language $language)
    {
      if(Language::destroy($language->id)){
        return response([
            "msg"=> "success",
            "status"=> 200,
           ]);
      }else{
        return response([
            "msg"=> "Can't proceed",
            "status"=> 400,
           ]);
      } ;
       
    }
}
