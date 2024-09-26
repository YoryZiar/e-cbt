import {
    Card,
    CardHeader,
    CardContent
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { signIn } from "@/auth"

export default function Login() {
    return (
        <div className="w-5/6 md:w-3/6 lg:w-2/6 mx-auto mt-32">
            <Card className="shadow-lg shadow-secondary">
                <CardHeader className="text-center text-lg font-semibold">Admin Login</CardHeader>
                <CardContent>
                    <form action={async (formData) => {
                        "use server"
                        await signIn("credentials", formData)
                    }}>
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