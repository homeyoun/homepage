import { getPriceRate } from "@/lib/DiscountRate";
import Image from "next/image";
import React from "react";

export default function ProductThumbnail({
  imgSrc,
  title,
  price,
  discountPrice,
}: {
  imgSrc: string;
  title: string;
  price: number;
  discountPrice: number;
}) {
  return (
    <div className="grid justify-center">
      <div className="">
        <Image
          className="rounded-lg border border-stone-200"
          src={imgSrc}
          alt="thumnail1"
          width={430}
          height={100}
          priority
        />
      </div>
      <p className="mt-3 text-sm lg:text-base">{title}</p>
      <p className="mt-3 grid font-bold lg:inline">
        <span className="mr-2 text-xs text-red-600">
          {getPriceRate(price, discountPrice)}%
        </span>
        <span className="mt-1 lg:mt-0">
          {discountPrice.toLocaleString("ko-KR")}원
        </span>
        <span className="mb-2 ml-0 mt-1 text-xs text-stone-400 line-through lg:ml-2">
          {price.toLocaleString("ko-KR")}원
        </span>
      </p>
    </div>
  );
}
