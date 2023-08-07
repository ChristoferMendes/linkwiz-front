"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { name: "Home", href: "/", isDynamic: false },
  { name: "Your links", href: "/analytics", isDynamic: true },
];

export function NavLinks() {
  const pathname = usePathname();

  const verifyRouteIsActual = (route: string, isDynamic: boolean) => {
    const pathNameSerialized = isDynamic
      ? "/" + pathname.split("/")[1]
      : pathname;

    return route === pathNameSerialized;
  };

  return (
    <>
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.name}
          className={`${
            verifyRouteIsActual(route.href, route.isDynamic) &&
            "bg-dark text-white"
          } py-2 text-center rounded-lg w-28 text-sm `}
        >
          {route.name}
        </Link>
      ))}
    </>
  );
}
