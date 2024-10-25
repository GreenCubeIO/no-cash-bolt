import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = cookies().has("auth_token");

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return children;
}