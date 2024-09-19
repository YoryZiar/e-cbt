import AdminNavbar from "@/components/adminNavbar";
import "@/app/globals.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <AdminNavbar />
            
            {children}
        </div>
    );
}