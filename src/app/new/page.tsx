import { auth } from "@/auth";
import CreateBtn from "@/components/button/Create";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import db from "@/db/db";

export default async function New() {
    const session = await auth();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-black">New Prompt</h1>
      <hr />
      <form className="flex flex-col gap-3 max-w-lg mt-5" action={async (formData: FormData) => {
        "use server";

        const title = formData.get("title") as string
        const content = formData.get("prompt") as string

        await db.prompt.create({
            data: {
                title,
                content,
                authorId: session?.user?.id!
            }
        })
      }}>
        <div>
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" placeholder="Title" name="title" />
        </div>
        <div>
          <Label htmlFor="prompt">Prompt</Label>
          <Textarea id="prompt" placeholder="Type your message here." name="prompt" />
        </div>
        <div className="text-muted-foreground">
            by {session?.user?.name}
        </div>
        <div>
            <CreateBtn />
        </div>
      </form>
    </div>
  );
}
