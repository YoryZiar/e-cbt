function SulitTidurContent() {
    return (
        <section className="max-w-xs md:max-w-5xl bg-primary mx-auto rounded-lg p-3">
            <h1 className="text-center text-slate-200 text-2xl">Sulit Tidur</h1>
            <p className="text-slate-200 my-3">Menurut psikologi, beberapa cara mengatasi sulit tidur adalah:  :</p>
            <ol className="list-decimal px-4 font-normal text-slate-200">
                <li>Membuat rutinitas tidur, Membuat jadwal tidur yang konsisten dan disiplin, serta bangun dan tidur pada waktu yang sama setiap hari. </li>
                <li>Menciptakan lingkungan tidur yang nyaman: Pilih pakaian yang nyaman saat tidur, seperti katun atau sutra.
                </li>
                <li>Menghindari stimulan sebelum tidur: Hindari penggunaan HP setidaknya 30 menit sebelum tidur.
                </li>
                <li>Mengelola stres: Sisihkan waktu untuk bersantai dan menenangkan pikiran, misalnya dengan meditasi, latihan pernapasan, mandi, atau mendengarkan musik yang menenangkan.
                </li>
                <li>Membatasi asupan kafein dan alkohol: Kurangi konsumsi kafein, terutama di sore atau malam hari. </li>
                <li>Mengonsumsi makanan sehat: Konsumsi lebih banyak makanan berserat, seperti sayuran dan buah-buahan, dan kurangi asupan gula. </li>
                <li>Berolahraga: Lakukan aktivitas fisik, seperti berolahraga, di siang hari. </li>
            </ol>
        </section>
    )
}

export default function SulitTidur() {
    return (
        <SulitTidurContent />
    )
}