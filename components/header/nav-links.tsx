import Link from "next/link";
import { Categories } from "../categories";

interface NavLinksProps {
  className?: string;
  isMobile?: boolean;
  onAction?: () => void;
  categories?: { id: string; name: string }[];
}

export const NavLinks = ({
  className,
  isMobile = false,
  onAction,
  categories,
}: NavLinksProps) => {
  const routes = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // We remove the hardcoded 'md:flex' and use the prop instead
    <nav className={className}>
      {routes.map((route, i) => {
        if (i === 2) {
          return (
            <Categories
              key="categories"
              isMobile={isMobile}
              onAction={onAction}
              categories={categories as any}
            />
          );
        }

        return (
          <Link
            key={route.href}
            href={route.href}
            onClick={onAction}
            className="transition-colors hover:text-primary"
          >
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
};
