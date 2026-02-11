import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export const Categories = async () => {
  const supabase = await createClient();
  const { data: categories } = await supabase.from("categories").select();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
        Categories <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {categories?.map((category) => (
          <DropdownMenuItem key={category.id}>
            <Link href={`/category/${category.slug}`} className="w-full">
              {category.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
