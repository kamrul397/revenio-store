import { getAllProducts } from "@/services/productService";
import ProductCard from "@/shared/ProductCard";

export default async function FeaturedProducts() {
  const products = await getAllProducts();

  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-black">Featured Products</h2>

          <p className="mt-5 text-lg text-gray-500">
            Explore our most popular premium devices.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 6).map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
