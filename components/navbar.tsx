'use client';

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(true);
    const pathname = usePathname();

    let linkNav = [
        {
            name: 'Beranda',
            link: '#Home'
        },
        {
            name: 'Tentang Kami',
            link: '#About'
        },
        {
            name: 'Kontak',
            link: '#Contact'
        }
    ]

    function hideMenu() {
        if (showMenu === true) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }

    useEffect(() => {
        setShowMenu(true);
    }, [pathname]);


    return (
        <div className="w-full">
            <div className="flex relative">
                <div className="p-5">
                    <h1 className="bg-[#b3aaff] rounded-xl py-1 px-3 text-sm lg:text-base font-medium text-primary">#pedulibullying</h1>
                </div>
                <button onClick={hideMenu} className="absolute w-12 h-10 rounded-md right-0 top-3 mx-4 lg:hidden">
                    {
                        showMenu
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 mx-auto stroke-slate-200 transition duration-1000">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 mx-auto stroke-slate-200 transition duration-1000">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                    }

                </button>

                <nav className={
                    showMenu
                        ?
                        "absolute right-4 top-full w-full rounded-lg bg-primary max-w-[250px] py-5 shadow-lg shadow-slate-300 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none transition ease-out duration-500 hidden"
                        :
                        "absolute right-4 top-full w-full rounded-lg bg-primary max-w-[250px] py-5 shadow-lg shadow-slate-300 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
                }>
                    <ul className="block lg:flex">
                        {
                            linkNav.map((link) => (
                                <li className="group" key={link.name}>
                                    <Link href={link.link} className="mx-8 flex py-2 text-base text-slate-200 group-hover:text-secondary">
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}