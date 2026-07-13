import ProductCard from "@/shared/ProductCard";
import EmptyState from "./EmptyState";

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
