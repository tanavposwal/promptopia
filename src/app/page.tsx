import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default async function Home() {
  return (
    <main>
      <section className="relative flex flex-col items-center justify-center h-[80vh]">
        <div className="absolute rounded-full mix-blend-multiply filter blur-3xl top-16 right-50 w-80 h-80 bg-yellow-500 opacity-20" />
        <div className="absolute rounded-full mix-blend-multiply filter blur-3xl top-64 right-96 w-72 h-72 bg-indigo-500 opacity-20" />
        <div className="absolute rounded-full mix-blend-multiply filter blur-3xl bottom-24 left-56 w-96 h-96 bg-pink-500 opacity-20" />

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl font-black">Discover & Share</h1>
          <h1 className="text-7xl font-black bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text">
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
      <section className="w-full pb-32 flex items-center">
        <div className="w-full px-24 py-3 flex items-center justify-center">
          <input type="text" className="w-9/12 px-4 py-3 border rounded-xl shadow-lg" placeholder="Search for a title or tag or username" />
        </div>
        <div>

        </div>
      </section>
    </main>
  );
}
