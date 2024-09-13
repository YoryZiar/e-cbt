function CemasContent() {
    return (
        <section className="max-w-xs md:max-w-5xl bg-primary mx-auto rounded-lg p-3">
            <h1 className="text-center text-slate-200 text-2xl">Cemas</h1>
            <p className="text-slate-200 my-3">Apabila saat mengalami bullying kamu kerap mengalami cemas atau panik berlebihan, cobalah mengelola dan mengatasi Kecemasan dengan langkah-langkah berikut :</p>
            <ol className="list-decimal px-4 font-normal text-slate-200">
                <li>Mulailah dengan menciptakan “Growth Mindset” atau pikiran yang terbuka
                    Sadari bagaimana kecemasan mempengaruhi ke tubuh dan kemudian coba lakukan teknik bernafas yang menenangkan. Seringkali ketika cemas kita merasa tangan berkeringat. Ini sebenarnya adalah respon tubuh terhadap stres. Kita tidak perlu memaksakan perasaan cemas ini hilang, namun tidak juga harus fokus dengan kondisi ini. Cobalah untuk bernafas pelan beberapa kali berulang. Tarik nafas dan buang nafas secara perlahan, dengan menghitung satu sampai lima sambil menarik dan mengeluarkan nafas. Hal ini untuk membantu kita agar lebih tenang sehingga dapat berpikir secara lebih baik.
                </li>
                <li>Berbicara dengan diri untuk mengatasinya
                    Cobalah berkata pada diri hal yang bisa membuat kita memiliki keberanian untuk menghadapi hal yang mencemaskan tersebut.

                </li>
                <li>Hadapi situasinya
                    Menghadapi situasi yang mencemaskan membuat kita belajar menghadapi kecemasanya dan membuktikan bahwa kecemasan yang kita rasakan mungkin terjadi mungkin tidak.

                </li>
                <li>Konsultasi ke Psikolog atau Psikiater
                    Jika anda sudah mencoba melakukan hal tersebut dan rasa cemas tetap masih ada dan mengganggu kehidupan segera berkonsultasi kepada psikolog atau psikiater

                </li>
            </ol>
        </section>
    )
}

export default function CemasPage() {
    return (
        <CemasContent />
    )
}