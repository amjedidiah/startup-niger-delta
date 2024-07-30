import { dbGetIsOnboarded } from "@/lib/action/db";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const isOnboarded = await dbGetIsOnboarded();
  if (!isOnboarded) redirect("/onboarding");

  return <h1>Dashboard</h1>;
}
