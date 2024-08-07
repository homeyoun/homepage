import Image from "next/image";
import React from "react";
import Banner1 from "../public/images/RollingBanner/banner2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function RollingBanner() {
  return (
    <div className="relative grid">
      <Image
        src={Banner1}
        alt="Banner"
        className="mx-auto"
        width={1920}
        priority
      />
      <div className="absolute inset-0 grid grid-rows-1 items-center lg:grid-cols-4">
        <section className="ml-16 hidden lg:block">
          <button className="h-12 w-12 rounded-full bg-stone-50 text-stone-700 opacity-40">
            <ChevronLeft className="mx-auto" />
          </button>
        </section>
        <section className="col-span-2 ml-10 text-stone-50 lg:-ml-32">
          <p className="mt-2 text-xs font-light sm:mb-3 md:mb-5 lg:text-base 2xl:mb-10">
            귀목플라워 10주년기념
          </p>
          <section className="text-lg font-bold tracking-wide sm:text-4xl lg:text-5xl 2xl:text-6xl">
            <p className="">축하해 주세요!</p>
            <p className="mt-0 lg:mt-3">10주년 꽃배달</p>
          </section>

          <p className="mt-2 text-xs font-light sm:text-sm md:mt-5 lg:text-base 2xl:mt-10">
            10만원으로 풍성하게
          </p>
          <button className="mt-3 rounded-lg bg-stone-50 px-2 py-2 text-xs text-stone-900 opacity-80 lg:mt-14 lg:px-20 lg:py-4 lg:text-base">
            신청하기
          </button>
        </section>

        <section className="mr-16 hidden justify-self-end lg:block">
          <button className="h-12 w-12 rounded-full bg-stone-50 text-stone-700 opacity-40">
            <ChevronRight className="mx-auto" />
          </button>
        </section>
      </div>
    </div>
  );
}
