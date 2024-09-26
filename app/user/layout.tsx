import "@/app/globals.css";
import UserAdminNavbar from "@/components/users/userAdminNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <UserAdminNavbar />
            
            {children}
        </div>
    );
}