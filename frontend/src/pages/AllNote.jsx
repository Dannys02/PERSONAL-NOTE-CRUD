import { useState, useEffect } from "react";

import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("id");

function NoteItem({
    title,
    category,
    note,
    setSelectedNote,
    setEditNote,
    onDelete
}) {
    const [showAction, setShowAction] = useState(false);

    return (
        <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-[24px] hover:shadow-2xl hover:shadow-indigo-100 dark:hover:shadow-none transition-all duration-300 cursor-pointer">
            <div
                className={`w-2 h-10 absolute left-0 top-1/2 -translate-y-1/2 rounded-r-full bg-indigo-500`}
            ></div>
            <div className="flex flex-col h-full">
                <span className="text-[10px] font-bold text-slate-600 dark:text-slate-500 uppercase mb-3 tracking-widest">
                    {category}
                </span>
                <h3
                    onClick={() => setSelectedNote(note)}
                    className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 mb-2 line-clamp-2 leading-snug w-fit"
                >
                    {title}
                </h3>
                <div className="mt-auto flex items-center justify-between relative">
                    <span className="text-xs text-slate-600 dark:text-slate-500 first-letter:uppercase">
                        {dayjs(note.created_at).fromNow()}
                    </span>

                    <div className="relative">
                        <button
                            onClick={() => setShowAction(!showAction)}
                            className="text-slate-600 dark:text-slate-600 hover:text-indigo-600"
                        >
                            <i className="fas fa-ellipsis-h text-lg"></i>
                        </button>

                        {showAction && (
                            <div className="absolute bottom-full right-0 w-32 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden">
                                <button
                                    onClick={() => {
                                        setEditNote(note);
                                        setShowAction(false);
                                    }}
                                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-yellow-500"
                                >
                                    <i className="fas fa-pencil-alt text-yellow-500 hover:text-yellow-700 cursor-pointer pr-2"></i>{" "}
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        onDelete(note.id);
                                        setShowAction(false);
                                    }}
                                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-red-500"
                                >
                                    <i className="fas fa-trash text-red-500 hover:text-red-700 cursor-pointer pr-2"></i>{" "}
                                    Hapus
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AllNote() {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const [editNote, setEditNote] = useState(null);
    const [loading, setLoading] = useState(true);

    // API AMBIL DATA
    const fetchNotes = async () => {
        setLoading(true);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/notes");
            const data = await response.json();
            setNotes(data);
        } catch (error) {
            console.error("Gagal mengambil data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    // API HAPUS DATA
    const handleDelete = async id => {
        if (window.confirm("Yakin hapus item?")) {
            try {
                await fetch(`http://127.0.0.1:8000/api/notes/${id}`, {
                    method: "DELETE"
                });
                setNotes(notes.filter(n => n.id !== id));
                alert("Berhasil hapus data");
            } catch (error) {
                console.error("Gagal hapus:", error);
            }
        }
    };

    // API EDIT DATA
    const handleUpdate = async e => {
        e.preventDefault();
        try {
            await fetch(`http://127.0.0.1:8000/api/notes/${editNote.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editNote)
            });
            setEditNote(null);
            fetchNotes();
            alert("Berhasil edit data");
        } catch (error) {
            console.error("Gagal update:", error);
        }
    };

    return (
        <div className="transition-colors duration-300 relative">
            <div className="max-w-5xl mx-auto uppercase tracking-[0.2em] text-[11px] font-bold text-indigo-500 dark:text-indigo-400 mb-2">
                Kumpulan Catatan
            </div>

            <h1 className="max-w-5xl mx-auto text-3xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
                Pikiran Terorganisir, <br />
                <span className="text-indigo-600 dark:text-indigo-400">
                    Hidup Lebih Produktif.
                </span>
            </h1>

            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {loading ? (
                    <div className="min-h-screen flex justify-center items-center w-full">
                        <p
                            className="text-2xl absolute inset-0 flex
                        items-center justify-center text-slate-900
                        dark:text-slate-100 italic font-bold"
                        >
                            Loading...
                        </p>
                    </div>
                ) : notes.length === 0 ? (
                    <div className="min-h-screen flex justify-center items-center w-full">
                        <p
                            className="text-2xl text-center absolute inset-0 flex
                    items-center justify-center text-slate-900
                    dark:text-slate-100 italic font-bold"
                        >
                            Tidak ada data
                        </p>
                    </div>
                ) : (
                    notes
                        .slice()
                        .reverse()
                        .map(note => (
                            <NoteItem
                                key={note.id}
                                title={note.title}
                                created={note.created_at}
                                category={note.category}
                                setSelectedNote={setSelectedNote}
                                setEditNote={setEditNote}
                                onDelete={handleDelete}
                                content={note.content}
                                note={note}
                            />
                        ))
                )}
            </div>

            {/* MODAL DETAIL */}
            {selectedNote && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-all"
                        onClick={() => setSelectedNote(null)}
                    ></div>

                    <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[32px] shadow-2xl max-w-lg w-full animate-in fade-in zoom-in duration-300 z-10">
                        <div className="w-2 h-16 absolute left-0 top-12 rounded-r-full bg-indigo-500"></div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.2em]">
                                {selectedNote.category}
                            </span>
                            <button
                                onClick={() => setSelectedNote(null)}
                                className="text-slate-600 hover:text-red-500 transition-colors"
                            >
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                            {selectedNote.title}
                        </h2>
                        <div className="overflow-y-auto max-h-[60vh] pr-2">
                            <p className="text-slate-600 dark:text-slate-600 leading-relaxed whitespace-pre-line">
                                {selectedNote.content}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL EDIT */}
            {editNote && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-all"
                        onClick={() => setEditNote(null)}
                    ></div>

                    <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[32px] shadow-2xl max-w-lg w-full z-10">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                            Edit Catatan
                        </h2>
                        <form onSubmit={handleUpdate}>
                            <div className="grid items-start grid-cols-1 gap-4 mb-4">
                                <div className="flex items-start gap-3 px-4 py-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm focus-within:border-indigo-500 transition-all duration-300">
                                    <i className="fas fa-heading text-indigo-600 mt-1 w-5"></i>
                                    <input
                                        type="text"
                                        value={editNote.title}
                                        onChange={e =>
                                            setEditNote({
                                                ...editNote,
                                                title: e.target.value
                                            })
                                        }
                                        className="outline-none w-full bg-transparent dark:text-slate-100"
                                        placeholder="Judul"
                                        required
                                    />
                                </div>
                                <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm focus-within:border-indigo-500 transition-all duration-300">
                                    <i className="fas fa-tags text-indigo-500"></i>
                                    <select
                                        value={editNote.category}
                                        onChange={e =>
                                            setEditNote({
                                                ...editNote,
                                                category: e.target.value
                                            })
                                        }
                                        className="w-full bg-transparent text-sm font-medium dark:text-slate-200 outline-none cursor-pointer"
                                        required
                                    >
                                        <option
                                            value=""
                                            disabled
                                            className="dark:bg-slate-900"
                                        >
                                            Pilih Kategori
                                        </option>
                                        <option value="Harian">Harian</option>
                                        <option value="Edukasi">Edukasi</option>
                                        <option value="Hobi">Hobi</option>
                                        <option value="Kerja">Kerja</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm focus-within:border-indigo-500 transition-all duration-300">
                                    <i className="fas fa-pen-nib mt-1 text-indigo-600"></i>
                                    <textarea
                                        value={editNote.content}
                                        onChange={e =>
                                            setEditNote({
                                                ...editNote,
                                                content: e.target.value
                                            })
                                        }
                                        className="w-full text-slate-700 dark:text-slate-200 bg-transparent outline-none resize-none"
                                        rows="4"
                                        placeholder="Konten"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setEditNote(null)}
                                    className="px-6 py-2 text-slate-500"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="bg-indigo-600 rounded-2xl text-white py-2 px-6 shadow-lg"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
