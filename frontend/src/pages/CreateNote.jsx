export default function CreateNote() {
    return (
        <div className="transition-colors duration-300">
            <h1 className="text-center text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-8 tracking-tight transition-colors duration-300">
                Buat Catatan
            </h1>

            <form action="">
                <div className="grid items-start grid-cols-1 gap-4 mb-4">
                    <div className="flex items-start gap-3 px-4 py-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-50 dark:focus-within:ring-indigo-900/20 transition-all duration-300">
                        <i className="fas fa-heading text-indigo-600 dark:text-indigo-400 mt-1 w-5 transition-colors duration-300"></i>
                        <input
                            type="text"
                            placeholder="Tulis judul"
                            className="outline-none w-full bg-transparent dark:text-slate-100 placeholder-slate-400"
                        />
                    </div>

                    <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-50 dark:focus-within:ring-indigo-900/20 transition-all duration-300 cursor-pointer group">
                        <i className="fas fa-tags text-indigo-500 dark:text-indigo-400 group-focus-within:text-indigo-600 transition-colors duration-300"></i>
                        <div className="flex-1">
                            <select className="w-full bg-transparent text-sm font-medium text-slate-700 dark:text-slate-200 outline-none cursor-pointer appearance-none">
                                <option value="" disabled selected className="dark:bg-slate-900">
                                    Pilih Kategori
                                </option>
                                <option value="Harian" className="text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                                    Harian
                                </option>
                                <option value="Edukasi" className="text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                                    Edukasi
                                </option>
                                <option value="Hobi" className="text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                                    Hobi
                                </option>
                                <option value="Kerja" className="text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                                    Kerja
                                </option>
                            </select>
                        </div>
                        <i className="fas fa-chevron-down text-[10px] text-slate-400 dark:text-slate-500 group-focus-within:rotate-180 transition-transform duration-300"></i>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-50 dark:focus-within:ring-indigo-900/20 transition-all duration-300">
                        <i className="fas fa-pen-nib mt-1 text-indigo-600 dark:text-indigo-400 transition-colors duration-300"></i>
                        <textarea
                            className="w-full text-slate-700 dark:text-slate-200 bg-transparent outline-none resize-none placeholder-slate-400"
                            rows="4"
                            placeholder="Tulis catatan Anda di sini..."
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-indigo-600 dark:bg-indigo-500 rounded-2xl text-white py-2 px-6 hover:opacity-90 transition-all duration-300 shadow-lg shadow-indigo-200 dark:shadow-none"
                >
                    + Buat
                </button>
            </form>
        </div>
    );
}
