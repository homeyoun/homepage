import Image from "next/image";
import React from "react";
import { ChevronRight } from "lucide-react";

export default function Banner({
  bgColor,
  title,
  ImgSrc,
  width,
  fontColor,
  subTitle,
}: {
  bgColor: string;
  fontColor: string;
  title: string;
  ImgSrc: string;
  width: number;
  subTitle: string;
}) {
  type colorType = Record<string, string>;
  type fontColorType = Record<string, string>;
  const bgColorType: colorType = {
    green: "bg-[#d4ddd1]",
    ivory: "bg-[#F8f0DF]",
  };
  const fontColorType: fontColorType = {
    white: "text-stone-100",
    gray: "text-stone-800",
  };
  return (
    <div className="mx-3 my-20">
      <div
        className={`mx-auto grid max-w-6xl justify-center rounded-lg md:flex ${bgColorType[bgColor]} items-center`}
      >
        <section className="mb-3 justify-self-center md:mb-0">
          <Image
            className=""
            src={ImgSrc}
            alt="banner"
            width={width}
            height={100}
          />
        </section>
        <section className={`${fontColorType[fontColor]} `}>
          <div className="mb-6 ml-0 grid md:my-6 md:ml-4">
            <div className="justify-self-center text-2xl font-bold">
              {title}
            </div>
            <div className="mt-1 justify-self-center text-sm text-stone-500">
              {subTitle}
            </div>
            <button
              className={`mt-3 flex w-28 items-center justify-center justify-self-center rounded-2xl bg-stone-700 text-stone-200`}
            >
              <div className="px-2 py-1.5 text-xs">더 알아보기</div>
              <div>
                <ChevronRight className="w-3 lg:w-4" />
              </div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
