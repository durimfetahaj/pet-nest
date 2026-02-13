import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface CategoriesProps {
  isMobile?: boolean;
  onAction?: () => void;
  categories?: { id: string; name: string; slug: string; image_url: string }[];
}

export const Categories = ({
  isMobile = false,
  onAction,
  categories,
}: CategoriesProps) => {
  if (isMobile) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="categories" className="border-none">
          <AccordionTrigger className="py-0 hover:no-underline font-bold text-lg">
            Categories
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-2 flex flex-col gap-4 pl-4 border-l ml-2 mt-2">
            {categories?.map((cat) => (
              <Link
                key={cat?.id}
                href={`/shop/${cat?.slug}`}
                onClick={onAction}
                className="font-medium"
              >
                {cat?.name}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-lg md:text-sm font-bold md:font-normal transition-colors hover:text-primary">
        Categories <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {categories?.map((cat) => (
          <DropdownMenuItem key={cat.id} asChild>
            <Link href={`/shop/${cat?.slug}`} className="w-full">
              {cat.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
