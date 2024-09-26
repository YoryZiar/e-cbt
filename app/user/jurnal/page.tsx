import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    getJurnal
} from "@/app/services/user/queries"
import JurnalTableItem from "./jurnal-table-item"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Jurnal() {
    // session
    const session = await auth();
    if (!session) return redirect("/")

    const listJurnal = await getJurnal(0, 10);

    return (
        <div className="container mx-auto my-5 p-2">
            <Card
                className="xl:col-span-2 bg-secondary border-0 shadow-lg shadow-primary" x-chunk="dashboard-01-chunk-4"
            >
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2 text-slate-900">
                        <CardTitle>Jurnal</CardTitle>
                        <CardDescription className="text-slate-600">
                            Daftar Jurnal Terbaru.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1 bg-primary text-slate-200">
                        <Link href="/user/jurnal">
                            Buat Jurnal
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-primary">
                                <TableHead className="text-slate-600 text-center">No</TableHead>
                                <TableHead className="text-slate-600 text-center">Judul</TableHead>
                                <TableHead className="text-slate-600 text-center">Email</TableHead>
                                <TableHead className="text-slate-600 text-center">Tanggal</TableHead>
                                <TableHead className="text-slate-600 text-center">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {listJurnal.map((jurnal, index) => {
                                return (
                                    <JurnalTableItem
                                        key={jurnal.id}
                                        jurnal={jurnal}
                                        index={index + 1}
                                    />
                                )
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}