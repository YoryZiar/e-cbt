import { signOut } from "@/auth"

export default function AdminNavbar() {
    async function Logout() {
        "use server"
        await signOut()
    }
    return (
        <div className="w-full flex justify-end">
            <div className="p-3 bg-secondary rounded-md m-3">
                <form action={Logout} method="post">
                <button type="submit" className="text-end text-primary font-semibold">
                    Logout
                </button>
                </form>
            </div>
        </div>
    )
}