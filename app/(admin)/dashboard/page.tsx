import { redirect } from "next/navigation"
import TabelMateri from "@/components/users/tabelMateri"
import { auth } from "@/auth"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default async function Page() {

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-slate-200 my-5 text-lg">Dashboard</h1>

            <Card className="bg-primary border-0">
                <CardHeader className="text-center text-slate-200 text-lg">Materi</CardHeader>
                <CardContent>
                    <TabelMateri />
                </CardContent>
            </Card>
        </div>
    )
}