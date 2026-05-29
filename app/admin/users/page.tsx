import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    getUser
} from "@/app/services/admin/queries"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Users() {
    // session
    const session = await auth();
    if (!session) return redirect("/")

    const listUser = await getUser(0, 10);

    return (
        <div className="container mx-auto my-5 p-4 max-w-7xl">
            <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden">
                <CardHeader className="flex flex-row items-center border-b border-white/5 bg-white/5 px-8 py-6">
                    <div className="grid gap-1">
                        <CardTitle className="text-2xl text-white">Pengguna</CardTitle>
                        <CardDescription className="text-slate-400">
                            Daftar Pengguna.
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-white/5">
                                <TableRow className="border-white/10 hover:bg-transparent">
                                    <TableHead className="text-slate-300 text-center py-4 font-semibold">No</TableHead>
                                    <TableHead className="text-slate-300 text-center font-semibold">Nama</TableHead>
                                    <TableHead className="text-slate-300 text-center font-semibold">Email</TableHead>
                                    <TableHead className="text-slate-300 text-center font-semibold">Tanggal Daftar</TableHead>
                                    <TableHead className="text-slate-300 text-center font-semibold">Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            {
                                listUser.length
                                    ?
                                    <TableBody>
                                        {listUser.map((user, index) => {
                                            return (
                                                <TableRow key={user.id} className="border-white/10 hover:bg-white/5 transition-colors">
                                                    <TableCell>
                                                        <div className="font-medium text-slate-300 text-center">{index + 1}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="font-medium text-white text-center">{user.name}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="font-medium text-slate-400 text-center">{user.email}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="font-medium text-slate-400 text-center">{user.createdAt.toLocaleDateString()}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="font-medium text-center">
                                                            <Button size="sm" className="bg-secondary text-primary hover:bg-[#c4bdff] rounded-full px-4 transition-all font-semibold">
                                                                Detail
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                    :
                                    <TableBody>
                                        <TableRow className="border-white/10 hover:bg-white/5">
                                            <TableCell colSpan={5} className="h-32">
                                                <h1 className="text-center text-slate-400 italic">Pengguna tidak ada!</h1>
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