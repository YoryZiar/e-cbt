'use client'

import {
    Card,
    CardHeader,
    CardContent
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom"
import { authenticate } from "@/app/actions/auth/actions"
import Swal from "sweetalert2"

export default function Login() {
    const [errorMessage, formAction, isPending] = useFormState(
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
        <div className="w-5/6 md:w-3/6 lg:w-2/6 mx-auto mt-32">
            <Card className="shadow-lg shadow-secondary">
                <CardHeader className="text-center text-lg font-semibold">Admin Login</CardHeader>
                <CardContent>
                    <form action={formAction}>
                        <label htmlFor="email" className="block">
                            <span className="block mb-2">Email</span>
                            <input type="email" name="email" className="border px-3 py-2 rounded-lg w-full border-secondary" />
                        </label>
                        <label htmlFor="password" className="block my-3">
                            <span className="block mb-2">Password</span>
                            <input type="password" name="password" className="border px-3 py-2 rounded-lg w-full border-secondary" />
                        </label>
                        <div className="text-center">
                            <Button type="submit" className="bg-primary text-slate-200">
                                Login
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}