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
    countUser,
    getJurnal,
    countJurnal,
    getMessage,
    countMessage
} from "@/app/services/admin/queries"
import JurnalTableItem from "../jurnal/jurnal-table-item"
import MessagesItem from "../messages/messages-table-item"

export default async function Dashboard() {
    // session
    const session = await auth();

    if (!session) return redirect("/")

    // data
    const totalUser = await countUser();
    const listJurnal = await getJurnal(0, 5);
    const totalJurnal = await countJurnal();
    const listMessages = await getMessage(0, 5)
    const totalMessage = await countMessage();

    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    <Card x-chunk="dashboard-01-chunk-0" className="bg-secondary border-0 shadow-lg shadow-primary">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-900">
                                Total Jurnal
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalJurnal}</div>
                            {/* <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p> */}
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-1" className="bg-secondary border-0 shadow-lg shadow-primary">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-900">
                                Total Pesan
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalMessage}</div>
                            {/* <p className="text-xs text-muted-foreground">
                                +180.1% from last month
                            </p> */}
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-2" className="bg-secondary border-0 shadow-lg shadow-primary">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-900">Pengguna</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalUser}</div>
                            {/* <p className="text-xs text-muted-foreground">
                                +19% from last month
                            </p> */}
                        </CardContent>
                    </Card>
                    {/* <Card x-chunk="dashboard-01-chunk-3">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">
                                +201 since last hour
                            </p>
                        </CardContent>
                    </Card> */}
                </div>
                <div className="grid gap-4 grid-cols-1 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
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
                                <Link href="/admin/jurnal">
                                    Liha Semua
                                    <ArrowUpRight className="h-4 w-4" />
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
                                            <TableRow>
                                                <TableCell colSpan={5}>
                                                    <h1 className="text-center text-lg">Jurnal Kosong!</h1>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                }
                            </Table>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-5" className="bg-secondary border-0 shadow-lg shadow-primary">
                        <CardHeader className="flex flex-row items-center">
                            <CardTitle>Pesan Terbaru</CardTitle>
                            <Button asChild size="sm" className="ml-auto gap-1 bg-primary text-slate-200">
                                <Link href="/admin/messages">
                                    Liha Semua
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardHeader>
                        {
                            listMessages.length
                                ?
                                <CardContent className="grid gap-8">
                                    {listMessages.map((message, index) => {
                                        return (
                                            <MessagesItem
                                                key={message.id}
                                                message={message}
                                                index={index + 1}
                                            />
                                        )
                                    })}
                                </CardContent>
                                :
                                <CardContent className="grid gap-8">
                                    <h1 className="text-center">Pesan Kosong!</h1>
                                </CardContent>
                        }
                    </Card>
                </div>
            </main>
        </div>
    )
}
