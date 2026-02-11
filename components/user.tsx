import Link from "next/link";
import { Button } from "./ui/button";
import { User } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logut-button";

export const UserView = async () => {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <LogoutButton />
    </div>
  ) : (
    <Button variant="ghost" size="icon" className="relative" asChild>
      <Link href="/auth/login">
        <User className="h-5 w-5" />
        <span className="sr-only">Sign In</span>
      </Link>
    </Button>
  );
};
