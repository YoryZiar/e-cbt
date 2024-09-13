import { redirect } from "next/navigation"
import ListUser from "./list-users"
import { auth } from "@/auth"

export default async function Page() {
    const session = await auth()
    if (!session) return redirect("/login")

    return (
        <div className="text-white text-center">
            Dashboard

            <div>
                <ListUser />
            </div>
        </div>
    )
}