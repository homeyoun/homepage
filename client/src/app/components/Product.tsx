import Image from "next/image";
import React from "react";

type Product = {
  imgSrc: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  price: number;
};
const numberWithCommas = (price: number): string =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const Product = ({ imgSrc, alt, width, height, title, price }: Product) => {
  return (
    <div className="">
      <div className="rounded-3xl overflow-hidden border inline-block">
        <Image
          className="hover:scale-110 transition-scale duration-200 cursor-pointer"
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <ul className="grid mt-2 space-y-1">
        <li className="text-lg font-medium text-stone-600">{title}</li>
        <li className="text-sm text-stone-500 line-through">
          판매가 : {numberWithCommas(price)} 원
        </li>
        <li className="text-xl font-bold text-stone-70 tracking-tighter	">
          <span className="text-sm">회원 할인가</span> :
          <span className="text-red-600">
            {numberWithCommas(price - price / 10)} 원
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Product;
