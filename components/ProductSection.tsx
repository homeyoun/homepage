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
    <div className="ml-3 mr-3 mt-10 grid max-w-6xl justify-center md:mx-auto">
      <h1 className="text-stone-500">{subTitle}</h1>
      <h2 className="mt-2 text-2xl font-bold text-stone-700">{title}</h2>
      <section className="mb-5 mt-5">
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
