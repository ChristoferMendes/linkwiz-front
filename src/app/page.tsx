import { Nav } from "@/components/nav";
import { ShortUrlInput } from "@/components/short-url-input";
import { UrlCard } from "@/components/url-card";
import { BsLink } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="mt-10 h-fit w-full flex flex-col items-center space-y-8 mx-0 sm:mx-10 md:mx-24 lg:mx-72">
        <h1 className="font-bold text-md sm:text-3xl">
          Share your links easier
        </h1>
        <ShortUrlInput />
        <UrlCard />
      </div>
    </main>
  );
}
