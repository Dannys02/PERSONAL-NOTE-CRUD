<?php

namespace App\Http\Controllers;

use App\Models\User; // Tambahkan ini
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; // Tambahkan ini
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
  public function register(Request $request)
  {
    $fields = $request->validate([
      "name" => "required|string",
      "email" => "required|string|unique:users,email",
      "password" => "required|string|confirmed", // Butuh password_confirmation di React
    ]);

    $user = User::create([
      "name" => $fields["name"],
      "email" => $fields["email"],
      "password" => Hash::make($fields["password"]), // Lebih profesional pakai Hash::make
    ]);

    $token = $user->createToken("myapptoken")->plainTextToken;

    return response(["user" => $user, "token" => $token], 201);
  }

  public function login(Request $request)
  {
    // Validasi input dulu sebelum cek DB
    $request->validate([
      "email" => "required|email",
      "password" => "required",
    ]);

    $user = User::where("email", $request->email)->first();

    // Logika: Jika user tidak ada ATAU password salah (Hash::check membandingkan text asli vs hash)
    if (!$user || !Hash::check($request->password, $user->password)) {
      return response(["message" => "Email atau Password Salah"], 401);
    }

    $token = $user->createToken("myapptoken")->plainTextToken;
    return response(["user" => $user, "token" => $token], 200);
  }

  public function logout(Request $request)
  {
    // Logika: Hapus token yang sedang digunakan saat ini
    $request
      ->user()
      ->currentAccessToken()
      ->delete();
    return response(["message" => "Berhasil Keluar"], 200);
  }
}
