"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLinks } from "./nav-links";
import { useState } from "react";

export const MobileMenu = ({ categories }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 font-semibold md:hidden">
          <Menu size={20} />
        </button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader className="text-left border-b pb-4">
          <SheetTitle>Browse Store</SheetTitle>
        </SheetHeader>

        {/* 2. We wrap NavLinks in a div that catches clicks.
           Since clicks bubble up, clicking ANY link inside
           NavLinks will trigger this and close the sheet!
           */}
        <div className="flex flex-col gap-2 px-6">
          <NavLinks
            className="flex flex-col gap-4 mt-4 text-lg font-bold"
            isMobile
            categories={categories}
            onAction={() => setOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
