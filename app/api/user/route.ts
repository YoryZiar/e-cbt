'use server'

import prisma from "@/lib/db"
import { NextResponse } from "next/server"

export type ParamsProp = {
    page: number | 1,
    name: string | null,
    email: string | null,
}

// export async function GET({ params }: { params?: ParamsProp }): Promise<NextResponse> {
//     try {
//         const User = await prisma.user.findMany();

//         return NextResponse.json({ data: User });
//     } catch (error) {
        
//     }
// }
