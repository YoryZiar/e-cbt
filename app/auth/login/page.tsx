'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useActionState } from "react"
import { authenticate } from "@/app/actions/auth/actions"
import Swal from "sweetalert2"
import { ShieldAlert } from "lucide-react"

export default function Login() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    if (errorMessage) {
        Swal.fire({
            title: "Authentication Error",
            text: `${errorMessage}`,
            icon: "error",
            showConfirmButton: true,
            confirmButtonText: "Ok"
        })
    }
    
    return (
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center bg-[#13072e]">
            {/* Background effects */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 w-full max-w-md">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 lg:p-10">
                    
                    <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-secondary/30">
                        <ShieldAlert className="w-8 h-8 text-secondary" />
                    </div>
                    
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
                        <p className="text-slate-400 text-sm">Masuk untuk mengelola sistem E-CBT</p>
                    </div>

                    <form action={formAction} className="space-y-5">
                        <label htmlFor="email" className="block">
                            <span className="block text-slate-300 text-sm mb-2 font-medium">Alamat Email</span>
                            <Input 
                                name="email" 
                                id="email" 
                                type="email" 
                                className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 rounded-xl h-12 px-4 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" 
                                placeholder="admin@email.com"
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
                            <Button type="submit" disabled={isPending} className="w-full h-12 bg-secondary hover:bg-[#c4bdff] text-primary font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(179,170,255,0.3)]">
                                {isPending ? "Memproses..." : "Masuk"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}