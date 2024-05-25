import { auth } from "@/auth";
import { UserImage } from "@/components/Auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import db from "@/db/db";

export default async function New() {
    const session = await auth()

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
      <div className="flex flex-col max-w-xl  gap-2 my-4">
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
