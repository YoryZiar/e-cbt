import Link from "next/link"
import {
    Activity,
    ArrowUpRight,
    CircleUser,
    CreditCard,
    DollarSign,
    Menu,
    Package2,
    Search,
    Users,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { getJurnal } from "@/app/services/user/queries"

export default async function Dashboard() {
    // session
    const session = await auth();
    if (!session) return redirect("/")

    // data
    const jurnal = await getJurnal();

    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    <Card x-chunk="dashboard-01-chunk-0" className="bg-secondary border-0 shadow-lg shadow-primary">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Jurnal
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">45,231</div>
                            {/* <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p> */}
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-1" className="bg-secondary border-0 shadow-lg shadow-primary">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Pesan
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">2350</div>
                            {/* <p className="text-xs text-muted-foreground">
                                +180.1% from last month
                            </p> */}
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-2" className="bg-secondary border-0 shadow-lg shadow-primary">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pengguna</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12,234</div>
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
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <Card
                        className="xl:col-span-2 bg-secondary border-0 shadow-lg shadow-primary" x-chunk="dashboard-01-chunk-4"
                    >
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>Jurnal</CardTitle>
                                <CardDescription>
                                    Daftar Jurnal Terbaru.
                                </CardDescription>
                            </div>
                            <Button asChild size="sm" className="ml-auto gap-1 bg-primary text-slate-200">
                                <Link href="/jurnal">
                                    Liha Semua
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Judul</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Tanggal</TableHead>
                                        <TableHead>Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">Judul jurnal</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium">Email user</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium">9/19/2024</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium">9/19/2024</div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-5" className="bg-secondary border-0 shadow-lg shadow-primary">
                        <CardHeader>
                            <CardTitle>Pesan Terbaru</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-8">
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        Olivia Martin
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        olivia.martin@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">+$1,999.00</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                                    <AvatarFallback>JL</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        Jackson Lee
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        jackson.lee@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">+$39.00</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
