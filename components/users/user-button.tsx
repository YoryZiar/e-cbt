import Link from "next/link";
import { deleteUser } from "@/app/actions/user/actions";

export function DeleteUser({ id }: { id: string }) {
    const destroy = deleteUser.bind(null, id);

    return (
        <form action={destroy}>
            <button type="submit" className="p-2 bg-red-700 rounded-md text-slate-200 w-full">
                Delete
            </button>
        </form>
    );
}