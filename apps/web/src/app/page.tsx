import Calendar from "./components/Calendar";
import SideMenu from "./components/SideMenu";
import { auth } from "../auth";
import UserMenu from "./components/UserMenu";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="w-full h-full flex flex-col p-[50px] gap-5">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Chronos</h1>
        <UserMenu session={session} />
      </div>
      <div className="h-full flex gap-6">
          <SideMenu />
          <Calendar />
      </div>
    </div>
  );
}
