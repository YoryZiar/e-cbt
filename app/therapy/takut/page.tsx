function TakutContent() {
    return (
        <section className="max-w-xs md:max-w-5xl bg-primary mx-auto rounded-lg p-3">
            <h1 className="text-center text-slate-200 text-2xl">Takut</h1>
            <p className="text-slate-200 my-3">Berikut adalah beberapa cara yang dapat dilakukan untuk mengatasi rasa takut terhadap orang lain: </p>
            <ol className="list-decimal px-4 font-normal text-slate-200">
                <li>Akui kekurangan diri
                    Refleksikan sikap dan perilaku diri sendiri, dan akui kekurangan atau kesalahan yang ada.
                </li>
                <li>. Lakukan self talk
                    Beri kata-kata positif kepada diri sendiri, misalnya bahwa dirimu tetap berharga.
                </li>
                <li>Kelola stress
                    Lakukan teknik relaksasi, seperti meditasi atau yoga. Anda juga bisa tarik napas dalam dan embuskan perlahan untuk menenangkan diri.
                </li>
                <li>Hindari situasi yang memicu rasa takut
                    Hindari situasi yang dapat memicu rasa takut dan khawatir.
                </li>
                <p className="text-slate-200 my-3">Jika rasa takut yang kamu alami sudah berlangsung selama minimal 6 bulan dan membuat Anda kesulitan melakukan tugas sehari-hari, kamu mungkin mengalami gangguan kecemasan sosial. </p>
            </ol>
        </section>
    )
}

export default function TakutPage() {
    return (
        <TakutContent />
    )
}