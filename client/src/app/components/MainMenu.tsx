"use client";
import { User, ShoppingCart } from "lucide-react";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({ subsets: ["latin"] });

export interface Props {
  products: { title: string; href: string; id: number };
}

const MainMenu = () => {
  const products = [
    { title: "시즌상품", href: "Seasonal", id: 0 },
    { title: "꽃바구니", href: "Flower-basket", id: 1 },
    { title: "꽃다발", href: "Bouquet", id: 2 },
    { title: "개업화분/관엽식물", href: "Opening-pot", id: 3 },
    { title: "축하화환", href: "Congratulatory-wreath", id: 4 },
    { title: "근조화환", href: "Condolence-wreath", id: 5 },
    { title: "동양란", href: "Oriental-eggs", id: 6 },
    { title: "서양란", href: "Western-orchid", id: 7 },
    { title: "분재숯부작", href: "Bonsai", id: 8 },
  ];
  return (
    <nav className="bg-stone-50 text-stone-800 sticky top-0 bg-opacity-80 backdrop-blur-sm border-b border-stone-100">
      <ul className=" max-w-5xl mx-auto flex justify-around h-12 items-center text-xs">
        <li className={raleway.className}>
          <div className="text-base font-normal text-stone-600">
            <Link href="/">GWIMOK</Link>
          </div>
        </li>
        {products.map((product, index) => (
          <li
            key={index}
            className="hover:text-stone-500 transition-all duration-200"
          >
            <Link href={`/products/${product.href}`}>{product.title}</Link>
          </li>
        ))}
        <li>
          <Link href="/sign-up">
            <User width={16} />
          </Link>
        </li>
        <li>
          <ShoppingCart width={14} />
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
