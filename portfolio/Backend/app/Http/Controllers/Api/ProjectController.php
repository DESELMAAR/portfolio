<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\Project;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all();
        return response()->json($projects);
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(ProjectRequest $request,Project $project) 
    // {
    //     $data=$request->validated();
    //     if(Project::create($data)){
    //         return response([
    //             "msg"=>"project saved successfully",
    //             "project"=>$data,
    //             "status"=>200
    //         ]);
    //     };
    // }
    public function store(ProjectRequest $request)
    {
        // dd($request);
        try {
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
            // Create Product
            Project::create([
                'name' => $request->name,
                'image' => $imageName,
                'url' => $request->url,
                'github'=>$request->github
            ]);
            // Save Image in Storage folder
            Storage::disk('public')->put($imageName, file_get_contents($request->image));
            // Return Json Response
            return response()->json([
                'message' => "Product successfully created."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
    }
    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return response([
            "project"=>$project,
             "msg"=>200
        ]);
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
    public function destroy(Project $project)
    {
        $project->delete();
        return response([
            "msg"=>"project deleted",
            "status"=>200

        ]);
    }
}
