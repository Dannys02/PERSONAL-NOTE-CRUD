import React, { useState, useEffect } from "react";
import axios from "axios";
import AllNote from "./pages/AllNote";
import CreateNote from "./pages/CreateNote";
import Setting from "./pages/Setting";
import { Link } from "react-router-dom";

export default function Dashboard({ dark, setDark }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const Thn = new Date().getFullYear();
    const [pages, setPages] = useState("dashboard");
    const [data, setData] = useState([]);

    const fetchNotes = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/notes");
            console.log(response.data);
        } catch (error) {
            console.error(
                "Gagal mengambil data:",
                error.response?.data || error.message
            );
        }
    };

    return (
        <div className="min-h-screen dark:bg-slate-950 bg-white flex text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
            <aside
                onClick={() => setIsSidebarOpen(false)}
                className={`
        fixed md:relative md:left-0 inset-y-0 z-50 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out
        md:static md:translate-x-0
        ${isSidebarOpen ? "left-0" : "left-[-100%] md:left-0"}
      `}
            >
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center gap-3 px-2 mb-10">
                        <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                            <i className="fas fa-pen-nib text-white text-lg"></i>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
                            User Note
                        </span>
                    </div>

                    <nav className="flex-1 space-y-2">
                        <button
                            onClick={() => setPages("dashboard")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                pages === "dashboard"
                                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400"
                                    : "bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                            }`}
                        >
                            <i className="fas fa-sticky-note w-5 text-center"></i>
                            Semua catatan
                        </button>
                        <button
                            onClick={() => setPages("create-note")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-left ${
                                pages === "create-note"
                                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400"
                                    : "bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                            }`}
                        >
                            <i className="fas fa-search w-5 text-center"></i>
                            Buat catatan
                        </button>
                        <button
                            onClick={() => setPages("setting")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-left ${
                                pages === "setting"
                                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400"
                                    : "bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                            }`}
                        >
                            <i className="fas fa-cog w-5 text-center"></i>
                            Pengaturan
                        </button>
                    </nav>

                    <div
                        className="mt-auto pt-6 border-t border-slate-100
                    dark:border-slate-800 flex items-center gap-3
                    transition-colors duration-300"
                    >
                        <div
                            className="w-10 h-10 leading-9 text-center
                        rounded-full bg-indigo-100 text-indigo-600
                        dark:text-white font-bold dark:bg-slate-800 border-2
                        border-indigo-200 dark:border-slate-700 overflow-hidden
                        shadow-sm transition-colors duration-300"
                        >
                            PG
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-300">
                                Pengguna
                            </p>
                            <p className="text-[11px] text-slate-400 dark:text-slate-500 transition-colors duration-300">
                                Akun Personal
                            </p>
                        </div>
                    </div>
                    <form action="">
                        <button className="bg-red-500 h-10 w-full rounded-[10px]
                        text-white mt-5 hover:bg-red-700 transition-colors
                        duration-300" type="text">
                          Logout
                        </button>
                    </form>
                </div>
            </aside>

            <div className="pt-24 md:pt-14 flex flex-col flex-1">
                <header className="fixed w-full top-0 h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 md:px-10 flex items-center justify-between shrink-0 z-40 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="block md:hidden p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 transition-all duration-300"
                        >
                            {isSidebarOpen ? (
                                <i className="fas fa-times text-xl"></i>
                            ) : (
                                <i className="fas fa-bars text-xl"></i>
                            )}
                        </button>
                        <h2 className="text-lg font-bold text-slate-800 dark:text-white hidden md:block transition-colors duration-300">
                            Dashboard Utama
                        </h2>
                    </div>
                </header>

                <main
                    onClick={() => setIsSidebarOpen(false)}
                    className="flex-1 p-6 md:p-10 dark:bg-slate-950 transition-colors duration-300"
                >
                    {pages === "dashboard" && <AllNote />}
                    {pages === "create-note" && <CreateNote pages={pages}
                    setPages={setPages} />}
                    {pages === "setting" && (
                        <Setting dark={dark} setDark={setDark} />
                    )}
                </main>

                <footer className="py-6 px-10 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 shrink-0 transition-colors duration-300">
                    <p className="text-sm text-slate-600 dark:text-slate-200 font-medium transition-colors duration-300">
                        &copy;{Thn} Catatan simpel. Hak cipta dilindungi.
                    </p>
                    <div className="flex gap-6 text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors duration-300">
                        <Link
                            to="/help"
                            className="text-slate-600 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                        >
                            Bantuan
                        </Link>
                        <Link
                            to="/privacy"
                            className="text-slate-600 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                        >
                            Privasi
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}
