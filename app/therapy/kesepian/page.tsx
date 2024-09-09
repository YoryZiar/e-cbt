function KesepianContent() {
    return (
        <section className="max-w-xs md:max-w-5xl bg-primary mx-auto rounded-lg p-3">
            <h1 className="text-center text-slate-200 text-2xl">Kesepian</h1>
            <p className="text-slate-200 my-3">Berikut cara mengatasi kesepian menurut beberapa para ahli:</p>
            <ol className="list-decimal px-4 font-normal text-slate-200">
                <li>Mencoba berinteraksi dengan orang sekitar, Menurut Angela Amias, seorang pekerja sosial berlisensi di Iowa City, sebuah penelitian menemukan bahwa interaksi santai dengan orang asing dapat meningkatkan suasana hati orang sepanjang hari. dengan meluangkan waktu untuk terhubung dengan orang lain secara nyata dan bermakna dapat mengatasi kesepian. Koneksi ini tidak selalu harus dengan orang yang sudah Anda kenal dan cintai, tapi juga dengan orang baru.</li>
                <li>Pergi ke luar selama beberapa menit, untuk menghilangkan rasa kesepian.
                </li>
                <li>Pelajari keterampilan baru, cara lain untuk mengatasi perasaan sendirian adalah dengan menyibukkan pikiran Anda dengan hal-hal baru dan menarik. Menurut Jason Drake, seorang terapis di Katy, Texas, mempelajari keterampilan baru membuat otak tetap fokus pada tugas, alih-alih pikiran mengembara ke perasaan kesepian.
                </li>
                <li>Terhubung dengan diri sendiri, dengan melakukan kegiatan  yang anda sukai, seperti berolahraga, melukis, dan sebagainya
                </li>
                <li>
                    Self-talk yang positif adalah kunci ketika mengalami kesepian. Karena otak kita cenderung memiliki bias negatif, itu berarti pikiran kita secara alami melayang ke hal-hal negatif tentang diri kita sendiri atau tentang hidup kita. Salah satu cara untuk membantu mengelola perasaan kesepian adalah dengan melihat perasaan ini secara realistis. Ketika Anda merasa kesepian, mungkin pada saat itu Anda merasa bahwa perasaan ini akan bertahan selamanya. Namun, ingatkan diri Anda bahwa perasaan ini bersifat sementara dan tidak ada apapun, termasuk perasaan kesepian ini, yang bertahan selamanya.
                </li>
            </ol>
        </section>
    )
}

export default function KesepianPage() {
    return (
        <KesepianContent />
    )
}