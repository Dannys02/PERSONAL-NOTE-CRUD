export default function AllNote() {
    function NoteItem({ title, category, color }) {
        return (
            <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-[24px] hover:shadow-2xl hover:shadow-indigo-100 dark:hover:shadow-none transition-all duration-300">
                <div
                    className={`w-2 h-10 absolute left-0 top-1/2 -translate-y-1/2 rounded-r-full ${color}`}
                ></div>
                <div className="flex flex-col h-full">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-3 tracking-widest transition-colors duration-300">
                        {category}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 mb-4 line-clamp-2 leading-snug">
                        {title}
                    </h3>
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
                <NoteItem
                    title="Strategi Belajar React"
                    category="Edukasi"
                    color="bg-blue-500"
                />
                <NoteItem
                    title="List Belanja Bulanan"
                    category="Harian"
                    color="bg-emerald-500"
                />
                <NoteItem
                    title="Draft Novel: Bab 1"
                    category="Hobi"
                    color="bg-amber-500"
                />
                <NoteItem
                    title="Meeting Kerja 2024"
                    category="Kantor"
                    color="bg-purple-500"
                />
            </div>
        </div>
    );
}
