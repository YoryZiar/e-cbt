function MalasContent() {
    return (
        <section className="max-w-xs md:max-w-5xl bg-primary mx-auto rounded-lg p-3">
            <h1 className="text-center text-slate-200 text-2xl">Malas</h1>
            <p className="text-slate-200 my-3">Beberapa cara untuk dapat mengatasi rasa malas dalam diri sendiri menurut psikologi adalah:</p>
            <ol className="list-decimal px-4 font-normal text-slate-200">
                <li>Membuat tujuan yang realistis. Rasa malas kerap disebabkan oleh kurangnya motivasi untuk melakukan sesuatu. Oleh karena itu, seseorang bisa membuat tujuan atau target realistis</li>
                <li>Menghargai proses dan setiap usaha yang telah dilakukan.
                </li>
                <li>Menjaga kesehatan fisik dan mental.
                </li>
                <li>Susun rencana kegiatan.
                </li>
                <li>Hindari sifat terlalu perfeksionis.</li>
                <li>Terapkan afirmasi dan positive self-talk.</li>
                <li>Buat suasana jadi menyenangkan</li>
                <li>Hindari distraksi atau mengalihkan perhatian dari hal yang sedang dilakukan.</li>
            </ol>
        </section>
    )
}

export default function MalasPage() {
    return (
        <MalasContent />
    )
}