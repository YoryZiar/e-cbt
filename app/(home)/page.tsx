import Image from 'next/image'
import Link from 'next/link'

function HomeContent() {
    return (
        <section className='max-w-xs lg:max-w-full lg:mx-28 bg-primary mx-auto p-3 lg:p-10 rounded-xl'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className='w-full text-slate-200'>
                    <h1 className='font-bold text-4xl lg:text-5xl lg:leading-tight font-serif'>Hi! <br /> Wellcome to <br /> TES E-CBT</h1>
                    <p className='font-normal font-serif mt-3 tracking-wide lg:text-xl'>Tes E-CBT ini merupakan tes yang berfokus membantu mental siswa siswi korban bullying.Tes ini akan mengukur tingkat stress yang kamu alami, selain itu tes ini akan memberikanmu terapi berupa arahan-arahan untuk mengatasi masalah-masalah yang kerap dialami korban bullying.</p>
                </div>
                <div className="w-full my-5">
                    <div className="w-3/4 mb-10 h-4/5 lg:block mx-auto rotate-45 overflow-hidden rounded-3xl hidden">
                        <div className='bg-hero-image w-full h-full bg-cover -rotate-45 bg-center rounded-xl scale-125'></div>
                    </div>
                    <div className="lg:block lg:w-3/4 lg:mx-auto">
                        <Link href="/quiz" className='bg-white px-5 py-2 text-3xl rounded-xl font-medium text-primary lg:block lg:w-1/2 lg:mx-auto text-center lg:text-4xl lg:font-semibol'>
                            Start
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function Home() {
    return (
        <HomeContent />
    )
}