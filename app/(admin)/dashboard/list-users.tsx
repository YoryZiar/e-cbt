import prisma from "@/lib/db"
import UsersTable from "./user-table"

export default async function ListUser({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: number;
    };
}) {
    const query = searchParams?.query || '';
    const currentPages = Number(searchParams?.page) || 1;

    return (
        <div>
            <UsersTable query={query} currentPages={currentPages} />
        </div>
    )
}