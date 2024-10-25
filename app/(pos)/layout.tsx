import { Sidebar } from "@/components/pos/Sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function POSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = cookies().has("auth_token");

  if (!isAuthenticated) {
    redirect("/auth/login");
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gray-50">
        {children}
      </main>
    </div>
  );
}