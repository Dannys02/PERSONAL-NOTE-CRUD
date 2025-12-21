import { useState, useEffect } from "react"; // Tambahkan import ini

// Komponen item tetap sama
function NoteItem({ title, category, content }) {
    return (
        <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-[24px] hover:shadow-2xl hover:shadow-indigo-100 dark:hover:shadow-none transition-all duration-300">
            <div
                className={`w-2 h-10 absolute left-0 top-1/2 -translate-y-1/2 rounded-r-full bg-indigo-500`}
            ></div>

            <div className="flex flex-col h-full">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-3 tracking-widest transition-colors duration-300">
                    {category}
                </span>

                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 mb-2 line-clamp-2 leading-snug">
                    {title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-4">
                    {content}
                </p>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-slate-400 dark:text-slate-500 transition-colors duration-300">
                        Baru saja
                    </span>

                    <button className="text-slate-300 dark:text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                        <i className="fas fa-ellipsis-h text-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function AllNote() {
    // 1. Inisialisasi state untuk menampung data
    const [notes, setNotes] = useState([]);

    // 2. Gunakan useEffect untuk fetch data saat komponen load
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/notes");
                const data = await response.json();
                setNotes(data); // Simpan data dari API ke state
            } catch (error) {
                console.error("Gagal mengambil data:", error);
            }
        };

        fetchNotes();
    }, []);

    return (
        <div className="transition-colors duration-300">
            <div className="max-w-5xl mx-auto uppercase tracking-[0.2em] text-[11px] font-bold text-indigo-500 dark:text-indigo-400 mb-2 transition-colors duration-300">
                Ikhtisar Catatan
            </div>

            <h1 className="max-w-5xl mx-auto text-3xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
                Pikiran Terorganisir, <br />
                <span className="text-indigo-600 dark:text-indigo-400">
                    Hidup Lebih Produktif.
                </span>
            </h1>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* 3. Render data dari state */}
                {notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        title={note.title}
                        category={note.category}
                        content={note.content}
                    />
                ))}
            </div>
        </div>
    );
}
