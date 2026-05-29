import { SkeletonTable } from "@/components/ui/skeleton-loaders";

export default function Loading() {
    return (
        <div className="container mx-auto my-5 p-4 max-w-7xl">
            <SkeletonTable rows={5} cols={5} />
        </div>
    );
}
