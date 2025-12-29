import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
    const [loading, setLoading] = useState(true);
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
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
                <div className="fixed w-full flex items-center justify-center
                min-h-screen bg-gray-50 dark:bg-slate-950 overflow-hidden">
                    <div class="flex space-x-2 justify-center items-center">
                        <div class="h-3 w-3 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div class="h-3 w-3 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div class="h-3 w-3 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-bounce"></div>
                    </div>
                </div>
            ) : (
                <Dashboard dark={dark} setDark={setDark} />
            )}
        </>
    );
}

export default App;
