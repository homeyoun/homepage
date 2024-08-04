import Image from "next/image";
import React from "react";
import { ChevronRight } from "lucide-react";

export default function Banner({
  bgColor,
  title,
  ImgSrc,
  width,
  fontColor,
}: {
  bgColor: string;
  fontColor: string;
  title: string;
  ImgSrc: string;
  width: number;
}) {
  type colorType = Record<string, string>;
  type fontColorType = Record<string, string>;
  const bgColorType: colorType = {
    green: "bg-[#EDEFE2]",
    ivory: "bg-[#F8f0DF]",
    yellow: "bg-gradient-to-r from-[#f3b800] from-20% to-[#f2c600] to-30%",
  };
  const fontColorType: fontColorType = {
    white: "text-stone-100",
    gray: "text-stone-600",
  };
  return (
    <div className="mx-3 my-20">
      <div
        className={`mx-auto grid max-w-6xl grid-cols-2 ${bgColorType[bgColor]} items-center rounded-lg`}
      >
        <section className="">
          <Image
            className="ml-0 rounded-md md:ml-10 lg:ml-32"
            src={ImgSrc}
            alt="banner"
            width={width}
            height={100}
          />
        </section>
        <section className={`${fontColorType[fontColor]}`}>
          <p className="flex-row items-center md:flex">
            <span className="text-base font-bold sm:text-lg lg:text-xl">
              {title}
            </span>
            <button
              className={`flex items-center rounded-xl border md:ml-5 md:mt-2 ${fontColor === "white" ? "border-stone-50 font-bold" : "border-stone-500"} px-2 lg:mt-0 lg:px-2 lg:py-1`}
            >
              <span className="text-xs lg:ml-1">더 알아보기</span>
              <span>
                <ChevronRight className="w-3 lg:w-4" />
              </span>
            </button>
          </p>
        </section>
      </div>
    </div>
  );
}
