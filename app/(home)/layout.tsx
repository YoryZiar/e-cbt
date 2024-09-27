import "@/app/globals.css"
import Navbar from "@/components/navbar";
import QueryProvider from "../provider/query-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <QueryProvider>
            <div>
                <Navbar />

                {children}
            </div>
        </QueryProvider>

    );
}