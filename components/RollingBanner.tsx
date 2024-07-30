import Image from "next/image";
import React from "react";
import Banner1 from "../public/images/RollingBanner/banner1.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function RollingBanner() {
  return (
    <div className="relative">
      <section className="absolute text-stone-50 left-60 top-72">
        <p className="font-light mb-10">귀목플라워 10주년기념</p>
        <p className="font-bold text-6xl tracking-wide">축하해 주세요!</p>
        <p className="font-bold text-6xl tracking-wide mt-3">10주년 꽃배달</p>
        <p className="font-light mt-10">10만원으로 풍성하게</p>
        <button className="mt-14 bg-stone-900 px-20 py-4">신청하기</button>
      </section>
      <div className="absolute left-24 top-96">
        <button className="w-12 h-12 bg-stone-950 rounded-full opacity-40 text-white">
          <ChevronLeft className="mx-auto" />
        </button>
      </div>
      <div className="absolute top-96 left-[105rem]">
        <button className="w-12 h-12 bg-stone-950 rounded-full opacity-40 text-white">
          <ChevronRight className="mx-auto" />
        </button>
      </div>
      <Image className="mx-auto" src={Banner1} height={1100} alt="Banner" />
    </div>
  );
}
