import Link from "next/link";

export function ShortUrlLink({ href }: { href: string }) {
  return (
    <Link href={href} className="font-bold" target="_blank">
      {href}
    </Link>
  );
}
