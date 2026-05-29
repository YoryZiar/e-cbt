'use client';

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import { LogIn, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    let linkNav = [
        {
            name: 'Beranda',
            link: '/#Home'
        },
        {
            name: 'Tentang Kami',
            link: '/#About'
        },
        {
            name: 'Kontak',
            link: '/#Contact'
        }
    ]

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        setShowMenu(false);
    }, [pathname]);

    // Handle scroll for navbar shadow/blur adjustments
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${isScrolled ? 'top-4' : 'top-6'}`}>
            <div className={`w-full max-w-4xl rounded-full transition-all duration-500 border
                ${isScrolled 
                    ? 'bg-[#13072e]/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-white/10 py-3' 
                    : 'bg-white/[0.05] backdrop-blur-md shadow-2xl border-white/5 py-4'
                } px-6 flex items-center justify-between relative`}>
                
                {/* Logo / Brand */}
                <Link href="/" className="flex-shrink-0 z-10 hover:scale-105 transition-transform">
                    <h1 className="bg-gradient-to-r from-secondary to-[#d3ccff] rounded-xl py-1.5 px-4 text-sm font-bold text-primary tracking-wide shadow-[0_0_15px_rgba(179,170,255,0.3)]">
                        #pedulibullying
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
                    {linkNav.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.link} 
                            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Login Button */}
                <div className="hidden md:flex items-center z-10">
                    <Link href="/login" className="flex items-center px-5 py-2.5 bg-secondary text-primary font-bold text-sm rounded-full transition-all duration-300 hover:bg-[#c4bdff] hover:scale-105 hover:shadow-[0_0_15px_rgba(179,170,255,0.4)]">
                        <LogIn className="w-4 h-4 mr-2" />
                        Masuk
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <button 
                    onClick={toggleMenu} 
                    className="md:hidden z-10 p-2 text-slate-300 hover:text-white focus:outline-none transition-colors"
                >
                    {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Dropdown Menu */}
                <div className={`absolute top-full left-0 right-0 mt-4 md:hidden transition-all duration-300 transform origin-top
                    ${showMenu ? 'scale-y-100 opacity-100 visible' : 'scale-y-95 opacity-0 invisible'}
                `}>
                    <div className="bg-[#13072e]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col space-y-4">
                        {linkNav.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.link} 
                                className="px-4 py-3 text-base font-medium text-slate-200 hover:text-secondary hover:bg-white/5 rounded-xl transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="h-px w-full bg-white/10 my-2"></div>
                        <Link href="/login" className="flex items-center justify-center w-full py-3 bg-secondary text-primary font-bold text-base rounded-xl transition-all duration-300 hover:bg-[#c4bdff]">
                            <LogIn className="w-5 h-5 mr-2" />
                            Masuk
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}