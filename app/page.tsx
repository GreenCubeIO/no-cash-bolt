import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function HomePage() {
  const isAuthenticated = cookies().has("auth_token");

  if (isAuthenticated) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
