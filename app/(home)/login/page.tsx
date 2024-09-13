'use client'

import { useFormState } from "react-dom";
import { authenticate } from "@/app/actions/auth/actions";

export default function Login() {
    const [errorMessage, formAction, isPending] = useFormState(
        authenticate,
        undefined,
    );

    return (
        <div className="mt-10">
            <section className="bg-white max-w-xs lg:max-w-md md:max-w-md mx-auto rounded-xl py-5">
                <h1 className="text-center font-normal text-3xl text-primary">Admin</h1>

                <form action={formAction} className="mt-5">
                    <label htmlFor="email" className="block mx-5 my-3">
                        <span className="block font-normal text-sm mb-1 text-start">Email</span>
                        <input type="text" id="email" name="email" className="py-3 w-full bg-slate-500 rounded-xl bg-opacity-20 focus:outline-none px-3 focus:ring-1 focus:ring-primary" placeholder="example@gmail.com" />
                    </label>
                    <label htmlFor="password" className="block mx-5">
                        <span className="block font-normal text-sm mb-1 text-start">Password</span>
                        <input type="password" id="password" name="password" className="py-3 w-full bg-slate-500 rounded-xl bg-opacity-20 focus:outline-none px-3 focus:ring-1 focus:ring-primary" placeholder="087123098234" />
                    </label>
                    <button type="submit" className="py-3 w-5/6 bg-red-700 block mx-auto mt-5 rounded-xl text-xl text-white">
                        Login
                    </button>
                    {errorMessage && (
                        <div>
                            <p className="text-sm text-red-500 text-center">{errorMessage}</p>
                        </div>
                    )}
                </form>
            </section>
        </div>
    )
}