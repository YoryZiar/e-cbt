import "@/app/globals.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>            
            {children}
        </div>
    );
}