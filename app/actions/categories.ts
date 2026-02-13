import { createClient } from "@/lib/supabase/server";

export async function getCategories() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("categories")
    .select("id, name, slug,image_url")
    .order("name");

  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }

  return data;
}
