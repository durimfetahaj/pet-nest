import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

import { getCategories } from "@/app/actions/categories";
import { getUser } from "@/app/actions/user";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "../logo";
import { LogoutButton } from "../logut-button";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";

export default async function Header() {
  const categories = await getCategories();
  const user = await getUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 ">
        <div className="flex items-center gap-6 md:gap-10">
          <Logo />
          <NavLinks
            className="hidden md:flex gap-6 items-center text-sm"
            categories={categories}
          />
        </div>
        <div className="flex items-center gap-4 md:gap-0">
          {/* TODO: Implement search */}
          {/* <div className="hidden md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 md:w-[250px] rounded-full bg-muted"
              />
            </div>
          </div> */}
          {/* TODO: Implement language switcher */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          {/* <UserView /> */}

          {user ? (
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
          )}

          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary">
                3
              </Badge>
              <span className="sr-only">Cart</span>
            </Link>
          </Button>

          {/* Mobile Menu */}
          <MobileMenu categories={categories} />
        </div>
      </div>
    </header>
  );
}
