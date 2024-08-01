import Image from "next/image";
import React from "react";
import BannerImg from "../public/images/banner/banner1.png";

export default function Banner() {
  return (
    <div className="my-10">
      <div className="grid grid-cols-2 max-w-6xl mx-auto bg-[#EDDBC0] items-center rounded-lg">
        <section className="">
          <Image
            className="rounded-md ml-20"
            src={BannerImg}
            alt="banner"
            height={100}
          />
        </section>
        <section className="text-stone-500">
          <p className="font-bold text-xl">
            꽃다발선물과 함께 하세요 <span className="ml-2">귀목플라워</span>
          </p>
        </section>
      </div>
    </div>
  );
}
