import ProductCard from "@/shared/ProductCard";

export default function RelatedProducts({ products }) {
  if (products.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <h2 className="mb-10 text-4xl font-black">Related Products</h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
