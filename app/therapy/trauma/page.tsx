function TraumaContent() {
    return (
        <section className="max-w-xs md:max-w-5xl bg-primary mx-auto rounded-lg p-3">
            <h1 className="text-center text-slate-200 text-2xl">Trauma</h1>
            <p className="text-slate-200 my-3">Berikut beberapa hal yang dapat dilakukan untuk melawan rasa trauma yang dihadapi :</p>
            <ol className="list-decimal px-4 font-normal text-slate-200">
                <li>Merawat diri sendiri, baik secara emosional maupun fisik, sangat penting dalam menghadapi situasi yang penuh tekanan. Ini termasuk menjaga kesehatan, hobi, dan kegiatan yang membawa kebahagiaan.</li>
                <li>Edukasi Diri
                    Pelajari tentang bullying, dampaknya, dan strategi untuk mengatasinya. Pengetahuan adalah kekuatan.
                </li>
                <li>Mengembangkan Gaya Relasional Baru
                    Evolusikan ke gaya relasional yang asertif yang mencari resiprositas dan rasa hormat dari orang-orang di orbit sosial kalian.
                </li>
                <li>Mengampuni Diri Sendiri
                    Ingatlah bahwa kalian bukan tanpa daya. Kalian memiliki kekuatan untuk pulih dari bullying dan luka yang telah ditimbulkannya.
                </li>
            </ol>
        </section>
    )
}

export default function TraumaPage() {
    return (
        <TraumaContent />
    )
}