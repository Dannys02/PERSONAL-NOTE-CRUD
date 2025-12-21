<?php
use App\Http\Controllers\NoteController;

Route::get("/notes", [NoteController::class, "index"]);
Route::post("/notes", [NoteController::class, "store"]);
Route::get("/notes/{id}", [NoteController::class, "edit"]);
Route::put("/notes/{id}", [NoteController::class, "update"]);
Route::delete("/notes/{id}", [NoteController::class, "destroy"]);
?>