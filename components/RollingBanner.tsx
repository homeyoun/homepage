import Image from "next/image";
import React from "react";
import Banner1 from "../public/images/RollingBanner/banner1.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function RollingBanner() {
  return (
    <div className="relative">
      <Image src={Banner1} alt="Banner" />
      <div className="grid grid-cols-4 items-center absolute inset-0">
        <section className="ml-16">
          <button className="w-12 h-12 bg-stone-950 rounded-full opacity-40 text-white">
            <ChevronLeft className="mx-auto" />
          </button>
        </section>
        <section className="text-stone-50 col-span-2 -ml-32">
          <p className="font-light mb-10">귀목플라워 10주년기념</p>
          <p className="font-bold text-6xl tracking-wide">축하해 주세요!</p>
          <p className="font-bold text-6xl tracking-wide mt-3">10주년 꽃배달</p>
          <p className="font-light mt-10">10만원으로 풍성하게</p>
          <button className="mt-14 bg-stone-900 px-20 py-4">신청하기</button>
        </section>

        <section className=" justify-self-end mr-16">
          <button className="w-12 h-12 bg-stone-950 rounded-full opacity-40 text-white">
            <ChevronRight className="mx-auto" />
          </button>
        </section>
      </div>
    </div>
  );
}
