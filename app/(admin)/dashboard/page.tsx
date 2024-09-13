import ListUser from "./list-users"

export default function DashboardPage() {
    return (
        <div className="text-white text-center">
            Dashboard

            <div>
                <ListUser />
            </div>
        </div>
    )
}