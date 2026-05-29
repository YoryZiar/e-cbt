'use client'

import { logout } from "@/app/actions/auth/logout"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
    Menu,
    LogOut,
    ShieldAlert
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function AdminNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    const adminNav = [
        {
            href: "/admin/dashboard",
            name: "Dashboard"
        },
        {
            href: "/admin/jurnal",
            name: "Jurnal"
        },
        {
            href: "/admin/messages",
            name: "Pesan"
        },
        {
            href: "/admin/users",
            name: "Pengguna"
        }
    ]

    useEffect(() => {
        setShowMenu(false);
    }, [pathname]);

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
            <div className={`w-full max-w-6xl rounded-full transition-all duration-500 border
                ${isScrolled 
                    ? 'bg-[#13072e]/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-white/10 py-3' 
                    : 'bg-white/[0.05] backdrop-blur-md shadow-2xl border-white/5 py-4'
                } px-6 flex items-center justify-between relative`}>
                
                {/* Logo / Brand */}
                <Link href="/admin/dashboard" className="flex-shrink-0 z-10 flex items-center gap-2 hover:scale-105 transition-transform">
                    <ShieldAlert className="w-5 h-5 text-secondary" />
                    <h1 className="bg-gradient-to-r from-secondary to-[#d3ccff] bg-clip-text text-transparent font-bold tracking-wide">
                        E-CBT Admin
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
                    {adminNav.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                                pathname === link.href 
                                ? "bg-secondary text-primary font-semibold shadow-[0_0_15px_rgba(179,170,255,0.3)]" 
                                : "text-slate-300 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Action / Profile */}
                <div className="hidden md:flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 border border-white/10 hover:bg-white/10 focus-visible:ring-0">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@admin" />
                                    <AvatarFallback className="bg-primary text-secondary">AD</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 bg-[#13072e]/90 backdrop-blur-xl border-white/10 text-white rounded-2xl shadow-xl">
                            <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer rounded-xl" onClick={() => logout()}>
                                <LogOut className="mr-2 h-4 w-4 text-red-400" />
                                <span className="text-red-400">Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-2 z-10">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 border border-white/10 hover:bg-white/10">
                                <Avatar className="h-6 w-6">
                                    <AvatarFallback className="bg-primary text-secondary text-xs">AD</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-[#13072e]/90 backdrop-blur-xl border-white/10 text-white rounded-2xl shadow-xl">
                            <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer rounded-xl" onClick={() => logout()}>
                                <LogOut className="mr-2 h-4 w-4 text-red-400" />
                                <span className="text-red-400">Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Sheet open={showMenu} onOpenChange={setShowMenu}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-[#13072e]/95 backdrop-blur-2xl border-r border-white/10 w-full sm:max-w-sm pt-20">
                            <SheetTitle className="sr-only">Menu Admin</SheetTitle>
                            <div className="flex flex-col space-y-6 mt-8">
                                {adminNav.map((link) => (
                                    <Link 
                                        key={link.name} 
                                        href={link.href}
                                        className={`text-xl font-semibold tracking-wide flex items-center transition-all ${
                                            pathname === link.href 
                                            ? "text-secondary pl-4 border-l-4 border-secondary" 
                                            : "text-slate-300 hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}