import ProductThumbnail from "./ProductThumbnail";

export default function ProductSection({
  subTitle,
  title,
  products,
}: {
  subTitle: string;
  title: string;
  products: {
    id: string;
    slug: string;
    imgSrc: string;
    date: string;
    title: string;
    price: number;
    discountPrice: number;
  }[];
}) {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-stone-500">{subTitle}</h1>
      <h2 className="text-2xl font-bold text-stone-700 mt-2">{title}</h2>
      <section className="mt-5 mb-5">
        <ul className="mt-8 flex gap-8">
          {products.map((product) => (
            <li key={product.id}>
              <ProductThumbnail
                imgSrc={product.imgSrc}
                title={product.title}
                price={product.price}
                discountPrice={product.discountPrice}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
