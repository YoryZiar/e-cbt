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
        <div className="container mx-auto my-5 p-2">
            <Card
                className="xl:col-span-2 bg-secondary border-0 shadow-lg shadow-primary" x-chunk="dashboard-01-chunk-4"
            >
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2 text-slate-900">
                        <CardTitle>Pengguna</CardTitle>
                        <CardDescription className="text-slate-600">
                            Daftar Pengguna.
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-primary">
                                <TableHead className="text-slate-600 text-center">No</TableHead>
                                <TableHead className="text-slate-600 text-center">Nama</TableHead>
                                <TableHead className="text-slate-600 text-center">Email</TableHead>
                                <TableHead className="text-slate-600 text-center">Tanggal</TableHead>
                                <TableHead className="text-slate-600 text-center">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {listUser.map((user, index) => {
                                return (
                                    <TableRow key={user.id}>
                                        <TableCell>
                                            <div className="font-medium text-slate-900 text-center">{index + 1}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium text-slate-900 text-center">{user.name}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium text-slate-900 text-center">{user.email}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium text-slate-900 text-center">{user.createdAt.toLocaleDateString()}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium text-center">
                                                <Button className="text-slate-200 hover:bg-purple-800">Detail</Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}