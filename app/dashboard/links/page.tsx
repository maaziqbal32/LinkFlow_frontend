import LinksManager from "@/components/dashboard/LinksManager";
// import { requirePageAuth } from "@/lib/server-auth";

export const instant = false;

export default async function LinksPage() {
  // await requirePageAuth();

  return <LinksManager />;
}