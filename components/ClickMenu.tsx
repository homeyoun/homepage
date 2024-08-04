"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Do_Hyeon } from "next/font/google";

const do_h = Do_Hyeon({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function ClickMenu() {
  const [menuClick, setMenuClick] = useState(false);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
    console.log(menuClick);
  };
  return (
    <>
      <ul className="flex h-12 w-full max-w-6xl items-center justify-between px-6 text-sm font-medium text-stone-800 md:hidden">
        <Link href="/">
          <li className={`${do_h.className} visible text-xl text-stone-800`}>
            귀목플라워
          </li>
        </Link>
        <button onClick={handleMenuClick}>
          <Menu className="h-5 w-5" />
        </button>
      </ul>
      <ul
        className={`absolute top-12 h-[100vh] w-full space-y-4 bg-stone-50 bg-opacity-90 pl-8 text-xl font-bold backdrop-blur-sm ${menuClick ? "flex-row" : "hidden"}`}
      >
        <li className="mt-4">시즌상품</li>
        <li>꽃다발</li>
        <li>꽃바구니</li>
        <li>개업화분</li>
        <li>축하화환</li>
        <li>근조화환</li>
        <li>동양란</li>
        <li>서양란</li>
        <li>분재/숯부작</li>
      </ul>
    </>
  );
}
