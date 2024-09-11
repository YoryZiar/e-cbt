function ContactContent() {
    return (
        <div className="mx-auto">
            <h1 className="text-slate-200 text-2xl text-center font-semibold lg:text-4xl">Kontak</h1>
            <p className="text-slate-200 text-sm text-center lg:text-lg">Tuliskan apa yang kamu alami saat mengalami kekerasan (bullying)!</p>

            <form action="" className="bg-primary max-w-xs md:max-w-3xl mx-auto rounded-lg py-5 mt-5 lg:p-10 lg:max-w-5xl">
                <label htmlFor="email" className="block mx-5">
                    <span className="block font-normal text-start text-slate-200 mb-1">Email</span>
                    <input type="text" id="email" className="w-full rounded-md py-1" />
                </label>
                <label htmlFor="pesan" className="block mx-5 my-5">
                    <span className="block font-normal text-start text-slate-200 mb-1">Pesan</span>
                    <textarea name="pesan" id="pesan" className="w-full rounded-md h-28 md:h-48"></textarea>
                </label>
                <button className="py-2 px-4 bg-secondary text-lg rounded-md mx-5 font-semibold text-primary">Kirim</button>
            </form>
        </div>
    )
}

export default function Contact() {
    return (
        <ContactContent />
    )
}