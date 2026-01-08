<?php
use App\Http\Controllers\NoteController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    // Route::get('/user', ... )
});

Route::get("/notes", [NoteController::class, "index"]);
Route::post("/notes", [NoteController::class, "store"]);
Route::get("/notes/{id}", [NoteController::class, "edit"]);
Route::put("/notes/{id}", [NoteController::class, "update"]);
Route::delete("/notes/{id}", [NoteController::class, "destroy"]);
?>
