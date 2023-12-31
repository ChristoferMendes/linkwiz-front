import { ClientUrlWrapper } from "@/components/client-url-wrapper";
import { ShortUrlInput } from "@/components/short-url-input";
import { UrlCards } from "@/components/url-cards";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="mt-10 h-fit w-full flex flex-col items-center space-y-8 mx-0 sm:mx-6 md:mx-24 lg:mx-64">
        <h1 className="font-bold text-lg xs:text-2xl sm:text-3xl">
          Share your links easier
        </h1>
        <ClientUrlWrapper>
          <ShortUrlInput />
          <UrlCards />
        </ClientUrlWrapper>
      </div>
    </main>
  );
}
