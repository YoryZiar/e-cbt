import { SkeletonStatCard, SkeletonTable } from "@/components/ui/skeleton-loaders";

export default function Loading() {
    return (
        <div className="flex min-h-screen w-full flex-col max-w-7xl mx-auto">
            <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8 mt-12">
                {/* Stat cards */}
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    <SkeletonStatCard />
                </div>

                {/* Journal table */}
                <SkeletonTable rows={5} cols={5} />
            </main>
        </div>
    );
}
