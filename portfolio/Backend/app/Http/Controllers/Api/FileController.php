<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Requests\FilesStoreRequest;
use App\Models\File;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       // All Product
       $file = File::all();
      
       // Return Json Response
       return response()->json([
          'file' => $file
       ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }
public function download(string $id){
    $myfile = File::find($id)->image;
    // dd($myfile);
    $filePath = "http://127.0.0.1:8000/storage/{$myfile}"; // Adjust the path as per your storage structure
    dd($filePath);
            if(Storage::download($filePath)){
                return Storage::download($filePath);
            };
        return response()->json(['message' => 'File not found'], 404);
}
    /**
     * Store a newly created resource in storage.
     */
    public function store(FilesStoreRequest $request)
    {
        // dd($request);
        try {
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
            // Create Product
            File::truncate();
            File::create([
                'name' => $request->name,
                'image' => $imageName,
                'description' => $request->description
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
    public function show(string $id)
    {
        // Product Detail 
       $file = File::find($id);
       if(!$file){
         return response()->json([
            'message'=>'Product Not Found.'
         ],404);
       }
      
       // Return Json Response
       return response()->json([
          'file' => $file
       ],200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
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
