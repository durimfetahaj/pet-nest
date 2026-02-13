import { createClient } from "@/lib/supabase/server";

export async function getUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  const user = data?.claims;

  if (error) {
    console.error("Error fetching categories:", error);
    return null;
  }

  return user;
}
