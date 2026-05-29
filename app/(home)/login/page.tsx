'use client'

import { useState, useActionState } from "react";
import { authenticate } from "@/app/actions/auth/actions";
import { register } from "@/app/actions/user/actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import {
    initialState
} from "@/app/types/validations/register";
import { useRegisterUser } from "@/app/services/user/mutation";

export default function Login() {
    const [registerFormData, setRegisterFormData] = useState(initialState);
    const [registerErrors, setRegisterErrors] = useState({});
    const [isRegisterPending, setIsRegisterPending] = useState(false);
    const registerUserMutation = useRegisterUser();

    // login action
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    if (errorMessage) {
        Swal.fire({
            title: "Gagal Login",
            icon: "error",
            text: `${errorMessage}`,
            showConfirmButton: true
        })
    }

    // register action
    const handleFormRegisterChange = (e: any) => {
        const { name, value } = e.target;

        setRegisterFormData({
            ...registerFormData,
            [name]: value
        })
    }

    const handleRegisterSubmitForm = async (e: any) => {
        e.preventDefault();
        setIsRegisterPending(true);

        const data = new FormData();
        Object.entries(registerFormData).forEach(([key, value]) => {
            if (value !== null) {
                data.append(key, value);
            }
        });

        try {
            await (await registerUserMutation).mutateAsync(data);
            setRegisterFormData(initialState);
        } finally {
            setIsRegisterPending(false);
        }
    }

    return (
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 w-full max-w-md">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 lg:p-10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Selamat Datang</h1>
                        <p className="text-slate-400 text-sm">Masuk atau buat akun untuk melanjutkan</p>
                    </div>

                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10 rounded-xl mb-8 p-1">
                            <TabsTrigger 
                                value="login" 
                                className="rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-primary text-slate-400 transition-all"
                            >
                                Login
                            </TabsTrigger>
                            <TabsTrigger 
                                value="register" 
                                className="rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-primary text-slate-400 transition-all"
                            >
                                Register
                            </TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="login" className="animate-in fade-in zoom-in-95 duration-300">
                            <form action={formAction} className="space-y-5">
                                <label htmlFor="email" className="block">
                                    <span className="block text-slate-300 text-sm mb-2 font-medium">Alamat Email</span>
                                    <Input 
                                        name="email" 
                                        id="email" 
                                        type="email" 
                                        className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 rounded-xl h-12 px-4 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" 
                                        placeholder="nama@email.com"
                                    />
                                </label>
                                <label htmlFor="password" className="block">
                                    <span className="block text-slate-300 text-sm mb-2 font-medium">Password</span>
                                    <Input 
                                        name="password" 
                                        id="password" 
                                        type="password" 
                                        className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 rounded-xl h-12 px-4 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" 
                                        placeholder="••••••••"
                                    />
                                </label>
                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        disabled={isPending}
                                        className="w-full h-12 bg-secondary hover:bg-[#c4bdff] text-primary font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(179,170,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isPending ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Memproses...
                                            </span>
                                        ) : "Login"}
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>
                        
                        <TabsContent value="register" className="animate-in fade-in zoom-in-95 duration-300">
                            <form onSubmit={handleRegisterSubmitForm} className="space-y-5">
                                <label htmlFor="name" className="block">
                                    <span className="block text-slate-300 text-sm mb-2 font-medium">Nama Lengkap</span>
                                    <Input
                                        name="name"
                                        id="name"
                                        type="text"
                                        value={registerFormData.name}
                                        onChange={handleFormRegisterChange}
                                        className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 rounded-xl h-12 px-4 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                                        placeholder="Nama Lengkap" 
                                    />
                                </label>
                                <label htmlFor="email" className="block">
                                    <span className="block text-slate-300 text-sm mb-2 font-medium">Alamat Email</span>
                                    <Input
                                        name="email"
                                        id="email"
                                        type="email"
                                        value={registerFormData.email}
                                        onChange={handleFormRegisterChange}
                                        className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 rounded-xl h-12 px-4 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                                        placeholder="nama@email.com" 
                                    />
                                </label>
                                <label htmlFor="password" className="block">
                                    <span className="block text-slate-300 text-sm mb-2 font-medium">Password</span>
                                    <Input
                                        name="password"
                                        id="password"
                                        type="password"
                                        value={registerFormData.password}
                                        onChange={handleFormRegisterChange}
                                        className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 rounded-xl h-12 px-4 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                                        placeholder="••••••••" 
                                    />
                                </label>
                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        disabled={isRegisterPending}
                                        className="w-full h-12 bg-secondary hover:bg-[#c4bdff] text-primary font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(179,170,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isRegisterPending ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Memproses...
                                            </span>
                                        ) : "Register"}
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}