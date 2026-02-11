import { AuthButton } from "@/components/auth-button";
import { createClient } from "@/lib/supabase/client";
import { Suspense } from "react";

async function CategoriesData() {
  const supabase = await createClient();
  const { data: categories, error } = await supabase
    .from("categories")
    .select();
  if (error) {
    console.error("categories query error:", error);
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  console.log({ categories });

  return <pre>{JSON.stringify(categories, null, 2)}</pre>;
}

export default function Home() {
  return (
    <>
      <div>
        <Suspense>
          <AuthButton />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading products...</div>}>
        <CategoriesData />
      </Suspense>
    </>
  );
}
