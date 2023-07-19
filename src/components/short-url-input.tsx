"use client";

import { Url } from "@/entities/Url/types";
import { useQueryClient } from "@tanstack/react-query";
import { FormEvent, use } from "react";
import { Toaster, toast } from "react-hot-toast";
import { BsLink } from "react-icons/bs";

export function ShortUrlInput() {
  const queryClient = useQueryClient();

  const makeShortUrl = async (url: string) => {
    const response = await fetch("http://localhost:3000/url/short", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    return response.json();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const url = formData.get("url");

    if (!url) {
      return toast.error("URL is required");
    }

    const urlRegex =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    const isValidUrl = urlRegex.test(url as string);

    if (!isValidUrl) {
      return toast.error("Invalid URL");
    }

    const makeShortUrlPromise = makeShortUrl(url as string);

    toast.promise(makeShortUrlPromise, {
      error: "Error creating short URL",
      success: (data: Url) => {
        queryClient.setQueryData<Url[]>(["urls"], (urls) => {
          if (!urls?.length) return [data];

          return [...urls, data];
        });
        document.querySelector<HTMLInputElement>("input[name=url]")!.value = "";
        return "Short URL created!";
      },
      loading: "Creating short URL...",
    });
  };

  return (
    <form className="join w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input w-full join-item border-transparent focus:border-transparent focus:ring-0 outline-none focus:outline-none bg-white text-black font-montserrat-alternates font-semibold"
        placeholder="https://example.com"
        name="url"
      />
      <button className="w-48 join-item bg-primary flex items-center justify-center space-x-2 rounded-r-full border-r-radius">
        <BsLink size={32} />
        <p className="font-bold text-xs sm:text-md font-montserrat-alternates">
          Short URL
        </p>
      </button>
      <Toaster />
    </form>
  );
}
