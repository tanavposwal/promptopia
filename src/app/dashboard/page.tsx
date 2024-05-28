import { auth } from "@/auth";
import { UserImage } from "@/components/Auth";
import MyPrompts from "@/components/MyPrompts";
import Prompt from "@/components/skeleton/Prompt";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import db from "@/db/db";
import { Suspense } from "react";

export default async function New() {
    const session = await auth()

  if (!session) return <div>Not authenticated</div>

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-black">Dashboard</h1>
      <hr />
      <div className="my-4 flex items-center gap-4">
        <UserImage />
        <div className="flex flex-col">
        <h2 className="text-lg font-bold">{session?.user?.name}</h2>
        <h3>{session?.user?.email}</h3>
        </div>
      </div>
      <hr />
      <div className="my-4 opacity-85">
      <h2 className="text-lg font-bold">My Prompts</h2>
      <div>
      <Suspense fallback={<Prompt />}>
        <MyPrompts />
      </Suspense>
      </div>
      </div>
      <hr />
      <div className="flex flex-col max-w-xl  gap-2 my-4 opacity-85">
        <form action={async (formData: FormData) => {
            'use server';
            const session = await auth();
            const newname = formData.get("username") as string;
            await db.user.update({
                where: {
                    email: session?.user?.email!
                },
                data: { name: newname! }
            })
        }}>
        <h2 className="text-xl font-bold mb-2">Change User Name</h2>
        <div className="flex gap-2">
        <Input type="name" id="name" placeholder="user name" name="username" />
        <Button type="submit" variant="ghost">Save</Button>
        </div>
        </form>
      </div>
      <hr />
    </div>
  );
}
