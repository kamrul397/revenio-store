"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import ProductDetails from "@/components/items/ProductDetails";
import RelatedProducts from "@/components/items/RelatedProducts";
import { getAllProducts } from "@/services/productService";
// 1. Fixed the import to match your actual API utility file

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function fetchProductData() {
      try {
        setLoading(true);
        // 2. Await the async API response
        const data = await getAllProducts(id);

        if (!data) {
          setError(true);
        } else {
          setProduct(data);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProductData();
  }, [id]);

  // 3. Trigger Next.js 404 page if product isn't found
  if (error) {
    notFound();
  }

  // 4. Show a clean loading state while fetching from your backend
  if (loading) {
    return (
      <main className="bg-slate-50 min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </main>
    );
  }

  // Fallback if data hasn't populated yet
  if (!product) return null;

  // 5. Safely handle related products (Ensure your utils can filter this out)
  // If getRelatedProducts is synchronous, pass the product data.
  // If it's an API call, you would handle it inside the useEffect above.
  const relatedProducts = product.related || [];

  return (
    <main className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <ProductDetails product={product} />
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}
      </div>
    </main>
  );
}
