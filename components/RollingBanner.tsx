import Image from "next/image";
import React from "react";
import Banner1 from "../public/images/RollingBanner/banner2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function RollingBanner() {
  return (
    <div className="relative grid">
      {/* <Image
        src={Banner1}
        alt="Banner"
        className="mx-auto"
        objectFit="cover"
        priority
      /> */}
      <div className="grid h-[60vh] grid-rows-1 items-end bg-stone-400 bg-[url('/images/RollingBanner/banner2.png')] bg-cover bg-right bg-no-repeat bg-blend-multiply transition md:items-center md:bg-white lg:grid-cols-4">
        <section className="ml-16 hidden lg:block">
          <button className="h-12 w-12 rounded-full bg-stone-50 text-stone-700">
            <ChevronLeft className="mx-auto" />
          </button>
        </section>
        <section className="col-span-2 ml-10 text-stone-50 lg:-ml-32">
          <p className="mb-4 mt-2">귀목플라워 10주년기념</p>
          <section className="text-5xl font-bold tracking-wide md:text-6xl">
            <p className="">축하해 주세요!</p>
            <p className="mt-4">10주년 꽃배달</p>
          </section>

          <p className="mt-4">10만원으로 풍성하게</p>
          <button className="mb-7 mt-5 rounded-lg bg-black px-16 py-3 font-bold md:bg-stone-700">
            신청하기
          </button>
        </section>

        <section className="mr-16 hidden justify-self-end lg:block">
          <button className="h-12 w-12 rounded-full bg-stone-50 text-stone-700">
            <ChevronRight className="mx-auto" />
          </button>
        </section>
      </div>
    </div>
  );
}
