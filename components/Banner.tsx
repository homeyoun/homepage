import Image from "next/image";
import React from "react";
import BannerImg from "../public/images/banner/banner1.png";
import { ChevronRight } from "lucide-react";

export default function Banner({
  bgColor,
  title,
  ImgSrc,
  width,
}: {
  bgColor: string;
  title: string;
  ImgSrc: string;
  width: number;
}) {
  return (
    <div className="my-20">
      <div
        className={`grid grid-cols-2 max-w-6xl mx-auto bg-[${bgColor}] items-center rounded-lg`}
      >
        <section className="">
          <Image
            className="rounded-md ml-32"
            src={ImgSrc}
            alt="banner"
            width={width}
            height={100}
          />
        </section>
        <section className="text-stone-600">
          <p className=" flex items-center">
            <span className="font-bold text-2xl">{title}</span>
            <button className="ml-7 flex items-center border border-stone-600 px-2 py-1 opacity-70 rounded-xl">
              <span className="mr-1 text-xs">더 알아보기</span>
              <span>
                <ChevronRight className="w-4" />
              </span>
            </button>
          </p>
        </section>
      </div>
    </div>
  );
}
