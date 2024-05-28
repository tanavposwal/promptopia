import Feed from "@/components/Feed";
import SearchBox from "@/components/SearchBox";
import Prompt from "@/components/skeleton/Prompt";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: { s: string }
}) {
  return (
    <main>
      <section className="relative flex flex-col items-center justify-center h-[80vh]">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 dark:opacity-20"></div>
        <div className="absolute rounded-full filter blur-3xl top-16 right-50 w-80 h-80 bg-yellow-500 opacity-20 -z-10" />
        <div className="absolute rounded-full filter blur-3xl top-64 right-96 w-72 h-72 bg-indigo-500 opacity-20 -z-10" />
        <div className="absolute rounded-full filter blur-3xl bottom-24 left-56 w-96 h-96 bg-pink-500 opacity-20 -z-10" />

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-8xl font-black">Discover & Share</h1>
          <h1 className="text-8xl font-black bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text">
            AI-Powered Prompts
          </h1>
          <p className="desc text-center mt-8 text-md text-muted-foreground max-w-lg font-medium">
            Promptopia is an open-source AI prompting tool for modern world to
            discover, create and share creative prompts
          </p>
          <div className="text-muted-foreground flex flex-col items-center justify-center gap-2 mt-7">
            scroll 
            <ArrowDownIcon className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>
      <section className="w-full pb-32 flex flex-col">
      <SearchBox />
      <Suspense fallback={<Prompt />}>
        <Feed s={searchParams.s} />
      </Suspense>
      </section>
    </main>
  );
}

