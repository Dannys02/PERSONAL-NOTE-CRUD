import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Daftar() {
    const navigate = useNavigate();
    // Logika: Satukan semua input dalam satu object state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "" // Laravel butuh ini untuk validasi 'confirmed'
    });

    const handleChange = e => {
        // Logika: Update state berdasarkan nama input secara dinamis
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async e => {
    e.preventDefault();
    try {
        const res = await axios.post(
            "http://localhost:8000/api/register",
            formData,
            { headers: { "Accept": "application/json" } } // <--- TAMBAHKAN INI
        );
        localStorage.setItem("token", res.data.token);
        navigate("/");
    } catch (err) {
        // Ini bakal munculin pesan error asli dari Laravel (misal: "Email sudah dipakai")
        alert("ERROR: " + JSON.stringify(err.response?.data || "Server Down"));
    }
};


    return (
        <div className="min-h-screen flex justify-center items-center bg-slate-900 text-white">
            <form
                onSubmit={handleRegister}
                className="bg-slate-800 p-8
            rounded-lg w-80 shadow-xl"
            >
                <h1 className="text-center text-2xl font-bold mb-6">
                    Daftar Akun
                </h1>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nama Lengkap"
                        onChange={handleChange}
                        className="w-full bg-transparent border border-indigo-500 rounded-md px-4 py-2 outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full bg-transparent border border-indigo-500 rounded-md px-4 py-2 outline-none"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full bg-transparent border border-indigo-500 rounded-md px-4 py-2 outline-none"
                        required
                    />
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Konfirmasi Password"
                        onChange={handleChange}
                        className="w-full bg-transparent border border-indigo-500 rounded-md px-4 py-2 outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-md transition"
                    >
                        Daftar Sekarang
                    </button>
                </div>
                <p className="mt-4 text-sm text-center text-slate-400">
                    Sudah punya akun?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-indigo-400 cursor-pointer
                    underline"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
}
