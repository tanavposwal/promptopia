import { auth, signIn, signOut } from "@/auth";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Avatar from "boring-avatars";

export function SignIn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login With Magic Link ✨!</DialogTitle>
        </DialogHeader>
        <form
          action={async (formData) => {
            "use server";
            await signIn("resend", formData);
          }}
        >
          <div className="grid gap-4 py-5">
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Email
              </Label>
              <Input
                id="name"
                name="email"
                placeholder="me@example.com"
                className="col-span-4"
              />
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Button type="submit" size={"lg"}>
              Login
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button variant="outline" type="submit">
        Sign Out
      </Button>
    </form>
  );
}

export async function UserImage() {
  const session = await auth();

  if (session?.user?.name) return (
      <Avatar
        size={40}
        name={session.user.name}
        variant="marble"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />
    );

  return "";
}
