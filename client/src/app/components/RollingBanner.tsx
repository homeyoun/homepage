"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const RollingBanner = ({
  images,
  interval,
}: {
  images: string[];
  interval: number;
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => {
      clearInterval(intervalID);
    };
  }, [images, interval]);
  const RollingMenu = [
    "가을꽃",
    "해바라기",
    "SPECIAL GIFT",
    "정관장 특별전",
    "오셜록 티세트",
    "머니플라워",
    "대형꽃다발",
    "인테리어화분",
    "테이블 화분",
  ];
  const MenuJsx = RollingMenu.map((item, index) => (
    <li
      key={index}
      className={`border-r grid justify-center items-center cursor-pointer ${
        index === imageIndex && "bg-red-600 text-white border-none"
      }`}
      onMouseEnter={() => {
        setImageIndex(index);
      }}
      onMouseLeave={() => {}}
    >
      <div>{item}</div>
    </li>
  ));
  return (
    <section className="bg-gray-100 font-light">
      <div className="w-[1000px] mx-auto">
        <div className="border grid">
          <div>
            <Image
              src={images[imageIndex]}
              width={1000}
              height={400}
              alt={`Image ${imageIndex}`}
            />
          </div>
          <ul className="border-t grid grid-cols-9 text-sm h-12 bg-stone-50">
            {MenuJsx}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RollingBanner;
