import { SkeletonStatCard, SkeletonTable, SkeletonMessageList } from "@/components/ui/skeleton-loaders";

export default function Loading() {
    return (
        <div className="flex w-full flex-col max-w-7xl mx-auto">
            <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8 mt-12">

                {/* Stat cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <SkeletonStatCard />
                    <SkeletonStatCard />
                    <SkeletonStatCard />
                </div>

                {/* Table + Messages */}
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="xl:col-span-2">
                        <SkeletonTable rows={5} cols={5} />
                    </div>
                    <SkeletonMessageList count={5} />
                </div>

            </main>
        </div>
    );
}
