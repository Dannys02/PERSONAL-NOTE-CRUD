import { useState, useEffect } from "react";
import "./App.css";
import Top from "./utils/TopScroll";
import Dashboard from "./Dashboard";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import { Routes, Route } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        // Jika belum ada data di storage (user baru), default-nya TRUE (Dark)
        // Jika sudah ada data, cek apakah datanya adalah "dark"
        return savedTheme ? savedTheme === "dark" : true;
    });

    // DARK MODE
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            {loading ? (
                <div
                    className="min-h-screen flex justify-center items-center
                    bg-white
                dark:bg-slate-950"
                >
                    <div className="custom-loader"></div>
                </div>
            ) : (
                <div>
                    <Top />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Dashboard dark={dark} setDark={setDark} />
                            }
                        />
                        <Route path="/help" element={<Help />} />
                        <Route path="/privacy" element={<Privacy />} />
                    </Routes>
                </div>
            )}
        </>
    );
}

export default App;
