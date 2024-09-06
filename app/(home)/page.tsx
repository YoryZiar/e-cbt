import Image from 'next/image'
import Link from 'next/link'

function HomeContent() {
    return (
        <section className="max-w-xs lg:max-w-7xl md:max-w-screen-md mx-auto bg-primary p-5 rounded-2xl text-white lg:h-full">
            <div className="flex flex-wrap lg:grid lg:grid-cols-2 p-5">
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl lg:font-thin font-bold font-serif mb-3">Hi! <br /> Wellcome to <br /> TES E-CBT</h1>
                    <p className="text-lg mt-2 font-serif">Tes E-CBT ini merupakan tes yang berfokus membantu mental siswa siswi korban bullying. Tes ini akan mengukur tingkat stress yang kamu alami, selain itu tes ini akan memberikanmu terapi berupa arahan-arahan untuk mengatasi masalah-masalah yang kerap dialami korban bullying.</p>
                </div>
                <div className="my-5">
                    <div className='w-5/6 mx-auto lg:h-96 rotate-45 overflow-hidden'>
                        <div className='w-full h-full bg-hero-image bg-cover -rotate-45 bg-top'></div>
                    </div>
                    <Link href='/identity' className="py-2 px-4 bg-white rounded-xl text-2xl font-semibold text-primary absolute">
                        Start
                    </Link>
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