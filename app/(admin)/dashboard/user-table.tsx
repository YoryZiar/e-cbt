import { getUser, getResult } from "@/app/services/user/queries"
import { DeleteUser } from "@/components/users/user-button";
import Swal from "sweetalert2";

export default async function UsersTable({
    query,
    currentPages,
}: {
    query: string,
    currentPages: number
}) {
    const results = await getResult();

    return (
        <div className="container max-w-full md:w-1/2 lg:w-5/6 bg-primary overflow-auto p-5 mx-auto rounded-lg my-5 shadow-lg shadow-slate-300">
            <h1 className="text-slate-200 text-start text-lg my-3">List User</h1>

            <table className="table-auto bg-secondary rounded-md w-full">
                <thead className="border border-primary rounded-md">
                    <tr>
                        {/* <th className="text-primary font-semibold text-center p-3">
                            No
                        </th> */}
                        <th className="text-primary font-semibold text-center p-3">
                            Nama
                        </th>
                        <th className="text-primary font-semibold text-center p-3">
                            Email
                        </th>
                        <th className="text-primary font-semibold text-center p-3">
                            No. HP
                        </th>
                        <th className="text-primary font-semibold text-center p-3">
                            score
                        </th>
                        <th className="text-primary font-semibold text-center p-3">
                            rate
                        </th>
                        <th className="text-primary font-semibold text-center p-3">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody className="border border-primary rounded-md">
                    {results.map((result) => (
                        <tr key={result.id}>
                            {/* <td>
                                <div className="text-primary font-semibold text-center mx-3 py-3 lg:py-1">
                                    1
                                </div>
                            </td> */}
                            <td>
                                <div className="text-primary font-semibold text-center mx-3 py-3 lg:py-1">
                                    {result.User.name}
                                </div>
                            </td>
                            <td>
                                <div className="text-primary font-semibold text-center mx-3 py-3 lg:py-1">
                                    {result.User.email}
                                </div>
                            </td>
                            <td>
                                <div className="text-primary font-semibold text-center mx-3 py-3 lg:py-1">
                                    {result.User.telephone}
                                </div>
                            </td>
                            <td>
                                <div className="text-primary font-semibold text-center mx-3 py-3 lg:py-1">
                                    {result.score}
                                </div>
                            </td>
                            <td>
                                <div className="text-primary font-semibold text-center mx-3 py-3 lg:py-1">
                                    {result.level}
                                </div>
                            </td>
                            <td>
                                <div className="text-primary font-semibold text-center mx-3 py-3 lg:py-1">
                                    <div className="flex flex-col">
                                        {/* <button className="py-2 bg-primary rounded-md text-slate-200 mb-2">
                                            Detail
                                        </button> */}
                                        <DeleteUser id={result.User.id} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}