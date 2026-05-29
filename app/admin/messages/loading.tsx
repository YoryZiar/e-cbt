import { SkeletonMessageList } from "@/components/ui/skeleton-loaders";

export default function Loading() {
    return (
        <div className="container mx-auto my-5 p-4 w-full lg:w-3/5">
            <SkeletonMessageList count={8} />
        </div>
    );
}
