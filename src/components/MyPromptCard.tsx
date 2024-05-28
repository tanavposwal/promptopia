
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import db from "@/db/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export default function MyPromptCard({
  date,
  title,
  content,
  id
}: {
  date: Date;
  title: string;
  content: string;
  id: string;
}) {
  return (
    <Card className="relative group">
      <div className="absolute right-0 top-0 opacity-0 transition-opacity p-3 group-hover:opacity-100 flex flex-col">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-primary group"
            asChild
        >
            <Link href={"/edit/"+id}>
          <PencilIcon className="w-4 h-4" />
          </Link>
        </Button>
        <form action={async () => {
          "use server"

          await db.prompt.delete({ where: { id }})
          revalidatePath("/dashboard")
        }}>
        <Button
          variant="ghost"
          size="icon"
          className="text-red-500 hover:text-red-300 group"
          type="submit"
        >
          <TrashIcon className="w-4 h-4" />
        </Button>
        </form>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          by you on {date.toDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h4>{content}</h4>
      </CardContent>
    </Card>
  );
}
