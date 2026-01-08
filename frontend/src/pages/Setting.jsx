import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Setting({ dark, setDark }) {
    // State untuk menampung data user dari database
    const [user, setUser] = useState({ name: "", email: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Ambil token yang disimpan saat login
                const token = localStorage.getItem("token");

                // Request ke endpoint Laravel Sanctum (sesuaikan URL jika berbeda)
                const response = await axios.get(
                    "http://localhost:8000/api/user",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "application/json"
                        }
                    }
                );

                setUser({
                    name: response.data.name,
                    email: response.data.email
                });
            } catch (error) {
                console.error("Gagal memanggil data user:", error);
                // Jika error 401 (unauthorized), bisa arahkan user ke login
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto transition-colors duration-300">
            <div className="mb-10 text-center lg:text-left">
                <h1 className="text-indigo-600 text-3xl font-extrabold dark:text-indigo-400 tracking-tight mb-2 transition-colors duration-300">
                    Pengaturan
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300">
                    Kelola preferensi dan keamanan akun Anda.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {/* Card: Akun */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-8 shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                            <i className="fa-solid fa-user-gear text-lg"></i>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                            Profil Akun
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Input Nama */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 transition-colors duration-300">
                                    Nama Lengkap
                                </label>
                                <div className="relative">
                                    <i className="fa-solid fa-id-card absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 dark:text-slate-100 text-xs transition-colors duration-300"></i>
                                    <input
                                        type="text"
                                        disabled={true}
                                        value={
                                            loading ? "Loading..." : user.name
                                        }
                                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl pl-10 pr-5 py-3.5 text-sm  dark:text-slate-100 focus:bg-white dark:focus:bg-slate-900 focus:border-indigo-600 outline-none transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* Input Email */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 transition-colors duration-300">
                                    Email
                                </label>
                                <div className="relative">
                                    <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 dark:text-slate-100 text-xs transition-colors duration-300"></i>
                                    <input
                                        type="email"
                                        disabled={true}
                                        value={
                                            loading ? "Loading..." : user.email
                                        }
                                        className="w-full bg-slate-50
                                        dark:bg-slate-800 border
                                        border-slate-100 dark:border-slate-700
                                        rounded-2xl pl-10 pr-5 py-3.5 text-sm text-white dark:text-slate-100 focus:bg-white dark:focus:bg-slate-900 focus:border-indigo-600 outline-none transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card: Tampilan */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-8 shadow-sm transition-colors duration-300">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                            <i className="fa-solid fa-palette text-lg"></i>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                            Tema Aplikasi
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => setDark(false)}
                            className={`p-4 rounded-2xl flex items-center gap-3 border-2 transition-all duration-300 ${
                                !dark
                                    ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 text-slate-900 dark:text-white"
                                    : "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                            }`}
                        >
                            <i
                                className={`fa-solid fa-sun transition-colors duration-300 ${
                                    !dark
                                        ? "text-indigo-600 dark:text-indigo-400"
                                        : ""
                                }`}
                            ></i>
                            <span className="text-xs font-bold uppercase tracking-widest">
                                Terang
                            </span>
                        </button>

                        <button
                            onClick={() => setDark(true)}
                            className={`p-4 rounded-2xl flex items-center gap-3 border-2 transition-all duration-300 ${
                                dark
                                    ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 text-slate-900 dark:text-white"
                                    : "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                            }`}
                        >
                            <i
                                className={`fa-solid fa-moon transition-colors duration-300 ${
                                    dark
                                        ? "text-indigo-600 dark:text-indigo-400"
                                        : ""
                                }`}
                            ></i>
                            <span className="text-xs font-bold uppercase tracking-widest">
                                Gelap
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
