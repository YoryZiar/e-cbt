import AdminNavbar from "@/components/adminNavbar";
import "../globals.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <AdminNavbar />

            <div className="mt-10">
                {children}
            </div>
        </div>
    );
}