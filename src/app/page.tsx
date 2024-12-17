import { fetchQuery } from "convex/nextjs";
import { api } from "../../convex/_generated/api";
import { Slide } from "@/components/animation/slide";
import Social from "./(root)/_components/social";
import Hero from "./(root)/_components/hero";
import Job from "./(root)/_components/job";

export default async function Home() {
    const profile = await fetchQuery(api.profile.get);
    return (
        <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
            <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
                <div className="lg:max-w-2xl max-w-2xl">
                    {profile && (
                        <Slide>
                            <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                                {profile.headline}
                            </h1>
                            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                                {profile.shortBio}
                            </p>
                        </Slide>
                    )}
                    <Slide delay={0.1}>
                        <Social type="social" />
                    </Slide>
                </div>
                <Slide delay={0.14}>
                    <Hero />
                </Slide>
            </section>
            <Job />
        </main>
    );
}
