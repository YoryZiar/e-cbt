import { SkeletonTable } from "@/components/ui/skeleton-loaders";

export default function Loading() {
    return (
        <div className="flex w-full flex-col max-w-7xl mx-auto p-4 md:p-8 mt-12">
            <SkeletonTable rows={8} cols={5} />
        </div>
    );
}
