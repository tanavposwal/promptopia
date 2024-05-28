import db from "@/db/db";
import FeedCard from "./FeedCard";
export const dynamic = "force-dynamic";

export default async function Feed({ s }: { s: string }) {

  const prompts = await db.prompt.findMany({ include: { author: true }, where: {
    title: {
      search: s
    }
  } });

  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
      {prompts.map((prompt) => (
        <FeedCard
          title={prompt.title}
          content={prompt.content}
          date={prompt.createdAt}
          name={prompt.author.name!}
          key={prompt.id}
        />
      ))}
    </div>
  );
}
