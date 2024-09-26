'use client'

import { useFormState } from "react-dom";
import { authenticate } from "@/app/actions/auth/actions";
import { register } from "@/app/actions/user/actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

export default function Login() {
    const [errorMessage, formAction, isPending] = useFormState(
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

    return (
        <div className="container mx-auto my-10 bg-primary rounded-lg py-3 lg:w-3/6">
            <Tabs defaultValue="register" className="w-4/6 mx-auto">
                <TabsList className="grid w-full grid-cols-2 bg-secondary">
                    <TabsTrigger className="active:bg-primary" value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <form action={formAction}>
                        <label htmlFor="email" className="block">
                            <span className="block text-slate-200 py-2">Email</span>
                            <Input name="email" id="email" type="email" className="p-3 bg-slate-200" />
                        </label>
                        <label htmlFor="password" className="block">
                            <span className="block text-slate-200 py-2">Password</span>
                            <Input name="password" id="password" type="password" className="p-3 bg-slate-200" />
                        </label>
                        <div className="block text-center">
                            <Button className="bg-secondary hover:bg-violet-600 text-primary text-lg my-5">Login</Button>
                        </div>
                    </form>
                </TabsContent>
                <TabsContent value="register">
                    <form action={register}>
                        <label htmlFor="name" className="block">
                            <span className="block text-slate-200 py-2">Nama</span>
                            <Input name="name" id="name" type="text" className="p-3 bg-slate-200" />
                        </label>
                        <label htmlFor="email" className="block">
                            <span className="block text-slate-200 py-2">Email</span>
                            <Input name="email" id="email" type="email" className="p-3 bg-slate-200" />
                        </label>
                        <label htmlFor="password" className="block">
                            <span className="block text-slate-200 py-2">Password</span>
                            <Input name="password" id="password" type="password" className="p-3 bg-slate-200" />
                        </label>
                        <div className="block text-center">
                            <Button type="submit" className="bg-secondary hover:bg-violet-600 text-primary text-lg my-5">Register</Button>
                        </div>
                    </form>
                </TabsContent>
            </Tabs>
        </div>
    )
}