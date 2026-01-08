import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Logika: Jika sudah login, dilarang masuk ke page Login (Kepental)
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/login", {
                email,
                password
            });
            localStorage.setItem("token", res.data.token);
            navigate("/");
        } catch (err) {
            alert("Email atau Password salah!");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-slate-900 text-white">
            <form onSubmit={handleLogin} className="bg-slate-800 p-8 rounded-lg shadow-xl w-80">
                <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border border-indigo-500 rounded-md px-4 py-2 outline-none"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent border border-indigo-500 rounded-md px-4 py-2 outline-none"
                        required
                    />
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-md transition">
                        Masuk
                    </button>
                </div>
                <p className="mt-4 text-sm text-center text-slate-400">
                    Belum punya akun? <span onClick={() => navigate('/register')} className="text-indigo-400 cursor-pointer underline">Daftar</span>
                </p>
            </form>
        </div>
    );
}
