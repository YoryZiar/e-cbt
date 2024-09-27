import Link from 'next/link'
import Contact from './contact/page'

function HomeContent() {
    return (
        <div className='container' id='Home'>
            <section className='max-w-xs lg:max-w-full lg:mx-16 bg-gradient-to-br from-[#13072e] to-primary mx-auto p-3 lg:p-10 rounded-xl'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className='w-full text-slate-200'>
                        <h1 className='font-bold text-4xl lg:text-5xl lg:leading-tight font-serif'>Hi! <br /> Wellcome to <br /> E-CBT</h1>
                        <p className='font-normal font-serif mt-3 tracking-wide lg:text-xl'>Tes E-CBT ini merupakan E-CBT (Electronic Cognitive Behavioral Therapy) ini merupakan platform yang berfokus membantu siswa-siswi korban bullying. Pada website ini akan memberikan mereka petunjuk untuk menangani masalah yang mereka alami, selain itu website ini akan memberikan wadah atau media untuk bercerita kepada pihak sekolah terkait masalah yang mereka alami.</p>
                    </div>
                    <div className="w-full my-5">
                        <div className="w-3/4 mb-10 h-4/5 lg:block mx-auto overflow-hidden rounded-3xl hidden">
                            <div className='bg-hero-image w-full h-full bg-cover bg-center rounded-xl scale-125'></div>
                        </div>
                        <div className="lg:block lg:w-3/4 lg:mx-auto text-center">
                            <Link href="/start" className='bg-slate-100 px-5 py-2 lg:py-3 text-xl rounded-xl font-medium text-primary lg:block lg:w-3/5 lg:mx-auto text-center lg:text-2xl font-serif'>
                                GET STARTED
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container mt-10 px-4' id='About'>
                <h1 className='text-center text-slate-200 text-xl mb-3 lg:text-2xl'>Tentang Kami</h1>
                <p className='text-center text-slate-200 mb-3 text-sm lg:text-xl'>Kami merupakan Mahasiswa Universitas Mataram yang ingin berkontribusi membantu para korban bullying untuk dapat menenangkan pikiran mereka serta memberikan solusi terbaik untuk menghadapinya. Melalui kegiatan program keativitas mahasiswa (PKM) dengan ini kami menghadirkan e-CBT.</p>
                <p className='text-center text-slate-200 mb-3 text-sm lg:text-xl'>Di e-CBT, Kami hadir untuk membangun ruang yang aman, positif, dan mendukung bagi siapa pun yang pernah merasakan bullying. Dengan menyediakan solusi-solusi dalam menghadapi bullying yang edukatif, dan media pelaporan bullying yang efektif kami berkomitmen untuk memberdayakan individu dalam melawan bullying dan menciptakan perubahan nyata.</p>
                <p className='text-center text-slate-200 mb-3 text-sm lg:text-xl'>Misi kami adalah membantu para korban bullying dengan memberikan solusi konkret untuk menghentikan siklus kekerasan ini. Bersama, kita bisa menciptakan dunia yang lebih empati dan penuh dukungan.</p>
                <p className='text-center text-slate-200 mb-3 text-sm lg:text-xl'>Mari bergerak bersama, sebab perubahan dimulai dari kita.</p>
            </section>

            <section className='container my-10' id='Contact'>
                <Contact />
            </section>
        </div>
    )
}

export default function Home() {
    return (
        <HomeContent />
    )
}