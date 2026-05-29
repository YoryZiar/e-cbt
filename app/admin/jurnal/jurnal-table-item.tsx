'use client'

import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Swal from "sweetalert2";
import { destroyJurnal } from "@/app/actions/user/actions";

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

    const removeJurnal = async () => {
        const { isConfirmed } = await Swal.fire({
            title: 'Jurnal akan di hapus?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'batal'
        })

        if (isConfirmed) {
            try {
                const jurnal = await destroyJurnal(jurnalId);
                
                if (jurnal) {
                    await Swal.fire({
                        title: "Jurnal berhasi di hapus",
                        icon: "success",
                        confirmButtonText: "Ok"
                    })
                }
            } catch (error) {
                await Swal.fire({
                    title: "Jurnal gagal di hapus",
                    text: `${error}`,
                    icon: "error",
                    confirmButtonText: "Ok"
                })
            }
        }
    }

    return (
        <TableRow key={jurnal.id} className="border-white/10 hover:bg-white/5 transition-colors">
            <TableCell>
                <div className="font-medium text-slate-300 text-center">{index}</div>
            </TableCell>
            <TableCell>
                <div className="font-medium text-slate-300 text-center">{jurnal.title}</div>
            </TableCell>
            <TableCell>
                <div className="font-medium text-slate-300 text-center">{jurnal.User.email}</div>
            </TableCell>
            <TableCell>
                <div className="font-medium text-slate-300 text-center">{jurnal.createdAt.toLocaleDateString()}</div>
            </TableCell>
            <TableCell>
                <div className="font-medium w-3/6 mx-auto flex flex-col">
                    <Link href={`/admin/jurnal/${jurnal.id}`}>
                        <Button className="w-full bg-secondary text-primary hover:bg-[#c4bdff]">Detail</Button>
                    </Link>
                    <Button onClick={removeJurnal} className="text-slate-200 bg-red-500/20 text-red-400 hover:bg-red-500/30 mt-2">Hapus</Button>
                </div>
            </TableCell>
        </TableRow>
    )
}