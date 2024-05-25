import { auth } from "@/auth";
import { SignIn, UserImage } from "@/components/Auth";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut } from "@/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="border-b w-full px-10 py-4 flex justify-between fixed bg-background z-50 top-0">
      <div className="font-bold">
        <Link href="/" className="gap-3 flex items-center">
          <SparklesIcon className="w-10 h-10 fill-orange-400" />
          promptopia
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        {session?.user ? (
          <div className="flex gap-3 items-center">
            <Button variant="ghost" asChild>
              <Link href="/new">Create a prompt</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <UserImage />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild><Link href="/dashboard">Profile</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href="/setting">Settings</Link></DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <button className="w-full text-left" type="submit">
                      Sign Out
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    </nav>
  );
}
