<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\Project;
use Exception;
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
        $projects = Project::with('technologies')->get();
        // return response()->json(
        //     $projects
        // );

        return response()->json($projects->map(function ($project) {
            return [
                'id' => $project->id,
                'name' => $project->name,
                'image_url' => $project->image_url,
                'url' => $project->url,
                'github' => $project->github,
                'technologies' => $project->technologies,
                "app_type_select"=>$project->app_type_select,
                "describeproject"=>$project->describeproject
            ];
        }));
    }

   
    public function store(ProjectRequest $request)
    {
        try {
            // Save image with a unique name
            $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();
            Storage::disk('public')->put($imageName, file_get_contents($request->image));
    
            // Create the project
            $project = Project::create([
                'name' => $request->name,
                'image' => $imageName,
                'url' => $request->url,
                'github' => $request->github,
                "app_type_select"=>$request->app_type_select,
                "describeproject"=>$request->describeproject
            ]);
    
            // Attach technologies
            $technologies = $request->input('technologies', []);
            $project->technologies()->sync($technologies);
    
            return response()->json([
                'message' => 'Project successfully created.',
                'project' => $project
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Something went wrong!',
                'error' => $e->getMessage()
            ], 500);
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
