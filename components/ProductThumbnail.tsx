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
    <div>
      <Image
        className="border rounded-lg border-stone-200"
        src={imgSrc}
        alt="thumnail1"
        width={1000}
        height={1400}
        priority
      />
      <p className="mt-3">{title}</p>
      <p className="font-bold mt-3">
        <span className="text-xs text-red-600 mr-2">
          {getPriceRate(price, discountPrice)}%
        </span>
        {discountPrice.toLocaleString("ko-KR")}원
        <span className="ml-2 line-through text-stone-400 text-xs mt-2">
          {price.toLocaleString("ko-KR")}원
        </span>
      </p>
    </div>
  );
}
