import React from "react";

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const ProductName = params.slug;
  return <div>{ProductName}</div>;
}
