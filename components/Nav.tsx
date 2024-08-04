import { Search, ShoppingCart } from "lucide-react";
import { Do_Hyeon } from "next/font/google";
import Link from "next/link";
import ClickMenu from "./ClickMenu";

const do_h = Do_Hyeon({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 grid place-items-center bg-stone-50 bg-opacity-80 px-0 backdrop-blur-sm sm:px-8">
      <ul className="hidden h-12 w-full max-w-6xl items-center justify-between text-sm font-medium text-stone-800 md:flex">
        <Link href="/">
          <li
            className={`${do_h.className} visible mr-5 text-xl text-stone-800`}
          >
            귀목플라워
          </li>
        </Link>
        <Link href="/product/seson" className="">
          <li>시즌상품</li>
        </Link>
        <Link href="/" className="">
          <li>꽃다발</li>
        </Link>
        <Link href="/" className="">
          <li>꽃바구니</li>
        </Link>
        <Link href="/" className="">
          <li>개업화분/관엽식물</li>
        </Link>
        <Link href="/" className="">
          <li>축하화환</li>
        </Link>
        <Link href="/" className="">
          <li>근조화환</li>
        </Link>
        <Link href="/" className="">
          <li>동양란</li>
        </Link>
        <Link href="/" className="">
          <li>서양란</li>
        </Link>
        <Link href="/" className="">
          <li>분재/숯부작</li>
        </Link>
        <li>
          <Search className="h-4 w-4" />
        </li>
        <li>
          <ShoppingCart className="h-4 w-4" />
        </li>
      </ul>
      <ClickMenu />
    </nav>
  );
}
