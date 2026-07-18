"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import ProductDetails from "@/components/items/ProductDetails";
import RelatedProducts from "@/components/items/RelatedProducts";
import { getProduct, getAllProducts } from "@/services/productService"; // Added getAllProducts
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]); // State for related items
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function fetchProductAndRelated() {
      try {
        setLoading(true);
        const productData = await getProduct(id);

        if (!productData) {
          setError(true);
          return;
        }
        setProduct(productData);

        // Fetch all products to pick items in the same category
        const allProducts = await getAllProducts();
        const filteredRelated = allProducts.filter(
          (item) => item.category === productData.category && item._id !== id,
        );
        setRelated(filteredRelated.slice(0, 3)); // Limit to top 3 items
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProductAndRelated();
  }, [id]);

  if (error) notFound();

  if (loading) {
    return (
      <main className="bg-slate-50 min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </main>
    );
  }

  if (!product) return null;

  return (
    <ProtectedRoute>
      <main className="bg-slate-50 min-h-screen py-2">
        <div className="max-w-7xl mx-auto px-4">
          <ProductDetails product={product} />

          {/* Render the section seamlessly */}
          {related.length > 0 && <RelatedProducts products={related} />}
        </div>
      </main>
    </ProtectedRoute>
  );
}
