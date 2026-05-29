import AdminNavbar from "@/components/adminNavbar";
import "@/app/globals.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#13072e] text-slate-200 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-20 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-secondary/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50 pointer-events-none"></div>

            <AdminNavbar />
            
            <div className="relative z-10 pt-20 pb-12">
                {children}
            </div>
        </div>
    );
}