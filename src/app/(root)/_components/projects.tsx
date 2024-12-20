import { fetchQuery } from "convex/nextjs";
import Image from "next/image";
import { api } from "../../../../convex/_generated/api";
import { Slide } from "@/components/animation/slide";
import RefLink from "@/components/ref-link";
import { formatDate } from "@/lib/utils";
import PageHeading from "@/components/heading";

export default async function Projects() {
    const job = await fetchQuery(api.job.get);

    if (!job) return null;

    return (
        <section className="mt-32">
            <PageHeading
                title="Projects"
                description="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved."
            />

            <Slide delay={0.18}>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
                    {job.map((data) => (
                        <div
                            key={data._id}
                            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 befr before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
                        >
                            <RefLink
                                href={data.url}
                                className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
                            >
                                <Image
                                    src={data.logo}
                                    className="object-cover duration-300"
                                    alt={`${data.name} logo`}
                                    width={500}
                                    height={200}
                                />
                            </RefLink>
                            <div className="flex flex-col items-start">
                                <h3 className="text-xl font-semibold">
                                    {data.name}
                                </h3>
                                <p>{data.jobTitle}</p>
                                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                                    {formatDate(data.startDate)} -{" "}
                                    {data.endDate ? (
                                        formatDate(data.endDate)
                                    ) : (
                                        <span className="text-emerald-400">
                                            Present
                                        </span>
                                    )}
                                </time>
                                <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Slide>
        </section>
    );
}
