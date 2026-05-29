// Skeleton atom - blok abu-abu yang berkedip
export function SkeletonBlock({ className = "" }: { className?: string }) {
    return (
        <div
            className={`bg-white/10 rounded-xl animate-pulse ${className}`}
        />
    );
}

// Skeleton untuk satu baris tabel (5 kolom)
export function SkeletonTableRow() {
    return (
        <tr className="border-b border-white/5">
            {[...Array(5)].map((_, i) => (
                <td key={i} className="px-4 py-4">
                    <SkeletonBlock className="h-4 w-full mx-auto" />
                </td>
            ))}
        </tr>
    );
}

// Skeleton tabel lengkap dengan header
export function SkeletonTable({ rows = 5, cols = 5 }: { rows?: number; cols?: number }) {
    return (
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden">
            {/* Card Header */}
            <div className="flex flex-row items-center border-b border-white/5 bg-white/5 px-8 py-6 gap-4">
                <div className="grid gap-2 flex-1">
                    <SkeletonBlock className="h-6 w-40" />
                    <SkeletonBlock className="h-4 w-64" />
                </div>
                <SkeletonBlock className="h-10 w-28 rounded-full" />
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-white/5">
                        <tr className="border-b border-white/10">
                            {[...Array(cols)].map((_, i) => (
                                <th key={i} className="px-4 py-4">
                                    <SkeletonBlock className="h-4 w-20 mx-auto" />
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(rows)].map((_, i) => (
                            <tr key={i} className="border-b border-white/5">
                                {[...Array(cols)].map((_, j) => (
                                    <td key={j} className="px-4 py-4">
                                        <SkeletonBlock className={`h-4 mx-auto ${j === cols - 1 ? "w-24 h-8 rounded-lg" : "w-full"}`} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// Skeleton stat card (untuk dashboard)
export function SkeletonStatCard() {
    return (
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2rem] p-6">
            <div className="flex items-center justify-between mb-4">
                <SkeletonBlock className="h-4 w-28" />
                <SkeletonBlock className="h-10 w-10 rounded-xl" />
            </div>
            <SkeletonBlock className="h-10 w-16 mt-2" />
        </div>
    );
}

// Skeleton halaman detail jurnal
export function SkeletonJurnalDetail() {
    return (
        <div className="min-h-screen py-24">
            <div className="container max-w-4xl mx-auto px-4 space-y-6">
                {/* Back button skeleton */}
                <SkeletonBlock className="h-5 w-48" />

                {/* Main card */}
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden">
                    {/* Banner header */}
                    <div className="bg-white/5 px-8 py-8 border-b border-white/10 space-y-3">
                        <SkeletonBlock className="h-4 w-32" />
                        <SkeletonBlock className="h-5 w-48" />
                    </div>
                    {/* Content */}
                    <div className="p-8 space-y-8">
                        <div className="space-y-3">
                            <SkeletonBlock className="h-4 w-40" />
                            <SkeletonBlock className="h-20 w-full" />
                        </div>
                        <div className="space-y-3">
                            <SkeletonBlock className="h-4 w-56" />
                            <SkeletonBlock className="h-32 w-full" />
                        </div>
                    </div>
                </div>

                {/* Comments card */}
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden">
                    <div className="px-8 py-6 border-b border-white/10 flex items-center gap-3">
                        <SkeletonBlock className="h-9 w-9 rounded-xl" />
                        <div className="space-y-2">
                            <SkeletonBlock className="h-5 w-24" />
                            <SkeletonBlock className="h-3 w-20" />
                        </div>
                    </div>
                    <div className="p-8 space-y-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                                <SkeletonBlock className="h-10 w-10 rounded-full flex-shrink-0" />
                                <div className="flex-1 space-y-2">
                                    <SkeletonBlock className="h-4 w-40" />
                                    <SkeletonBlock className="h-3 w-full" />
                                    <SkeletonBlock className="h-3 w-3/4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Skeleton daftar pesan (messages)
export function SkeletonMessageList({ count = 5 }: { count?: number }) {
    return (
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden">
            <div className="flex items-center border-b border-white/5 bg-white/5 px-6 py-6">
                <SkeletonBlock className="h-6 w-32" />
            </div>
            <div className="p-6 grid gap-6">
                {[...Array(count)].map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <SkeletonBlock className="h-9 w-9 rounded-full flex-shrink-0" />
                        <div className="flex-1 space-y-2">
                            <SkeletonBlock className="h-4 w-40" />
                            <SkeletonBlock className="h-3 w-56" />
                        </div>
                        <div className="flex gap-2">
                            <SkeletonBlock className="h-9 w-20 rounded-md" />
                            <SkeletonBlock className="h-9 w-20 rounded-md" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
