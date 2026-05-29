'use client'

import { logout } from "@/app/actions/auth/logout"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Menu,
    Package2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default function UserAdminNavbar() {

    const adminNav = [
        {
            href: "/user/dashboard",
            name: "Dashboard"
        },
        {
            href: "/user/jurnal",
            name: "Jurnal"
        },
    ]

    return (
        <div className="flex w-full flex-col fixed top-0 left-0 right-0 z-50 p-4">
            <header className="mx-auto w-full max-w-7xl flex h-16 items-center gap-4 px-6 md:px-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full shadow-lg">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base text-white"
                    >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    {adminNav.map((nav) => {
                        return (
                            <Link
                                href={nav.href}
                                className="text-slate-300 transition-colors hover:text-white"
                                key={nav.name}
                            >
                                {nav.name}
                            </Link>
                        )
                    })}
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden bg-primary"
                        >
                            <Menu className="h-5 w-5 text-slate-200" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-[#13072e] border-r-white/10 text-white">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold text-white"
                            >
                                <Package2 className="h-6 w-6" />
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            {adminNav.map((nav) => {
                                return (
                                    <Link href={nav.href} className="hover:text-white text-slate-300" key={nav.name}>
                                        {nav.name}
                                    </Link>
                                )
                            })}
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        {/* <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div> */}
                    </form>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full border border-white/20 hover:bg-white/10 bg-white/5 transition-all">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator /> */}
                            <DropdownMenuItem>
                                <button onClick={() => logout()}>Logout</button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
        </div>
    )
}