import { auth } from "@/auth";
import { ThemeToggle } from "@/components/button/ThemeToggle";

export default async function New() {
  const session = await auth()

  if (!session) return <div>Not authenticated</div>

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-black">Setting</h1>
      <hr />
      <div className="my-4 flex flex-col gap-3 opacity-85">
        <h2 className="text-lg font-bold">Change Theme</h2>
        <div className="flex gap-4 items-center"><ThemeToggle /><p className="text-muted-foreground text-sm">colors are in beta</p></div>
      </div>
      <hr />
    </div>
  );
}
