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
    TableCell
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
        <div className="flex w-full flex-col max-w-7xl mx-auto p-4 md:p-8 mt-12">
            <Card
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden" x-chunk="dashboard-01-chunk-4"
            >
                <CardHeader className="flex flex-row items-center border-b border-white/5 bg-white/5 px-8 py-6">
                    <div className="grid gap-1">
                        <CardTitle className="text-2xl text-white">Jurnal</CardTitle>
                        <CardDescription className="text-slate-400">
                            Daftar catatan dan tulisan yang baru dibagikan.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1 bg-secondary text-primary hover:bg-[#c4bdff] rounded-full px-4 h-10 transition-all font-semibold">
                        <Link href="/start-therapy">
                            Buat Jurnal
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-white/5">
                                <TableRow className="border-white/10 hover:bg-transparent">
                                    <TableHead className="text-slate-300 text-center py-4 font-semibold">No</TableHead>
                                    <TableHead className="text-slate-300 text-center font-semibold">Judul</TableHead>
                                    <TableHead className="text-slate-300 text-center font-semibold">Email</TableHead>
                                    <TableHead className="text-slate-300 text-center font-semibold">Tanggal</TableHead>
                                    <TableHead className="text-slate-300 text-center font-semibold">Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                        {
                            listJurnal.length
                                ?
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
                                :
                                <TableBody>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell colSpan={5} className="h-32">
                                            <h1 className="text-center text-slate-400 italic">Jurnal Kosong!</h1>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                        }
                    </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}