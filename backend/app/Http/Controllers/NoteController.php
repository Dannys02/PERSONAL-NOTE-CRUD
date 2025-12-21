<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;

class NoteController extends Controller
{
  public function index()
  {
    return response()->json(Note::all());

  }

  public function store(Request $req)
  {
    $note = $req->validate(
      [
        "title" => "required|max:255",
        "category" => "required",
        "content" => "required",
      ],
      [
        "title.required" => "Judul harus diisi",
        "title.max" => "Judul tidak boleh lebih 255 huruf",
        "category.required" => "Kategori harus diisi",
        "content.required" => "Konten harus diisi",
      ]
    );

    $created = Note::create($note);

    return response()->json($created, 201);
  }

  public function edit($id)
  {
    return response()->json(Note::findOrFail($id));
  }

  public function update(Request $req, $id)
  {
    $note = Note::findOrFail($id);

    $note->update(
      $req->validate([
        "title" => "required|max:255",
        "category" => "required",
        "content" => "required",
      ])
    );

    return response()->json($note);
  }

  public function destroy($id)
  {
    Note::findOrFail($id)->delete();
    return response()->json(["message" => "Catatan di hapus"]);
  }
}
