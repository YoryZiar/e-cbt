'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Swal from "sweetalert2";

interface Jurnal {
    id: string;
    title: string;
    User: {
        email: string;
    };
    createdAt: Date;
}

interface JurnalTableItemProps {
    jurnal: Jurnal,
    index: number
}

export default function JurnalTableItem({
    jurnal,
    index
}: JurnalTableItemProps) {
    const jurnalId = jurnal.id;

    const getJurnalId = async () => {
        Swal.fire({
            title: 'Kamu Yakin?',
            text: `jurnal id: ${jurnalId}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Saya Yakin',
            cancelButtonText: 'batal'
        })
    }
    return (
        <TableRow key={jurnal.id}>
            <TableCell>
                <div className="font-medium text-slate-900 text-center">{index}</div>
            </TableCell>
            <TableCell>
                <div className="font-medium text-slate-900 text-center">{jurnal.title}</div>
            </TableCell>
            <TableCell>
                <div className="font-medium text-slate-900 text-center">{jurnal.User.email}</div>
            </TableCell>
            <TableCell>
                <div className="font-medium text-slate-900 text-center">{jurnal.createdAt.toLocaleDateString()}</div>
            </TableCell>
            <TableCell>
                <div className="font-medium text-center">
                    <Button onClick={getJurnalId} className="text-slate-200 hover:bg-purple-800">Detail</Button>
                </div>
            </TableCell>
        </TableRow>
    )
}