"use client";

import { useEffect, useState } from "react";

import useProductFilter from "@/hooks/useProductFilter";

import SearchBar from "@/components/items/SearchBar";
import FilterBar from "@/components/items/FilterBar";
import ProductGrid from "@/components/items/ProductGrid";
import { useSearchParams } from "next/navigation";

import { getAllProducts } from "@/services/productService";

export default function ItemsPage() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();

  const [category, setCategory] = useState(
    searchParams.get("category") || "All",
  );
  useEffect(() => {
    const selected = searchParams.get("category");

    if (selected) {
      setCategory(selected);
    }
  }, [searchParams]);
  const [price, setPrice] = useState("All");
  const [sort, setSort] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = useProductFilter(
    products,
    search,
    category,
    price,
    sort,
  );

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-7xl px-1 py-2">
        <div className="m-2 text-center">
          {/* <h1 className="text-5xl font-black">Browse Products</h1>

           */}
          <h1 className="text-5xl font-black">
            {category === "All" ? "Browse Products" : `${category} Products`}
          </h1>
          <p className="mt-5 text-lg text-gray-500">
            Search, filter and discover premium technology.
          </p>
        </div>
        <FilterBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
          sort={sort}
          setSort={setSort}
        />

        <ProductGrid products={filteredProducts} />
      </section>
    </main>
  );
}
