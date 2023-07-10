import { useEffect, useState } from "react";

export function CopyToClipBoard({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  const copyToUserClipBoard = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <div>
      <button
        onClick={() => {
          copyToUserClipBoard();
          setCopied(true);
        }}
        className="appearance-none p-2 border-0 outline-0 cursor-pointer"
      >
        <div className="relative h-4 w-4">
          <Clippy
            style={{
              strokeDasharray: 50,
              strokeDashoffset: copied ? -50 : 0,
            }}
            className="trnsition-all duration-300 ease-in-out left-0 top-0 text-gray-400"
          />
          <Check
            isVisible={copied}
            style={{
              strokeDasharray: 50,
              strokeDashoffset: copied ? 0 : -50,
            }}
            className="transition-all absolute duration-300 ease-in-out left-0 top-0 text-green-600"
          />
        </div>
      </button>
    </div>
  );
}

function Clippy(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.75 4.75H10.25V1.75H5.75V4.75Z" />
      <path d="M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379" />
    </svg>
  );
}

function Check(
  props: React.SVGAttributes<SVGSVGElement> & { isVisible: boolean }
) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.25 4.75L6 12L2.75 8.75" />
    </svg>
  );
}
