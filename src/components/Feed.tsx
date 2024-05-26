import db from "@/db/db"
import FeedCard from "./FeedCard"
export const dynamic = 'force-dynamic'


export default async function Feed() {
  const prompts = await db.prompt.findMany({ include: { author: true }, })

    return (
        <>
        <div className="w-full px-24 py-3 flex items-center justify-center">
          <input type="text" className="w-9/12 px-4 py-3 border rounded-xl shadow-lg outline-none hover:border-secondary-foreground transition-colors" placeholder="Search for a title or tag or username" />
        </div>
        
        <div className="mt-8 grid grid-cols-3 gap-4">
          {prompts.map(prompt => (
              <FeedCard title={prompt.title} content={prompt.content} date={prompt.createdAt} name={prompt.author.name!} key={prompt.id} />
          ))}
        </div>
        </>
    )
}
