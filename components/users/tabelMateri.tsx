'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"
import Link from "next/link"
import Swal from "sweetalert2"


export default function TabelMateri() {
    async function deleteData() {
        const { isConfirmed } = await Swal.fire({
            title: "Delete",
            confirmButtonText: "Are you sure?",
            showConfirmButton: true
        })
    }

    return (
        <div className="container mx-auto">
            <Button className="bg-secondary my-3">
                <Link href="/dashboard/tambah">
                    Tambah
                </Link>
            </Button>
            <Table className="text-slate-200">
                <TableHeader className="border-slate-200">
                    <TableRow>
                        <TableHead className="text-slate-200 text-center">Materi</TableHead>
                        <TableHead className="text-slate-200 text-center">Aksi</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-slate-200 text-center">INV001</TableCell>
                        <TableCell className="text-slate-200 text-center">
                            <div className="flex justify-center">
                                <Button className="bg-secondary mr-3">
                                    Detail
                                </Button>
                                <Button className="bg-red-500" onClick={deleteData}>
                                    Delete
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}