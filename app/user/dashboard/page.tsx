import Link from "next/link"
import {
    ArrowUpRight,
    Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
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
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import {
    getJurnal,
    countJurnal,
} from "@/app/services/user/queries"
import JurnalTableItem from "../jurnal/jurnal-table-item"

export default async function UserDashboard() {
    // session
    const session = await auth();

    if (!session) return redirect("/")

    // data
    const listJurnal = await getJurnal(0, 5);
    const totalJurnal = await countJurnal();

    return (
        <div className="flex min-h-screen w-full flex-col max-w-7xl mx-auto">
            <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8 mt-12">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    <Card x-chunk="dashboard-01-chunk-0" className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2rem] hover:-translate-y-2 transition-all duration-300">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">
                                Total Jurnal
                            </CardTitle>
                            <div className="bg-secondary/20 p-2 rounded-xl border border-secondary/30">
                                <Users className="h-5 w-5 text-secondary" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold text-white mt-2">{totalJurnal}</div>
                            {/* <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p> */}
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-6 grid-cols-1 md:gap-8 lg:grid-cols-1 xl:grid-cols-1">
                    <Card
                        className="xl:col-span-2 bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden" x-chunk="dashboard-01-chunk-4"
                    >
                        <CardHeader className="flex flex-row items-center border-b border-white/5 bg-white/5 px-8 py-6">
                            <div className="grid gap-1">
                                <CardTitle className="text-2xl text-white">Jurnal Terbaru</CardTitle>
                                <CardDescription className="text-slate-400">
                                    Daftar catatan dan tulisan yang baru dibagikan.
                                </CardDescription>
                            </div>
                            <Button asChild size="sm" className="ml-auto gap-1 bg-secondary text-primary hover:bg-[#c4bdff] rounded-full px-4 h-10 transition-all font-semibold">
                                <Link href="/user/jurnal">
                                    Lihat Semua
                                    <ArrowUpRight className="h-4 w-4" />
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
            </main>
        </div>
    )
}
