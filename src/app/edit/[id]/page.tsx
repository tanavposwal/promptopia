import { auth } from "@/auth";
import FormBtn from "@/components/button/FormBtn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import db from "@/db/db";
import { redirect } from 'next/navigation'

export default async function Edit({ params }: { params: { id: string } }) {
  const session = await auth();

  if (!session) return <div>Not authenticated</div>;

  const prompt = await db.prompt.findUnique({
    where: { authorId: session?.user?.id!, id: params.id },
  });

  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black">Edit prompt</h1>
        <hr />
        <form
          className="flex flex-col gap-3 max-w-lg mt-5"
          action={async (formData: FormData) => {
            "use server";

            const title = formData.get("title") as string;
            const content = formData.get("prompt") as string;

            if (title != "" && content != "") {
              await db.prompt.update({
                where: { authorId: session?.user?.id!, id: params.id },
                data: {
                  title,
                  content,
                  authorId: session?.user?.id!,
                },
              });

              redirect('/')
            }
            return "Enter to edit";
          }}
        >
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              required
              placeholder="Title"
              name="title"
              defaultValue={prompt?.title}
            />
          </div>
          <div>
            <Label htmlFor="prompt">Prompt</Label>
            <Textarea
              id="prompt"
              required
              placeholder="Type your message here."
              name="prompt"
              defaultValue={prompt?.content}
            />
          </div>
          <div className="text-muted-foreground">by {session?.user?.name}</div>
          <div>
            <FormBtn text="Update" />
          </div>
        </form>
      </div>
    </div>
  );
}
