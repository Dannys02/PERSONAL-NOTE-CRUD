import { useNavigate } from "react-router-dom";

export default function Privacy() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 p-6 md:p-12">
            <div className="fixed top-6 right-6 z-10">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:text-indigo-500 transition-all shadow-sm">
                    <i className="fas fa-arrow-left text-sm"></i>
                    <span className="text-sm font-medium">Kembali</span>
                </button>
            </div>

            <main className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">Kebijakan Privasi</h1>
                
                <article className="prose dark:prose-invert max-w-none space-y-6">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Terakhir diperbarui: Januari 2026. <br />
                        Keamanan informasi Anda adalah hal yang sangat serius bagi kami.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold mb-2">1. Penyimpanan Data</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Seluruh catatan yang Anda buat dikirimkan melalui protokol JSON ke server API Laravel Anda. Kami tidak menyimpan data sensitif di luar sistem yang telah Anda tentukan.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-2">2. Penggunaan Cookie & LocalStorage</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Aplikasi ini menggunakan <strong>LocalStorage</strong> untuk menyimpan preferensi tampilan (Theme). Ini bersifat lokal di perangkat Anda dan tidak dikirimkan ke server kami.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-2">3. Kontrol Pengguna</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Anda memiliki hak penuh untuk menambah, mengubah, dan menghapus catatan secara permanen dari server melalui antarmuka aplikasi ini.
                        </p>
                    </div>
                </article>
            </main>
        </div>
    );
}
