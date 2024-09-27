import { jenisBullying } from "@/app/data"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const getData = jenisBullying;
    const data = getData.filter(val => val.slug === `${slug}`);

    return (
        <div className="container bg-primary rounded-lg mx-auto p-3 mt-10 text-slate-200 text-sm md:p-5 lg:p-10">
            <h1 className="text-center my-3 text-lg">{data[0].title}</h1>
            <div className="bg-secondary w-1/2 mx-auto rounded-lg overflow-hidden">
            
                <img src={data[0].image} alt="" />
            </div>
            <p className="my-3">{data[0].content}</p>
            <ul className="list-decimal px-4">
                {data[0].listContent.map((content) => {
                    return (
                        <li className="mb-3" key={content.id}>
                            {content.text}
                        </li>
                    )
                })}
            </ul>
            <Link href="/jenis-bullying" className="block text-center my-5">
                <Button className="bg-violet-500 hover:bg-violet-600 hover:text-slate-200 text-2xl">Back</Button>
            </Link>
        </div>
    )
}