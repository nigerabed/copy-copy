"use client";


import { useState } from "react";

import Image from "next/image";
import search from "../assets/search.png";
import { redirect } from "next/navigation";

export default function SearchField() {
    const [searchedText, setSearchedText] = useState("");

    async function handleSearch(e) {
        e.preventDefault();
        redirect("/sogeSide?search="+ searchedText)
    }

  return (
    <>
      <form onSubmit={handleSearch} className="flex justify-center relative">
        <input
          name="search"
          onChange={(e) => setSearchedText(e.target.value)}
          value={searchedText}
          type="search"
          className="h-[2em] w-[85%] bg-[#7D5B75] mt-[.5em] text-white text-[2em] pl-[.7em]"
        />
        <Image
          src={search}
          alt="search"
          width={35}
          height={35}
          className="absolute right-[3em] top-[1.8em] text-black "
        />
      </form>
    </>
  );
}
