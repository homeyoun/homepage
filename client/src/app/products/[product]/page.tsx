import Product from "@/app/components/Product";
import PaddingContainer from "@/app/layout/PaddingContainer";
import React from "react";

const Products = ({ params }: { params: { product: string } }) => {
  let productName = params.product;
  let bestProducts = {};
  let products = {};

  switch (productName) {
    case "Seasonal":
      productName = "시즌상품";
      bestProducts = [
        {
          title: "이터니티",
          alt: "이터니티",
          imgSrc: "",
          price: 20000,
        },
        {
          title: "바이올렛키스",
          alt: "이터니티",
          imgSrc: "",
          price: 20000,
        },
        {
          title: "이터니티",
          alt: "이터니티",
          imgSrc: "",
          price: 20000,
        },
      ];
      break;
    default:
      productName = "";
  }
  return (
    <PaddingContainer>
      <div className="mt-4 mb-4 flex items-center">
        <div className="text-lg font-semibold text-stone-800 mr-3">
          {productName}
        </div>
        <div className="text-stone-400">고객님이 선택하신 상품 베스트</div>
      </div>
      <Product
        title="클래식 황금죽"
        height={350}
        width={350}
        alt="Product"
        imgSrc="/image/Products/st_d706d.jpg"
        price={20000}
      />
    </PaddingContainer>
  );
};

export default Products;
