import { montserrat, montserrat_subrayada } from "@/app/layout";
import { headers } from "next/dist/client/components/headers";
import Link from "next/link";
import { NavLinks } from "./nav-links";

const routes = [
  { name: "Home", href: "/" },
  { name: "Your links", href: "/analytics" },
];

export function Nav() {
  return (
    <nav className="absolute bottom-16 w-full flex justify-center">
      <div className="bg-white flex text-black items-center md:space-x-20  rounded-2xl py-4 px-6 md:px-12">
        <h2
          className={`${montserrat_subrayada.className} md:text-4xl font-bold hidden md:block`}
        >
          LINKWIZ
        </h2>
        <div className={`flex space-x-4 ${montserrat.className} text-lg`}>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
