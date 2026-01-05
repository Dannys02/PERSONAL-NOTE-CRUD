import { useNavigate } from "react-router-dom";

export default function Help() {
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
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8">Pusat Bantuan</h1>
                
                <div className="space-y-8">
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                        <h2 className="text-lg font-bold mb-3 text-indigo-600">🚀 Memulai Catatan</h2>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Klik tombol <strong>"+ Buat"</strong> pada dashboard. Masukkan judul dan pilih kategori. Jika kategori tidak tersedia, pilih <strong>"Lainnya"</strong> untuk mengetik kategori kustom Anda sendiri.
                        </p>
                    </section>

                    <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                        <h2 className="text-lg font-bold mb-3 text-indigo-600">🌙 Mode Gelap & Terang</h2>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Aplikasi akan mengingat pilihan tema Anda. Jika Anda memilih Dark Mode, saat Anda kembali nanti, aplikasi akan tetap dalam mode tersebut secara otomatis.
                        </p>
                    </section>

                    <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                        <h2 className="text-lg font-bold mb-3 text-indigo-600">✏️ Mengelola Data</h2>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Gunakan ikon titik tiga pada kartu catatan untuk melakukan <strong>Edit</strong> atau <strong>Hapus</strong>. Perubahan yang Anda lakukan akan langsung tersinkronisasi dengan database server.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
