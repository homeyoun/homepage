import { Search, ShoppingBag } from "lucide-react";
import { Do_Hyeon } from "next/font/google";
import Link from "next/link";

const do_h = Do_Hyeon({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Nav() {
  return (
    <nav className="grid place-items-center">
      <ul className="flex justify-between w-full max-w-6xl text-sm font-medium text-stone-800 h-12 items-center">
        <Link href="/">
          <li className={`${do_h.className} text-xl text-stone-800 mr-5`}>
            귀목플라워
          </li>
        </Link>
        <Link href="/product/seson">
          <li>시즌상품</li>
        </Link>
        <li>꽃다발</li>
        <li>꽃바구니</li>
        <li>개업화분/관엽식물</li>
        <li>축하화환</li>
        <li>근조화환</li>
        <li>동양란</li>
        <li>서양란</li>
        <li>분재/숯부작</li>
        <li>
          <Search className="w-4 h-4" />
        </li>
        <li>
          <ShoppingBag className="w-4 h-4" />
        </li>
      </ul>
    </nav>
  );
}
