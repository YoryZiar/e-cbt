function EmosiContent() {
    return (
        <section className="max-w-xs md:max-w-5xl bg-primary mx-auto rounded-lg p-3">
            <h1 className="text-center text-slate-200 text-2xl">Emosi</h1>
            <p className="text-slate-200 my-3">Menurut psikologi, ada beberapa cara yang dapat dilakukan untuk mengatasi gangguan emosi pada remaja, di antaranya: </p>
            <ol className="list-decimal px-4 font-normal text-slate-200">
                <li>Menenangkan diri.
                    Saat merasa emosi yang kuat, cobalah untuk menenangkan diri dengan bermeditasi, berjalan, atau melakukan hal apapun yang dapat membantu.
                </li>
                <li>Mencari bantuan
                    Jangan ragu untuk mencari bantuan dari orang lain untuk membantu Anda melewati masalah emosi yang sulit.
                </li>
                <li>Memilih situasi
                    Hindari keadaan yang dapat memicu emosi, terutama emosi yang tidak diinginkan.
                </li>
                <li>Alihkan fokus perhatian
                    Alihkan fokus perhatian dari hal-hal yang membuat suasana hati tidak baik.
                </li>
                <li>Ubah pemikiran
                    Inti dari emosi terdalam kita adalah sebuah keyakinan yang mendorongnya.
                </li>
                <li>Ubah respons
                    Jika keempat pendekatan di atas tidak berhasil dalam mengontrol emosimu, langkah terakhir yang bisa kamu lakukan adalah mengendalikan respons mu.
                </li>
            </ol>
        </section>
    )
}

export default function Emosi() {
    return (
        <EmosiContent />
    )
}