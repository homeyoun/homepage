import Image from "next/image";
import React from "react";
import thumnail1 from "../public/images/productImg/sunflower1.jpg";
import thumnail2 from "../public/images/productImg/sunflower2.jpg";
import thumnail3 from "../public/images/productImg/bouque1.jpg";
import thumnail4 from "../public/images/productImg/bouque2.jpg";

export default function BouquetSection() {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-stone-500">꽃선물 하고 싶은데 고민일때!</h1>
      <h2 className="text-3xl font-bold text-stone-800 mt-3">
        감동과 행복을 주는 꽃선물
      </h2>
      <section className="mt-5 mb-5">
        <ul className="mt-3 flex gap-8">
          <li>
            <Image src={thumnail1} alt="thumnail1" />
            <p className="mt-3">
              열정이 필요할 때, 테디베어 해바라기_한단(4~5대)
            </p>
            <p className="font-bold mt-3">
              <span className="text-xs text-red-600 mr-2">33%</span>9,900원{" "}
              <span className="ml-2 line-through text-stone-400 text-xs mt-2">
                9,900원
              </span>
            </p>
          </li>
          <li>
            <Image src={thumnail2} alt="thumnail1" />
            <p className="mt-3">
              [기념일]태양빛 속에서 춤추며, 션샤인 소네이드 꽃다발
            </p>
            <p className="font-bold mt-3">
              <span className="text-xs text-red-600 mr-2">6%</span>26,900원
              <span className="ml-2 line-through text-stone-400 text-xs mt-2">
                28,900원
              </span>
            </p>
          </li>
          <li>
            <Image src={thumnail3} alt="thumnail1" />
            <p className="mt-3">
              [기념일]태양빛 속에서 춤추며, 션샤인 소네이드 꽃다발
            </p>
            <p className="font-bold mt-3">
              <span className="text-xs text-red-600 mr-2">33%</span>9,900원
              <span className="ml-2 line-through text-stone-400 text-xs mt-2">
                9,900원
              </span>
            </p>
          </li>
          <li>
            <Image src={thumnail4} alt="thumnail1" />
            <p className="mt-3">
              [기념일]태양빛 속에서 춤추며, 션샤인 소네이드 꽃다발
            </p>
            <p className="font-bold mt-3">
              <span className="text-xs text-red-600 mr-2">33%</span>9,900원{" "}
              <span className="ml-2 line-through text-stone-400 text-xs mt-2">
                9,900원
              </span>
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
