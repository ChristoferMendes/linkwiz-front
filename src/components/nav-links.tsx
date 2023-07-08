"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { name: "Home", href: "/" },
  { name: "Your links", href: "/analytics" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.name}
          className={`${
            route.href === pathname && "bg-dark text-white"
          } py-2 text-center rounded-lg w-28 text-sm`}
        >
          {route.name}
        </Link>
      ))}
    </>
  );
}
