import { auth } from "@/auth";
import db from "@/db/db";
import MyPromptCard from "./MyPromptCard";

export default async function MyPrompts() {
  const session = await auth();

  const prompts = await db.prompt.findMany({
    where: { authorId: session?.user?.id },
  });

  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
      {prompts.map((prompt) => (
        <MyPromptCard
          id={prompt.id}
          title={prompt.title}
          content={prompt.content}
          date={prompt.createdAt}
          key={prompt.id}
        />
      ))}
    </div>
  );
}
