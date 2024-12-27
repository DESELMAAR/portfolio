<?php

use App\Http\Controllers\Api\FileController;
use App\Http\Controllers\Api\LikeController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\TechnologyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserRoot;
use App\Http\Controllers\Api\LanguageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::post('/logout',[UserRoot::class,'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post("/storelanguage",[LanguageController::class,"store"]);
    Route::delete('/delete/{language}',action: [LanguageController::class,"destroy"]);
    Route::get("getfiles",[FileController::class,"index"]);
    Route::post("storefile",[FileController::class,"store"]);


});

Route::get("getfiles/{id}",[FileController::class,"show"]);

Route::get("download/{id}",[FileController::class,"download"]);


Route::get('/getlanguage',[LanguageController::class,'index']);

Route::post('login',[UserRoot::class,'login']);

Route::post('/storeProject',[ProjectController::class,'store']);
Route::get('/getProjects',[ProjectController::class,'index']);

Route::get("/getProject/{project}",[ProjectController::class,"show"]);

Route::delete("/deleteproject/{project}",[ProjectController::class,"destroy"]);


// technologies route
Route::post('/technology',[TechnologyController::class,'store']);

Route::get('/technologies',[TechnologyController::class,'index']);

Route::delete('/deletetechnologies/{technologie}',[TechnologyController::class,'destroy']);

// 
// likes routes
Route::post("/storelike",[LikeController::class,"store"]);

Route::get("/getlikes",[LikeController::class,"index"]);
// 