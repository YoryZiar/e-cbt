function DepresiContent() {
    return (
        <section className="max-w-xs md:max-w-5xl bg-primary mx-auto rounded-lg p-3">
            <h1 className="text-center text-slate-200 text-2xl">Depresi</h1>
            <p className="text-slate-200 my-3">Berikut cara mengatasi Depresi yang Bisa Diterapkan secara Mandiri :</p>
            <ol className="list-decimal px-4 font-normal text-slate-200">
                <li>Menerapkan pola hidup sehat.</li>
                <li>Olahraga secara rutin.</li>
                <li>Melakukan hobi. </li>
                <li>Tidur yang cukup dan berkualitas. </li>
                <li>Hindari media sosial atau hal-hal yang dapat menambah beban pikiran.</li>
                <li>Mengekspresikan perasaan. </li>
                <li>Latihan berpikir positif. </li>
            </ol>
        </section>
    )
}

export default function DepresiPage() {
    return (
        <DepresiContent />
    )
}