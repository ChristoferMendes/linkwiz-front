import { useUrls } from "@/hooks/useUrlsFromLocalStorage";
import { AnimatedList } from "react-animated-list";
import { CopyToClipBoard } from "./copy-to-clipboard";
import { FullUrlWithIcon } from "./full-url-with-icon";
import { ShortUrlLink } from "./short-url-link";
import Link from "next/link";

export function UrlCardList() {
  const { urls } = useUrls();

  return (
    <div className="">
      {urls?.length ? (
        <AnimatedList animation="grow">
          {urls.map((url) => {
            const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`;

            return (
              <Link href={`/analytics/${url._id}`} key={url._id}>
                <div
                  key={url._id}
                  className="bg-dark mb-10 p-6 rounded-2xl hover:bg-darker cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ShortUrlLink href={shortUrl} />
                      <CopyToClipBoard textToCopy={shortUrl} />
                    </div>
                    <p className="font-semibold">Total clicks: {url.clicks}</p>
                  </div>
                  <div className="flex space-x-3">
                    <FullUrlWithIcon fullUrl={url.fullUrl} />
                  </div>
                </div>
              </Link>
            );
          })}
        </AnimatedList>
      ) : null}
    </div>
  );
}
