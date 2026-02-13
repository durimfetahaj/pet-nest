import { createClient } from "@/lib/supabase/server";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const supabase = await createClient();

  // Fetch the products belonging to this category slug
  const { data: products, error } = await supabase
    .from("products")
    .select(
      `
      *,
      categories!inner(slug, name)
    `,
    )
    .eq("categories.slug", category);

  /* EXPLANATION:
     1. .select('..., categories!inner(...)'): We use !inner to perform a 
        hard join. If a product isn't in this category, it's ignored.
     2. .eq('categories.slug', slug): This filters the results 
        to only show products for the specific category in the URL.
  */

  if (!products || products.length === 0) {
    return <div>No products found in this category for {category}.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">{products[0].categories.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Render your Product Cards here */}
      </div>
    </div>
  );
}
