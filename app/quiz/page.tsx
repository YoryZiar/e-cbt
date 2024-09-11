import Link from "next/link"

function QuizContent() {
    return (
        <section className="container lg:mx-auto lg:w-2/3 md:mx-auto">
            <div className="max-w-xs h-48 bg-primary mx-auto lg:w-3/4 rounded-xl overflow-hidden">
                <div className="bg-hero-image bg-cover w-full h-full"></div>
            </div>
            <div className="p-5">
                <h1 className="text-slate-200 text-xl font-semibold mb-3">Tes E-CBT</h1>
                <p className="text-slate-200 text-sm mb-6">Tes E-CBT ini bisa mengukur tingkat dampak bullying yang kamu alami. Hasil dari tes ini akan sangat membantu kamu mengetahui keadaan kesehatan mentalmu saat ini.</p>
                <Link href="/quiz/start" className="py-2 px-5 bg-[#b3aaff] text-primary font-semibold my-5 rounded-lg">
                Mulai Tes
                </Link>
                <h3 className="text-slate-200 text-lg mt-6">Baca Panduan Pengisiannya, Yuk!</h3>
                <ol className="text-slate-200 list-decimal px-5 py-3 text-sm">
                    <li>Gak ada jawaban yang benar atau salah. Isilah dengan jujur sesuai kepribadianmu.</li>
                    <li>Santai aja, tes ini gak diberi waktu, kok.</li>
                    <li>Cari tempat yang nyaman dan kondusif supaya kamu lebih fokus.</li>
                    <li>Jika kamu keluar di tengah tes, maka seluruh proses tes dan jawaban akan hilang.</li>
                    <li>Hasil tes bisa kamu dapatkan setelah mengisi semua pertanyaan dengan lengkap.</li>
                </ol>
                <p className="text-slate-200 text-sm">Selamat mengisi, ya!</p>
            </div>
        </section>
    )
}

export default function QuizPage() {
    return (
        <QuizContent />
    )
}