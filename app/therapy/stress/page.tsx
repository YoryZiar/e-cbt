function StresContent() {
    return (
        <section className="max-w-xs md:max-w-5xl bg-primary mx-auto rounded-lg p-3">
            <h1 className="text-center text-slate-200 text-2xl">Stres</h1>
            <p className="text-slate-200 my-3">Berikut beberapa cara yang dapat dilakukan untuk mengatasi stress:</p>
            <ol className="list-decimal px-4 font-normal text-slate-200">
                <li>Bicarakan keluhan dengan seseorang yang dapat dipercaya</li>
                <li>Melakukan kegiatan yang sesuai dengan minat dan kemampuan</li>
                <li>Kembangkan hobi yang bermanfaat</li>
                <li>Meningkatkan ibadah dan mendekatkan diri pada Tuhan</li>
                <li>Berpikir positif</li>
                <li>Tenangkan pikiran dengan relaksasi</li>
                <li>Jagalah kesehatan dengan olahraga atau aktivitas fisik secara teratur, tidur cukup, makan makanan bergizi seimbang, serta terapkan perilaku bersih dan sehat</li>
            </ol>
        </section>
    )
}

export default function Stres() {
    return (
        <StresContent />
    )
}